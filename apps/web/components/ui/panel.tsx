import type * as React from "react";
import { cn } from "@hobblitt/ui/lib/utils";

type PanelTone = "paper" | "bright" | "newsprint" | "highlight" | "ink";
type PanelShadow = "none" | "sm" | "md" | "lg";
type PanelBorder = "none" | "thin" | "thick" | "dashed";

export type PanelStyleOptions = {
  tone?: PanelTone;
  shadow?: PanelShadow;
  border?: PanelBorder;
  /** Lifts the panel and drops its shadow on hover, like a pressed plate. */
  interactive?: boolean;
};

const toneStyles: Record<PanelTone, string> = {
  paper: "bg-paper text-ink-soft",
  bright: "bg-paper-bright text-ink-soft",
  newsprint: "bg-newsprint text-ink-soft",
  highlight: "bg-highlight text-highlight-ink",
  ink: "bg-ink text-paper",
};

const shadowStyles: Record<PanelShadow, string> = {
  none: "",
  sm: "shadow-ink-sm",
  md: "shadow-ink",
  lg: "shadow-ink-lg",
};

const borderStyles: Record<PanelBorder, string> = {
  none: "",
  thin: "border-2 border-ink",
  thick: "border-4 border-ink",
  dashed: "border-2 border-dashed border-ink",
};

/**
 * Shared class string for the newsprint "comic panel" surface: a hard ink
 * rule with an offset printing-plate shadow. Exported separately so semantic
 * elements (`article`, `aside`, `form`, …) can adopt the look without being
 * forced through a `div`.
 */
export function panelStyles({
  tone = "bright",
  shadow = "md",
  border = "thin",
  interactive = false,
}: PanelStyleOptions = {}) {
  return cn(
    "relative rounded-none",
    toneStyles[tone],
    borderStyles[border],
    shadowStyles[shadow],
    interactive &&
      "transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-1 hover:translate-x-1 hover:shadow-none focus-within:-translate-y-1 focus-within:translate-x-1 focus-within:shadow-none",
  );
}

export function Panel({
  className,
  tone,
  shadow,
  border,
  interactive,
  ...props
}: React.ComponentProps<"div"> & PanelStyleOptions) {
  return (
    <div
      className={cn(
        panelStyles({ tone, shadow, border, interactive }),
        className,
      )}
      {...props}
    />
  );
}
