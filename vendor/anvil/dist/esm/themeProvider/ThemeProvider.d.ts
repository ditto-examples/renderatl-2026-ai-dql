import * as React from 'react';
import { PropsWithChildren } from 'react';
import { ResolvedTheme, Theme } from './types';
type ThemeContextValue = {
    /** The user's selected theme — may be `system`. */
    theme: Theme;
    /** The actual theme applied to the DOM — never `system`. */
    resolvedTheme: ResolvedTheme;
    /** Persist a new theme choice and apply it to the DOM. */
    setTheme: (next: Theme) => void;
};
/**
 * Render once near the root of the app. Watches the OS-level dark-mode
 * preference and keeps the `<html>` element's `data-theme`,
 * `data-applied-theme`, and resolved-theme class in sync with the zustand
 * theme store as the user toggles or as the OS preference changes.
 *
 * For the FOUC prevention story to work, inject `themeFlashScript()` from
 * `@dittolive/anvil` into each app's `index.ejs` as early as possible in
 * `<head>` — that script applies the correct class before the React bundle
 * even loads.
 */
export declare const ThemeProvider: ({ children }: PropsWithChildren) => React.JSX.Element;
/**
 * Read and update the active theme. Backed by the zustand theme store, so it
 * works anywhere in the tree — there's no React context to consume. A
 * `<ThemeProvider />` should still be rendered once at the root so the DOM
 * stays in sync.
 */
export declare const useTheme: () => ThemeContextValue;
export {};
