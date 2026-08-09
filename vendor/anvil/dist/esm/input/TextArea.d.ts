import React from 'react';
import { RawTextAreaProps } from './RawTextArea';
export type TextAreaProps = {
    label?: string;
    description?: string;
    errorMessage?: string;
} & RawTextAreaProps;
declare const TextArea: React.ForwardRefExoticComponent<{
    label?: string;
    description?: string;
    errorMessage?: string;
} & Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & import("class-variance-authority").VariantProps<(props?: {
    size?: "default";
    isInvalid?: boolean;
} & import("class-variance-authority/types").ClassProp) => string> & React.RefAttributes<HTMLTextAreaElement>>;
export { TextArea };
