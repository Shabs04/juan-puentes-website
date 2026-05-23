(function () {
  const root = document.documentElement;
  const header = document.querySelector(".site-header");
  const themeToggle = document.querySelector(".theme-toggle");
  const languageButtons = document.querySelectorAll("[data-language]");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const themeStorageKey = "juan-puentes-theme";
  const languageStorageKey = "juan-puentes-language";

  const translations = {
    en: {
      pageTitle: "Juan Puentes | Long-Term Investor",
      themeLabel: "Theme",
      themeToDark: "Switch to dark theme",
      themeToLight: "Switch to light theme",
      skipLink: "Skip to content",
      brandRole: "eToro Popular Investor",
      navPersona: "Persona",
      navStrategy: "Strategy",
      navConnect: "Connect",
      heroEyebrow: "Public investor profile",
      heroTitle: "Long-term investing, built with discipline.",
      heroLede:
        "Juan Puentes Botero is a Colombian investor living in Australia, sharing a practical investing journey centered on stability, innovation, DCA, ETF foundations, and smart risk control.",
      viewEtoro: "View eToro profile",
      followInstagram: "Follow on Instagram",
      followTiktok: "Follow on TikTok",
      verifiedProfile: "Verified profile",
      popularInvestor: "Popular Investor",
      statSince: "Since",
      statBase: "Base",
      statCopyFrom: "Copy from",
      snapshotOrigin: "Origin",
      snapshotOriginTitle: "Colombia to Australia",
      snapshotOriginText: "A cross-border investor voice with content for everyday people learning to invest.",
      snapshotFocus: "Public focus",
      snapshotFocusTitle: "Long-term growth",
      snapshotFocusText: "Stability, innovation, risk control, and avoiding emotional decision making.",
      snapshotProof: "Social proof",
      snapshotProofText: "Listed in Juan's Instagram bio at the time this site was drafted.",
      snapshotStyle: "Style",
      snapshotStyleTitle: "Modern DCA",
      snapshotStyleText: "A repeatable accumulation mindset rather than short-term market noise.",
      personaEyebrow: "Investor persona",
      personaTitle: "Calm, direct, and built for people who want the long game.",
      personaIntro:
        "The tone is simple: investing is not gambling. The persona should feel approachable, bilingual, grounded, and confident without promising outcomes.",
      personaCardOneTitle: "Everyday clarity",
      personaCardOneText:
        "Speaks to people who are learning to invest like normal people, using plain language and practical decision rules.",
      personaCardTwoTitle: "Discipline over hype",
      personaCardTwoText:
        "Positions patience, process, and emotional control as the edge, especially when markets get noisy.",
      personaCardThreeTitle: "Future-facing",
      personaCardThreeText:
        "Combines broad ETF exposure with selective innovative assets, keeping the message modern but still measured.",
      strategyEyebrow: "Strategy architecture",
      strategyTitle: "A balanced framework for public communication.",
      allocationEtf: "ETF core",
      allocationInnovation: "Innovation",
      allocationDca: "DCA rhythm",
      allocationRisk: "Risk review",
      strategyCardOneTitle: "Foundation first",
      strategyCardOneText: "Use world-class ETFs as the steady base of the story.",
      strategyCardTwoTitle: "Innovation with boundaries",
      strategyCardTwoText: "Highlight forward-looking assets while keeping the risk language visible.",
      strategyCardThreeTitle: "DCA and patience",
      strategyCardThreeText: "Make consistency the signature behavior, not market timing.",
      strategyCardFourTitle: "Transparent risk",
      strategyCardFourText: "Keep copy trading framed as a decision that needs personal research.",
      quoteEyebrow: "Message platform",
      quoteText:
        "To have things you have never had, you have to do things you have never done. For Juan's brand, that means patient action, education, and discipline over shortcuts.",
      connectEyebrow: "Connect",
      connectTitle: "One identity across eToro, Instagram, and TikTok.",
      connectIntro:
        "Each link opens the public profile directly. The eToro page should remain the source of truth for investment performance and copy-trading decisions.",
      socialEtoro: "Profile, portfolio, stats",
      socialInstagram: "Education and journey",
      socialTiktok: "Short-form insights",
      riskTitle: "Risk note",
      riskText:
        "This is an independent profile website concept based on public profile information. It is not financial advice, not an offer to buy or sell financial products, and not an official eToro website. Copy trading and investing involve risk, including possible loss of capital. Past performance does not guarantee future results. Always verify details directly on eToro and consider your own circumstances.",
      footerText: "juanpuentesb.github.io. Public snapshot drafted May 14, 2026.",
      footerEtoro: "eToro profile",
      footerInstagram: "Instagram profile",
      footerTiktok: "TikTok profile",
    },
    es: {
      pageTitle: "Juan Puentes | Inversionista a Largo Plazo",
      themeLabel: "Tema",
      themeToDark: "Cambiar a tema oscuro",
      themeToLight: "Cambiar a tema claro",
      skipLink: "Saltar al contenido",
      brandRole: "Inversionista Popular en eToro",
      navPersona: "Persona",
      navStrategy: "Estrategia",
      navConnect: "Conectar",
      heroEyebrow: "Perfil público de inversionista",
      heroTitle: "Inversión a largo plazo, construida con disciplina.",
      heroLede:
        "Juan Puentes Botero es un inversionista colombiano viviendo en Australia, compartiendo un camino práctico de inversión basado en estabilidad, innovación, DCA, ETFs como base y control inteligente del riesgo.",
      viewEtoro: "Ver perfil de eToro",
      followInstagram: "Seguir en Instagram",
      followTiktok: "Seguir en TikTok",
      verifiedProfile: "Perfil verificado",
      popularInvestor: "Inversionista Popular",
      statSince: "Desde",
      statBase: "Base",
      statCopyFrom: "Copiar desde",
      snapshotOrigin: "Origen",
      snapshotOriginTitle: "De Colombia a Australia",
      snapshotOriginText: "Una voz inversionista multicultural con contenido para personas comunes que quieren aprender a invertir.",
      snapshotFocus: "Enfoque público",
      snapshotFocusTitle: "Crecimiento a largo plazo",
      snapshotFocusText: "Estabilidad, innovación, control del riesgo y decisiones sin dejarse llevar por las emociones.",
      snapshotProof: "Prueba social",
      snapshotProofText: "Listado en la biografía de Instagram de Juan cuando se redactó este sitio.",
      snapshotStyle: "Estilo",
      snapshotStyleTitle: "DCA moderno",
      snapshotStyleText: "Una mentalidad de acumulación constante en lugar de ruido de corto plazo.",
      personaEyebrow: "Persona inversionista",
      personaTitle: "Calmo, directo y pensado para quienes quieren jugar a largo plazo.",
      personaIntro:
        "El tono es simple: estamos invirtiendo, no apostando. La persona debe sentirse cercana, bilingüe, aterrizada y segura, sin prometer resultados.",
      personaCardOneTitle: "Claridad cotidiana",
      personaCardOneText:
        "Habla a personas que están aprendiendo a invertir como gente normal, con lenguaje claro y reglas prácticas de decisión.",
      personaCardTwoTitle: "Disciplina sobre hype",
      personaCardTwoText:
        "Presenta la paciencia, el proceso y el control emocional como ventaja, especialmente cuando el mercado se vuelve ruidoso.",
      personaCardThreeTitle: "Mirada al futuro",
      personaCardThreeText:
        "Combina exposición amplia a ETFs con activos innovadores selectivos, manteniendo un mensaje moderno pero medido.",
      strategyEyebrow: "Arquitectura de estrategia",
      strategyTitle: "Un marco equilibrado para comunicar públicamente.",
      allocationEtf: "Base ETF",
      allocationInnovation: "Innovación",
      allocationDca: "Ritmo DCA",
      allocationRisk: "Revisión de riesgo",
      strategyCardOneTitle: "Primero la base",
      strategyCardOneText: "Usar ETFs de clase mundial como la base estable de la historia.",
      strategyCardTwoTitle: "Innovación con límites",
      strategyCardTwoText: "Destacar activos con visión de futuro manteniendo visible el lenguaje de riesgo.",
      strategyCardThreeTitle: "DCA y paciencia",
      strategyCardThreeText: "Hacer de la constancia el comportamiento central, no intentar adivinar el mercado.",
      strategyCardFourTitle: "Riesgo transparente",
      strategyCardFourText: "Enmarcar el copy trading como una decisión que requiere investigación personal.",
      quoteEyebrow: "Mensaje central",
      quoteText:
        "Para tener cosas que nunca has tenido, tienes que hacer cosas que nunca has hecho. Para la marca de Juan, eso significa acción paciente, educación y disciplina por encima de los atajos.",
      connectEyebrow: "Conectar",
      connectTitle: "Una sola identidad en eToro, Instagram y TikTok.",
      connectIntro:
        "Cada enlace abre directamente el perfil público. La página de eToro debe seguir siendo la fuente principal para rendimiento y decisiones de copy trading.",
      socialEtoro: "Perfil, portafolio, estadísticas",
      socialInstagram: "Educación y camino",
      socialTiktok: "Ideas en formato corto",
      riskTitle: "Nota de riesgo",
      riskText:
        "Este es un concepto independiente de sitio web basado en información pública del perfil. No es asesoría financiera, no es una oferta para comprar o vender productos financieros y no es un sitio oficial de eToro. El copy trading y la inversión implican riesgo, incluida la posible pérdida de capital. El rendimiento pasado no garantiza resultados futuros. Verifica siempre los detalles directamente en eToro y considera tus propias circunstancias.",
      footerText: "juanpuentesb.github.io. Perfil público redactado el 14 de mayo de 2026.",
      footerEtoro: "Perfil de eToro",
      footerInstagram: "Perfil de Instagram",
      footerTiktok: "Perfil de TikTok",
    },
  };

  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const getStoredValue = (key) => {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  };

  const storeValue = (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Browsers can block storage in private contexts; the UI still updates.
    }
  };

  const getInitialLanguage = () => {
    const stored = getStoredValue(languageStorageKey);
    if (stored === "en" || stored === "es") return stored;
    return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
  };

  let activeLanguage = getInitialLanguage();
  let activeProfile = null;

  const translate = (key) => translations[activeLanguage][key] || translations.en[key] || "";

  const syncThemeButton = () => {
    const isDark = root.dataset.theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? translate("themeToLight") : translate("themeToDark"));
  };

  const applyTheme = (theme, persist) => {
    const isDark = theme === "dark";
    root.dataset.theme = theme;
    if (themeMeta) {
      themeMeta.setAttribute("content", isDark ? "#08120b" : "#f7fff5");
    }
    syncThemeButton();
    if (persist) {
      storeValue(themeStorageKey, theme);
    }
  };

  const applyLanguage = (language, persist) => {
    activeLanguage = language;
    root.lang = language;
    document.title = translate("pageTitle");

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translate(element.dataset.i18n);
      if (value) {
        element.textContent = value;
      }
    });

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });

    syncThemeButton();
    applyProfileData(activeProfile);
    if (persist) {
      storeValue(languageStorageKey, language);
    }
  };

  const setText = (selector, value) => {
    if (!value) return;
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  };

  const formatDate = (isoDate) => {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat(activeLanguage === "es" ? "es-AU" : "en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  function applyProfileData(profile) {
    if (!profile) return;
    const etoro = profile.etoro || {};
    const instagram = profile.instagram || {};

    setText('[data-profile="investingSince"]', etoro.investingSince);
    setText('[data-profile="copyMinimum"]', etoro.copyMinimum);
    setText('[data-profile="aumDisplay"]', instagram.aumDisplay);
    setText('[data-profile="socialProofDetail"]', instagram.socialProofDetail);
    setText('[data-profile="instagramSummary"]', instagram.summary);
    setText('[data-profile="lastUpdated"]', formatDate(profile.lastUpdated));

    if (etoro.avatarUrl) {
      document.querySelectorAll("[data-profile-image='avatar']").forEach((image) => {
        image.src = etoro.avatarUrl;
      });
    }
  }

  const hydratePublicData = async () => {
    try {
      const response = await fetch(`data/profile.json?refresh=${Date.now()}`, {
        cache: "no-store",
      });
      if (!response.ok) return;
      activeProfile = await response.json();
      applyProfileData(activeProfile);
    } catch {
      // Dev preview keeps hand-written fallback copy if a social platform blocks refresh.
    }
  };

  applyTheme(getStoredValue(themeStorageKey) || getSystemTheme(), false);
  applyLanguage(activeLanguage, false);

  themeToggle.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.language, true);
    });
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (!getStoredValue(themeStorageKey)) {
        applyTheme(event.matches ? "dark" : "light", false);
      }
    });

  const updateHeader = () => {
    header.dataset.elevated = String(window.scrollY > 6);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  hydratePublicData();
})();
