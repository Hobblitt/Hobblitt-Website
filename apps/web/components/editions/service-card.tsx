import Image from "next/image";
import { cn } from "@hobblitt/ui/lib/utils";
import { Kicker } from "@/components/ui/kicker";
import { panelStyles } from "@/components/ui/panel";
import type { Edition, EditionAccent } from "@/content/editions";

/** Icon plate fill. Same shape as `panel.tsx`'s tone records. */
const accentStyles: Record<EditionAccent, string> = {
  highlight: "bg-highlight text-highlight-ink",
  blueprint: "bg-blueprint-dim text-blueprint-ink",
  ink: "bg-ink text-paper",
};

/** Flat field shown behind the halftone when a card has no artwork yet. */
const accentFieldStyles: Record<EditionAccent, string> = {
  highlight: "bg-highlight",
  blueprint: "bg-blueprint",
  ink: "bg-newsprint-high",
};

/**
 * One entry in the Editions roster.
 *
 * Every service renders through this component unchanged — the only thing that
 * varies is the data. The plate at the top carries the artwork when
 * `edition.image` is set and an accent-tinted halftone field when it isn't, so
 * a card without final art still reads as a finished panel.
 */
export function ServiceCard({ edition }: { edition: Edition }) {
  const { id, name, kicker, description, whatsIncluded, idealFor, accent, image } =
    edition;
  const Icon = edition.icon;

  return (
    <article
      id={id}
      className={cn(
        panelStyles({ tone: "bright", shadow: "md", interactive: true }),
        // The masthead is sticky — keep anchored cards clear of it.
        "group flex h-full scroll-mt-40 flex-col p-6",
      )}
    >
      <figure
  className={cn(
    "relative mb-4 aspect-[4/3] overflow-hidden border-2 border-ink",
    !image?.bgColor && accentFieldStyles[accent], // fallback agar bgColor na diya ho
  )}
  style={image?.bgColor ? { backgroundColor: image.bgColor } : undefined}
>
  <div
    aria-hidden="true"
    className="absolute inset-0 halftone-coarse opacity-20"
  />

  {image ? (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
      className="object-position transition-transform duration-500 group-hover:scale-105"
    />
  ) : null}
</figure>
      <Kicker
        variant="outline"
        className="mb-3 w-fit normal-case italic text-ink-muted"
      >
        &ldquo;{kicker}&rdquo;
      </Kicker>

      <h2 className="mb-3 border-b-2 border-ink pb-2 font-display text-subtitle text-ink">
        {name}
      </h2>

      <p className="mb-6 font-serif text-copy text-ink-soft">{description}</p>

      {whatsIncluded.length > 0 ? (
        <div className="mb-6">
          <h3 className="mb-2 font-stamp text-stamp uppercase text-ink">
            What&rsquo;s included:
          </h3>
          <ul className="list-disc space-y-1 ps-5 font-serif text-copy text-ink-soft">
            {whatsIncluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t-2 border-ink bg-newsprint-high p-2">
        <span className="font-stamp text-stamp uppercase text-ink">
          Ideal for:
        </span>
        <span className="bg-ink px-2 py-1 font-stamp text-stamp uppercase text-paper">
          {idealFor}
        </span>
      </div>
    </article>
  );
}
