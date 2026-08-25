import aboutDetail from "@/assets/about-detail.jpg";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const credentials = [
  {
    label: "Education",
    value: "B.Sc. Computer Science",
    note: "Higher Technological Institute (HTI), 2021",
  },
  {
    label: "Certification",
    value: "Microsoft Certified: Azure Fundamentals",
    note: "AZ-900",
  },
  {
    label: "Languages",
    value: "English · Arabic",
    note: "Professional · Native",
  },
  {
    label: "Working style",
    value: "Remote-first, async by default",
    note: "Tanta, Egypt · UTC+3",
  },
];

const principles = [
  "Model the domain before the database",
  "Isolate tenants at the query, not the UI",
  "Cache what's read, index what's filtered",
  "Ship observability with the feature",
];

export function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="04"
          eyebrow="About"
          title="A builder's mindset, applied to property technology"
          lede="Real estate software fails in the details: stale listings, brokers who can't see each other's data, dashboards that lag behind the site."
        />

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-[0.85fr_1fr]">
          <Reveal variant="reveal-img" className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 h-full w-full rounded-4xl border border-accent/35"
            />
            <img
              src={aboutDetail}
              alt="Curved warm plaster architectural detail"
              loading="lazy"
              width={896}
              height={1152}
              className="relative h-[30rem] w-full rounded-4xl object-cover shadow-estate lg:h-[36rem]"
            />
            <div className="edge-card absolute bottom-6 right-6 max-w-[13rem] rounded-2xl bg-card/95 p-5 backdrop-blur">
              <p className="figure text-2xl">4+ yrs</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Building listing, brokerage and smart-building systems end to end.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="leading-relaxed text-muted-foreground">
              I design systems around those failure points — bounded services, clean
              domain models and caching strategies that keep search instant even as
              inventory scales.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Over 4+ years I've moved teams from monoliths to .NET 8 microservices, made
              platforms multi-tenant without leaking a row, and shipped
              home-buyer-facing frontends that rank and convert.
            </p>

            <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-[var(--edge-line)] sm:grid-cols-2">
              {principles.map((p, i) => (
                <li
                  key={p}
                  className="group flex items-baseline gap-4 bg-background p-6 transition-colors duration-300 hover:bg-card"
                >
                  <span className="figure text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <dl className="mt-10 divide-y divide-[var(--edge-line)] border-t border-[var(--edge-line)]">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6"
                >
                  <dt className="eyebrow">{c.label}</dt>
                  <dd className="text-sm">
                    {c.value}
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {c.note}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
