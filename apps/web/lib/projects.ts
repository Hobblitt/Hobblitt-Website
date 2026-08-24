export type ProjectCategory = "BUILD" | "AUTOMATE" | "GROW";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  type: string;
  description: string;
  image: string;
  featured?: boolean;
  capabilities: string[];
};

export const projects: Project[] = [
  {
    slug: "digital-product",
    title: "Digital Product",
    category: "BUILD",
    type: "DIGITAL PRODUCT",
    description:
      "A digital product designed to turn a complex business idea into a clear, useful experience.",
    image: "/projects/digital-product.jpg",
    featured: true,
    capabilities: ["Product", "Web Development", "UI / UX"],
  },

  {
    slug: "workflow-system",
    title: "Workflow System",
    category: "AUTOMATE",
    type: "BUSINESS AUTOMATION",
    description:
      "A connected system designed to reduce repetitive work and help a team move faster.",
    image: "/projects/workflow-system.jpg",
    featured: true,
    capabilities: ["Automation", "AI", "Internal Tools"],
  },

  {
    slug: "brand-experience",
    title: "Brand Experience",
    category: "GROW",
    type: "DIGITAL EXPERIENCE",
    description:
      "A digital presence built to give a growing business a stronger identity and clearer direction.",
    image: "/projects/brand-experience.jpg",
    featured: true,
    capabilities: ["Branding", "Web Design", "Content"],
  },

  {
    slug: "operations-dashboard",
    title: "Operations Dashboard",
    category: "AUTOMATE",
    type: "INTERNAL TOOL",
    description:
      "A centralized dashboard bringing important business operations into one place.",
    image: "/projects/operations-dashboard.jpg",
    capabilities: ["Internal Tools", "Automation", "Product"],
  },

  {
    slug: "commerce-platform",
    title: "Commerce Platform",
    category: "BUILD",
    type: "WEB APPLICATION",
    description:
      "A scalable commerce experience connecting customers, products, and business operations.",
    image: "/projects/commerce-platform.jpg",
    capabilities: ["Web Development", "E-commerce", "UI / UX"],
  },

  {
    slug: "growth-campaign",
    title: "Growth Campaign",
    category: "GROW",
    type: "DIGITAL CAMPAIGN",
    description:
      "A digital campaign designed to turn attention into meaningful business momentum.",
    image: "/projects/growth-campaign.jpg",
    capabilities: ["Content", "Social", "SEO"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
