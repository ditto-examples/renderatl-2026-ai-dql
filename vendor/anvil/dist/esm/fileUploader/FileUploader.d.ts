import React from 'react';
import type { DropzoneOptions } from 'react-dropzone';
export type FileUploaderProps = {
    prompt?: string | React.ReactElement;
    subPrompt?: string | React.ReactElement;
    icon?: 'cloud' | 'fileAdded' | React.ReactElement;
    className?: string;
    isPending?: boolean;
} & Pick<Required<DropzoneOptions>, 'onDrop'> & Omit<DropzoneOptions, 'onDrop'>;
export default function FileUploader({ prompt, subPrompt, icon, onDrop, disabled, className, isPending, ...dropOptions }: FileUploaderProps): React.JSX.Element;
