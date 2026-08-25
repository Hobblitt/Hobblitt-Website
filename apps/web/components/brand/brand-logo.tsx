import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  href = "/",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const logo = (
    <span
      className={`
        relative
        inline-flex
        h-10
        w-[180px]
        shrink-0
        overflow-hidden
        ${className}
      `}
      aria-hidden="true"
    >
      <Image
        src="/brand/hobblitt-logo.png"
        alt=""
        width={230}
        height={230}
        priority={priority}
        className="
          absolute
          left-1/2
          top-1/2
          max-w-none
          -translate-x-1/2
          -translate-y-1/2
        "
      />
    </span>
  );

  if (!href) {
    return logo;
  }

  return (
    <Link
      href={href}
      aria-label="Hobblitt home"
      className="inline-flex items-center"
    >
      {logo}
    </Link>
  );
}
