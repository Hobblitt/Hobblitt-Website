import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@hobblitt/ui/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import type { Listing } from "@/content/market";

export function StandardIndex({ listings }: { listings: Listing[] }) {
  if (listings.length === 0) return null;

  return (
    // {/* Removed as="section" */}
    <Reveal delay={0.2}>
      <header className="mb-2 flex items-center justify-between">
        <h2 className="font-display text-subtitle uppercase text-ink">Standard Roster</h2>
        <span className="font-stamp text-stamp uppercase text-ink-muted">
          0{listings.length} Listings
        </span>
      </header>

      <ul className="flex flex-col border-t-4 border-ink">
        {listings.map((listing) => (
          <li key={listing.id} className="border-b-2 border-ink">
            <Link
              href={`/contact?interest=${listing.id}`}
              className={cn(
                "group flex flex-col transition-colors duration-200 md:flex-row",
                listing.accent === "blueprint" ? "hover:bg-blueprint" : "hover:bg-highlight",
                "focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink"
              )}
            >
              <div className="border-b-2 border-ink p-6 md:w-1/4 md:border-b-0 md:border-r-2">
                <span className="font-stamp text-stamp uppercase text-ink-muted group-hover:text-ink transition-colors">
                  {listing.category}
                </span>
              </div>

              <div className="flex-1 p-6 md:px-8">
                <h3 className="mb-2 font-display text-title uppercase text-ink">
                  {listing.title}
                </h3>
                <p className="font-serif text-copy text-ink-soft">
                  {listing.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t-2 border-ink p-6 md:w-1/4 md:flex-col md:items-end md:justify-between md:border-t-0 md:border-l-2">
                <span className="font-stamp text-stamp font-bold text-ink">{listing.price}</span>
                <span className="flex items-center gap-2 font-stamp text-stamp uppercase text-ink underline decoration-2 underline-offset-4">
                  Request
                  <ArrowUpRight 
                    className="size-5 text-[#c23a22] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" 
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}