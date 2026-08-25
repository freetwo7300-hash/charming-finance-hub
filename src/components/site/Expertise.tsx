import { Reveal } from "./Reveal";

import { SectionHeader } from "./SectionHeader";

const pillars = [
  {
    title: "Listing & search platforms",
    body: "Faceted property search, geo filters, media pipelines and availability logic that stay fast as inventory grows.",
    items: [
      ".NET 8 / ASP.NET Core Web API",
      "Microservices & Clean Architecture",
      "Redis caching, SQL tuning",
    ],
    metric: "300% faster queries",
  },
  {
    title: "Brokerage operations",
    body: "Multi-tenant CRM, agent hierarchies, commission rules and ERP sync with strict data isolation.",
    items: [
      "Multi-tenancy & RBAC",
      "DDD, EF Core, LINQ",
      "CRM/ERP integration layers",
    ],
    metric: "Tenant-isolated by design",
  },
  {
    title: "Live property intelligence",
    body: "Real-time dashboards for smart buildings, site logistics and lead activity via SignalR and gRPC.",
    items: [
      "SignalR realtime",
      "IoT telemetry ingestion",
      "Angular data visualisation",
    ],
    metric: "1,000+ live endpoints",
  },
  {
    title: "Home-buyer experiences",
    body: "SEO-first Next.js listing sites and PWAs engineered around web vitals and mobile conversion.",
    items: [
      "Next.js / React / Redux",
      "TypeScript & Tailwind CSS",
      "Playwright & Cypress coverage",
    ],
    metric: "Core Web Vitals green",
  },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-primary px-4 pt-32 pb-32 text-primary-foreground sm:pt-40 sm:pb-40"
    >
      
      <span
        aria-hidden="true"
        className="grid-paper-lg pointer-events-none absolute inset-0 opacity-[0.5]"
      />
      <span
        aria-hidden="true"
        className="float-soft pointer-events-none absolute -top-24 left-1/3 size-[26rem] rounded-full bg-accent/12 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          tone="dark"
          index="02"
          eyebrow="What I build"
          title="Four pillars of real estate software"
          lede="Every engagement lands in one of these four layers — and most property platforms need all four to talk to each other cleanly."
          aside={
            <p className="text-xs leading-relaxed tracking-[0.14em] text-primary-foreground/50 uppercase md:max-w-[11rem] md:text-right">
              Architecture · Delivery · Performance
            </p>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="lift group relative h-full overflow-hidden rounded-4xl border border-primary-foreground/12 bg-primary-foreground/[0.04] p-8 transition-colors duration-500 hover:border-accent/40 hover:bg-primary-foreground/[0.07] sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <span className="figure text-3xl text-accent">0{i + 1}</span>
                  <span className="rounded-full border border-primary-foreground/15 px-3.5 py-1.5 text-[0.65rem] tracking-[0.14em] text-primary-foreground/70 uppercase">
                    {p.metric}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                  {p.body}
                </p>

                <ul className="mt-7 space-y-3 border-t border-primary-foreground/12 pt-6 text-sm text-primary-foreground/85">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <span
                  aria-hidden="true"
                  className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-accent/70 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      
    </section>
  );
}
