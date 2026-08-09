import { ComponentProps, ReactNode } from 'react';
export type SvgAttributes = ComponentProps<'svg'> & {
    focusable?: 'true' | 'false';
};
type SvgOnlyProps = Omit<SvgAttributes, 'children'> & {
    /**
     * A single SVG icon element passed as a JSX tag.
     */
    svg: ReactNode;
};
/**
 * Accepts a single SVG icon element and decorates it with a `shrink-0` class.
 * Merges classNames in this order of precedence (last wins):
 *   1. SvgOnly base classes (`shrink-0`)
 *   2. SvgOnly className
 *   3. svg className
 *
 * You probably want to use the `Icon` component instead.
 */
declare const SvgOnly: import("react").ForwardRefExoticComponent<Omit<SvgOnlyProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
export { SvgOnly };
export type { SvgOnlyProps };
