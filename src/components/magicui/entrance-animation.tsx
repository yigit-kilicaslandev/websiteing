import { createContext, useContext, useLayoutEffect, useState, type RefObject } from "react";

export const EntranceAnimationContext = createContext({ play: true, scrollY: 0 });

export function getEntranceTiming(
  duration: number,
  delay: number,
  scrollY: number,
  top: number,
  bottom: number,
  viewportHeight: number,
) {
  if (scrollY <= 0) return { duration, delay };

  if (bottom <= 0) {
    // Finish everything above the restored viewport within 80 ms.
    const progress = Math.max(0, Math.min(1, (top + scrollY) / scrollY));
    return { duration: Math.min(duration, 0.04), delay: progress * 0.04 };
  }

  // Resume the usual blur speed here, without the original page-wide delay.
  const progress = Math.max(0, Math.min(1, top / viewportHeight));
  return { duration, delay: 0.08 + progress * 0.18 };
}

export function useEntranceAnimation(
  ref: RefObject<HTMLElement | null>,
  duration: number,
  delay: number,
) {
  const { play, scrollY } = useContext(EntranceAnimationContext);
  const [position, setPosition] = useState({ top: 0, bottom: 0, viewportHeight: 1 });

  useLayoutEffect(() => {
    if (!play || !ref.current) return;
    const { top, bottom } = ref.current.getBoundingClientRect();
    setPosition({ top, bottom, viewportHeight: window.innerHeight });
  }, [play, scrollY, ref]);

  return {
    playEntrance: play,
    fastForward: scrollY > 0 && position.bottom <= 0,
    timing: getEntranceTiming(duration, delay, scrollY, position.top, position.bottom, position.viewportHeight),
  };
}
