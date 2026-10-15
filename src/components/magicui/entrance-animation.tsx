import { useAnimationControls, type TargetAndTransition } from "motion/react";
import { createContext, useContext, useLayoutEffect, useRef, type RefObject } from "react";

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
  variants: { hidden: TargetAndTransition; visible: TargetAndTransition },
  enabled = true,
  characterDelay = 0,
) {
  const { play, scrollY } = useContext(EntranceAnimationContext);
  const controls = useAnimationControls();
  const variantsRef = useRef(variants);
  variantsRef.current = variants;

  useLayoutEffect(() => {
    if (!ref.current) return;
    if (!play) {
      controls.set(variantsRef.current.visible);
      return;
    }
    if (!enabled) {
      controls.set(variantsRef.current.hidden);
      return;
    }

    // Measure the existing element before starting; never remount its content.
    const { top, bottom } = ref.current.getBoundingClientRect();
    const timing = getEntranceTiming(duration, delay, scrollY, top, bottom, window.innerHeight);
    const fastForward = scrollY > 0 && bottom <= 0;
    controls.set(variantsRef.current.hidden);
    void controls.start((index = 0) => ({
      ...variantsRef.current.visible,
      transition: {
        ...timing,
        delay: timing.delay + (fastForward ? 0 : index * characterDelay),
        ease: "easeOut",
      },
    }));
    return () => controls.stop();
  }, [play, scrollY, ref, controls, duration, delay, enabled, characterDelay]);

  return controls;
}
