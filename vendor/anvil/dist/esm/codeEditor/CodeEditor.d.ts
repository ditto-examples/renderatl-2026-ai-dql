import { BasicSetupOptions, Extension, ReactCodeMirrorProps } from '@uiw/react-codemirror';
import React from 'react';
export type CodeEditorProps = {
    /** The current value of the editor */
    value?: string;
    /** Callback for when the content changes */
    onChange?: (value: string) => void;
    /** Height of the editor */
    height?: string;
    /** Whether the editor is read-only */
    readOnly?: boolean;
    /** CodeMirror language extension */
    language: Extension;
    /** Optional CodeMirror linter extension */
    linter?: Extension;
    /** CodeMirror basic setup options */
    options?: BasicSetupOptions;
} & Omit<ReactCodeMirrorProps, 'onChange' | 'value' | 'height' | 'readOnly' | 'basicSetup' | 'extensions'>;
export default function CodeEditor({ value, onChange, height, readOnly, language, linter, options, ...rest }: CodeEditorProps): React.JSX.Element;
