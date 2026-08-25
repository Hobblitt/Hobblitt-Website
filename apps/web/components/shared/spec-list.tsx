import type { ReactNode } from "react";

export function SpecList({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  const borderColor =
    tone === "dark" ? "border-[#E2E8F0]/10" : "border-[#CBD5E1]";
  return <div className={`mt-14 border-t ${borderColor}`}>{children}</div>;
}
