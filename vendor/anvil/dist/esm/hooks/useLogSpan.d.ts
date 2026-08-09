/** Time, capture and log spans. */
declare const useLogSpan: () => {
    /** Wraps a callback in a span and logs it with a label. */
    logSpan: (label: string, callback: () => void) => void;
    /**
     * Wraps a promise in a span and logs it with a label. The returned promise
     * resolves with the wrapped promise's resolved value.
     */
    logSpanPromise: <T>(label: string, promise: Promise<T>) => Promise<T>;
    /**
     * Starts a span with a label. Returns an object with an `endSpan` callback
     * that ends the span and logs it when called.
     */
    startSpan: (label: string) => {
        endSpan: () => void;
    };
};
export default useLogSpan;
