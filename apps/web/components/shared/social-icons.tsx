import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7 2 2 0 0 0 5.25 3ZM20.44 13.41c0-3.47-1.84-5.09-4.29-5.09a3.7 3.7 0 0 0-3.32 1.82h-.05V8.5H9.54V20h3.24v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.72 1.85 3.05V20h3.67v-6.59Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    Icon: LinkedinIcon,
  },
  {
    key: "instagram",
    label: "Instagram",
    href: siteConfig.social.instagram,
    Icon: InstagramIcon,
  },
  {
    key: "x",
    label: "X",
    href: siteConfig.social.x,
    Icon: XIcon,
  },
] as const;

type SocialIconsProps = {
  variant?: "compact" | "labeled";
  className?: string;
};

export function SocialIcons({
  variant = "compact",
  className,
}: SocialIconsProps) {
  const links = socialLinks.filter((link) => Boolean(link.href));

  if (links.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}>
      {links.map(({ key, label, href, Icon }) =>
        variant === "labeled" ? (
          <Link
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="type-nav inline-flex items-center gap-3 border border-[#E2E8F0]/15 px-5 py-3.5 text-[9px] text-[#94A3B8] transition-colors duration-300 hover:border-[#22B8F0] hover:text-[#22B8F0]"
          >
            <Icon className="size-4" />
            {label}
          </Link>
        ) : (
          <Link
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex size-9 items-center justify-center border border-[#E2E8F0]/15 text-[#94A3B8] transition-colors duration-300 hover:border-[#22B8F0] hover:text-[#22B8F0]"
          >
            <Icon className="size-4" />
          </Link>
        ),
      )}
    </div>
  );
}
