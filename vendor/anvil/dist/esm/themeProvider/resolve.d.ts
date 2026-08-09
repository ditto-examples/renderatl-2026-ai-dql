import { ResolvedTheme, Theme } from './types';
declare const PREFERS_DARK_QUERY = "(prefers-color-scheme: dark)";
/** Read the user's OS-level dark-mode preference. */
export declare const prefersDark: () => boolean;
/** Resolve a `Theme` (which may be `system`) to a concrete `ResolvedTheme`. */
export declare const resolveTheme: (theme: Theme, systemPrefersDark?: boolean) => ResolvedTheme;
/**
 * Apply a theme to the `<html>` element by writing the dataset attributes and
 * keeping a single `light`/`dark` class in sync with `data-applied-theme`.
 *
 * The class mirroring keeps Tailwind's `dark:` variant working without
 * requiring consumers to read the dataset.
 *
 * Transitions are briefly suppressed across the document (see
 * `suppressTransitions`) so the swap doesn't trigger a cascade of
 * color/background animations.
 */
export declare const applyThemeToDocument: (theme: Theme, resolved: ResolvedTheme) => void;
export { PREFERS_DARK_QUERY };
