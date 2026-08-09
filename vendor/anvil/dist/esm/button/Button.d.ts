import { type VariantProps } from 'class-variance-authority';
import React from 'react';
declare const buttonVariants: (props?: {
    variant?: "default" | "primary" | "secondary" | "critical" | "ghost" | "outline";
    size?: "default" | "sm" | "xs" | "lg" | "icon" | "square";
} & import("class-variance-authority/types").ClassProp) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
