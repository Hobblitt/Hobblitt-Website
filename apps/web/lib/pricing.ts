export type PricingEngagement = {
  number: string;
  title: string;
  description: string;
  bestFor: string;
  points: string[];
};

export type PricingPrinciple = {
  number: string;
  title: string;
  description: string;
};

export type PricingFaq = {
  question: string;
  answer: string;
};

export const pricingEngagements: PricingEngagement[] = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Start with the problem. We help clarify what needs to happen before deciding what to build.",
    bestFor: "When the direction is still taking shape.",
    points: [
      "Problem definition",
      "Product direction",
      "Technical discovery",
      "Opportunity mapping",
    ],
  },
  {
    number: "02",
    title: "BUILD",
    description:
      "Turn a clear direction into a useful product, system, workflow, or digital experience.",
    bestFor: "When you know what needs to move.",
    points: [
      "Product development",
      "Engineering",
      "Automation",
      "Integrations",
    ],
  },
  {
    number: "03",
    title: "PARTNER",
    description:
      "Keep Hobblitt close as the work evolves — improving, automating, experimenting, and building what comes next.",
    bestFor: "When the work does not stop at launch.",
    points: [
      "Continuous improvement",
      "Product evolution",
      "Growth experiments",
      "Technical partnership",
    ],
  },
];

export const pricingPrinciples: PricingPrinciple[] = [
  {
    number: "01",
    title: "SCOPE COMES FIRST",
    description:
      "We understand the problem and the outcome before defining the work required to get there.",
  },
  {
    number: "02",
    title: "NO COOKIE-CUTTER PACKAGES",
    description:
      "Every business has different constraints, goals, systems, and opportunities. The engagement follows the problem.",
  },
  {
    number: "03",
    title: "CLEAR BEFORE WE BUILD",
    description:
      "We align on what matters, what we are solving, and what success looks like before the work begins.",
  },
  {
    number: "04",
    title: "BUILT TO MOVE",
    description:
      "The goal is not simply to deliver something. It is to create something the business can keep improving and growing with.",
  },
];

export const pricingFaqs: PricingFaq[] = [
  {
    question: "DO YOU HAVE FIXED PACKAGES?",
    answer:
      "Not really. We price around the problem, scope, and outcome rather than forcing every project into the same package.",
  },
  {
    question: "HOW DO YOU ESTIMATE A PROJECT?",
    answer:
      "We first understand what you are trying to achieve, what is currently getting in the way, and what needs to change. From there, we define the right scope.",
  },
  {
    question: "CAN WE START SMALL?",
    answer:
      "Yes. A project can begin with discovery, a focused build, or a specific problem. The engagement can grow when the work calls for it.",
  },
  {
    question: "DO YOU WORK ONGOINGLY?",
    answer:
      "Yes. Some teams need a focused build while others need a long-term technology and creative partner. We can work either way.",
  },
];
