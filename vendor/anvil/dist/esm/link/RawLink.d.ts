import React from 'react';
export type RawLinkProps = {
    /** Used for internal application paths. */
    to?: string;
    /** For passing state on RR links. */
    state?: Record<string, unknown>;
    /** Used for external application paths. */
    href?: string;
    /** True if a blank reference is used. */
    isBlank?: boolean;
    /** Child elements */
    children: React.ReactNode;
    /** Optional className */
    className?: string;
    /** Optional onClick handler */
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    /** Prevents the link from receiving focus or being activated. */
    disabled?: boolean;
    /** Optional role */
    role?: 'button' | 'link';
    /** True if an end link should be rendered. */
    end?: boolean;
    /** HTML id value. */
    id?: string;
    /** Active className for RR links */
    activeClassName?: string;
    /** Defined for file downloads. Contains the name of the downloaded file.*/
    download?: string;
    /** Whether to force the browser to reload the page when navigating to the link */
    reloadDocument?: boolean;
    /** The title of the link. */
    title?: string;
};
/** Link component used to render a router link or an a tag. */
declare const RawLink: React.ForwardRefExoticComponent<RawLinkProps & React.RefAttributes<HTMLAnchorElement>>;
export default RawLink;
