import React from 'react';
import { type SelectOption } from '../../form';
type Props = {
    /**
     * The current page of the table. This value should **not** be zero-indexed.
     */
    currentPage: number;
    /**
     * The current page size of the table.
     */
    pageSize?: number;
    /**
     * The page size options for the page size select
     */
    pageSizeOptions?: SelectOption[] | undefined;
    /**
     * The total number of pages in the table. Used primarily for validation.
     */
    pageCount: number;
    /**
     * Pages that can be selected directly. Defaults to every page through pageCount.
     */
    selectablePages?: readonly number[];
    /**
     * Whether or not the table can go backward a page. If not provided, the
     * default behavior is to always allow going backward unless the current page
     * is the first page (i.e. <= 1).
     */
    canGoBackward?: boolean;
    /**
     * Whether or not the table can go forward a page. If not provided, the
     * default behavior is to always allow going forward so long as the current page
     * is not the last page (i.e. >= pageCount).
     */
    canGoForward?: boolean;
    /**
     * The content to render in the center space of the toolbar. If not provided,
     * it will render empty space. On mobile, this content will be hidden as to not
     * overload the horizontal space.
     */
    centerContent?: React.ReactNode;
    /**
     * Callback function to set the current page
     */
    onSetPage: (page: number) => void;
    /**
     * Callback function to set the page size
     */
    onSetPageSize?: (pageSize: number) => void;
    /**
     * The height of the pagination controls.
     */
    height?: number;
    /**
     * An optional class name to apply to the root element.
     */
    className?: string;
    /**
     * An optional class name to apply to the action buttons.
     */
    actionButtonClassName?: string;
    /**
     * An optional callback function to call when the user hovers over the next or previous page buttons.
     */
    onPrefetchPage?: (page: number) => void;
};
export default function TablePaginationControls({ currentPage, pageSize, pageSizeOptions, pageCount, selectablePages, canGoBackward, canGoForward, centerContent, onSetPage, onSetPageSize, height, className, actionButtonClassName, onPrefetchPage, }: Props): React.JSX.Element;
export {};
