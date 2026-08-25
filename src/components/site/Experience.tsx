import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const roles = [
  {
    company: "WE3DS Company",
    role: "Senior Software Developer",
    period: "Jul 2024 — Present",
    place: "Tanta, Egypt",
    status: "Current",
    focus: "Enterprise property & brokerage platforms",
    stack: [".NET 8", "Clean Architecture", "SignalR", "Azure DevOps", "Redis"],
    points: [
      "Architected scalable .NET 8 microservices with Clean Architecture and DDD powering enterprise property listing and brokerage workflows.",
      "Led the move to multi-tenant architecture with secure data isolation and hierarchical role-based access control.",
      "Engineered real-time telemetry and integration layers with SignalR across 1,000+ IoT endpoints.",
      "Automated CI/CD with Azure DevOps and TFS, cutting deployment cycles and protecting configuration baselines.",
      "Raised database performance 300% via SQL tuning, indexing and Redis distributed caching.",
    ],
    metrics: [
      { value: "300%", label: "Query throughput" },
      { value: "1,000+", label: "Live endpoints" },
    ],
  },
  {
    company: "Self-Employed",
    role: "Full Stack Developer (Freelance)",
    period: "Nov 2023 — Jul 2024",
    place: "Cairo, Egypt",
    status: "Contract",
    focus: "Listing frontends & API delivery",
    stack: ["Next.js", "React", ".NET Core", "Docker", "Stripe"],
    points: [
      "Delivered end-to-end web apps with Next.js and React for SEO-friendly property listing frontends, backed by .NET Core APIs.",
      "Integrated third-party payment, auth and mapping APIs to extend property platform capabilities.",
      "Containerized legacy services with Docker to streamline environments and cloud migration.",
    ],
    metrics: [
      { value: "12+", label: "Shipped builds" },
      { value: "<1s", label: "Listing load target" },
    ],
  },
];

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="relative px-4 py-24">
      <span
        aria-hidden="true"
        className="grid-paper pointer-events-none absolute inset-x-0 top-0 h-72 opacity-60"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          eyebrow="Track record"
          title="Where I've delivered"
          lede="Two chapters, one throughline: property systems that stay fast, isolated and observable while the business grows around them."
          aside={
            <div className="hairline rounded-2xl px-5 py-4 text-right">
              <p className="figure text-3xl">4+</p>
              <p className="eyebrow mt-1">Years in production</p>
            </div>
          }
        />

        <div className="spine relative mt-16 pl-6 sm:pl-10">
          <div className="space-y-6">
            {roles.map((r, i) => {
              const isOpen = openIndex === i;
              const panelId = `experience-panel-${i}`;

              return (
                <Reveal key={r.company} delay={i * 100}>
                  <article className="edge-card lift relative rounded-4xl bg-card p-6 sm:p-10">
                    <span
                      aria-hidden="true"
                      className="absolute -left-6 top-11 hidden h-px w-6 bg-[var(--edge-seam)] sm:-left-10 sm:block sm:w-10"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute -left-[1.7rem] top-[2.6rem] size-2.5 rounded-full bg-accent ring-4 ring-background sm:-left-[2.95rem]"
                    />

                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="group flex w-full flex-wrap items-start justify-between gap-x-8 gap-y-4 text-left"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="eyebrow">{r.company}</p>
                          <span className="hairline rounded-full px-2.5 py-0.5 text-[0.68rem] uppercase tracking-[0.16em] text-accent">
                            {r.status}
                          </span>
                        </div>
                        <h3 className="mt-3 text-2xl transition-colors group-hover:text-accent sm:text-[1.75rem]">
                          {r.role}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">{r.focus}</p>
                      </div>

                      <div className="flex items-start gap-5">
                        <p className="figure text-sm text-muted-foreground sm:text-right">
                          {r.period}
                          <span className="mt-1 block text-xs uppercase tracking-[0.18em]">
                            {r.place}
                          </span>
                        </p>
                        <span className="hairline grid size-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors group-hover:text-accent">
                          <ChevronDown
                            className={`size-4 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </div>
                    </button>

                    {/* Always-visible summary: metrics + stack */}
                    <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--edge-line)] pt-6">
                      {r.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="figure text-2xl">{m.value}</p>
                          <p className="eyebrow mt-1">{m.label}</p>
                        </div>
                      ))}
                      <div className="ml-auto flex flex-wrap gap-2">
                        {r.stack.map((s) => (
                          <span
                            key={s}
                            className="hairline rounded-full px-3 py-1 text-xs text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expandable detail */}
                    <div
                      id={panelId}
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen
                          ? "mt-6 grid-rows-[1fr] opacity-100"
                          : "mt-0 grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[var(--edge-line)] pt-6">
                          <p className="eyebrow">Highlights</p>
                          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                            {r.points.map((p) => (
                              <li
                                key={p}
                                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                              >
                                <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

