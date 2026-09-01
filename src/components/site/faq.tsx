import { useState } from "react";
import { Reveal } from "./reveal";

const faqs = [
  {
    q: "What is the minimum funding requirement considered?",
    a: "Our advisory focus begins at ₹50 lakhs, where structuring and channel selection materially influence the outcome.",
  },
  {
    q: "What is the maximum amount in the calculator?",
    a: "The calculator supports indicative planning up to ₹10 crore, matching the funding range we typically work with.",
  },
  {
    q: "What does a business loan requirement involve?",
    a: "Business requirements are assessed on financials, operating profile and purpose of funds before a suitable lending channel is identified.",
  },
  {
    q: "Are personal loan requirements handled?",
    a: "Yes. Individual financing requirements are reviewed with the same emphasis on cost clarity, tenure and repayment comfort.",
  },
  {
    q: "How is EMI calculated?",
    a: "EMI is derived using the standard reducing-balance formula on loan amount, monthly interest rate and total number of instalments.",
  },
  {
    q: "Is the interest rate shown an offer?",
    a: "No. The rate in the calculator is an input for planning. Applicable rates are determined solely by the lending institution.",
  },
  {
    q: "What tenure options can be explored?",
    a: "The calculator allows tenures from 1 to 25 years. Actual tenure depends on the product and the lender's assessment.",
  },
  {
    q: "How is eligibility determined?",
    a: "Eligibility is assessed by the lending institution based on its own credit policy, documentation and applicant profile.",
  },
  {
    q: "What documentation is typically required?",
    a: "Documentation varies by product and institution, and generally covers identity, financial statements and purpose-related records.",
  },
  {
    q: "How does approval work?",
    a: "Approval decisions rest entirely with the lender. Our role is to prepare the requirement and present it to the appropriate channel.",
  },
  {
    q: "What does the financing process look like?",
    a: "A requirement discussion, profile review, channel selection, documentation preparation and coordination through to the lender's decision.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="rule-champagne" />
            <span className="eyebrow">Clarity</span>
          </div>
          <h2 className="font-display mt-6 text-[2.1rem] leading-[1.15] text-foreground sm:text-[2.5rem]">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="divide-y divide-border border-t border-b border-border">
            {faqs.map((f, i) => {
              const active = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(active ? null : i)}
                    aria-expanded={active}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={`text-[0.975rem] font-medium transition-colors duration-300 ${
                        active ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-400 ${
                        active
                          ? "rotate-45 border-primary text-primary"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ gridTemplateRows: active ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pr-10 pb-6 text-[0.9375rem] leading-[1.8] text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
