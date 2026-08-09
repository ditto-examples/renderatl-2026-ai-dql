import React from 'react';
type Variant = 'ghost' | 'critical';
declare const TableActionsHeaderButton: React.ForwardRefExoticComponent<{
    open?: boolean;
    variant?: Variant;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export default TableActionsHeaderButton;
