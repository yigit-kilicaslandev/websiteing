import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import { useEntranceAnimation } from "./entrance-animation";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}
const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { playEntrance, timing } = useEntranceAnimation(ref, duration, 0.04 + delay);
  const inViewResult = useInView(ref, {
    once: true,
    ...(inViewMargin ? { margin: inViewMargin as any } : {})
  });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { y: -yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <motion.div
      key={playEntrance ? "animated" : "immediate"}
      ref={ref}
      initial={playEntrance ? "hidden" : false}
      animate={!playEntrance || isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: playEntrance ? timing.delay : 0,
        duration: playEntrance ? timing.duration : 0,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
