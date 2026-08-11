import type { LucideIcon } from "lucide-react";
import { Activity, Newspaper, Store, Users } from "lucide-react";

export type NavItem = {
  /** All-caps label as it appears on the masthead nav. */
  label: string;
  href: string;
  /** Short description used for the mobile drawer and link titles. */
  description?: string;
};

export type TabItem = NavItem & {
  icon: LucideIcon;
};

export const siteConfig = {
  name: "Hobblitt",
  legalName: "Hobblitt Media Group",
  masthead: "The Hobblitt Gazette",
  tagline: "A technology-first creative agency",
  description:
    "Hobblitt is a technology-first creative agency helping businesses, startups and communities build, grow and scale their digital presence — from web and mobile to AI, SEO, CRM, branding and content.",
  url: "https://hobblitt.com",
  founded: 1952,
  social: {
    instagram: "https://instagram.com/hobblitt",
    linkedin: "https://linkedin.com/company/hobblitt",
    x: "https://x.com/hobblitt",
  },
} as const;

/** Masthead navigation (desktop) and drawer navigation (mobile). */
export const primaryNav: NavItem[] = [
  { label: "Front Page", href: "/", description: "Today's edition" },
  {
    label: "Editions",
    href: "/editions",
    description: "Services, case studies and past work",
  },
  {
    label: "Market",
    href: "/market",
    description: "Products, packages and pricing",
  },
  {
    label: "Hub",
    href: "/hub",
    description: "The creator and developer community",
  },
];

/** Fixed bottom tab bar (mobile only). */
export const mobileTabs: TabItem[] = [
  { label: "Editions", href: "/editions", icon: Newspaper },
  { label: "Market", href: "/market", icon: Store },
  { label: "Metrics", href: "/metrics", icon: Activity },
  { label: "Hub", href: "/hub", icon: Users },
];

export const footerNav: NavItem[] = [
  { label: "Classifieds", href: "/classifieds" },
  { label: "Privacy", href: "/privacy" },
  { label: "Corrections", href: "/corrections" },
];

/** Headlines cycled through the breaking-news ticker. */
export const tickerHeadlines: string[] = [
  "Hobblitt Media Group announces new AI-driven SaaS platform",
  "Special edition front page",
  "Tech-creative powerhouse redefines industry standards",
  "Community hub opens applications for emerging talent",
];
