import React from 'react';
export type ImageProps = {
    /** Image source */
    src?: string | null;
    /** Fallback image. */
    fallback?: string;
    /** Alt text. */
    alt: string;
};
/** Renders an image with a placeholder image that can be used when either the src is null,
 * or when an load error occurs on the image.
 */
declare const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement> & ImageProps>;
export default Image;
