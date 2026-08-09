import React from 'react';
export type PickerRange = {
    start: Date;
    end: Date;
};
type Props = {
    /** HTML id for the range input. */
    htmlFor: string;
    /** The date range to display in the date picker. */
    range: PickerRange;
    /** A callback that is called to update the date range. */
    onConfirmRangeChange: (range: PickerRange) => void;
    /** Optional classes for the containing div. */
    containerClassName?: string;
    showTimeSelect?: boolean;
    maxDate?: Date;
    minDate?: Date;
    'data-testid'?: string;
};
/** Date-range picker with an explicit confirmation step and optional times. */
export default function RangeDatePicker({ range, onConfirmRangeChange, showTimeSelect, containerClassName, htmlFor, minDate, maxDate, 'data-testid': testId, }: Props): React.JSX.Element;
export {};
