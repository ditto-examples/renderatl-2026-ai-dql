import * as SwitchPrimitives from '@radix-ui/react-switch';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const switchVariants: (props?: {
    size?: "default" | "tiny";
} & import("class-variance-authority/types").ClassProp) => string;
export type SwitchProps = VariantProps<typeof switchVariants> & React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>;
declare const Switch: React.ForwardRefExoticComponent<VariantProps<(props?: {
    size?: "default" | "tiny";
} & import("class-variance-authority/types").ClassProp) => string> & Omit<SwitchPrimitives.SwitchProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default Switch;
