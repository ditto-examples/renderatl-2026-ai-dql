import React from 'react';
export type ProgressBarProps = {
    /** A number representing the progress, relative to the `max` prop. E.g. `0.5` */
    progress: number;
    /** A number to set the max value (i.e. 100%). Default is `1`. */
    max?: number;
    /** The size of the progress bar. This does not alter the width, rather the thickness.
     *  default is `md`
     */
    size?: 'sm' | 'md' | 'lg';
};
export default function ProgressBar({ progress, max, size, }: ProgressBarProps): React.JSX.Element;
