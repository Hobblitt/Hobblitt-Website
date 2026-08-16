import { Reveal } from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/kicker";

export function MarketHeader() {
  return (
    <Reveal className="mb-12 border-b-4 border-double border-ink pb-8 md:mb-16">
      <Kicker variant="plain" className="mb-6 tracking-widest text-ink-muted">
        Hobblitt Media Group // Market Index
      </Kicker>
      <h1 className="max-w-4xl font-display text-[3.5rem] uppercase leading-[0.9] tracking-tighter text-ink md:text-[6rem]">
        The Solutions Index.
      </h1>
      <p className="mt-6 max-w-2xl font-serif text-lede text-ink-soft">
        A curated catalog of our fixed-scope architectures, comprehensive
        audits, and strategic creative assets. Ready for immediate deployment.
      </p>
    </Reveal>
  );
}
