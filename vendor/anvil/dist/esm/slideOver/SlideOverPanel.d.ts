import React from 'react';
declare const SIZES: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
};
type Props = {
    /** True if the slide over panel is open */
    isOpen: boolean;
    /** Child components that should be shown on the panel. */
    children: React.ReactNode;
    /** Class name applied to the outermost container of the panel. */
    wrapperClassName?: string;
    /** Class name applied to the inner panel. */
    className?: string;
    /** Class name applied to the outer container of the panel. */
    containerClassName?: string;
    /** Optional size of the panel. Defaults to 'md' */
    size?: keyof typeof SIZES;
};
/** Slide over panel with a sticky footer. Based on Tailwind UI's panel:
 *
 * https://tailwindui.com/components/application-ui/overlays/slide-overs#component-ec28d8520d4af86eaacce43859f9c34a
 *
 */
declare const SlideOverPanel: ({ isOpen, children, className, containerClassName, wrapperClassName, size, }: Props) => React.JSX.Element;
export default SlideOverPanel;
