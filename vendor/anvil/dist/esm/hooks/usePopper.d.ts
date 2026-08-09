import { Options } from '@popperjs/core';
import { RefCallback } from 'react';
/**
 * @see https://github.com/tailwindlabs/headlessui/blob/main/packages/playground-react/utils/hooks/use-popper.ts
 */
export default function usePopper(options?: Partial<Options>): [RefCallback<Element | null>, RefCallback<HTMLElement | null>];
