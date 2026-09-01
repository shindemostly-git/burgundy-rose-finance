import { Reveal } from "./reveal";

const nodes = [
  { value: "24+", label: "Nationalised & PSU Banks" },
  { value: "300+", label: "NBFCs" },
  { value: "1,080+", label: "Patsanstha & Patpedhi Institutions" },
  { value: "102+", label: "CA & Finance Professionals / Channels" },
];

export function Network() {
  return (
    <section id="network" className="bg-blush py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="rule-champagne" />
            <span className="eyebrow">Institutional Network</span>
          </div>
          <h2 className="font-display mt-6 text-[2.1rem] leading-[1.15] text-foreground sm:text-[2.6rem]">
            A Working Network Across Lending Institutions
          </h2>
        </Reveal>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative rounded-[22px] border border-border bg-card px-8 py-12 text-center shadow-soft">
              <span className="mx-auto block h-1 w-10 rounded-full bg-champagne" />
              <p className="mt-6 text-[1.05rem] leading-[1.4] font-semibold tracking-[0.1em] text-foreground">
                DAYANAND V P
              </p>
              <p className="mt-1 text-[0.8rem] tracking-[0.28em] text-primary">&amp; ASSOCIATES</p>
              <p className="mx-auto mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Requirements are matched to the institution and channel best suited to the profile.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {nodes.map((n, i) => (
              <Reveal key={n.label} delay={i * 80}>
                <div className="group relative h-full rounded-[20px] border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-lift">
                  <span className="absolute top-7 -left-px hidden h-px w-8 bg-border sm:block" />
                  <p className="font-display text-[2rem] leading-none text-primary">{n.value}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{n.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
