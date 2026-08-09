import React from 'react';
export type Props = {
    /**
     * The value that needs to be typed in to confirm the action.
     */
    value: string;
    /**
     * A callback to update the current match state
     */
    onMatch: (match: boolean) => void;
    /**
     * An optional callback to render the confirmation prompt.
     */
    confirmationRenderer?: () => React.ReactNode;
};
export declare function InputConfirmation({ value, onMatch, confirmationRenderer, }: Props): React.JSX.Element;
