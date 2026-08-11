import Link from "next/link";
import { cn } from "@hobblitt/ui/lib/utils";
import { footerNav, siteConfig } from "@/lib/site-config";

const currentYear = 2026;

/** Colophon: the black plate that closes every edition. */
export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "mt-auto w-full border-t-4 border-double border-paper bg-ink text-paper",
        "pb-24 pt-8 md:pb-8",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-4 px-margin md:flex-row md:justify-between">
        <p className="font-display text-subtitle uppercase tracking-tighter">
          {siteConfig.legalName}
        </p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-4">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-stamp text-stamp uppercase opacity-80 transition-colors hover:text-highlight hover:opacity-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-center font-stamp text-stamp uppercase opacity-80 md:text-right">
          © {siteConfig.founded}–{currentYear} {siteConfig.legalName}. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
