import type * as React from "react";
import { cn } from "@hobblitt/ui/lib/utils";

type StampTone = "ink" | "highlight" | "paper";

export type StampButtonStyleOptions = {
  tone?: StampTone;
};

const toneStyles: Record<StampTone, string> = {
  ink: "bg-ink text-paper hover:bg-ink-soft",
  highlight: "bg-highlight text-highlight-ink hover:bg-highlight-strong",
  paper: "bg-paper text-ink hover:bg-highlight hover:text-highlight-ink",
};

/**
 * Shared class string for the full-width text control: the same press-plate
 * behaviour as `IconButton`, sized for a label. Exported separately — like
 * `panelStyles` — so a `Link` can wear it without being forced into a
 * `button`.
 */
export function stampButtonStyles({
  tone = "ink",
}: StampButtonStyleOptions = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 border-2 border-ink px-6 py-3 shadow-ink",
    "text-center font-display text-subtitle uppercase leading-none tracking-tight",
    "transition-[transform,box-shadow,background-color] duration-150 ease-out",
    "hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
    "active:translate-x-1 active:translate-y-1 active:shadow-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
    toneStyles[tone],
  );
}

/** Text sibling of `IconButton` — a rubber stamp meeting paper. */
export function StampButton({
  className,
  tone,
  ...props
}: React.ComponentProps<"button"> & StampButtonStyleOptions) {
  return (
    <button
      type="button"
      className={cn(stampButtonStyles({ tone }), className)}
      {...props}
    />
  );
}
