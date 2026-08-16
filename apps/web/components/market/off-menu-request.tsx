import Link from "next/link";
import { ArrowUpRight, CornerDownRight } from "lucide-react";
import { cn } from "@hobblitt/ui/lib/utils";
import { panelStyles } from "@/components/ui/panel";
import { Reveal } from "@/components/ui/reveal";

export function OffMenuRequest() {
  return (
    // {/* Removed as="section" */}
    <Reveal delay={0.3} className="mt-16 flex justify-end md:mt-24">
      <aside 
        className={cn(
          panelStyles({ tone: "newsprint", shadow: "md", interactive: true }),
          "group w-full p-6 md:w-1/2 md:p-8"
        )}
      >
        <CornerDownRight className="mb-4 size-6 text-ink opacity-50" strokeWidth={2} aria-hidden="true" />
        <h2 className="mb-2 font-display text-subtitle uppercase text-ink">Off-Menu Requests</h2>
        <p className="mb-8 font-serif text-copy text-ink-soft">
          Don't see your specific operational bottleneck listed above? Draft a custom brief and transmit it directly to our engineering desk.
        </p>
        <Link
          href="/contact"
          className={cn(
            "inline-flex items-center gap-2 border-b-2 border-ink pb-1",
            "font-stamp text-stamp uppercase font-bold text-ink",
            "transition-all duration-200 hover:bg-ink hover:text-paper hover:px-3 hover:pb-2",
            "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          )}
        >
          Draft Custom Brief
          <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
        </Link>
      </aside>
    </Reveal>
  );
}