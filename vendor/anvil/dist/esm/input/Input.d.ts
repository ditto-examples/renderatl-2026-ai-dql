import React from 'react';
import { RawInputProps } from './RawInput';
type LeadingIconProps = {
    /** Icon to show on the left side of the input. */
    leadingIcon?: React.ReactNode;
    addOn?: undefined;
};
type AddOnProps = {
    /** Add-on to show on the left side of the input. */
    addOn?: React.ReactNode;
    leadingIcon?: undefined;
};
type LeadingIconOrAddOnProps = LeadingIconProps | AddOnProps;
export type InputProps = {
    label?: string;
    description?: string;
    errorMessage?: string;
    containerClassName?: string;
    labelClassName?: string;
    /** Icon to show on the right side of the input. */
    trailingIcon?: React.ReactNode;
    /**
     * If true, the input will try to disable any password managers from autofilling the input.
     * Currently this is only affecting 1Password.
     */
    forceNoFill?: boolean;
} & RawInputProps & LeadingIconOrAddOnProps;
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
