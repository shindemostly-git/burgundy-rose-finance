import { useEffect, useMemo, useState } from "react";
import { Reveal } from "./reveal";

const inr = (n: number) =>
  "₹" + Math.round(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });

function useAnimatedNumber(target: number) {
  const [value, setValue] = useState(target);
  useEffect(() => {
    let frame = 0;
    const from = value;
    const start = performance.now();
    const duration = 450;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(from + (target - from) * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return value;
}

function Slider({
  label,
  display,
  min,
  max,
  step,
  value,
  onChange,
  hintMin,
  hintMax,
}: {
  label: string;
  display: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  hintMin: string;
  hintMax: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-[0.8125rem] font-medium tracking-[0.04em] text-muted-foreground">
          {label}
        </span>
        <span className="text-[1.05rem] font-semibold text-foreground">{display}</span>
      </div>
      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider-premium mt-4"
        style={{ ["--pct" as string]: `${pct}%` }}
      />
      <div className="mt-2 flex justify-between text-[0.6875rem] text-muted-foreground">
        <span>{hintMin}</span>
        <span>{hintMax}</span>
      </div>
    </div>
  );
}

export function Calculator() {
  const [type, setType] = useState<"business" | "personal">("business");
  const [amount, setAmount] = useState(25000000);
  const [rate, setRate] = useState(10.5);
  const [years, setYears] = useState(10);

  const { emi, interest, total } = useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    const e = r === 0 ? amount / n : (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return { emi: e, interest: e * n - amount, total: e * n };
  }, [amount, rate, years]);

  const animEmi = useAnimatedNumber(emi);
  const animInterest = useAnimatedNumber(interest);
  const animTotal = useAnimatedNumber(total);

  const principalShare = total > 0 ? amount / total : 0;
  const circumference = 2 * Math.PI * 62;
  const dash = principalShare * circumference;

  return (
    <section id="calculator" className="relative overflow-hidden bg-rose py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blush/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-card/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="rule-champagne" />
            <span className="eyebrow">Indicative Planning</span>
          </div>
          <h2 className="font-display mt-6 text-[2.1rem] leading-[1.14] text-foreground sm:text-[2.75rem]">
            Understand Your Indicative <span className="text-primary">EMI.</span>
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-[1.8] text-muted-foreground">
            Explore how loan amount, indicative interest rate and repayment tenure can influence
            your estimated monthly repayment.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid gap-8 rounded-[24px] border border-border bg-card p-6 shadow-panel sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:p-12">
            <div>
              <div className="inline-flex rounded-full border border-border p-1">
                {(
                  [
                    ["business", "Business Loan"],
                    ["personal", "Personal Loan"],
                  ] as const
                ).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setType(key)}
                    className={`rounded-full px-6 py-2.5 text-[0.8125rem] font-medium transition-all duration-300 ${
                      type === key
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="mt-10 space-y-9">
                <Slider
                  label="Loan Amount"
                  display={inr(amount)}
                  min={5000000}
                  max={100000000}
                  step={500000}
                  value={amount}
                  onChange={setAmount}
                  hintMin="₹50 L"
                  hintMax="₹10 Cr"
                />
                <Slider
                  label="Indicative Interest Rate"
                  display={`${rate.toFixed(1)}%`}
                  min={7}
                  max={20}
                  step={0.1}
                  value={rate}
                  onChange={setRate}
                  hintMin="7%"
                  hintMax="20%"
                />
                <Slider
                  label="Tenure"
                  display={`${years} Years`}
                  min={1}
                  max={25}
                  step={1}
                  value={years}
                  onChange={setYears}
                  hintMin="1 Year"
                  hintMax="25 Years"
                />
              </div>

              <p className="mt-9 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
                Figures shown are indicative estimates for planning purposes only and do not
                represent an offer, sanction or applicable rate of interest.
              </p>
            </div>

            <div className="rounded-[22px] border border-border bg-blush p-7 sm:p-9">
              <span className="eyebrow">Your Indicative Estimate</span>

              <div className="mt-7 flex flex-col items-center gap-8 sm:flex-row sm:items-center">
                <div className="relative shrink-0">
                  <svg width="148" height="148" viewBox="0 0 148 148" aria-hidden="true">
                    <circle cx="74" cy="74" r="62" fill="none" className="stroke-rose" strokeWidth="16" />
                    <circle
                      cx="74"
                      cy="74"
                      r="62"
                      fill="none"
                      className="stroke-chart-2"
                      strokeWidth="16"
                    />
                    <circle
                      cx="74"
                      cy="74"
                      r="62"
                      fill="none"
                      className="stroke-primary"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeDasharray={`${dash} ${circumference - dash}`}
                      transform="rotate(-90 74 74)"
                      style={{ transition: "stroke-dasharray 600ms cubic-bezier(0.22,1,0.36,1)" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[1.15rem] font-semibold text-primary">
                      ₹{(animEmi / 100000).toFixed(2)}L
                    </span>
                    <span className="mt-1 text-[0.6875rem] text-muted-foreground">Monthly EMI</span>
                  </div>
                </div>

                <div>
                  <p className="text-[0.8125rem] text-muted-foreground">Monthly EMI</p>
                  <p className="font-display mt-2 text-[2.35rem] leading-none text-primary">
                    {inr(animEmi)}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-[0.6875rem] text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" /> Principal
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="bg-chart-2 h-2 w-2 rounded-full" /> Interest
                    </span>
                  </div>
                </div>
              </div>

              <dl className="mt-9 divide-y divide-border border-t border-border">
                {[
                  ["Total Principal", inr(amount)],
                  ["Estimated Interest", inr(animInterest)],
                  ["Total Repayment", inr(animTotal)],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-4">
                    <dt className="text-[0.875rem] text-muted-foreground">{k}</dt>
                    <dd className="text-[0.9375rem] font-semibold text-primary">{v}</dd>
                  </div>
                ))}
              </dl>

              <a
                href="#contact"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-[0.8125rem] font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary-deep"
              >
                Discuss a {type === "business" ? "Business" : "Personal"} Requirement
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
