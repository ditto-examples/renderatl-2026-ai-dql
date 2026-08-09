import React, { ComponentProps } from 'react';
import Tooltip from '../tooltip/Tooltip';
import { DropdownMenu } from './base';
type ActionMenuItemBase = {
    id?: string;
    /**
     * A class name to apply to the item
     */
    className?: string;
    /**
     * Whether the item is currently active
     */
    active?: boolean;
    /**
     * Whether the item is disabled
     */
    disabled?: boolean;
    tip?: {
        content: string;
    } & Pick<ComponentProps<typeof Tooltip>, 'side'>;
    variant?: 'default' | 'critical';
};
type ActionMenuItemControlled = {
    /**
     * The label to display for the item
     */
    label: string;
    /**
     * The function to call when the item is clicked
     */
    onClick: () => void;
    /**
     * An optional icon to display next to the label
     */
    icon?: React.ComponentType;
    /**
     * Where to display the icon
     */
    iconPosition?: 'left' | 'right';
    render?: undefined;
};
type ActionMenuItemCustom = {
    label?: undefined;
    onClick?: undefined;
    icon?: undefined;
    iconPosition?: undefined;
    id: string;
    render: () => JSX.Element;
};
export type ActionMenuItem = ActionMenuItemBase & (ActionMenuItemControlled | ActionMenuItemCustom);
export type ActionMenuItemGroup = {
    label?: string;
    items: ActionMenuItem[];
};
type ItemsProps = {
    groups?: never;
    /**
     * List of items to display in the menu
     */
    items: ActionMenuItem[];
};
type GroupsProps = {
    items?: never;
    /**
     * List of groups to display in the menu
     */
    groups: ActionMenuItemGroup[];
};
type WithTrigger = {
    trigger: React.ReactNode;
    icon: never;
    iconClassName: never;
    itemsClassName: never;
};
type WithoutTrigger = {
    /**
     * Icon to display in the button, defaults to `MenuVertical`
     */
    icon?: React.ComponentType;
    /**
     * Optional class name for the icon
     */
    iconClassName?: string;
    /**
     * Optional class name for the items container
     */
    itemsClassName?: string;
};
type TriggerProps = WithTrigger | WithoutTrigger;
type ItemOrGroupProps = ItemsProps | GroupsProps;
type Props = TriggerProps & ItemOrGroupProps & Pick<ComponentProps<typeof DropdownMenu.Content>, 'align' | 'alignOffset'> & {
    /**
     * Callback fired when the dropdown's open state changes
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Whether the dropdown is disabled and cannot be opened
     */
    disabled?: boolean;
};
export declare function ActionMenu({ groups, items, ...props }: Props): React.JSX.Element;
export {};
