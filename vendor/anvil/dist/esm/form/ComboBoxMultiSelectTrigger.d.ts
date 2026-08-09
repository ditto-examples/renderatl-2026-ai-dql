import React from 'react';
import { type Option as SelectOption } from './Select';
type Props = {
    className: string;
    disabled?: boolean;
    errorMessage?: string;
    formatSelected?: (selected: string[]) => React.ReactNode;
    id: string;
    isOpen: boolean;
    onRemove: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    value: string[];
    width?: number;
};
declare function ComboBoxMultiSelectTrigger({ className, disabled, errorMessage, formatSelected, id, isOpen, onRemove, options, placeholder, value, width, }: Props): React.JSX.Element;
export { ComboBoxMultiSelectTrigger };
