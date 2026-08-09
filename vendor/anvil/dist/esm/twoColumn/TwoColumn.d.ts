import React from 'react';
interface TwoColumnProps {
    firstColumnTitle?: string;
    firstColumnContent?: string | React.ReactNode | React.ReactElement | JSX.Element;
    children: React.ReactNode;
    containerClassName?: string;
    firstColumnContainerClassName?: string;
}
export declare const TwoColumn: ({ containerClassName, firstColumnTitle, firstColumnContent, firstColumnContainerClassName, children, }: TwoColumnProps) => React.JSX.Element;
export {};
