import React, { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';
export type CalendarProps = ComponentProps<typeof DayPicker>;
/**
 * Calendar selection surface built on React DayPicker.
 *
 * The structure follows Mantle's calendar composition while all visual states
 * are expressed with Ditto semantic tokens.
 */
export declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): React.JSX.Element;
export type { DateRange } from 'react-day-picker';
