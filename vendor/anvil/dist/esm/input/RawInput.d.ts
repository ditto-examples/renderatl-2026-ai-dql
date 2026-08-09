import { VariantProps } from 'class-variance-authority';
import React from 'react';
export declare const inputVariants: (props?: {
    size?: "default" | "sm";
    isInvalid?: boolean;
} & import("class-variance-authority/types").ClassProp) => string;
export type InputVariantProps = VariantProps<typeof inputVariants>;
export type RawInputProps = InputVariantProps & React.InputHTMLAttributes<HTMLInputElement>;
declare const RawInput: React.ForwardRefExoticComponent<InputVariantProps & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
export { RawInput };
