import { ResolvedTheme, Theme } from './types';
type ThemeStore = {
    /** The user's selected theme — may be `system`. */
    theme: Theme;
    /** The actual theme applied to the DOM — never `system`. */
    resolvedTheme: ResolvedTheme;
    /** Whether the OS prefers dark mode. Updated by `ThemeProvider`. */
    systemPrefersDark: boolean;
    /** Persist a new theme choice. */
    setTheme: (theme: Theme) => void;
    /** Update the cached OS dark-mode preference. */
    setSystemPrefersDark: (prefersDark: boolean) => void;
};
/**
 * Global theme store. Persists the user's choice to `localStorage` under
 * `THEME_STORAGE_KEY` so the FOUC script can read it before React boots.
 *
 * `resolvedTheme` is derived from `theme` and `systemPrefersDark` and is kept
 * in sync inside the setters — consumers can subscribe to it directly without
 * doing the resolution themselves.
 *
 * Most consumers should use the `useTheme()` hook from `ThemeProvider`.
 */
export declare const useThemeStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<ThemeStore>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<ThemeStore, {
            theme: "dark" | "light" | "system" | "light-high-contrast" | "dark-high-contrast";
        }>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: ThemeStore) => void) => () => void;
        onFinishHydration: (fn: (state: ThemeStore) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<ThemeStore, {
            theme: "dark" | "light" | "system" | "light-high-contrast" | "dark-high-contrast";
        }>>;
    };
}>;
export {};
