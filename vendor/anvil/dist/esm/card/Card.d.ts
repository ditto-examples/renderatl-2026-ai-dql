import React from 'react';
type Props = {
    /**
     * Additional classNames on the card container.
     */
    className?: string;
    /** Card contents */
    children: React.ReactNode;
    /**
     * Determines if the card should divide the children with a border.
     */
    isDivided?: boolean;
};
declare const Card: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
type CardSubComponentProps = {
    /**
     * Determines if the subcomponent will have any padding. If this value is true, then there will be no padding.
     **/
    isFlushed?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
declare const CardBody: React.ForwardRefExoticComponent<{
    /**
     * Determines if the subcomponent will have any padding. If this value is true, then there will be no padding.
     **/
    isFlushed?: boolean;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: ({ children, isFlushed, className, ...props }: CardSubComponentProps) => React.JSX.Element;
declare const CardFooter: ({ children, isFlushed, className, ...props }: CardSubComponentProps) => React.JSX.Element;
/**
 * A generic spacer component that applies a uniform vertical spacing. This is mostly
 * to help with vertical spacing between card elements that have `isFlushed` set to true.
 */
declare const CardSpacer: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
declare const TypedCard: typeof Card & {
    Body: typeof CardBody;
    Header: typeof CardHeader;
    Footer: typeof CardFooter;
    Spacer: typeof CardSpacer;
};
export default TypedCard;
