import React from 'react';
type Props = {
    currentPage: number;
    setPage: (page: number) => void;
    pageCount: number;
    allowedPages?: readonly number[];
    height?: number;
};
export default function TablePageSelector({ currentPage, setPage, pageCount, allowedPages, height, }: Props): React.JSX.Element;
export {};
