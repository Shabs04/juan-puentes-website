import { mkdir, writeFile } from "node:fs/promises";

const ETORO_PROFILE_API = "https://www.etoro.com/api/logininfo/v1.1/users/juanpuentesb";
const INSTAGRAM_PROFILE = "https://www.instagram.com/juanpuentesb/";
const TIKTOK_PROFILE = "https://www.tiktok.com/@juanpuentesb";

const FALLBACK = {
  etoro: {
    displayName: "Juan Puentes Botero",
    username: "Juanpuentesb",
    investingSince: "2019",
    copyMinimum: "$200",
    avatarUrl: "https://etoro-cdn.etorostatic.com/avatars/original/14513183/3.jpg",
    isVerified: true,
    isPopularInvestor: true,
    strategy: "Long-term investor, ETF base, modern forward-thinking, DCA.",
  },
  instagram: {
    followers: "",
    aumDisplay: "$685k+ AUM",
    socialProofDetail: "Listed in Juan's Instagram bio at the latest successful refresh.",
    summary: "Education and journey",
  },
  tiktok: {
    following: "135",
    followers: "1,791",
    likes: "9,019",
    summary: "135 following / 1,791 followers / 9,019 likes",
    sourceNote: "Human-reviewed public TikTok profile stats from the browser.",
  },
};

const headers = {
  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,application/json;q=0.8,*/*;q=0.7",
  "accept-language": "en-AU,en;q=0.9",
  "user-agent": "Mozilla/5.0 (compatible; JuanPuentesSiteBot/1.0; +https://juanpuentesb.github.io/dev/)",
};

const fetchWithTimeout = async (url, options = {}) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(url, {
      ...options,
      headers: { ...headers, ...(options.headers || {}) },
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response;
  } finally {
    clearTimeout(timeout);
  }
};

const decodeHtml = (value = "") =>
  value
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#([0-9]+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)));

const cleanText = (value = "") =>
  decodeHtml(String(value))
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E\n]/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const formatCount = (value = "") => {
  const number = Number(String(value).replace(/[^\d]/g, ""));
  if (!Number.isFinite(number) || number <= 0) return "";
  return new Intl.NumberFormat("en-US").format(number);
};

const extractMetaContent = (html, key) => {
  const patterns = [
    new RegExp(`<meta[^>]+property=["']${key}["'][^>]+content=["']([^"']*)["'][^>]*>`, "i"),
    new RegExp(`<meta[^>]+name=["']${key}["'][^>]+content=["']([^"']*)["'][^>]*>`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+(?:property|name)=["']${key}["'][^>]*>`, "i"),
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return cleanText(match[1]);
  }
  return "";
};

const getEtoroData = async () => {
  try {
    const response = await fetchWithTimeout(ETORO_PROFILE_API, {
      headers: { accept: "application/json" },
    });
    const profile = await response.json();
    const about = cleanText(profile.aboutMe || profile.userBio?.aboutMe || "");
    const aboutShort = cleanText(profile.aboutMeShort || profile.userBio?.aboutMeShort || "");
    const investingSince = about.match(/investing since\s+(\d{4})/i)?.[1] || FALLBACK.etoro.investingSince;
    const copyAmount = about.match(/minimum copy amount\s*\$?\s*([\d,]+)/i)?.[1];
    const avatarUrl =
      profile.avatars?.find((avatar) => avatar.type === "Original")?.url ||
      profile.avatars?.[0]?.url ||
      FALLBACK.etoro.avatarUrl;

    return {
      displayName: cleanText(`${profile.firstName || "Juan"} ${profile.lastName || "Puentes Botero"}`),
      username: cleanText(profile.username || FALLBACK.etoro.username),
      investingSince,
      copyMinimum: copyAmount ? `$${copyAmount}` : FALLBACK.etoro.copyMinimum,
      avatarUrl,
      isVerified: Boolean(profile.isVerified),
      isPopularInvestor: Boolean(profile.isPi),
      strategy: aboutShort || FALLBACK.etoro.strategy,
    };
  } catch (error) {
    return { ...FALLBACK.etoro, error: cleanText(error.message) };
  }
};

const getInstagramData = async () => {
  try {
    const response = await fetchWithTimeout(INSTAGRAM_PROFILE);
    const html = await response.text();
    const description = extractMetaContent(html, "description") || extractMetaContent(html, "og:description");
    const followers = description.match(/([\d,.]+)\s+Followers/i)?.[1] || "";
    const posts = description.match(/([\d,.]+)\s+Posts/i)?.[1] || "";
    const aum = description.match(/\+\$([\d,.]+)\s*([km])?\s*AUM/i);
    const aumDisplay = aum ? `$${aum[1]}${aum[2] || ""}+ AUM` : FALLBACK.instagram.aumDisplay;
    const summaryParts = [];
    if (followers) summaryParts.push(`${followers} followers`);
    if (posts) summaryParts.push(`${posts} posts`);

    return {
      followers,
      posts,
      aumDisplay,
      socialProofDetail: "Updated from Juan's public Instagram profile metadata.",
      summary: summaryParts.length ? summaryParts.join(" / ") : FALLBACK.instagram.summary,
    };
  } catch (error) {
    return { ...FALLBACK.instagram, error: cleanText(error.message) };
  }
};

const getTikTokData = async () => {
  try {
    const response = await fetchWithTimeout(TIKTOK_PROFILE);
    const html = await response.text();
    const title = extractMetaContent(html, "og:title") || "Juan Puentes on TikTok";
    const isBlocked = /SlardarWAF|Please wait|wafchallenge/i.test(html);
    const following =
      formatCount(html.match(/"followingCount"\s*:\s*(\d+)/)?.[1]) || FALLBACK.tiktok.following;
    const followers =
      formatCount(html.match(/"followerCount"\s*:\s*(\d+)/)?.[1]) || FALLBACK.tiktok.followers;
    const likes =
      formatCount(html.match(/"heartCount"\s*:\s*(\d+)/)?.[1] || html.match(/"heart"\s*:\s*(\d+)/)?.[1]) ||
      FALLBACK.tiktok.likes;

    return {
      ...FALLBACK.tiktok,
      title,
      following,
      followers,
      likes,
      summary: `${following} following / ${followers} followers / ${likes} likes`,
      isBlocked,
    };
  } catch (error) {
    return {
      ...FALLBACK.tiktok,
      title: "Juan Puentes on TikTok",
      isBlocked: true,
      error: cleanText(error.message),
    };
  }
};

const data = {
  lastUpdated: new Date().toISOString(),
  etoro: await getEtoroData(),
  instagram: await getInstagramData(),
  tiktok: await getTikTokData(),
  sources: {
    etoro: ETORO_PROFILE_API,
    instagram: INSTAGRAM_PROFILE,
    tiktok: TIKTOK_PROFILE,
  },
};

await mkdir("data", { recursive: true });
await writeFile("data/profile.json", `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(`Wrote data/profile.json at ${data.lastUpdated}`);
