import React from 'react';
type Props = {
    /** Panel variant to be shown */
    variant?: 'danger' | 'info' | 'warning' | 'success' | 'promo';
    /** Panel message. */
    message: string | (() => React.ReactNode);
    /** External class */
    className?: string;
};
/** Message panel used to show inline messages to the user. */
declare const MessagePanel: ({ variant, message, className }: Props) => React.JSX.Element;
export default MessagePanel;
