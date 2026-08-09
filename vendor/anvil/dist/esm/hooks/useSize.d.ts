/** Hook used for retrieving the size of any element and receiving updates
 * when the window is resized.
 */
declare const useSize: (defaultSize?: number, onResized?: () => void) => [(ref: Element | null) => void, {
    width: number;
    height: number;
}, () => void];
export default useSize;
