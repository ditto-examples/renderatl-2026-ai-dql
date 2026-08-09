import React from 'react';
import { Popover } from '../Popover';
import { type Option as SelectOption } from './Select';
type MultiSelectProps = {
    isMulti: true;
    useSwitches?: boolean;
    value: string[];
    onValueChange: (selected: string[]) => void;
    formatSelected?: (selected: string[]) => React.ReactNode;
};
type SingleSelectProps = {
    isMulti?: false;
    useSwitches?: false;
    value: string;
    onValueChange: (selected: string) => void;
    formatSelected?: (selected: string) => React.ReactNode;
};
type SelectProps = MultiSelectProps | SingleSelectProps;
type Props = {
    options: SelectOption[];
    label?: string;
    description?: string;
    errorMessage?: string;
    isRequired?: boolean;
    containerClassName?: string;
    searchable?: boolean;
    className?: string;
    id?: string;
    disabled?: boolean;
    placeholder?: string;
    onRearrange?: (newOptions: SelectOption[]) => void;
    onAddOption?: (option: SelectOption) => void;
    popover?: Pick<React.ComponentProps<typeof Popover.Content>, 'side' | 'align' | 'className' | 'portal'>;
    width?: number;
} & SelectProps;
export declare function ComboBox({ options, label, description, errorMessage, isRequired, containerClassName, isMulti, useSwitches, value, onValueChange, placeholder, searchable, className, id, disabled, onRearrange, onAddOption, formatSelected, popover, width, }: Props): React.JSX.Element;
export {};
