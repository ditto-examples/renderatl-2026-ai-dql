import React from 'react';
declare const chipClassNames: {
    body: string;
    removeButton: string;
};
type ChipProps = React.ComponentPropsWithoutRef<'span'> & {
    removeLabel: string;
    disabled?: boolean;
    onRemove: React.MouseEventHandler<HTMLButtonElement>;
    onRemovePointerDown?: React.PointerEventHandler<HTMLButtonElement>;
    removeButtonTestId?: string;
    removeButtonProps?: Omit<React.ComponentPropsWithoutRef<'button'>, 'aria-label' | 'disabled' | 'onClick' | 'onPointerDown' | 'type'>;
};
declare function Chip({ children, className, removeLabel, disabled, onRemove, onRemovePointerDown, removeButtonTestId, removeButtonProps, ...props }: ChipProps): React.JSX.Element;
export { Chip, chipClassNames };
