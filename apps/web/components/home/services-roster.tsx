import Link from "next/link";
import { cn } from "@hobblitt/ui/lib/utils";
import { panelStyles } from "@/components/ui/panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { services, type Service } from "@/content/front-page";

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <li className="pt-4 ps-4">
      <Link
        href={service.href}
        className={cn(
          panelStyles({ tone: "bright", shadow: "md", interactive: true }),
          "group flex h-full flex-col items-center p-4 text-center",
          "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute -start-4 -top-4 z-10 flex size-12 items-center justify-center rounded-full",
            "border-2 border-ink bg-highlight font-display text-subtitle text-highlight-ink",
          )}
        >
          {service.index}
        </span>

        <Icon
          className="mb-4 size-14 transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.5}
          aria-hidden="true"
        />

        <h4 className="mb-2 font-display text-title uppercase">
          {service.title}
        </h4>

        <p className="font-serif text-copy text-ink-muted">{service.summary}</p>
      </Link>
    </li>
  );
}

/** The three-panel services strip, laid out like a comic-book tier. */
export function ServicesRoster({ className }: { className?: string }) {
  return (
    <section className={cn("border-t-2 border-ink pt-8", className)}>
      <SectionHeading className="mb-6">The Services Roster</SectionHeading>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.href} service={service} />
        ))}
      </ul>
    </section>
  );
}
