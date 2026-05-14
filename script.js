(function () {
  const root = document.documentElement;
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".theme-toggle");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const storageKey = "juan-puentes-theme";

  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const getStoredTheme = () => {
    try {
      return window.localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  };

  const storeTheme = (theme) => {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // Browsers can block storage in private contexts; the visual theme still updates.
    }
  };

  const applyTheme = (theme, persist) => {
    const isDark = theme === "dark";
    root.dataset.theme = theme;
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    if (themeMeta) {
      themeMeta.setAttribute("content", isDark ? "#08120b" : "#f7fff5");
    }
    if (persist) {
      storeTheme(theme);
    }
  };

  applyTheme(getStoredTheme() || getSystemTheme(), false);

  toggle.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (!getStoredTheme()) {
        applyTheme(event.matches ? "dark" : "light", false);
      }
    });

  const updateHeader = () => {
    header.dataset.elevated = String(window.scrollY > 6);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
})();
