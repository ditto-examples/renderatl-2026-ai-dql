/**
 * The possible operating system platforms that can be returned by this hook
 */
export type Platform = 'macOS' | 'Windows' | 'Linux' | 'Unknown';
/**
 * A hook that returns the current operating system platform (macOS, Windows, Linux, or Unknown).
 */
export default function useDevicePlatform(): {
    platform: Platform;
    isMacOS: boolean;
    isWindows: boolean;
    isLinux: boolean;
};
