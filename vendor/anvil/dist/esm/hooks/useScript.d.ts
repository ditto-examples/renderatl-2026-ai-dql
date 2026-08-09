type Status = 'idle' | 'loading' | 'ready' | 'error';
/** Use script react hook appends an external script dynamically into the document body. */
declare const useScript: (src: string) => Status;
export default useScript;
