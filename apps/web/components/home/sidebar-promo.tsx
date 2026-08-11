import Image from "next/image";
import Link from "next/link";
import { cn } from "@hobblitt/ui/lib/utils";
import { promo } from "@/content/front-page";

/** House advertisement slot, framed the way print classifieds are. */
export function SidebarPromo({ className }: { className?: string }) {
  return (
    <aside
      aria-label={promo.eyebrow}
      className={cn("border-2 border-dashed border-ink p-4 text-center", className)}
    >
      <p className="mb-2 font-stamp text-stamp uppercase tracking-widest text-ink-muted">
        {promo.eyebrow}
      </p>

      <Link
        href={promo.href}
        className={cn(
          "group relative flex aspect-square items-center justify-center overflow-hidden border-2 border-ink p-4",
          "bg-paper-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink",
        )}
      >
        <Image
          src={promo.image.src}
          alt={promo.image.alt}
          fill
          sizes="(min-width: 1536px) 420px, (min-width: 768px) 30vw, 90vw"
          className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className="absolute inset-0 bg-highlight opacity-50 mix-blend-multiply"
          aria-hidden="true"
        />
        <span className="relative z-10 font-display text-title uppercase text-paper-bright drop-shadow-[2px_2px_0_var(--color-ink)]">
          {promo.headline}
        </span>
      </Link>
    </aside>
  );
}
