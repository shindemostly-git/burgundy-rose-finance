import { Reveal } from "./reveal";

const steps = [
  {
    n: "01",
    title: "Requirement Discussion",
    desc: "We begin with the purpose of funds, the amount under consideration, the expected timeline and the repayment comfort you have in mind.",
  },
  {
    n: "02",
    title: "Profile & Financial Review",
    desc: "Financial statements, banking conduct, obligations and credit history are reviewed to establish how a lender is likely to read the profile.",
  },
  {
    n: "03",
    title: "Structuring the Proposal",
    desc: "The requirement is shaped into a defensible structure — quantum, tenure, security and facility type — before it reaches any institution.",
  },
  {
    n: "04",
    title: "Channel Selection",
    desc: "The proposal is matched to the banks, NBFCs or institutional channels whose credit policy and appetite genuinely fit the profile.",
  },
  {
    n: "05",
    title: "Documentation & Coordination",
    desc: "Documentation is prepared in the format the institution expects, and queries are coordinated through to the lender's decision.",
  },
];

export function Process() {
  return (
    <section id="approach" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="rule-champagne" />
              <span className="eyebrow">Advisory Approach</span>
            </div>
            <h2 className="font-display mt-6 text-[2.1rem] leading-[1.14] tracking-[-0.01em] text-foreground sm:text-[2.75rem]">
              A Considered Process, Followed Every Time
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xl text-[1.0625rem] leading-[1.8] text-muted-foreground lg:pb-2">
              Financing outcomes are shaped long before an application is submitted. The sequence
              below is how a requirement moves from conversation to a lender&apos;s decision.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[22px] border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 70} className="h-full">
              <div className="flex h-full flex-col bg-ivory p-8 transition-colors duration-500 hover:bg-blush">
                <span className="font-display text-[1.6rem] leading-none text-primary">{s.n}</span>
                <span className="mt-5 block h-px w-8 bg-champagne" />
                <h3 className="mt-6 text-[1.05rem] leading-snug font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-4 text-[0.9rem] leading-[1.8] text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
