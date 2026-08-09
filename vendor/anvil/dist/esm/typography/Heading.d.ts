import React from 'react';
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level: 1 | 2 | 3 | 4;
    className?: string;
}
export declare const Heading: ({ level, children, className, ...props }: HeadingProps) => React.JSX.Element;
export {};
