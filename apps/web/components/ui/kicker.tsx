import type * as React from "react";
import { cn } from "@hobblitt/ui/lib/utils";

type KickerVariant = "highlight" | "outline" | "plain";

const variantStyles: Record<KickerVariant, string> = {
  highlight: "border-2 border-ink bg-highlight text-highlight-ink px-2 py-1",
  outline: "border-2 border-ink bg-paper text-ink px-2 py-1",
  plain: "text-ink-muted",
};

/**
 * Small all-caps mono label — section eyebrows, figure captions, datelines.
 */
export function Kicker({
  className,
  variant = "highlight",
  ...props
}: React.ComponentProps<"span"> & { variant?: KickerVariant }) {
  return (
    <span
      className={cn(
        "inline-block font-stamp text-stamp uppercase",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
