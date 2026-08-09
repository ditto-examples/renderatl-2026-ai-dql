/**
 * A utility function that truncates a string to a max of MAX_STRING_LENGTH characters
 * (1_000 plus ellipses)
 */
export declare function truncateString(str: string): string;
/**
 * A recursive function that truncates any string values in an object to a max of
 * MAX_STRING_LENGTH characters (1_000 plus ellipses)
 */
export declare function truncate<T extends object>(field: T): T;
