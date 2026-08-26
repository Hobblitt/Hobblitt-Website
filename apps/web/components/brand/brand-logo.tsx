import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  className?: string;
  priority?: boolean;
};

/** Intrinsic size of the artwork — a tightly cropped ~4.97:1 wordmark. */
const LOGO_WIDTH = 1600;
const LOGO_HEIGHT = 322;

export function BrandLogo({
  href = "/",
  className = "",
  priority = false,
}: BrandLogoProps) {
  // The artwork used to be a mostly-empty 5120x5120 square, which this
  // component cropped with an overflow window and a centring transform. The
  // file is cropped to the mark itself now, so it just needs a width.
  const logo = (
    <Image
      src="/brand/hobblitt-logo.png"
      alt=""
      aria-hidden="true"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      sizes="180px"
      className={`h-auto w-[180px] shrink-0 ${className}`}
    />
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
