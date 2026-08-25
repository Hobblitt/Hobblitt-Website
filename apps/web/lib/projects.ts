export type ProjectCategory = "BUILD" | "AUTOMATE" | "GROW";

export type Project = {
  slug: string;
  number: string;
  category: ProjectCategory;
  type: string;
  title: string;
  description: string;
  services: string[];
  status: string;
  year: string;
  featured?: boolean;
};

export const featuredProjects: Project[] = [
  {
    slug: "digital-platform",
    number: "01",
    category: "BUILD",
    type: "DIGITAL PRODUCT",
    title: "A digital platform built around the people using it.",
    description:
      "A scalable digital experience designed to turn a complex idea into something simple, useful, and ready to grow.",
    services: ["Strategy", "UX/UI", "Web Development"],
    status: "LIVE",
    year: "2026",
    featured: true,
  },
  {
    slug: "ai-code-review",
    number: "02",
    category: "AUTOMATE",
    type: "AI SYSTEM",
    title: "Turning code review into an intelligent workflow.",
    description:
      "An AI-powered system designed to help engineering teams review code faster and catch problems earlier.",
    services: ["AI", "Automation", "Developer Tools"],
    status: "BUILDING",
    year: "2026",
  },
  {
    slug: "learning-platform",
    number: "03",
    category: "BUILD",
    type: "EDTECH PLATFORM",
    title: "Making interactive learning feel like an experience.",
    description:
      "A learning platform combining interactive stories, structured content, and technology into one digital experience.",
    services: ["Product", "Web", "Backend"],
    status: "BUILDING",
    year: "2026",
  },
  {
    slug: "growth-system",
    number: "04",
    category: "GROW",
    type: "BRAND SYSTEM",
    title: "Turning a growing business into a recognizable brand.",
    description:
      "A connected brand and digital presence designed to make the business easier to understand, discover, and remember.",
    services: ["Branding", "Content", "SEO"],
    status: "CONCEPT",
    year: "2026",
  },
];

export const allProjects = featuredProjects;
