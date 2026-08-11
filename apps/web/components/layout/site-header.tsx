import Link from "next/link";
import { cn } from "@hobblitt/ui/lib/utils";
import { PrimaryNav } from "@/components/layout/primary-nav";
import { SearchTrigger } from "@/components/layout/search-trigger";
import { SiteMenu } from "@/components/layout/site-menu";
import { siteConfig } from "@/lib/site-config";

/**
 * The masthead: index button, wordmark and archive search, over a ruled
 * section index flanked by the edition dateline.
 */
export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b-2 border-ink bg-paper shadow-ink",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-screen-2xl px-margin py-3">
        <div className="flex w-full flex-wrap items-center gap-3">
          <SiteMenu />

          <Link
            href="/"
            className={cn(
              "flex-1 text-center font-display uppercase leading-none tracking-tighter text-ink",
              "text-[1.75rem] md:text-display",
              "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink",
            )}
          >
            <span className="border-b-4 border-ink pb-1">
              {siteConfig.masthead}
            </span>
            <span className="sr-only"> — home</span>
          </Link>

          <SearchTrigger />
        </div>

        {/* Section index — mobile navigates via the drawer and tab bar. */}
        <div className="mt-4 hidden grid-cols-[1fr_auto_1fr] items-center gap-2 border-y-2 border-ink py-2 md:grid">
          <span className="font-stamp text-stamp uppercase text-ink-muted">
            Est. {siteConfig.founded}
          </span>

          <nav aria-label="Sections">
            <PrimaryNav />
          </nav>

          <span className="text-right font-stamp text-stamp uppercase text-ink-muted">
            Vol. LXXII — No. 04
          </span>
        </div>
      </div>
    </header>
  );
}
