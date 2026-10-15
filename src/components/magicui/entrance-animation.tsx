import { createContext, useContext } from "react";

export const EntranceAnimationContext = createContext(true);

export function useEntranceAnimation() {
  return useContext(EntranceAnimationContext);
}
