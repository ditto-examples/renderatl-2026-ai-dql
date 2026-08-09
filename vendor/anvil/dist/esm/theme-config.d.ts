export declare const THEMES: readonly ["system", "light", "dark", "light-high-contrast", "dark-high-contrast"];
export declare const RESOLVED_THEMES: readonly ["light", "dark", "light-high-contrast", "dark-high-contrast"];
export declare const THEME_STORAGE_KEY = "portal-ui-theme";
export declare const DEFAULT_THEME = "system";
/**
 * Returns the inline script that applies the persisted theme before React
 * loads, preventing a flash of the wrong theme.
 */
export declare const themeFlashScript: () => string;
