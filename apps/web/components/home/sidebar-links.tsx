import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@hobblitt/ui/lib/utils";
import { sidebarLinks } from "@/content/front-page";

/** Back-of-the-paper departments. */
export function SidebarLinks({ className }: { className?: string }) {
  return (
    <nav
      aria-label="Departments"
      className={cn("border-t-4 border-double border-ink pt-4", className)}
    >
      <ul className="flex flex-col gap-2">
        {sidebarLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "group flex items-center justify-between gap-2 border-b border-ink pb-1",
                "font-stamp text-stamp uppercase transition-colors",
                "hover:bg-highlight hover:text-highlight-ink",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
              )}
            >
              <span className="group-hover:underline group-hover:decoration-2">
                {link.label}
              </span>
              <ArrowUpRight
                className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
