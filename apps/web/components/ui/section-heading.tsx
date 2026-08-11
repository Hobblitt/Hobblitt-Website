import type * as React from "react";
import { cn } from "@hobblitt/ui/lib/utils";

/**
 * Ruled section banner — a centred title boxed by horizontal ink rules,
 * the way a newspaper announces a new department.
 */
export function SectionHeading({
  className,
  children,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "border-y-2 border-ink bg-newsprint py-2 text-center font-display text-subtitle uppercase",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
