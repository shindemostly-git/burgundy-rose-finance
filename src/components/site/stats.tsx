import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

const stats = [
  { value: 24, suffix: "+", label: "Nationalised & PSU Banks" },
  { value: 300, suffix: "+", label: "NBFCs" },
  { value: 1080, suffix: "+", label: "Patsanstha & Patpedhi Institutions" },
  { value: 102, suffix: "+", label: "CA & Finance Professionals / Channels" },
];

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active]);
  return value;
}

function Stat({ value, suffix, label, active }: (typeof stats)[number] & { active: boolean }) {
  const n = useCountUp(value, active);
  return (
    <div className="px-6 py-8 lg:px-10">
      <p className="font-display text-[2.5rem] leading-none text-primary lg:text-[3rem]">
        {n.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="mt-4 max-w-[13rem] text-sm leading-relaxed text-muted-foreground">{label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-card">
      <div ref={ref} className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="rule-champagne" />
            <span className="eyebrow">Working Network</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8 grid divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {stats.map((s) => (
              <Stat key={s.label} {...s} active={active} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
