export type Listing = {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  featured?: boolean;
  accent?: "highlight" | "blueprint" | "ink";
};

export const marketListings: Listing[] = [
  {
    id: "saas-mvp",
    category: "Engineering (01)",
    title: "The SaaS MVP Build",
    description:
      "Turn your wireframes into a production-ready React/Node MVP in 6 weeks. Fixed scope, fixed price, zero technical debt. The ultimate launchpad for pre-seed startups.",
    price: "Custom Quote",
    featured: true,
    accent: "highlight",
  },
  {
    id: "seo-audit",
    category: "Growth (01)",
    title: "Technical Search Audit",
    description:
      "A comprehensive, manual deep-dive into your site's architecture, page speed, and algorithmic ranking signals. Stop guessing, start scaling.",
    price: "From $2,500",
    accent: "blueprint",
  },
  {
    id: "brand-bible",
    category: "Creative (01)",
    title: "The Brand System",
    description:
      "A complete visual identity and component library. We build logos, typography scales, and design systems that ensure your SaaS doesn't look like a generic template.",
    price: "Flat Rate",
    accent: "highlight",
  },
  {
    id: "fractional-director",
    category: "Strategy (01)",
    title: "Fractional Director Workshop",
    description:
      "Rent our technical and creative brains for a day. An intensive 4-hour workshop with your founding team to map out digital infrastructure and go-to-market strategy.",
    price: "$1k / Session",
    accent: "blueprint",
  },
  {
    id: "automation-workflow",
    category: "Engineering (02)",
    title: "CRM & Pipeline Automation",
    description:
      "We untangle messy lead flows. Certified experts ready to architect and deploy HubSpot or Salesforce automation workflows that actually close deals.",
    price: "From $150/hr",
    accent: "highlight",
  },
];
