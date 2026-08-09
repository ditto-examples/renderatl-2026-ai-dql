import React from 'react';
export type Option = {
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
    keywords?: string[];
};
declare const Select: React.ForwardRefExoticComponent<{
    label?: string;
    options: Option[];
    description?: string;
    containerClassName?: string;
    errorMessage?: string;
} & Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & Pick<import("@radix-ui/react-select").SelectProps, "value" | "defaultValue" | "onValueChange"> & React.RefAttributes<HTMLButtonElement>>;
export { Select };
