import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';
declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverClose: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverAnchor: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<{
    portal?: boolean;
} & Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const TypedPopover: typeof Popover & {
    Trigger: typeof PopoverTrigger;
    Close: typeof PopoverClose;
    Content: typeof PopoverContent;
    Anchor: typeof PopoverAnchor;
};
export { TypedPopover as Popover };
