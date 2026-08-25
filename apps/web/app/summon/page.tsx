import { PageSection } from "@/components/shared/page-section";
import { SocialIcons } from "@/components/shared/social-icons";
import { ContactForm } from "@/components/summon/contact-form";
import { SummonHero } from "@/components/summon/summon-hero";

const nextSteps = [
  { number: "01", title: "LISTEN", description: "We read what you send — every message, by a real person." },
  { number: "02", title: "UNDERSTAND", description: "If it's a fit, we ask what we need to and figure out where to start." },
  { number: "03", title: "REPLY", description: "You hear back with a real answer, not a form-letter." },
];

export default function SummonPage() {
  return (
    <main className="bg-[#111827] text-[#F8FAFC]">
      <SummonHero />

      {/* CONTACT FORM */}
      <section className="border-b border-[#E2E8F0]/10 bg-[#111827] px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 md:grid-cols-[240px_1fr] md:gap-12">
          <div>
            <p className="type-caption text-[9px] text-[#22B8F0]">
              02 / TELL US WHAT&apos;S STUCK
            </p>
            <p className="type-body mt-6 max-w-[200px] text-xs leading-6 text-[#64748B]">
              No fixed packages. We shape the engagement around what you actually need.
            </p>
          </div>

          <div className="max-w-[720px]">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CONTACT ALTERNATIVE */}
      <PageSection sectionLabel="03 / PREFER EMAIL?" tone="tint">
        <h2 className="type-h2 text-2xl md:text-3xl">Reach us directly.</h2>

        <div className="mt-8 flex flex-col gap-6">
          <a
            href="mailto:hello@hobblitt.com"
            className="type-nav inline-flex w-fit items-center gap-3 border border-[#22B8F0]/50 px-6 py-4 text-[10px] text-[#22B8F0] transition-all duration-300 hover:border-[#22B8F0] hover:bg-[#22B8F0] hover:text-[#111827]"
          >
            hello@hobblitt.com
            <span aria-hidden="true">↗</span>
          </a>

          <SocialIcons variant="labeled" />
        </div>
      </PageSection>

      {/* REASSURANCE */}
      <PageSection sectionLabel="04 / NO PERFECT BRIEF NEEDED" tone="dark">
        <h2 className="type-h1 max-w-[800px] text-4xl md:text-5xl">
          You don&apos;t need the perfect brief.
        </h2>

        <p className="type-body mt-8 max-w-[650px] text-base leading-8 text-[#94A3B8] md:text-lg">
          We start with the problem, understand the business, and figure out what needs
          to happen next — before deciding what to build.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <div className="h-px w-12 bg-[#22B8F0]" />
          <span className="type-caption text-[9px] text-[#64748B]">
            PARTNERS · NOT VENDORS
          </span>
        </div>

        <div className="mt-14 grid border border-[#E2E8F0]/10 sm:grid-cols-3">
          {nextSteps.map((step, index) => (
            <div
              key={step.number}
              className={`px-6 py-6 ${index !== nextSteps.length - 1 ? "border-b border-[#E2E8F0]/10 sm:border-b-0 sm:border-r" : ""}`}
            >
              <span className="type-caption text-[9px] text-[#22B8F0]">{step.number}</span>
              <h3 className="type-h2 mt-4 text-lg">{step.title}</h3>
              <p className="type-body mt-2 text-xs leading-5 text-[#64748B]">{step.description}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </main>
  );
}