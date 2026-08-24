import type { ReactNode } from "react";

type SpecRowProps = {
  number?: string;
  title: string;
  description: ReactNode;
  meta?: ReactNode;
  tone?: "dark" | "light";
  /** Tailwind grid-template-columns for the row, e.g. "md:grid-cols-[64px_260px_1fr]" */
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
  columns = "md:grid-cols-[64px_260px_1fr]",
}: SpecRowProps) {
  const borderColor =
    tone === "dark" ? "border-[#E2E8F0]/10" : "border-[#CBD5E1]";
  const hoverBg =
    tone === "dark" ? "hover:bg-[#F8FAFC]/[0.03]" : "hover:bg-white/50";
  const titleColor = tone === "dark" ? "text-[#F8FAFC]" : "text-[#111827]";
  const descColor = tone === "dark" ? "text-[#94A3B8]" : "text-[#64748B]";

  return (
    <div
      className={`group grid gap-5 border-b ${borderColor} py-8 transition-colors duration-300 ${hoverBg} ${columns} md:gap-6 md:py-9`}
    >
      {number !== undefined && (
        <span className="type-caption text-[9px] text-[#22B8F0]">{number}</span>
      )}

      <h3
        className={`type-h2 text-xl transition-transform duration-300 group-hover:translate-x-1 ${titleColor}`}
      >
        {title}
      </h3>

      <div>
        <p
          className={`type-body max-w-[650px] text-base leading-7 ${descColor}`}
        >
          {description}
        </p>
        {meta}
      </div>
    </div>
  );
}
