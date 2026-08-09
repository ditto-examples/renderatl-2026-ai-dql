import { Column, PaginationState } from '@tanstack/react-table';
import { CSSProperties } from 'react';
/**
 * A function to calculate the new page index when the page size changes.
 */
export declare function resolvePageSizeChanged(oldState: PaginationState, newState: PaginationState, dataSize: number): number;
export declare function getCommonPinningStyles<T>(column: Column<T>, overrides?: (isPinned: boolean) => CSSProperties): CSSProperties;
/**
 * A function to format an unknown value into a string for displaying
 */
export declare function renderUnknownValue(value: unknown, formatObjectString?: boolean): string;
