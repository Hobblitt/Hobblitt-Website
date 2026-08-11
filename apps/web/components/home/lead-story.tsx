import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@hobblitt/ui/lib/utils";
import { Kicker } from "@/components/ui/kicker";
import { panelStyles } from "@/components/ui/panel";
import { leadStory } from "@/content/front-page";

/** Splits the body copy so one phrase can be rendered as marker highlight. */
function HighlightedBody({ text, phrase }: { text: string; phrase: string }) {
  const [before, ...rest] = text.split(phrase);

  if (rest.length === 0) return <>{text}</>;

  return (
    <>
      {before}
      <mark className="bg-highlight px-1 font-bold text-highlight-ink">
        {phrase}
      </mark>
      {rest.join(phrase)}
    </>
  );
}

export function LeadStory({ className }: { className?: string }) {
  const { kicker, headline, headlineShort, standfirst, lede, body, bodyHighlight, cta, image } =
    leadStory;

  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <header className="border-b-4 border-ink pb-4">
        <Kicker className="mb-4">{kicker}</Kicker>

        <h1 className="mb-4 font-display text-[2.75rem] uppercase leading-none tracking-[-0.04em] text-ink sm:text-[3.5rem] md:text-display">
          {/* Short headline for narrow columns, full headline from md up. */}
          <span className="md:hidden">{headlineShort}</span>
          <span className="hidden md:inline">{headline}</span>
        </h1>

        <p className="border-s-4 border-ink ps-4 font-display text-subtitle italic text-ink-muted">
          {standfirst}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        <figure
          className={cn(
            panelStyles({ tone: "bright", shadow: "md" }),
            "group aspect-[4/3] overflow-hidden p-2",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1536px) 480px, (min-width: 768px) 33vw, 100vw"
            priority
            className="object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="pointer-events-none absolute inset-0 halftone opacity-20 mix-blend-multiply"
            aria-hidden="true"
          />
          <figcaption className="absolute bottom-4 start-4 border-2 border-ink bg-paper px-2 py-1 font-stamp text-stamp uppercase text-ink">
            {image.caption}
          </figcaption>
        </figure>

        <div className="flex flex-col gap-4">
          <p
            className={cn(
              "font-serif text-lede font-bold text-ink-soft",
              "first-letter:float-start first-letter:me-2 first-letter:mt-[-0.35rem]",
              "first-letter:font-display first-letter:text-[4.5rem] first-letter:leading-[0.8]",
            )}
          >
            {lede}
          </p>

          <p className="font-serif text-copy text-ink-soft">
            <HighlightedBody text={body} phrase={bodyHighlight} />
          </p>

          <Link
            href={cta.href}
            className={cn(
              "group mt-auto inline-flex items-center gap-2 self-start font-stamp text-stamp uppercase",
              "underline decoration-2 underline-offset-4 transition-colors",
              "hover:bg-highlight hover:text-highlight-ink",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
            )}
          >
            {cta.label}
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
