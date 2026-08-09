import React from 'react';
/** Hook used for detecting clicks outside of any HTML element. */
declare const useOutsideClick: (ref: React.RefObject<Element>, callback: () => void) => void;
export default useOutsideClick;
