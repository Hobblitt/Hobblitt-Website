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
    <div className="bg-[#1A2438] p-7">
      <span className="type-caption text-[9px] text-[#22B8F0]">{number}</span>
      <h3 className="type-h3 mt-12 text-sm text-white">{title}</h3>
      <p className="type-body mt-3 text-sm leading-6 text-[#64748B]">{text}</p>
    </div>
  );
}

export function WhoIsHobblitt() {
  return (
    <section
      id="about"
      className="border-t border-[#E2E8F0]/10 bg-[#1A2438] px-margin py-28 md:py-36"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <span className="type-caption text-[9px] text-[#22B8F0]">
              02 / WHO IS HOBBLITT
            </span>
          </div>

          <div>
            <h2 className="type-h1 max-w-4xl text-4xl md:text-6xl lg:text-7xl">
              We&apos;re the team you call when there&apos;s something worth
              building.
            </h2>

            <p className="type-body mt-10 max-w-2xl text-base leading-8 text-[#94A3B8] md:text-lg">
              Hobblitt brings technology, creativity, strategy, and people
              together to help businesses move forward.
            </p>

            <div className="mt-14 grid gap-px border border-[#E2E8F0]/10 bg-[#E2E8F0]/10 sm:grid-cols-3">
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
