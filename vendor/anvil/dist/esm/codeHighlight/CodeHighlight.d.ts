import { Language } from 'prism-react-renderer';
import React from 'react';
import 'prismjs/components/prism-groovy.js';
import 'prismjs/components/prism-kotlin.js';
import 'prismjs/components/prism-ruby.js';
import 'prismjs/components/prism-sql.js';
import 'prismjs/components/prism-swift.js';
import 'prismjs/components/prism-csharp.js';
import 'prismjs/components/prism-json.js';
type AddedLanguage = 'groovy' | 'kotlin' | 'ruby' | 'swift' | 'csharp' | 'xml';
export interface CodeHighlightProps {
    /** The code to highlight */
    code: string;
    /** The language to highlight the code as */
    language?: Language | AddedLanguage;
    /** Whether or not to show line numbers */
    lineNumbers?: boolean;
    /** Optional className to be applied to the `pre` tag wrapper element */
    className?: string;
    /** Whether or not to round the corners of the code block */
    isRounded?: boolean;
}
export declare const CodeHighlight: ({ code, language, lineNumbers, className: preClassName, isRounded, }: CodeHighlightProps) => React.ReactElement;
export {};
