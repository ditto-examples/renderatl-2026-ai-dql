import React from 'react';
import { RawLinkProps } from '../link/RawLink';
type Props = {
    /** File name, including the extension. */
    fileName: string;
};
/** Component used to provide an href value as a downloadable file link on the browser */
declare const TextDownload: React.FC<Props & RawLinkProps>;
export default TextDownload;
