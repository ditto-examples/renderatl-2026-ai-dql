/** Hook for copying content to the clipboard.
 * This is only available on some browsers:
 * https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write#browser_compatibility
 */
declare const useCopyToClipboard: (data: string, didCopyStateMs?: number) => [performCopy: () => Promise<void>, didRecentlyCopy: boolean, canCopy: boolean];
export default useCopyToClipboard;
