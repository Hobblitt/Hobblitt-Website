import { Megaphone } from "lucide-react";
import { cn } from "@hobblitt/ui/lib/utils";
import { tickerHeadlines } from "@/lib/site-config";

function TickerRun({
  headlines,
  ...props
}: React.ComponentProps<"div"> & { headlines: string[] }) {
  return (
    <div className="flex shrink-0 items-center pe-8" {...props}>
      {headlines.map((headline, index) => (
        <span key={headline} className="flex items-center">
          {index === 0 ? <span className="me-2 font-black">Breaking:</span> : null}
          {headline}
          <span aria-hidden="true" className="mx-3 opacity-60">
            {"///"}
          </span>
        </span>
      ))}
    </div>
  );
}

/**
 * Breaking-news ticker. The headline run is rendered twice and translated by
 * exactly half the track width, so the loop never shows a gap. Pauses on
 * hover and is frozen entirely under `prefers-reduced-motion`.
 */
export function NewsTicker({
  className,
  headlines = [...tickerHeadlines],
}: {
  className?: string;
  headlines?: string[];
}) {
  return (
    <div
      className={cn(
        "border-b-2 border-ink bg-highlight text-highlight-ink",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center gap-3 px-margin py-2">
        <Megaphone className="size-4 shrink-0" aria-hidden="true" />
        <span className="sr-only">Breaking news</span>
        <div className="group relative flex-1 overflow-hidden">
          <div
            className={cn(
              "flex w-max animate-ticker whitespace-nowrap will-change-transform",
              "font-stamp text-stamp uppercase",
              "group-hover:[animation-play-state:paused]",
            )}
          >
            <TickerRun headlines={headlines} />
            <TickerRun headlines={headlines} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
