import { Header, Table } from '@tanstack/react-table';
import React from 'react';
export type TableHeadItemProps<TData> = {
    table: Table<TData>;
    header: Header<TData, unknown>;
};
export declare function TableHeadItem<TData>({ table, header, }: TableHeadItemProps<TData>): React.JSX.Element;
