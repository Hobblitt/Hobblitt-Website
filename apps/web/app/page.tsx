import { LeadStory } from "@/components/home/lead-story";
import { NewsletterCard } from "@/components/home/newsletter-card";
import { ServicesRoster } from "@/components/home/services-roster";
import { SidebarLinks } from "@/components/home/sidebar-links";
import { SidebarPromo } from "@/components/home/sidebar-promo";
import { Reveal } from "@/components/ui/reveal";

export default function FrontPage() {
  return (
    <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-gutter px-margin py-8 md:flex-row md:py-12">
      {/* Lead column */}
      <Reveal className="md:w-2/3 md:border-e-2 md:border-ink md:pe-gutter">
        <article className="flex flex-col gap-8">
          <LeadStory />
          <ServicesRoster className="mt-8" />
        </article>
      </Reveal>

      {/* Sidebar */}
      <Reveal delay={0.15} className="md:w-1/3">
        <aside className="flex flex-col gap-8 pt-10">
          <NewsletterCard />
          <SidebarPromo />
          <SidebarLinks />
        </aside>
      </Reveal>
    </div>
  );
}
