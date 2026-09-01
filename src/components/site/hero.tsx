import heroImage from "@/assets/hero-consultation.jpg";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ivory pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-10">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="rule-champagne" />
              <span className="eyebrow">Financial Consultancy</span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="font-display mt-7 text-[2.6rem] leading-[1.08] tracking-[-0.015em] text-foreground sm:text-[3.4rem] lg:text-[4rem]">
              Strategic <span className="text-primary">Financial</span> Solutions.
              <span className="block text-muted-foreground/90">
                Built Around Your <span className="text-primary">Goals.</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-lg text-[1.0625rem] leading-[1.75] text-muted-foreground">
              Thoughtful financing guidance for businesses and individuals seeking clarity,
              structure and the right financial pathway.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep hover:shadow-lift"
              >
                Discuss Your Requirement
              </a>
              <a
                href="#calculator"
                className="rounded-full border border-border bg-card px-8 py-4 text-sm font-medium text-primary transition-all duration-300 hover:border-primary"
              >
                Explore EMI Calculator
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-7">
              {[
                ["Business & Personal", "Financing advisory"],
                ["₹50L – ₹10 Cr", "Funding focus range"],
              ].map(([a, b]) => (
                <div key={a}>
                  <p className="text-sm font-semibold text-foreground">{a}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative overflow-hidden rounded-[24px] border border-border bg-card shadow-panel">
            <img
              src={heroImage}
              alt="Financial advisor reviewing a client's financing plan in a consultancy office"
              width={1200}
              height={1408}
              className="h-[420px] w-full object-cover object-top sm:h-[520px] lg:h-[600px]"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 w-[13.5rem] rounded-[18px] border border-border bg-card p-5 shadow-lift sm:-left-8">
            <span className="block h-1 w-8 rounded-full bg-primary" />
            <p className="mt-3 text-[1.5rem] leading-none font-semibold text-primary">₹50 Lakhs+</p>
            <p className="mt-2 text-xs tracking-[0.12em] text-muted-foreground uppercase">
              Funding Focus
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
