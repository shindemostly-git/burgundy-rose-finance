import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section id="contact" className="bg-rose py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal>
          <div className="rounded-[24px] border border-border bg-card px-8 py-14 text-center shadow-panel sm:px-14 lg:py-20">
            <span className="mx-auto block h-1 w-10 rounded-full bg-champagne" />
            <h2 className="font-display mx-auto mt-8 max-w-2xl text-[2.1rem] leading-[1.15] text-foreground sm:text-[2.75rem]">
              Let&apos;s Discuss Your <span className="text-primary">Financial Requirement.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-[1.8] text-muted-foreground">
              Share your requirement and we will review the profile, structure and the financing
              channels that fit it best.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="tel:7350767410"
                className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep hover:shadow-lift"
              >
                Discuss Your Requirement
              </a>
              <a
                href="tel:7350767410"
                className="rounded-full border border-border bg-card px-8 py-4 text-sm font-medium text-primary transition-colors duration-300 hover:border-primary"
              >
                Call 7350767410
              </a>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-[18px] border border-border bg-border text-left sm:grid-cols-3">
              {[
                ["Requirement Range", "₹50 Lakhs to ₹10 Crore"],
                ["Advisory Scope", "Business & personal financing"],
                ["Direct Line", "7350767410"],
              ].map(([t, d]) => (
                <div key={t} className="bg-ivory px-7 py-6">
                  <p className="text-[0.68rem] tracking-[0.24em] text-primary uppercase">{t}</p>
                  <p className="mt-3 text-[0.95rem] font-medium text-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ivory">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 border-t border-border px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <div className="leading-[1.2]">
          <p className="text-[0.9rem] font-semibold tracking-[0.14em] text-foreground">
            DAYANAND V P
          </p>
          <p className="text-[0.7rem] tracking-[0.28em] text-primary">&amp; ASSOCIATES</p>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          Financing guidance and advisory. Loan approval, terms and interest rates are determined
          solely by the respective lending institutions.
        </p>
        <a
          href="tel:7350767410"
          className="text-[0.875rem] font-medium text-primary transition-colors hover:text-primary-deep"
        >
          7350767410
        </a>
      </div>
    </footer>
  );
}
