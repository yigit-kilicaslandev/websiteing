import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useMemo, useRef } from "react";
import { useEntranceAnimation } from "./entrance-animation";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}
const BlurFadeText = ({
  text,
  className,
  variant,
  duration = 0.4,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const defaultVariants = {
    hidden: { y: -yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;
  const controls = useEntranceAnimation(ref, duration, delay, combinedVariants, true, animateByCharacter ? characterDelay : 0);
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <div ref={ref} data-entrance="" className="flex">
        {characters.map((char, i) => {
          return (
            <motion.span
              key={i}
              custom={i}
              initial="visible"
              animate={controls}
              variants={combinedVariants}
              className={cn("inline-block", className)}
              style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={ref} data-entrance="" className="flex">
      <motion.span
        initial="visible"
        animate={controls}
        variants={combinedVariants}
        className={cn("inline-block", className)}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default BlurFadeText;
