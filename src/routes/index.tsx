import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { Solutions } from "@/components/site/solutions";
import { Calculator } from "@/components/site/calculator";
import { Process } from "@/components/site/process";
import { Clients } from "@/components/site/clients";
import { FinancingRange } from "@/components/site/financing-range";
import { Network } from "@/components/site/network";
import { Insights } from "@/components/site/insights";
import { Faq } from "@/components/site/faq";
import { FinalCta, SiteFooter } from "@/components/site/final-cta";

const title = "Dayanand V P & Associates | Financial Consultancy";
const description =
  "Strategic financing guidance for businesses and individuals — solutions, indicative EMI planning and channel advisory from ₹50 lakhs to ₹10 crore.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteNav />
      <main>
        <Hero />
        <Stats />
        <Solutions />
        <Process />
        <Calculator />
        <FinancingRange />
        <Clients />
        <Network />
        <Insights />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
