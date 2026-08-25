import { Reveal } from "./Reveal";

const channels = [
  { label: "Email", value: "m.ssaid356@gmail.com", href: "mailto:m.ssaid356@gmail.com" },
  { label: "Phone", value: "+20 106 735 8073", href: "tel:+201067358073" },
  { label: "LinkedIn", value: "in/mostafasamirsaid", href: "https://linkedin.com/in/mostafasamirsaid" },
  { label: "GitHub", value: "Mostafa-SAID7", href: "https://github.com/Mostafa-SAID7" },
];

const engagements = [
  { title: "Platform build", note: "Greenfield listing or brokerage product, architecture to launch." },
  { title: "Rescue & scale", note: "Slow search, tangled tenancy, brittle deploys — triaged and rebuilt." },
  { title: "Fractional lead", note: "Part-time senior ownership across backend and frontend delivery." },
];

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-primary px-8 py-16 text-primary-foreground sm:px-16">
            <span
              aria-hidden="true"
              className="grid-paper-lg pointer-events-none absolute inset-0 opacity-50"
            />
            <div className="float-soft pointer-events-none absolute -right-16 -top-16 size-72 rounded-full bg-accent/25 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-4">
                  <p className="eyebrow !text-primary-foreground/60">Contact</p>
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-primary-foreground/75">
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                    </span>
                    Available for Q3 projects
                  </span>
                </div>
                <h2 className="mt-5 text-balance text-4xl sm:text-5xl">
                  Have a property platform to build or rescue?
                </h2>
                <p className="mt-5 leading-relaxed text-primary-foreground/70">
                  Property portals, brokerage back-offices, smart-building dashboards or a
                  listings frontend that needs to load in under a second — tell me the
                  problem and I'll map the architecture.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:m.ssaid356@gmail.com"
                    className="sheen inline-flex rounded-full bg-accent px-8 py-4 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Send a brief
                  </a>
                  <a
                    href="tel:+201067358073"
                    className="inline-flex rounded-full border border-primary-foreground/25 px-7 py-4 text-sm transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    Book a call
                  </a>
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.18em] text-primary-foreground/45">
                  Replies within one business day
                </p>
              </div>

              <ul className="divide-y divide-primary-foreground/15 border-y border-primary-foreground/15 lg:mt-2">
                {engagements.map((e) => (
                  <li key={e.title} className="group py-5">
                    <p className="text-sm transition-colors duration-300 group-hover:text-accent">
                      {e.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-primary-foreground/60">
                      {e.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="relative mt-14 grid gap-8 border-t border-primary-foreground/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {channels.map((c) => (
                <div key={c.label}>
                  <dt className="eyebrow !text-primary-foreground/55">{c.label}</dt>
                  <dd className="mt-2">
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm transition-colors hover:text-accent"
                    >
                      {c.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const footerLinks = [
  { label: "Portfolio", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "Track record", href: "#experience" },
  { label: "About", href: "#about" },
];

export function Footer() {
  return (
    <footer className="edge-t px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_auto] md:items-start">
          <div>
            <p className="font-display text-lg">Mostafa Samir</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Full stack engineer building listing portals, brokerage platforms and
              property intelligence on .NET 8.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#top"
            className="hairline inline-flex items-center gap-2 self-start rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--edge-line)] pt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <p>© {new Date().getFullYear()} Mostafa Samir · PropTech Engineering</p>
          <p>Tanta, Egypt · Remote friendly</p>
        </div>
      </div>
    </footer>
  );
}
