import React from 'react';
export type RawDatePickerProps = {
    /** HTML id for the input. */
    htmlFor: string;
    /** True if the input is in an invalid state. */
    isInvalid?: boolean;
    /** Optional classes for the calendar surface. */
    className?: string;
    selected?: Date | null;
    onChange: (date: Date | null) => void;
    onMonthChange?: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    inline?: boolean;
    customInput?: React.ReactElement;
    placeholderText?: string;
    dateFormat?: string;
    name?: string;
    popperPlacement?: string;
    shouldCloseOnSelect?: boolean;
    showTimeInput?: boolean;
    'data-testid'?: string;
};
/** Date input and calendar popover built on the shared DayPicker surface. */
declare const RawDatePicker: ({ htmlFor, isInvalid, className, selected, onChange, onMonthChange, minDate, maxDate, disabled, inline, customInput, placeholderText, dateFormat, name, popperPlacement, shouldCloseOnSelect, showTimeInput, "data-testid": testId, }: RawDatePickerProps) => React.JSX.Element;
export default RawDatePicker;
