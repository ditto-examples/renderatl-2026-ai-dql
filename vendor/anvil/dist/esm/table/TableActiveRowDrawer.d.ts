import React from 'react';
type Props = {
    /** Title of the drawer */
    title?: string;
    /** True if the drawer is open */
    isOpen: boolean;
    /** Handler for when the drawer is closed */
    onClose: () => void;
    /** True if the drawer can go backward */
    canGoBackward: boolean;
    /** True if the drawer can go forward */
    canGoForward: boolean;
    /** Handler for when the next row button is clicked */
    onNextRow: () => void;
    /** Handler for when the previous row button is clicked */
    onPreviousRow: () => void;
    /** Children to render in the drawer */
    children: React.ReactNode;
};
export default function TableActiveRowDrawer({ title, isOpen, onClose, canGoBackward, canGoForward, onNextRow, onPreviousRow, children, }: Props): React.JSX.Element;
export {};
