import React from 'react';
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
export type FormProps<T extends FieldValues> = {
    form: UseFormReturn<T>;
    onSubmit: SubmitHandler<T>;
    fieldsetClassName?: string;
    disabled?: boolean;
} & Omit<React.ComponentProps<'form'>, 'onSubmit'>;
export declare function Form<T extends FieldValues>({ form, onSubmit, children, fieldsetClassName, disabled, ...props }: FormProps<T>): React.JSX.Element;
