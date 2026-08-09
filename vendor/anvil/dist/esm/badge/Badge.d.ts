import React from 'react';
type Props = {
    colorScheme?: 'gray' | 'red' | 'green' | 'darkGreen' | 'blue' | 'yellow' | 'amber' | 'sunset' | 'neutral' | 'brand';
    size?: 'sm' | 'default' | 'lg' | 'xs';
};
export type BadgeProps = Props & React.HTMLAttributes<HTMLSpanElement>;
export default function Badge({ colorScheme, size, 
/** External classNames */
className, ...props }: BadgeProps): React.JSX.Element;
export {};
