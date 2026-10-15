import { cn } from "@/lib/utils";
import { motion, type Variants } from "motion/react";
import { useMemo } from "react";
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
  const playEntrance = useEntranceAnimation();
  const defaultVariants: Variants = {
    hidden: { y: -yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <div className="flex">
        {characters.map((char, i) => {
          const charVariants: Variants = {
            hidden: { y: -yOffset, opacity: 0, filter: "blur(8px)" },
            visible: { y: 0, opacity: 1, filter: "blur(0px)" },
          };
          return (
            <motion.span
              key={`${playEntrance}-${i}`}
              initial={playEntrance ? "hidden" : false}
              animate="visible"
              variants={charVariants}
              transition={{
                duration: playEntrance ? duration : 0,
                delay: playEntrance ? delay + i * characterDelay : 0,
                ease: "easeOut",
              }}
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
    <div className="flex">
      <motion.span
        key={playEntrance ? "animated" : "immediate"}
        initial={playEntrance ? "hidden" : false}
        animate="visible"
        variants={combinedVariants}
        transition={{
          duration: playEntrance ? duration : 0,
          delay: playEntrance ? delay : 0,
          ease: "easeOut",
        }}
        className={cn("inline-block", className)}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default BlurFadeText;
