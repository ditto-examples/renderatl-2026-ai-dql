export type Params = {
    /**
     * The trigger to start or stop the animation cycle. If `true`, the animation
     * will start until a full cycle is complete and this value is set to `false`.
     */
    animate: boolean;
    /**
     * The duration of the animation cycle in milliseconds. Defaults to 1000ms.
     */
    durationMs?: number;
};
/**
 * A hook to aid in animating components which require a full cycle of animation
 * before stopping.
 *
 * An example use case would be a refresh icon that spins for a full cycle, even if
 * the refresh action completes before the full cycle is complete.
 */
export default function useAnimationCycle({ animate, durationMs, }: Params): boolean;
