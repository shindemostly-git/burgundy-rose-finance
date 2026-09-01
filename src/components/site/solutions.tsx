import boardroom from "@/assets/solutions-boardroom.jpg";
import discussion from "@/assets/solutions-discussion.jpg";
import { Reveal } from "./reveal";

const solutions = [
  {
    n: "01",
    title: "Business Loans",
    desc: "Structured funding for expansion, capital expenditure and operational scale-up, matched to the lending channel that fits the requirement.",
    image: boardroom,
    tone: "card",
  },
  {
    n: "02",
    title: "Working Capital Facilities",
    desc: "Cash-credit, overdraft and short-term arrangements planned around your operating cycle and receivables position.",
    tone: "rose",
  },
  {
    n: "03",
    title: "Project & Term Finance",
    desc: "Long-horizon financing structures assessed for viability, repayment comfort and documentation readiness.",
    tone: "ivory",
  },
  {
    n: "04",
    title: "Personal Loans",
    desc: "Considered guidance for individual financing requirements, with clarity on cost, tenure and repayment implications.",
    image: discussion,
    tone: "card",
  },
  {
    n: "05",
    title: "Loan Against Property",
    desc: "Secured financing options evaluated against property profile, valuation considerations and lender appetite.",
    tone: "blush",
  },
  {
    n: "06",
    title: "Financing Channel Advisory",
    desc: "An objective view across banks, NBFCs and institutional channels so the right pathway is selected before applying.",
    tone: "ivory",
  },
];

const toneClass: Record<string, string> = {
  card: "bg-card",
  rose: "bg-rose",
  ivory: "bg-ivory",
  blush: "bg-blush",
};

export function Solutions() {
  return (
    <section id="solutions" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="rule-champagne" />
              <span className="eyebrow">Solutions</span>
            </div>
            <h2 className="font-display mt-6 text-[2.1rem] leading-[1.14] tracking-[-0.01em] text-foreground sm:text-[2.75rem]">
              Financial Solutions Designed Around Your Requirement
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xl text-[1.0625rem] leading-[1.8] text-muted-foreground lg:pb-2">
              Each requirement is assessed on its own merit — structure, timing and the appropriate
              financing channel — before any application is taken forward.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 70}
              className={`group ${s.image ? "lg:col-span-2" : ""} ${i === 3 ? "lg:col-start-2" : ""}`}
            >
              <article
                className={`flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-border ${toneClass[s.tone]} p-8 shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-lift lg:p-10`}
              >
                <div className={s.image ? "grid gap-8 sm:grid-cols-[1.15fr_0.85fr]" : ""}>
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-[1.05rem] text-primary">{s.n}</span>
                      <span className="h-px flex-1 bg-border" />
                    </div>
                    <h3 className="mt-6 text-[1.3rem] font-semibold tracking-[-0.01em] text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-[0.95rem] leading-[1.8] text-muted-foreground">
                      {s.desc}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-primary">
                      Explore
                      <svg
                        width="18"
                        height="10"
                        viewBox="0 0 18 10"
                        fill="none"
                        aria-hidden="true"
                        className="transition-transform duration-400 group-hover:translate-x-1"
                      >
                        <path
                          d="M0 5h16M12 1l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  {s.image && (
                    <div className="overflow-hidden rounded-[16px] border border-border">
                      <img
                        src={s.image}
                        alt=""
                        loading="lazy"
                        width={1200}
                        height={912}
                        className="h-full min-h-[190px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
