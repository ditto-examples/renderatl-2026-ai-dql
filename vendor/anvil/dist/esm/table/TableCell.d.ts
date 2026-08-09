import React, { ComponentPropsWithoutRef } from 'react';
export type TableCellProps = ComponentPropsWithoutRef<'td'> & {
    activeOnHover?: boolean;
    enableCopy?: boolean;
};
export declare function TableCell({ className, activeOnHover, enableCopy, children, ...props }: TableCellProps): React.JSX.Element;
