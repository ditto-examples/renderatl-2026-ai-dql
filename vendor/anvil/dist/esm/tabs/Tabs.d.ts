import * as TabsPrimitive from '@radix-ui/react-tabs';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare function TabsRoot({ className, orientation, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>): React.JSX.Element;
declare const tabsListVariants: (props?: {
    variant?: "default" | "pill";
} & import("class-variance-authority/types").ClassProp) => string;
declare function TabsList({ className, variant, ...props }: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>): React.JSX.Element;
declare function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>): React.JSX.Element;
declare function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>): React.JSX.Element;
export declare const Tabs: typeof TabsRoot & {
    List: typeof TabsList;
    Trigger: typeof TabsTrigger;
    Content: typeof TabsContent;
};
export {};
