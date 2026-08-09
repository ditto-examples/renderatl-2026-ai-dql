//#region src/theme-config.ts
var e = [
	"system",
	"light",
	"dark",
	"light-high-contrast",
	"dark-high-contrast"
], t = [
	"light",
	"dark",
	"light-high-contrast",
	"dark-high-contrast"
], n = "portal-ui-theme", r = "system", i = () => `<script>(function (cfg) {
  var storageKey = cfg.storageKey;
  var defaultTheme = cfg.defaultTheme;
  var themes = cfg.themes;
  var resolvedThemes = cfg.resolvedThemes;
  var darkQuery = cfg.prefersDarkModeMediaQuery;

  function isTheme(v) {
    return typeof v === 'string' && themes.indexOf(v) !== -1;
  }

  function readLocalStorage(key) {
    try {
      return window.localStorage ? window.localStorage.getItem(key) : null;
    } catch (e) {
      return null;
    }
  }

  function resolve(theme, prefersDark) {
    if (theme === 'system') return prefersDark ? 'dark' : 'light';
    return theme;
  }

  var fromStorage = readLocalStorage(storageKey);
  var stored = isTheme(fromStorage) ? fromStorage : defaultTheme;

  var prefersDark = false;
  try {
    prefersDark = window.matchMedia(darkQuery).matches;
  } catch (e) {}

  var applied = resolve(stored, prefersDark);
  var root = document.documentElement;

  if (
    root.dataset.appliedTheme !== applied ||
    root.dataset.theme !== stored
  ) {
    for (var j = 0; j < resolvedThemes.length; j++) {
      root.classList.remove(resolvedThemes[j]);
    }
    root.classList.add(applied);
    root.dataset.theme = stored;
    root.dataset.appliedTheme = applied;
  }
})(${JSON.stringify({
	storageKey: n,
	defaultTheme: r,
	themes: e,
	resolvedThemes: t,
	prefersDarkModeMediaQuery: "(prefers-color-scheme: dark)"
})});<\/script>`;
//#endregion
export { r as DEFAULT_THEME, t as RESOLVED_THEMES, e as THEMES, n as THEME_STORAGE_KEY, i as themeFlashScript };

//# sourceMappingURL=theme-config.js.map