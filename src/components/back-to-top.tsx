import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 300);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      })}
      className="fixed bottom-24 right-4 z-50 flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-md hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <ArrowUp aria-hidden="true" className="size-4" />
      Back to top
    </button>
  );
}
