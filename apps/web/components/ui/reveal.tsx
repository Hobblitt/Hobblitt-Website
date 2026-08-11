"use client";

import * as React from "react";
import { cn } from "@hobblitt/ui/lib/utils";

type RevealProps = React.ComponentProps<"div"> & {
  /** Stagger, in seconds, applied as a transition delay. */
  delay?: number;
};

/**
 * Fades and lifts its children into place the first time they scroll into
 * view. Falls back to visible when IntersectionObserver is unavailable, and
 * `app/layout.tsx` ships a `<noscript>` rule that reveals everything when
 * JavaScript is off.
 */
export function Reveal({ className, delay = 0, style, ...props }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      data-state={visible ? "visible" : "hidden"}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100",
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className,
      )}
      {...props}
    />
  );
}
