import React, { ComponentProps } from 'react';
import { Dialog } from './Dialog';
export type ConfirmationDialogProps = {
    /** Whether the modal is open. */
    open: boolean;
    /** Modal heading. */
    title: string;
    /** Supporting content displayed beneath the title. */
    description?: React.ReactNode;
    /** Uses a critical confirm action when set to `warning`. */
    variant?: 'default' | 'warning';
    /** Content rendered in the scrollable dialog body. */
    children?: React.ReactNode;
    /** Cancel action label. */
    cancelButtonText?: string;
    /** Confirm action label. */
    confirmButtonText?: string;
    /** Whether to render the close icon. */
    showCloseIcon?: boolean;
    /** Whether to render the confirm button. */
    showConfirmButton?: boolean;
    /** Whether to render the cancel button. */
    showCancelButton?: boolean;
    /** Whether the confirm action is disabled. */
    confirmButtonDisabled?: boolean;
    /** Form id submitted by the confirm action. */
    confirmationButtonForm?: string;
    /** Whether the cancel action is disabled. */
    cancelButtonDisabled?: boolean;
    /** Called when the user confirms the action. */
    onConfirm?: () => void;
    /** Called when the user cancels or dismisses the dialog. */
    onCancel?: () => void;
    /** Test id applied to the dialog content. */
    'data-testid'?: string;
} & Pick<ComponentProps<typeof Dialog.Content>, 'size' | 'onOpenAutoFocus'>;
/**
 * A controlled dialog for confirming an action.
 *
 * Use `variant="warning"` for destructive actions. For high-risk changes,
 * place an `InputConfirmation` in the body and disable confirmation until its
 * value matches.
 */
export declare function ConfirmationDialog({ open, title, size, description, variant, children, cancelButtonText, confirmButtonText, showCloseIcon, showConfirmButton, showCancelButton, confirmButtonDisabled, confirmationButtonForm, cancelButtonDisabled, onConfirm, onCancel, ...rest }: ConfirmationDialogProps): React.JSX.Element;
