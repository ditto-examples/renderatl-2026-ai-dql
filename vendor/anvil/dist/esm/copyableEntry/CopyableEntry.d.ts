import React from 'react';
export declare const MASKED_VALUE: string;
type CustomRenderProps = {
    mask?: never;
    /** Render prop to override the default render */
    render: () => React.ReactElement | React.ReactElement[];
};
type WithoutCustomRenderProps = {
    /**
     * Optional flag to mask the value. This **WILL NOT** work when providing
     * a custom render prop.
     */
    mask?: boolean;
    render?: never;
};
export type CopyableEntryProps = {
    /** The value to be copied */
    value: string;
    /** The title of the entry */
    title?: string;
    /** Optional test id for the value's container */
    testId?: string;
    /** Optional flag to render the value with mono font */
    isCode?: boolean;
    /** Optional callback that can get triggered after successful copy */
    onCopied?: () => void;
    /** Optional flag to render the entire entry width */
    fullWidth?: boolean;
} & (CustomRenderProps | WithoutCustomRenderProps);
export declare const CopyableEntry: ({ testId, value, mask, title, isCode, onCopied, render, fullWidth, }: CopyableEntryProps) => React.JSX.Element;
export default CopyableEntry;
