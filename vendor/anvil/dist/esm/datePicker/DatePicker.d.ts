import React from 'react';
import { RawDatePickerProps } from './RawDatePicker';
type Props = {
    /** Label to show on the input. */
    label?: string;
    /** HTML for attribute */
    htmlFor: string;
    /** Current value */
    value?: string;
    /** Externally defined className for the input wrapper. */
    wrapperClassName?: string;
    /** Externally defined className for the date picker. */
    datePickerClassName?: string;
    /** Form field description. */
    description?: string;
    /** True if the box is in invalid state. */
    isInvalid?: boolean;
    /** True if a value for the field is required */
    isRequired?: boolean;
};
/** DatePicker to be used within the scope of a form. */
declare const DatePicker: ({ htmlFor, description, isRequired, label, wrapperClassName, datePickerClassName, ...other }: RawDatePickerProps & Props) => React.JSX.Element;
export default DatePicker;
