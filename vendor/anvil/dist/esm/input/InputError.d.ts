import React from 'react';
export type Props = {
    /** Error message */
    message: string;
    /** External className */
    className?: string;
} & React.HtmlHTMLAttributes<HTMLDivElement>;
/** Renders an error message on forms */
declare const InputError: ({ message, className, ...other }: Props) => React.JSX.Element;
export default InputError;
