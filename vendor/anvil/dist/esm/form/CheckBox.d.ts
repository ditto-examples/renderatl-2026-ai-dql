import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';
export type Props = {
    /** Label to show on the input. */
    label?: string;
    /** Description to show on the input. */
    description?: string | React.ReactNode;
    /** True if the input field is required */
    isRequired?: boolean;
} & React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;
declare const CheckBox: React.ForwardRefExoticComponent<{
    /** Label to show on the input. */
    label?: string;
    /** Description to show on the input. */
    description?: string | React.ReactNode;
    /** True if the input field is required */
    isRequired?: boolean;
} & Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default CheckBox;
