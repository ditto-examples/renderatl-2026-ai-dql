type ThemeType = 'light' | 'dark';
/**
 * Detect the current active theme. Prefers the value applied to the `<html>`
 * element by `ThemeProvider` (so manual user selections win), and falls back
 * to the OS-level `prefers-color-scheme` media query when the document hasn't
 * been tagged yet.
 */
declare const useDetectTheme: () => ThemeType;
export default useDetectTheme;
