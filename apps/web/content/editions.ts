import type { LucideIcon } from "lucide-react";
import {
  Brush,
  Camera,
  Cpu,
  DraftingCompass,
  Package,
  Share2,
  Smartphone,
  Telescope,
  Workflow,
} from "lucide-react";

/**
 * The Editions roster — one entry per service.
 *
 * Every entry renders through the same `ServiceCard`, so the shape here is
 * uniform: no card gets extra fields or bespoke decoration. `id` doubles as the
 * anchor target, which is why front-page service links point at
 * `/editions#{id}` rather than a per-service route.
 *
 * NOTE: `image` is optional — a card without one falls back to an accent
 * halftone plate. Artwork lives in `public/editions/`, named after the `id`.
 * Each plate carries its own frame and title, so cards letterbox rather than
 * crop; any aspect ratio is safe to drop in.
 */

/** Colour of the icon plate. Rotates so a long grid never runs all-yellow. */
export type EditionAccent = "highlight" | "blueprint" | "ink";

export type Edition = {
  /** Anchor id. Kept stable — external links depend on these. */
  id: string;
  name: string;
  /** Pull-quote strapline, printed above the headline. */
  kicker: string;
  description: string;
  /** Bullet list under "What's included". May be empty. */
  whatsIncluded: string[];
  idealFor: string;
  icon: LucideIcon;
  accent: EditionAccent;
  image?: { src: string; alt: string; bgColor?: string };
};

export const editionsIntro = {
  kicker: "Special Edition Service Supplement",
  title: "The Full Roster",
  standfirst:
    "End-to-end digital solutions designed, engineered, and deployed with broadsheet discipline and comic-book flair.",
} as const;

export const editions: Edition[] = [
  {
    id: "web-architecture",
    name: "Web Architecture",
    kicker: "Robust, scalable platforms built on solid columnar foundations.",
    description:
      "We engineer digital spaces that withstand the test of traffic and time, constructing robust web architectures tailored for performance and scale.",
    whatsIncluded: [
      "Custom website & web app design/development",
      "Frontend (React/Next.js) + backend (Node/Express) build",
      "Database design & integration",
      "Admin panel / CMS",
      "Hosting setup",
    ],
    idealFor: "Startups needing a real product",
    icon: DraftingCompass,
    accent: "highlight",
    image: {
      src: "/editions/web-architecture.png",
      alt: "Crews raising a vast steel-lattice tower over a city skyline, drawn as a two-colour comic plate.",
      bgColor: "#e8dcc8"
    },
  },
  {
    id: "mobile-ops",
    name: "Mobile Ops",
    kicker: "Pocket-sized powerhouses for on-the-go engagement.",
    description:
      "Native and cross-platform applications designed for the tactile realities of modern mobile usage, ensuring your brand is always within reach.",
    whatsIncluded: [
      "iOS & Android app design",
      "React Native / Flutter builds",
      "Push notifications",
      "Mobile-first web builds",
      "App store support",
    ],
    idealFor: "Businesses needing a companion app",
    icon: Smartphone,
    accent: "blueprint",
    image: {
      src: "/editions/mobile-ops.png",
      alt: "A 1920s telegraph key tapping out morse on a workbench, printed as a yellow-and-black comic plate captioned “Signaling”.",
    },
  },
  {
    id: "ai-systems",
    name: "AI Systems",
    kicker: "The ghost in the machine, working overtime.",
    description:
      "We integrate large language models and automation into your business processes to streamline operations and enhance decision-making.",
    whatsIncluded: [
      "Custom AI features",
      "Workflow automation",
      "Tool integration",
      "LLM-powered internal tools",
      "Predictive analytics",
    ],
    idealFor: "Businesses repeating manual tasks",
    icon: Cpu,
    accent: "ink",
    image: {
      src: "/editions/ai-systems.png",
      alt: "A luminous ghost swirling inside a valve-and-gear neural processor, headlined “The Ghost in the Machine”.",
    },
  },
  {
    id: "branding",
    name: "Branding",
    kicker: "Making your mark in bold ink.",
    description:
      "Crafting visual identities and messaging strategies that stand out on any front page, leaving a lasting impression.",
    whatsIncluded: [
      "Logo & identity design",
      "Brand guidelines",
      "Typography & color palettes",
      "Voice & tone development",
    ],
    idealFor: "New ventures & rebrands",
    icon: Brush,
    accent: "highlight",
    image: {
      src: "/editions/branding.png",
      alt: "Engraved front page of The Hobblitt Gazette showing pressmen running a Hoe & Co. flatbed press.",
    },
  },
  {
    id: "seo",
    name: "Search & Signal (SEO)",
    kicker: "Rising to the top of the fold.",
    description:
      "Data-driven search engine optimization and visibility strategies to ensure your audience finds you first.",
    whatsIncluded: [
      "Technical SEO audits",
      "Keyword strategy",
      "Content optimization",
      "Backlink profiling",
    ],
    idealFor: "Businesses wanting organic traffic",
    icon: Telescope,
    accent: "blueprint",
    image: {
      src: "/editions/seo.png",
      alt: "Franked 1948 postage stamp reading “Hobblitt Postal — Search & Signal”, a magnifying glass at its centre.",
    },
  },
  {
    id: "crm-automation",
    name: "CRM & Sales Automation",
    kicker: "Streamlining your distribution lines.",
    description:
      "Implementing intelligent customer relationship management systems to automate follow-ups and close deals.",
    whatsIncluded: [
      "HubSpot/Salesforce setup",
      "Email automation",
      "Pipeline management",
      "Lead scoring",
    ],
    idealFor: "Growing sales teams",
    icon: Workflow,
    accent: "ink",
    image: {
      src: "/editions/crm-automation.png",
      alt: "Factory schematic titled “CRM Pipeline”, routing leads through valves marked prospecting, qualification and closing into a tank of revenue.",
    },
  },
  {
    id: "social-media-management",
    name: "Social Media Management",
    kicker: "Spreading the word on every corner.",
    description:
      "Curating, designing, and distributing engaging content across all major social platforms to build community.",
    whatsIncluded: [
      "Content calendar creation",
      "Asset design",
      "Community management",
      "Analytics reporting",
    ],
    idealFor: "Brands building loyal followings",
    icon: Share2,
    accent: "highlight",
    image: {
      src: "/editions/social-media-management.png",
      alt: "Newsboy on a busy street corner shouting “Extra! Extra!” through a megaphone, an armful of papers under one arm.",
    },
  },
  {
    id: "event-coverage",
    name: "Event Coverage",
    kicker: "Capturing the headline moments.",
    description:
      "Professional on-the-ground media production, photography, and live reporting for your most important events.",
    whatsIncluded: [
      "Live photography",
      "Highlight reels",
      "Social media takeovers",
      "Post-event recaps",
    ],
    idealFor: "Corporate events & activations",
    icon: Camera,
    accent: "blueprint",
    image: {
      src: "/editions/event-coverage.png",
      alt: "Press photographer firing a flashbulb in the middle of a chaotic street scene, POW and KRAKA-DOOM lettering around him.",
    },
  },
  {
    id: "kitchen-sink",
    name: "The Kitchen Sink Service",
    kicker: "Want more? Just ask.",
    description:
      "Wait, there's more? If it involves ink, code, or sheer audacity and isn't on this list, just ask. We probably do that too.",
    whatsIncluded: [],
    idealFor: "The person who wants everything",
    icon: Package,
    accent: "ink",
    image: {
      src: "/editions/kitchen-sink.png",
      alt: "Shopkeeper staggering down a cobbled street under a teetering pile of everything, captioned “Want more? Just ask.”",
    },
  },
];
