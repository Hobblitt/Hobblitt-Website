export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const siteConfig = {
  name: "Hobblitt",
  legalName: "Hobblitt Media Group",

  tagline: "Digital partners for businesses building what comes next.",

  description:
    "Hobblitt is a technology and creative partner helping businesses build products, automate operations, solve problems, and grow.",

  url: "https://hobblitt.com",
} as const;

export const primaryNav: NavItem[] = [
  {
    label: "ABOUT",
    href: "/about",
    description: "Who Hobblitt is and how we work.",
  },
  {
    label: "CAPABILITIES",
    href: "/capabilities",
    description: "What Hobblitt can build, automate, and grow.",
  },
  {
    label: "APPROACH",
    href: "/approach",
    description: "How we work with partners.",
  },
  {
    label: "PRICING",
    href: "/pricing",
    description: "How engagements are structured.",
  },
];

export const footerNav: NavItem[] = [
  { label: "ABOUT", href: "/about" },
  { label: "CAPABILITIES", href: "/capabilities" },
  { label: "APPROACH", href: "/approach" },
  { label: "PRICING", href: "/pricing" },
];
