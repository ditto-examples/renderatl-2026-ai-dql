import React from 'react';
type Props = {
    label?: string;
    /**
     * The JSON object to pick keys from
     */
    source: Record<string, unknown>;
    /**
     * Callback function to call when the path changes
     */
    onChange: (path: string[]) => void;
    /**
     * The initial path to start with, if any. This will be an array of keys, which
     * will give the path to the current object when joined with a period.
     */
    value?: string[];
    /**
     * The placeholder text to display in the input
     */
    placeholder?: string;
    /**
     * If true, the input will be styled as invalid
     */
    isInvalid?: boolean;
};
export default function JSONKeyPicker({ label, source, onChange, value, placeholder, isInvalid, }: Props): React.JSX.Element;
/**
 * A subset of types which have explicit icons to render
 */
export type SupportedJSONPickerType = 'string' | 'number' | 'boolean' | 'object' | 'array';
export declare const isSupportedJSONPickerType: (type: string) => type is SupportedJSONPickerType;
export declare const toSupportedJSONPickerType: (value: unknown) => SupportedJSONPickerType | null;
export {};
