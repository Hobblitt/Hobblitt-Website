import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@hobblitt/ui/lib/utils";
import { panelStyles } from "@/components/ui/panel";
import { stampButtonStyles } from "@/components/ui/stamp-button";
import { marketCta, type MarketPackage } from "@/content/market";

/**
 * One pricing tier.
 *
 * All three tiers render through this component — `pkg.featured` is the only
 * switch. It raises the card out of the row, thickens the rule, drops a deeper
 * plate shadow, prints the star badge and flips the fills from ink to press
 * yellow. There is no separate "featured" component and no per-tier markup.
 */
export function PricingCard({ pkg }: { pkg: MarketPackage }) {
  const { name, price, period, tagline, features, idealFor, featured, ctaLabel } =
    pkg;

  return (
    <article
      className={cn(
        panelStyles({
          tone: "bright",
          shadow: featured ? "lg" : "md",
          border: featured ? "thick" : "thin",
        }),
        "flex h-full flex-col p-6",
        // The featured tier steps forward out of the row once there is a row
        // to step out of.
        featured ? "z-10 md:-translate-y-4" : "md:mt-4",
      )}
    >
      {featured ? (
        <span
          className={cn(
            "absolute -end-6 -top-6 z-20 flex size-24 rotate-12 items-center justify-center",
            "pow-badge bg-highlight-strong text-highlight-ink",
          )}
        >
          <span className="-rotate-12 text-center font-display text-stamp uppercase leading-tight">
            Most
            <br />
            Popular
          </span>
        </span>
      ) : null}

      <h2
        className={cn(
          "mb-2 w-fit border-b-2 border-ink pb-2 font-display text-subtitle uppercase text-ink",
          featured && "bg-highlight px-2 text-highlight-ink",
        )}
      >
        {name}
      </h2>

      <p className="my-4 font-display text-headline leading-none tracking-tight text-ink">
        {price}
        <span className="font-serif text-copy font-normal text-ink-muted">
          {period}
        </span>
      </p>

      <p className="mb-6 min-h-12 font-serif text-copy italic text-ink-muted">
        &ldquo;{tagline}&rdquo;
      </p>

      <ul className="mb-8 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 border-b border-ink/20 pb-2 font-serif text-copy text-ink-soft"
          >
            <Check
              className="mt-0.5 size-4 shrink-0"
              strokeWidth={3}
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      <p
        className={cn(
          "mb-6 border-s-4 border-ink p-3 font-stamp text-stamp uppercase",
          featured
            ? "bg-highlight text-highlight-ink"
            : "bg-newsprint-high text-ink",
        )}
      >
        Ideal for: {idealFor}
      </p>

      <Link
        href={marketCta.href}
        className={cn(
          stampButtonStyles({ tone: featured ? "highlight" : "ink" }),
          "mt-auto w-full",
        )}
      >
        {ctaLabel}
        <span className="sr-only"> — {name} package</span>
      </Link>
    </article>
  );
}
