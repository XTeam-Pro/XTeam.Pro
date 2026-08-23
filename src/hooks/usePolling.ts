import { useEffect, useRef } from 'react';

interface UsePollingOptions {
  /** Interval between ticks in milliseconds */
  intervalMs: number;
  /** Whether polling is active. Set to false to pause/stop */
  enabled: boolean;
  /** Called on each tick. Return true to stop polling automatically */
  onTick: () => Promise<boolean>;
  /** Called when onTick throws. Polling stops after an error */
  onError?: (err: unknown) => void;
}

/**
 * Runs `onTick` repeatedly while `enabled` is true.
 * Polling stops when `onTick` returns true or when `enabled` becomes false.
 * The loop is always cleaned up on unmount.
 */
export function usePolling({ intervalMs, enabled, onTick, onError }: UsePollingOptions) {
  const stopRef = useRef(false);
  const onTickRef = useRef(onTick);
  const onErrorRef = useRef(onError);

  // Keep refs current so the loop uses the latest callbacks without restarting
  onTickRef.current = onTick;
  onErrorRef.current = onError;

  useEffect(() => {
    if (!enabled) return;

    stopRef.current = false;

    const run = async () => {
      while (!stopRef.current) {
        await new Promise<void>(resolve => setTimeout(resolve, intervalMs));
        if (stopRef.current) break;
        try {
          const done = await onTickRef.current();
          if (done) {
            stopRef.current = true;
            break;
          }
        } catch (err) {
          onErrorRef.current?.(err);
          stopRef.current = true;
          break;
        }
      }
    };

    run();

    return () => {
      stopRef.current = true;
    };
  }, [enabled, intervalMs]);
}
