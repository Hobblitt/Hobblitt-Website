import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@hobblitt/ui/lib/utils";
import { AddOnCard } from "@/components/market/addon-card";
import { FaqItem } from "@/components/market/faq-item";
import { PricingCard } from "@/components/market/pricing-card";
import { Kicker } from "@/components/ui/kicker";
import { panelStyles } from "@/components/ui/panel";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { stampButtonStyles } from "@/components/ui/stamp-button";
import {
  addOns,
  faqs,
  marketCta,
  marketIntro,
  packages,
} from "@/content/market";

export const metadata: Metadata = {
  title: "Market",
  description: marketIntro.standfirst,
};

export default function MarketPage() {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-16 px-margin py-8 md:py-12">
      <Reveal>
        <header className="flex flex-col items-center border-b-2 border-ink pb-8 text-center">
          <Kicker className="mb-5 tracking-[0.12em] shadow-ink-sm">
            {marketIntro.kicker}
          </Kicker>

          <h1 className="mb-5 font-display text-[2.25rem] uppercase leading-none tracking-tighter text-ink sm:text-[3rem] md:text-display">
            {marketIntro.title}
          </h1>

          <p className="max-w-2xl font-serif text-lede text-ink-muted">
            {marketIntro.standfirst}
          </p>
        </header>
      </Reveal>

      {/* Rate card */}
      <section aria-label="Packages">
        <ul className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <li key={pkg.id}>
              <Reveal delay={index * 0.1} className="h-full">
                <PricingCard pkg={pkg} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* À la carte */}
      <Reveal>
        <section>
          <SectionHeading className="mb-6">À La Carte Services</SectionHeading>

          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {addOns.map((addOn) => (
              <li key={addOn.label}>
                <AddOnCard addOn={addOn} />
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* Letters to the editor */}
      <Reveal>
        <section
          className={cn(
            panelStyles({ tone: "newsprint", shadow: "lg" }),
            "p-6 md:p-10",
          )}
        >
          <SectionHeading className="mb-10">
            Letters to the Editor
          </SectionHeading>

          <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} faq={faq} />
            ))}
          </div>
        </section>
      </Reveal>

      {/* Closing band */}
      <Reveal>
        <section
          className={cn(
            panelStyles({ tone: "highlight", shadow: "lg" }),
            "flex flex-col items-center justify-between gap-8 p-8 text-center md:flex-row md:p-12 md:text-start",
          )}
        >
          <h2 className="max-w-lg font-display text-[1.75rem] uppercase leading-none tracking-tighter md:text-headline">
            {marketCta.headline}
          </h2>

          <Link
            href={marketCta.href}
            className={cn(stampButtonStyles({ tone: "ink" }), "whitespace-nowrap")}
          >
            {marketCta.ctaLabel}
          </Link>
        </section>
      </Reveal>
    </div>
  );
}
