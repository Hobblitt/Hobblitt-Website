import { cn } from "@hobblitt/ui/lib/utils";
import { panelStyles } from "@/components/ui/panel";
import type { AddOn } from "@/content/market";

/** One à la carte line item — a clipped price tag off the rate card. */
export function AddOnCard({ addOn }: { addOn: AddOn }) {
  const { label, price, unit } = addOn;

  return (
    <div
      className={cn(
        panelStyles({ tone: "bright", shadow: "md", interactive: true }),
        "flex h-full flex-col justify-between gap-2 p-4",
      )}
    >
      <span className="font-stamp text-stamp uppercase text-ink-muted">
        {label}
      </span>

      <span className="font-display text-subtitle text-ink">
        {price}
        <span className="font-serif text-copy font-normal text-ink-muted">
          {unit}
        </span>
      </span>
    </div>
  );
}
