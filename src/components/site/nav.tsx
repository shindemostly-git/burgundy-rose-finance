import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Approach", href: "#approach" },
  { label: "EMI Calculator", href: "#calculator" },
  { label: "Clients", href: "#clients" },
  { label: "Insights", href: "#insights" },
  { label: "Network", href: "#network" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-border bg-card/90 backdrop-blur-md"
          : "border-transparent bg-ivory/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="leading-[1.15]">
          <span className="block text-[0.95rem] font-semibold tracking-[0.14em] text-foreground">
            DAYANAND V P
          </span>
          <span className="block text-[0.7rem] font-medium tracking-[0.28em] text-primary">
            &amp; ASSOCIATES
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-[0.875rem] font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-6 py-3 text-[0.8125rem] font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:bg-primary-deep sm:inline-flex"
          >
            Discuss Your Requirement
          </a>
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary lg:hidden"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-card px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
