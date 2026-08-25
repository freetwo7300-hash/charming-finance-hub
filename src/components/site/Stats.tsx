import { Reveal } from "./Reveal";

const stats = [
  {
    value: "4+",
    unit: "yrs",
    label: "Shipping real-estate platforms",
    note: "Listings, brokerage, smart buildings",
  },
  {
    value: "300",
    unit: "%",
    label: "Query throughput gained",
    note: "SQL tuning · indexing · Redis",
  },
  {
    value: "1,000",
    unit: "+",
    label: "IoT endpoints streamed live",
    note: "SignalR · sub-second push",
  },
  {
    value: "0",
    unit: "leaks",
    label: "Multi-tenant isolation record",
    note: "Row-level scoping · hierarchical RBAC",
  },
];

const marquee = [
  ".NET 8",
  "Microservices",
  "Clean Architecture",
  "DDD",
  "SignalR",
  "gRPC",
  "Angular",
  "Next.js",
  "PostgreSQL",
  "SQL Server",
  "Redis",
  "Docker",
  "Kubernetes",
  "Azure DevOps",
];

export function Stats() {
  return (
    <section aria-label="Impact in numbers" className="relative px-4 pt-16 pb-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="grid overflow-hidden rounded-4xl bg-card edge-card sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="group relative px-7 py-9 transition-colors duration-500 hover:bg-secondary/40"
            >
              {/* seam lines instead of a hard grid gap */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-6 left-0 hidden w-px bg-[var(--edge-seam)] sm:block"
                style={{ display: i % 2 === 0 ? "none" : undefined }}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-6 left-0 hidden w-px bg-[var(--edge-seam)] lg:block"
              />
              <p className="flex items-baseline gap-1">
                <span className="figure text-5xl text-primary">{s.value}</span>
                <span className="figure text-xl text-accent">{s.unit}</span>
              </p>
              <p className="mt-4 text-sm leading-snug">{s.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {s.note}
              </p>
              <span
                aria-hidden="true"
                className="mt-5 block h-px w-8 origin-left scale-x-100 bg-accent transition-transform duration-500 group-hover:scale-x-[3]"
              />
            </div>
          ))}
        </Reveal>
      </div>

      <div className="mt-16 edge-t py-6">
        <div className="mask-fade-x overflow-hidden">
          <div className="marquee-track flex w-max gap-12 pr-12">
            {[...marquee, ...marquee].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-4 text-xs tracking-[0.2em] whitespace-nowrap text-muted-foreground uppercase"
              >
                {item}
                <span
                  aria-hidden="true"
                  className="size-1 rounded-full bg-accent/60"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
