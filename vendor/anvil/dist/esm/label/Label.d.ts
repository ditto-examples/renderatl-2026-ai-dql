import * as LabelPrimitive from '@radix-ui/react-label';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const labelVariants: (props?: import("class-variance-authority/types").ClassProp) => string;
declare const Label: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: import("class-variance-authority/types").ClassProp) => string> & React.RefAttributes<HTMLLabelElement>>;
export { Label, labelVariants };
