import type * as React from "react";
import { cn } from "@hobblitt/ui/lib/utils";

/**
 * Square ink-ruled control used in the masthead. Presses into its own shadow
 * on click, the way a rubber stamp meets paper.
 */
export function IconButton({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center border-2 border-ink bg-paper text-ink shadow-ink",
        "transition-[transform,box-shadow,background-color] duration-150 ease-out",
        "hover:bg-highlight hover:text-highlight-ink",
        "active:translate-x-1 active:translate-y-1 active:shadow-none",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        className,
      )}
      {...props}
    />
  );
}
