import { Dispatch, SetStateAction } from 'react';
/** Animated set state hooks used to perform UI updates on an animation frame.*/
declare const useAnimatedSetState: <T>(initialState: T) => [T, Dispatch<SetStateAction<T>>];
export default useAnimatedSetState;
