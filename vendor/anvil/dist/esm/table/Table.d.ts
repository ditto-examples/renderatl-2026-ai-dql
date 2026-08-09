import { ColumnDef, RowData, TableOptions } from '@tanstack/react-table';
import React, { ComponentPropsWithoutRef } from 'react';
export { type ColumnFiltersState, type PaginationState, type RowSelectionState, type SortingState, createColumnHelper, } from '@tanstack/react-table';
export declare const DEFAULT_TABLE_ROW_HEIGHT = 48;
export declare const DEFAULT_TABLE_HEADER_ROW_HEIGHT = 48;
declare module '@tanstack/table-core' {
    interface ColumnMeta<TData extends RowData, TValue> {
        /**
         * When `true`, the column will not be sortable or resizable.
         */
        isActionColumn?: boolean;
        /**
         * When `true`, the column will not have the `onSelectActiveRow` callback applied to its cells.
         */
        isNonSelectable?: boolean;
        /**
         * When `true`, the column will show a copy button on hover that copies the cell content to clipboard.
         */
        enableCopy?: boolean;
    }
    interface TableMeta<TData extends RowData> {
        /**
         * When `true`, the table will not sort rows automatically. This will be useful as
         * we don't want the table to sort what is present but rather to rerun the query with the new sort params.
         **/
        manualSorting?: boolean;
    }
}
export type TableColumnDef<TData, TValue = any> = ColumnDef<TData, TValue>;
type Props<TData = unknown, TValue = unknown> = {
    /**
     * The data to display in the table
     */
    data: TData[];
    /**
     * The tanstack table column definitions. For more information, see:
     * https://tanstack.com/table/v8/docs/guide/column-defs
     */
    columns: ColumnDef<TData, TValue>[];
    /**
     * The height of the table. A fixed height is required to properly virtualize
     * the table rows. For more dynamic height requirements, height may also be a
     * function that takes the number of rows as an argument and returns the height.
     */
    height: number | ((rowCount: number) => number);
    /**
     * The width of the table.
     */
    width?: number;
    /**
     * The rest of the table options from tanstack table. For more information, see:
     * https://tanstack.com/table/v8/docs/api/core/table#options
     */
    options?: Omit<TableOptions<TData>, 'data' | 'columns' | 'getCoreRowModel' | 'getSortedRowModel'>;
    /**
     * An optional callback to render an empty state when there is no data to display.
     */
    emptyStateRenderer?: () => React.ReactNode;
    /**
     * Whether to enable the scroll to top button. Defaults to false.
     * If true, when the user scrolls down the table, a button will appear once the
     * user has scrolled past the scrollToTopThreshold. Clicking the button
     * will scroll the table back to the top.
     */
    enableScrollToTop?: boolean;
    /**
     * The threshold for when to show the scroll to top button. A decimal value
     * representing the percentage from the top of table container that has been
     * scrolled. Defaults to `0.25`.
     */
    scrollToTopThreshold?: number;
    /**
     * Whether a row should appear highlighted when hovered. Defaults to true.
     */
    activeOnHover?: boolean;
    /**
     * The currently active row. If provided, the row will be highlighted.
     */
    activeRow?: TData;
    /**
     * An optional function to render the contents for the active row drawer. If not
     * provided, or there is no active row, the active row drawer will not be rendered.
     */
    activeRowOverlay?: (activeRow: TData) => React.ReactNode;
    /**
     * An optional string or callback function to render the title for the active row drawer.
     */
    activeRowOverlayTitle?: ((activeRow: TData) => string) | string;
    /**
     * Callback for when a row is selected.
     */
    onSelectActiveRow?: (row?: TData) => void;
    /**
     * Whether to disable the active row drawer from following the active row. Defaults to false.
     */
    disableFollowActiveRow?: boolean;
    /**
     * Optional callback for when the user scrolls to the bottom of the table. This
     * is useful for infinite scroll in order to fetch/load more data.
     */
    onScrolledToBottom?: () => void;
    /**
     * An optional className to apply to the table header row.
     */
    tableHeaderRowClassName?: string;
    /**
     * An optional className to apply to the table header row.
     */
    tableHeaderCellClassName?: string;
    /**
     * An optional className to apply to the table container. This can be a function that
     * takes the active state of the table as an argument for more granular control.
     */
    tableRowClassName?: ((isActive: boolean) => string) | string;
    /**
     * An optional className to apply to a table cell. This can be a function that
     * takes the active state of the table as an argument for more granular control.
     */
    tableCellClassName?: ((isActive: boolean) => string) | string;
    /**
     * An optional className to apply to the table.
     */
    tableClassName?: string;
    /**
     * An optional className to apply to the div that wraps the table.
     */
    containerClassName?: string;
    /**
     * Whether to divide (border) the table by rows or cells. Defaults to 'rows'.
     */
    divide?: 'rows' | 'cells';
    'data-testid'?: string;
    /**
     * An optional className to apply to the empty row when there is no data to display.
     */
    emptyRowClassName?: string;
};
/**
 * A table component that uses tanstack table under the hood. This component is designed
 * to be used with a fixed height, and will use virtualization to render only the rows that
 * are visible in the viewport (plus a reasonable overscan).
 */
export default function Table<TData, TValue>({ data, columns, height, width, options, emptyStateRenderer, enableScrollToTop, scrollToTopThreshold, activeOnHover, activeRow, activeRowOverlay, activeRowOverlayTitle, onSelectActiveRow, disableFollowActiveRow, onScrolledToBottom, tableHeaderRowClassName, tableHeaderCellClassName, tableRowClassName, tableCellClassName, tableClassName, containerClassName, divide, emptyRowClassName, ...props }: Props<TData, TValue>): React.JSX.Element;
export type TableRowProps = ComponentPropsWithoutRef<'tr'> & {
    isActive?: boolean;
    /**
     * Whether a row should appear highlighted when hovered. Defaults to true.
     */
    activeOnHover?: boolean;
};
export declare function TableRow({ className, isActive, activeOnHover, ...props }: TableRowProps): React.JSX.Element;
