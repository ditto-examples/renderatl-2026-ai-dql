import { TrayIcon } from '@phosphor-icons/react';
import React from 'react';
export type EmptyStateProps = {
    /** Message displayed beneath the icon. */
    message: string;
    /** Additional classes applied to the container. */
    className?: string;
    /** Props passed to the default tray icon. */
    iconProps?: React.ComponentProps<typeof TrayIcon>;
    /** Whether to show the default tray icon. */
    icon?: boolean;
};
/**
 * Communicates that a view has no content to display.
 *
 * Use this for an empty collection or filtered result. Pair it with a nearby
 * action when the user can create the missing content.
 */
export declare function EmptyState({ message, className, iconProps, icon, }: EmptyStateProps): React.JSX.Element;
