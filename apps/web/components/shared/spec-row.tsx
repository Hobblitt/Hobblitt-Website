import type { ReactNode } from "react";

type SpecRowProps = {
  number?: string;
  title: ReactNode;
  description: ReactNode;
  meta?: ReactNode;
  tone?: "dark" | "light";
  /**
   * Tailwind grid-template-columns for the row, e.g.
   * "lg:grid-cols-[64px_260px_minmax(0,1fr)]". Use `lg:` (not `md:`) — the
   * enclosing PageSection is still single-column at md, and splitting the row
   * into three tracks before then squeezes the description to a few characters.
   * Always end in `minmax(0,1fr)` so long words can't widen the track.
   */
  columns?: string;
};

/**
 * One row of a numbered list: number · title · description(+meta).
 * Used for capability rows, principles, FAQs, and pricing engagements —
 * these were four near-identical hand-rolled grids before.
 */
export function SpecRow({
  number,
  title,
  description,
  meta,
  tone = "dark",
  columns = "lg:grid-cols-[60px_220px_minmax(0,1fr)] xl:grid-cols-[64px_260px_minmax(0,1fr)]",
}: SpecRowProps) {
  const borderColor =
    tone === "dark" ? "border-[#E2E8F0]/10" : "border-[#CBD5E1]";
  const hoverBg =
    tone === "dark" ? "hover:bg-[#F8FAFC]/[0.03]" : "hover:bg-white/50";
  const titleColor = tone === "dark" ? "text-[#F8FAFC]" : "text-[#111827]";
  const descColor = tone === "dark" ? "text-[#94A3B8]" : "text-[#64748B]";

  return (
    <div
      className={`group grid gap-4 border-b ${borderColor} py-8 transition-colors duration-300 ${hoverBg} ${columns} md:gap-5 md:py-9 lg:gap-6`}
    >
      {number !== undefined && (
        <span className="type-caption text-[9px] text-[#22B8F0]">{number}</span>
      )}

      <h3
        className={`type-h2 min-w-0 text-lg transition-transform duration-300 group-hover:translate-x-1 sm:text-xl ${titleColor}`}
      >
        {title}
      </h3>

      <div className="min-w-0">
        <p
          className={`type-body max-w-[650px] text-[15px] leading-7 sm:text-base ${descColor}`}
        >
          {description}
        </p>
        {meta}
      </div>
    </div>
  );
}
