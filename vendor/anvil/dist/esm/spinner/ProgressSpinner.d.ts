import React from 'react';
/** Shows determinate progress, or an indeterminate loading state when progress is omitted. */
declare const ProgressSpinner: React.ForwardRefExoticComponent<(Omit<Omit<React.SVGProps<SVGSVGElement>, "color"> & {
    /** Current progress. */
    progress: number;
    /** Total progress for which the task is considered completed. */
    total?: number;
} & {
    /** Color used for completed progress. Pass currentColor to inherit CSS text color. */
    progressColor?: string;
    /** Color used for the segment showing the remaining progress. */
    remainingColor?: string;
    /** Color used for the background. */
    backgroundColor?: string;
    /** Width of the circle stroke. */
    strokeWidth?: number;
}, "ref"> | Omit<Omit<React.SVGProps<SVGSVGElement>, "color"> & {
    /** Omit progress and total for an indeterminate spinner. */
    progress?: never;
    total?: never;
} & {
    /** Color used for completed progress. Pass currentColor to inherit CSS text color. */
    progressColor?: string;
    /** Color used for the segment showing the remaining progress. */
    remainingColor?: string;
    /** Color used for the background. */
    backgroundColor?: string;
    /** Width of the circle stroke. */
    strokeWidth?: number;
}, "ref">) & React.RefAttributes<SVGSVGElement>>;
export default ProgressSpinner;
