import { VariantProps } from 'class-variance-authority';
import React from 'react';
export declare const textAreaVariants: (props?: {
    size?: "default";
    isInvalid?: boolean;
} & import("class-variance-authority/types").ClassProp) => string;
export type RawTextAreaProps = React.ComponentPropsWithoutRef<'textarea'> & VariantProps<typeof textAreaVariants>;
declare const RawTextarea: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & VariantProps<(props?: {
    size?: "default";
    isInvalid?: boolean;
} & import("class-variance-authority/types").ClassProp) => string> & React.RefAttributes<HTMLTextAreaElement>>;
export { RawTextarea };
