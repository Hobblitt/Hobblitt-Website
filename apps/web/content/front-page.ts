import type { LucideIcon } from "lucide-react";
import { Bot, Globe, Smartphone } from "lucide-react";

/**
 * Front-page copy and imagery.
 *
 * NOTE: `leadStory.image.src` and `promo.image.src` currently point at the
 * remote artwork from the original design comp. Both hosts are allow-listed in
 * `next.config.ts`. Swap them for files under `public/` when final art lands —
 * nothing else needs to change.
 */

export type Service = {
  index: string;
  title: string;
  summary: string;
  href: string;
  icon: LucideIcon;
};

export const leadStory = {
  kicker: "Special Edition",
  headline: "Hobblitt Emerges as a Tech-Creative Powerhouse",
  headlineShort: "Tech-Creative Powerhouse",
  standfirst:
    "Merging mid-century design discipline with next-gen AI capabilities.",
  lede: "In a stunning move that sent shockwaves through the design district, Hobblitt has unveiled its new integrated approach to digital product development.",
  body: "Industry insiders report that the firm's unique blend of SaaS infrastructure and bespoke creative direction is yielding unprecedented results. The integration of cutting-edge AI tools into their traditional, rigorous design process has created a workflow that critics are calling \"both professional and irreverent.\"",
  /** Phrase inside `body` rendered with a highlighter marker. */
  bodyHighlight: "SaaS infrastructure",
  cta: { label: "Read Full Story", href: "/editions/tech-creative-powerhouse" },
  image: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAss5rZjd2IZeh0ySz6HeqXBa8LNUwi8DW09961a4kNAOGvH-0QgZvj6upj9vYQXnLRPPkxqcXknrNTgI9lhdlzeiEYShzTB6wQ3W7vzeFo3Rkqxf-MiES7s4t4aztJi1_vnXgqY9InukFUcxV6bDBrbHEAomTmDrkh2JY_qw5bObwdzsfY5hhNKE7v4DnChaOWsgrXUIZNgMyG_Do_Vc3kSD18LOOaz7arf_APdXeyD0Wq7276VpMSmQ",
    alt: "Retro-futuristic printing press simultaneously producing newspapers and holographic interfaces, rendered in high-contrast comic-book line art.",
    caption: "Fig 1. The Engine",
  },
} as const;

export const services: Service[] = [
  {
    index: "1",
    title: "Web Arch.",
    summary:
      "Robust, scalable platforms built on solid columnar foundations.",
    href: "/editions/web-architecture",
    icon: Globe,
  },
  {
    index: "2",
    title: "Mobile Ops",
    summary:
      "Tactile, highly responsive applications for the modern commuter.",
    href: "/editions/mobile-operations",
    icon: Smartphone,
  },
  {
    index: "3",
    title: "AI Systems",
    summary:
      "Integrating generative logic to automate the mundane and elevate the creative.",
    href: "/editions/ai-systems",
    icon: Bot,
  },
];

export const newsletter = {
  callout: "Don't miss an issue!",
  title: "Weekly Service Dispatch",
  blurb:
    "Insights, updates, and the occasional rant delivered to your inbox.",
  placeholder: "Your telegram (email) here...",
  submitLabel: "Subscribe Now",
} as const;

export const promo = {
  eyebrow: "Advertisement",
  headline: "Secure Your Server Space",
  href: "/market/hosting",
  image: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_t76c7dx3WV8Bopux_niKcMJQSXMTLIwKG7k3NN-ndK1E2T9pvpIEK7Ls_WP9Hjm7jPl_wkZUkjULCOamae_cs8YFtKPtudcYbAyS2LqVbCZKkcZ1Y7CIGxnF0h7q_rY3S7Vf9G5BrcIRr1DoakksmySUDKv_oOaCuwq-h3SSQS_ACaTXH8QKwSxYwpJmQOtBlop7c7il8aKZLpitRNRoU5hRCgZMkGFIZ14Te4BXaBeT9Xb_CBsIKA",
    alt: "Vintage advertisement poster of abstract geometric cloud-computing servers with heavy outlines and a halftone screen.",
  },
} as const;

export const sidebarLinks = [
  { label: "Classifieds", href: "/classifieds" },
  { label: "Obituaries (Deprecated Tech)", href: "/obituaries" },
  { label: "Weather (Market Trends)", href: "/metrics" },
] as const;
