import React from 'react';
export type Props = {
    /** Label to show on the input. */
    label?: string;
    /** HTML for atribute */
    htmlFor: string;
    /** Form field description. */
    description?: string;
    /**
     * An error message to show below the input. This will replace the description if
     * it is present.
     */
    errorMessage?: string;
    /** True if the input field is required */
    isRequired?: boolean;
    /** Externally defined className */
    className?: string;
    /**
     * Externally defined className for the label
     */
    labelClassName?: string;
    /** Child elements. */
    children: React.ReactNode;
};
/**  Renders a form field component for showing labels and descriptions around inputs. */
declare const FormField: {
    ({ htmlFor, label, description, errorMessage, children, isRequired, className, labelClassName, }: Props): React.JSX.Element;
    defaultProps: {
        isRequired: boolean;
    };
};
export default FormField;
