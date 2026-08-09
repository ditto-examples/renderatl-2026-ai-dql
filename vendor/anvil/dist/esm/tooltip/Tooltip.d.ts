import React, { PropsWithChildren } from 'react';
import { BaseTooltip } from './base';
type Props = PropsWithChildren<Pick<React.ComponentProps<typeof BaseTooltip.Content>, 'align' | 'sideOffset' | 'alignOffset' | 'side'> & {
    tip: string;
    disabled?: boolean;
}>;
declare function Tooltip({ children, tip, disabled, ...props }: Props): React.JSX.Element;
export default Tooltip;
