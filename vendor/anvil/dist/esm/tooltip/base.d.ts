import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React from 'react';
declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
declare const TooltipRoot: React.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipContent: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Tooltip: (props: React.ComponentProps<typeof TooltipRoot>) => React.JSX.Element;
declare const TypedTooltip: typeof Tooltip & {
    Trigger: typeof TooltipPrimitive.Trigger;
    Content: typeof TooltipContent;
};
export { TypedTooltip as BaseTooltip, TooltipProvider };
