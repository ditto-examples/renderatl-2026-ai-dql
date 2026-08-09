type Params = {
    key: string;
    onKeyDown: () => void;
};
/**
 * A hook that calls a function when a key is pressed.
 */
export declare function useKeyPress({ key, onKeyDown }: Params): void;
export {};
