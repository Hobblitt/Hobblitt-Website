function InfoBlock({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[#1A2438] p-6 md:p-7">
      <span className="type-caption text-[9px] text-[#22B8F0]">{number}</span>
      <h3 className="type-h3 mt-8 text-sm text-white md:mt-12">{title}</h3>
      <p className="type-body mt-3 text-sm leading-6 text-[#64748B]">{text}</p>
    </div>
  );
}

export function WhoIsHobblitt() {
  return (
    <section
      id="about"
      className="border-t border-[#E2E8F0]/10 bg-[#1A2438] px-margin py-20 md:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_minmax(0,1.2fr)] lg:gap-16 xl:gap-24">
          <div>
            <span className="type-caption text-[9px] text-[#22B8F0]">
              02 / WHO IS HOBBLITT
            </span>
          </div>

          <div className="min-w-0">
            <h2 className="type-h1 max-w-4xl text-[clamp(2rem,6.5vw,4.5rem)]">
              We&apos;re the team you call when there&apos;s something worth
              building.
            </h2>

            <p className="type-body mt-8 max-w-2xl text-base leading-8 text-[#94A3B8] md:mt-10 md:text-lg">
              Hobblitt brings technology, creativity, strategy, and people
              together to help businesses move forward.
            </p>

            <div className="mt-10 grid gap-px border border-[#E2E8F0]/10 bg-[#E2E8F0]/10 sm:grid-cols-3 md:mt-14">
              <InfoBlock
                number="01"
                title="TECHNOLOGY"
                text="Engineering, products, AI, and digital systems."
              />
              <InfoBlock
                number="02"
                title="CREATIVITY"
                text="Brand, design, content, and experiences."
              />
              <InfoBlock
                number="03"
                title="STRATEGY"
                text="Understanding what actually needs to happen."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
