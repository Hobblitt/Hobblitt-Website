/**
 * Market (pricing) copy.
 *
 * PRICES ARE PLACEHOLDERS. Every figure lives here as a plain string so it can
 * be edited without touching a component — `price` carries the currency, and
 * `period` / `unit` carry the small type that follows it. Nothing in the JSX
 * hardcodes an amount.
 *
 * Mirrors the shape of `content/editions.ts`: typed arrays rendered through a
 * single card component apiece, with a matching `*Intro` header block.
 */

export type MarketPackage = {
  id: string;
  name: string;
  /** Headline figure, currency included. */
  price: string;
  /** Small type after the figure, e.g. "/mo". */
  period: string;
  /** Pull-quote strapline under the price. */
  tagline: string;
  features: string[];
  idealFor: string;
  /** Raises the card, thickens the rule and prints the "Most Popular" star. */
  featured: boolean;
  ctaLabel: string;
};

export type AddOn = {
  label: string;
  price: string;
  /** Small type after the figure, e.g. "/ea". */
  unit: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const marketIntro = {
  kicker: "Special Edition Rate Card",
  title: "The Market",
  standfirst:
    "Straightforward packages for businesses ready to grow their social presence — no jargon, no hidden line items.",
} as const;

export const packages: MarketPackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹9,999",
    period: "/mo",
    tagline: "Get consistent, for the first time.",
    features: [
      "2 Reels per week",
      "1 Static Post per week",
      "Basic Monthly Reporting",
      "Email Support",
    ],
    idealFor: "Businesses posting inconsistently",
    featured: false,
    ctaLabel: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹19,999",
    period: "/mo",
    tagline: "Built to actually move the needle.",
    features: [
      "4 Reels per week",
      "3 Static Posts per week",
      "Community Management (1hr/day)",
      "Detailed Analytics Dashboard",
      "Monthly Strategy Call",
      "Priority WhatsApp Support",
    ],
    idealFor: "Businesses ready to grow reach",
    featured: true,
    ctaLabel: "Get Started",
  },
  {
    id: "full-management",
    name: "Full Management",
    price: "₹34,999",
    period: "/mo",
    tagline: "We run it, you just watch it grow.",
    features: [
      "Daily Posting (Reels & Static)",
      "Proactive Community Management",
      "Competitor Analysis",
      "Custom Campaign Creation",
      "Bi-Weekly Strategy Sync",
      "Dedicated Account Manager",
    ],
    idealFor: "Businesses that want social handled entirely",
    featured: false,
    ctaLabel: "Get Started",
  },
];

export const addOns: AddOn[] = [
  { label: "Reel / Video Edit", price: "₹1,500", unit: "/ea" },
  { label: "Static Design", price: "₹800", unit: "/ea" },
  { label: "Audit & Strategy", price: "₹5,000", unit: "/one-off" },
  { label: "Profile Setup", price: "₹2,500", unit: "/platform" },
];

export const faqs: Faq[] = [
  {
    question: "Do you require long-term contracts?",
    answer:
      "Negative. We operate on a month-to-month basis. We believe our results should keep you here, not ink on paper. You can cancel with 30 days notice.",
  },
  {
    question: "Who provides the raw video footage?",
    answer:
      "For these remote packages, you provide the raw clips (we guide you on what to shoot). If you need on-location shooting, that falls under our bespoke studio services. Inquire within.",
  },
  {
    question: "How long until I see viral growth?",
    answer:
      "We are publishers, not magicians. Consistent growth usually manifests by month three. Viral spikes happen, but steady, engaged community building is our primary directive.",
  },
  {
    question: "Can I switch packages later?",
    answer:
      "Affirmative. You can upgrade or downgrade your subscription tier at the end of any billing cycle to match your current operational needs.",
  },
];

/**
 * Closing band. `href` is the single place the enquiry destination is named —
 * every pricing CTA on the page points here too.
 */
export const marketCta = {
  headline: "Not sure which package fits?",
  ctaLabel: "Get a Free Quote",
  href: "/contact",
} as const;
