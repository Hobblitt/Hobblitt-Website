import type { ReactNode } from "react";

type PageSectionProps = {
  id?: string;
  sectionLabel: string;
  tone?: "dark" | "light" | "tint" | "accent";
  children: ReactNode;
  labelColClassName?: string;
  className?: string;
};

const toneStyles: Record<NonNullable<PageSectionProps["tone"]>, string> = {
  dark: "bg-[#111827] text-[#F8FAFC] border-[#E2E8F0]/10",
  tint: "bg-[#1A2438] text-[#F8FAFC] border-[#E2E8F0]/10",
  light: "bg-[#F1F5F9] text-[#111827] border-[#CBD5E1]",
  accent: "bg-[#22B8F0] text-[#111827] border-[#111827]/20",
};

/**
 * Shared section shell: [label column] + [content column], matching the
 * spec's repeated 240px/1fr grid across About / Approach / Capabilities /
 * Pricing. Pass children as the content column only — the label column is
 * rendered automatically from `sectionLabel`.
 */
export function PageSection({
  id,
  sectionLabel,
  tone = "dark",
  children,
  labelColClassName,
  className,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`border-t ${toneStyles[tone]} ${className ?? ""}`}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[240px_1fr] md:gap-12 md:px-10 md:py-28 lg:px-16">
        <div className={labelColClassName}>
          <p className="type-caption text-[9px] text-[#22B8F0]">
            {sectionLabel}
          </p>
        </div>
        <div className="max-w-[1080px]">{children}</div>
      </div>
    </section>
  );
}
