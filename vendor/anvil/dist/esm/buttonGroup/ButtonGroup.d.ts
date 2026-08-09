import { type VariantProps } from 'class-variance-authority';
import React from 'react';
import Separator from '../separator';
declare const buttonGroupVariants: (props?: {
    orientation?: "horizontal" | "vertical";
} & import("class-variance-authority/types").ClassProp) => string;
declare function ButtonGroup({ className, orientation, ...props }: React.ComponentProps<'div'> & VariantProps<typeof buttonGroupVariants>): React.JSX.Element;
declare function ButtonGroupSeparator({ className, orientation, ...props }: React.ComponentProps<typeof Separator>): React.JSX.Element;
export { ButtonGroup, ButtonGroupSeparator, buttonGroupVariants };
