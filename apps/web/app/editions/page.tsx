import type { Metadata } from "next";
import { ServiceCard } from "@/components/editions/service-card";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { editions, editionsIntro } from "@/content/editions";

export const metadata: Metadata = {
  title: "Editions",
  description: editionsIntro.standfirst,
};

export default function EditionsPage() {
  return (
    <div className="mx-auto flex w-full max-w-screen-2xl flex-col px-margin py-8 md:py-12">
      <Reveal>
        <header className="mb-12 flex flex-col items-center border-b-2 border-ink pb-8 text-center">
          <Kicker className="mb-5 tracking-[0.12em] shadow-ink-sm">
            {editionsIntro.kicker}
          </Kicker>

          <h1 className="mb-5 font-display text-[2.25rem] uppercase leading-none tracking-tighter text-ink sm:text-[3rem] md:text-display">
            {editionsIntro.title}
          </h1>

          <p className="max-w-2xl font-serif text-lede text-ink-muted">
            {editionsIntro.standfirst}
          </p>
        </header>
      </Reveal>

      <ul className="grid grid-cols-1 gap-gutter md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {editions.map((edition, index) => (
          <li key={edition.id}>
            {/* Stagger across the row so a tier lands left-to-right. */}
            <Reveal delay={(index % 3) * 0.1} className="h-full">
              <ServiceCard edition={edition} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
