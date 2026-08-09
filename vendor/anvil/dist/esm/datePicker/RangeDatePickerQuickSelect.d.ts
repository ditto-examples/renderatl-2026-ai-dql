import React from 'react';
import { Select } from '../form/Select';
import { PickerRange } from './RangeDatePicker';
type Option = {
    label: string;
    value: string | number;
    start: Date;
    end: Date;
};
type Props = {
    range: PickerRange;
    setRange: (range: PickerRange) => void;
    options: Date[];
    renderOption?: (start: Date, end: Date) => Option;
    allowCustom?: boolean;
    className?: string;
    title?: string;
    htmlFor?: string;
} & Omit<React.ComponentPropsWithoutRef<typeof Select>, 'value' | 'onValueChange' | 'options'>;
export default function RangeDatePickerQuickSelect({ range, setRange, options, renderOption, allowCustom, className, ...props }: Props): React.JSX.Element;
export {};
