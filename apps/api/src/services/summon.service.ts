import { prisma } from "@hobblitt/database";

export type CreateSummonLeadInput = {
  name: string;
  email: string;
  company: string | null;
  problem: string;
  buildType: string | null;
  timeline: string | null;
  budget: string | null;
  context: string | null;
};

export async function createSummonLead(input: CreateSummonLeadInput) {
  return prisma.lead.create({
    data: input,
    select: {
      id: true,
      createdAt: true,
    },
  });
}
