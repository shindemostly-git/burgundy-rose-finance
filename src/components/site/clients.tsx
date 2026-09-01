import { Reveal } from "./reveal";

const segments = [
  {
    title: "Manufacturing & MSME Units",
    desc: "Capital expenditure, machinery purchase and working capital aligned to production and receivable cycles.",
  },
  {
    title: "Trading & Distribution",
    desc: "Inventory-led funding requirements where facility limits must track seasonality and turnover.",
  },
  {
    title: "Construction & Real Estate",
    desc: "Project-linked and property-backed requirements assessed on viability and repayment horizon.",
  },
  {
    title: "Services & Professional Firms",
    desc: "Cash-flow-based financing for firms whose strength sits in billings rather than fixed assets.",
  },
  {
    title: "Agriculture & Allied Businesses",
    desc: "Requirements routed through the co-operative, patsanstha and institutional channels suited to them.",
  },
  {
    title: "Salaried & Self-Employed Individuals",
    desc: "Personal and property-backed requirements reviewed for cost, tenure and repayment comfort.",
  },
];

const principles = [
  ["Objectivity", "Channels are recommended on fit, not convenience."],
  ["Clarity of cost", "Rate, tenure and total outflow discussed before applying."],
  ["Preparation first", "Documentation readied to the institution's expectation."],
  ["Confidentiality", "Financial information handled with professional discretion."],
];

export function Clients() {
  return (
    <section id="clients" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="rule-champagne" />
            <span className="eyebrow">Who We Work With</span>
          </div>
          <h2 className="font-display mt-6 text-[2.1rem] leading-[1.15] text-foreground sm:text-[2.6rem]">
            Requirements Across Business and Individual Profiles
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {segments.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="h-full rounded-[20px] border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-lift">
                <h3 className="text-[1.1rem] leading-snug font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-4 text-[0.9rem] leading-[1.8] text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[22px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(([t, d]) => (
              <div key={t} className="bg-blush p-8">
                <p className="text-[0.7rem] tracking-[0.24em] text-primary uppercase">{t}</p>
                <p className="mt-4 text-[0.9rem] leading-[1.75] text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
