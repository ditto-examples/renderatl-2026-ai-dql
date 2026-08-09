import React from 'react';
import { type Option as SelectOption } from '../../form/Select';
type Props = {
    pageSize: number;
    setPageSize: (page: number) => void;
    options?: SelectOption[];
    height?: number;
    label?: string;
};
export default function TablePageSizeSelector({ pageSize, setPageSize, options, height, label, }: Props): React.JSX.Element;
export {};
