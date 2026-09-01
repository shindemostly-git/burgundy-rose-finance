import { Reveal } from "./reveal";

const marks = ["₹50L", "₹1Cr", "₹2Cr", "₹5Cr", "₹10Cr"];

export function FinancingRange() {
  return (
    <section className="bg-ivory py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="rule-champagne" />
            <span className="eyebrow">Funding Focus</span>
          </div>
          <h2 className="font-display mt-6 text-[2rem] leading-[1.15] text-foreground sm:text-[2.5rem]">
            Financing From <span className="text-primary">₹50 Lakhs</span> to{" "}
            <span className="text-primary">₹10 Crore</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-16 pb-2">
            <div className="relative h-px w-full bg-border">
              <span className="absolute inset-y-0 left-0 w-full bg-primary/70" />
              <div className="absolute inset-x-0 -top-1.5 flex justify-between">
                {marks.map((m, i) => (
                  <span
                    key={m}
                    className={`h-3 w-3 rounded-full border border-primary ${
                      i === 0 || i === marks.length - 1 ? "bg-primary" : "bg-ivory"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              {marks.map((m) => (
                <span key={m} className="text-[0.8125rem] font-medium text-foreground">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
