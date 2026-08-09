import React, { ComponentProps } from 'react';
export declare const DEFAULT_ALERT_DISMISS_TIMEOUT = 5000;
export type AlertProps = {
    /** Alert message variant. */
    variant: 'danger' | 'warning' | 'info' | 'success';
    /** Alert message body. */
    children: React.ReactNode;
    /** Indicates whether alert should be dismissed automatically. */
    autoDismiss?: boolean;
    /** Close alert callback. */
    onClose?: () => void;
    /** Additional class names. */
    className?: string;
};
/** Alert message that appears on the bottom of the page. */
declare function Alert({ variant, children, autoDismiss, onClose, className, ...rest }: AlertProps): React.JSX.Element;
declare namespace Alert {
    var Title: ({ className, ...rest }: AlertTitleProps) => React.JSX.Element;
    var Body: ({ className, ...rest }: AlertBodyProps) => React.JSX.Element;
    var defaultProps: {
        autoDismiss: boolean;
    };
}
export default Alert;
type AlertTitleProps = ComponentProps<'h3'>;
export declare const AlertTitle: ({ className, ...rest }: AlertTitleProps) => React.JSX.Element;
type AlertBodyProps = ComponentProps<'div'>;
export declare const AlertBody: ({ className, ...rest }: AlertBodyProps) => React.JSX.Element;
