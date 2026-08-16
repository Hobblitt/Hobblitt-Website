import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@hobblitt/ui/lib/utils";
import { Kicker } from "@/components/ui/kicker";
import { panelStyles } from "@/components/ui/panel";
import { Reveal } from "@/components/ui/reveal";
import type { Listing } from "@/content/market";

export function FeaturedListing({ listing }: { listing: Listing }) {
  return (
//     {/* Removed as="section" */}
    <Reveal delay={0.1} className="mb-16 md:mb-24">
      <header className="mb-4 flex items-center justify-between border-b-2 border-ink pb-2">
        <h2 className="font-stamp text-stamp uppercase text-ink">Lead Asset</h2>
        <span className="font-stamp text-stamp uppercase text-ink-muted" aria-hidden="true">
          High Priority
        </span>
      </header>
      
      <article
        className={cn(
          panelStyles({ tone: "ink", shadow: "lg" }),
          "group relative flex flex-col justify-between overflow-hidden p-8 md:flex-row md:p-12"
        )}
      >
        <div className="pointer-events-none absolute inset-0 halftone-coarse opacity-20 mix-blend-overlay" aria-hidden="true" />
        
        <div className="relative z-10 flex max-w-2xl flex-col">
          <Kicker variant="highlight" className="mb-6 w-fit bg-highlight text-highlight-ink">
            {listing.category}
          </Kicker>
          <h3 className="mb-4 font-display text-[2.5rem] uppercase leading-none text-paper md:text-[4rem]">
            {listing.title}
          </h3>
          <p className="mb-8 font-serif text-lede text-paper-dim md:mb-0">
            {listing.description}
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-start justify-end md:items-end">
          <span className="mb-1 font-stamp text-stamp uppercase text-paper-dim">Investment</span>
          <span className="mb-6 font-display text-title text-paper">{listing.price}</span>
          
          <Link
            href={`/contact?interest=${listing.id}`}
            className={cn(
              "inline-flex items-center gap-2 border-2 border-paper bg-transparent px-6 py-3",
              "font-stamp text-stamp uppercase text-paper shadow-[4px_4px_0_0_var(--color-paper)]",
              "transition-all duration-150 ease-out",
              "hover:-translate-y-1 hover:translate-x-1 hover:bg-paper hover:text-ink hover:shadow-none",
              "active:translate-y-0 active:translate-x-0 active:shadow-none",
              "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
            )}
            aria-label={`Inquire about ${listing.title}`}
          >
            Inquire Now
            <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}