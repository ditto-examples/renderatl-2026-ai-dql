import React, { ReactNode } from 'react';
export type Props<T> = {
    /** Label to show on the input. */
    label?: string;
    /** HTML for attribute */
    htmlFor: string;
    /** Current value */
    value: T;
    /** Gets the key for any value */
    keyFn: (value: T) => string;
    /** Renders each value */
    renderFn: (value: T) => {
        title: ReactNode;
        description: ReactNode;
    };
    /** List of available options */
    options: T[];
    /** List of disabled options */
    disabled?: T[];
    /** Boolean to control disabled state of form element */
    groupDisabled?: boolean;
    /** On change handler */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** The direction of the radio buttons */
    orientation?: 'horizontal' | 'vertical';
    /** Additional class names */
    className?: string;
    /** Class name for the inner container (border/rounding wrapper) */
    containerClassName?: string;
    /** Class name for the radio button */
    optionClassName?: string;
};
/** RadioButtonList to be used within the scope of a form. */
declare const RadioButtonList: {
    <T>({ htmlFor, label, value, renderFn, options, onChange, keyFn, disabled, groupDisabled, orientation, className, containerClassName, optionClassName, }: Props<T>): React.ReactElement;
    defaultProps: {
        onChange: () => void;
        disabled: any[];
    };
};
export default RadioButtonList;
