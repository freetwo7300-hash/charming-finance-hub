const bars = [
  { day: "Mon", out: 62, in: 34 },
  { day: "Tue", out: 44, in: 58 },
  { day: "Wed", out: 78, in: 40 },
  { day: "Thu", out: 36, in: 66 },
  { day: "Fri", out: 92, in: 48 },
  { day: "Sat", out: 28, in: 22 },
  { day: "Sun", out: 54, in: 38 },
];

export function PaymentFlow() {
  return (
    <section className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-sm font-medium">Payment Flow</h2>
          <p className="mt-1 text-xs text-muted-foreground">Outgoing vs incoming this week</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: "var(--chart-1)" }} /> Outgoing
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: "var(--chart-4)" }} /> Incoming
          </span>
        </div>
      </div>

      <div className="mt-6 flex h-52 items-end gap-3">
        {bars.map((b) => (
          <div key={b.day} className="flex h-full flex-1 flex-col items-center gap-2">
            <div className="flex min-h-0 w-full flex-1 items-end justify-center gap-1.5">
              <div
                className="w-3 rounded-full transition-all"
                style={{ height: `${b.out}%`, background: "var(--chart-1)" }}
              />
              <div
                className="w-3 rounded-full transition-all"
                style={{ height: `${b.in}%`, background: "var(--chart-4)" }}
              />
            </div>
            <span className="text-[11px] text-muted-foreground">{b.day}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
