import editorial from "@/assets/insight-editorial.jpg";
import { Reveal } from "./reveal";

const items = [
  {
    tag: "Funding",
    title: "Understanding Business Funding",
    desc: "How lenders read a business profile, and what shapes the structure of a funding proposal.",
  },
  {
    tag: "Operations",
    title: "Working Capital Planning",
    desc: "Aligning short-term facilities with the operating cycle instead of the other way around.",
  },
  {
    tag: "Preparation",
    title: "Preparing for a Financing Discussion",
    desc: "The documents, numbers and clarity that make a financing conversation productive.",
  },
  {
    tag: "Cost",
    title: "Understanding Loan Cost",
    desc: "Reading beyond the headline rate — tenure, structure and total repayment over time.",
  },
  {
    tag: "Channels",
    title: "Choosing the Right Financing Channel",
    desc: "Banks, NBFCs and institutional channels each suit different profiles and timelines.",
  },
];

export function Insights() {
  return (
    <section id="insights" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="rule-champagne" />
            <span className="eyebrow">Resources</span>
          </div>
          <h2 className="font-display mt-6 text-[2.1rem] leading-[1.15] text-foreground sm:text-[2.6rem]">
            Financial Insights
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <article className="group grid h-full overflow-hidden rounded-[22px] border border-border bg-ivory shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-lift sm:grid-cols-2">
              <div className="overflow-hidden">
                <img
                  src={editorial}
                  alt=""
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-full min-h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <span className="eyebrow">{items[0]!.tag}</span>
                <h3 className="font-display mt-4 text-[1.65rem] leading-[1.2] text-foreground">
                  {items[0]!.title}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-[1.8] text-muted-foreground">
                  {items[0]!.desc}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-primary">
                  Read
                  <span className="transition-transform duration-400 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </article>
          </Reveal>

          {items.slice(1).map((it, i) => (
            <Reveal key={it.title} delay={i * 70} className={i === 1 ? "lg:col-span-1" : ""}>
              <article
                className={`group flex h-full flex-col justify-between rounded-[22px] border border-border p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-lift ${
                  i % 2 === 0 ? "bg-blush" : "bg-card"
                }`}
              >
                <div>
                  <span className="eyebrow">{it.tag}</span>
                  <h3 className="mt-4 text-[1.15rem] leading-snug font-semibold text-foreground">
                    {it.title}
                  </h3>
                  <p className="mt-3 text-[0.9rem] leading-[1.75] text-muted-foreground">
                    {it.desc}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-primary">
                  Read
                  <span className="transition-transform duration-400 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
