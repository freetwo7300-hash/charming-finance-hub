import { ArrowUpRight, Info, ChevronDown, Send } from "lucide-react";
import { DonutChart } from "./DonutChart";

const currencies = [
  { name: "USD", value: 42, color: "var(--chart-1)" },
  { name: "Euro", value: 26, color: "var(--chart-4)" },
  { name: "Pounds", value: 18, color: "var(--chart-3)" },
  { name: "Dinar", value: 14, color: "var(--chart-5)" },
];

export function BalanceCards() {
  return (
    <div className="flex flex-col gap-5">
      <section className="panel p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>My Balance</span>
            <Info className="h-3.5 w-3.5" />
          </div>
          <button className="flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted-foreground">
            <span className="flex">
              <span className="h-3.5 w-3.5 rounded-full bg-destructive" />
              <span className="-ml-1.5 h-3.5 w-3.5 rounded-full bg-warning" />
            </span>
            xx25
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>

        <div className="mt-4 flex items-end gap-3">
          <p className="font-display text-4xl font-semibold tracking-tight">
            $525,255<span className="text-2xl text-muted-foreground">.00</span>
          </p>
          <span className="mb-1.5 rounded-full bg-success/15 px-2 py-0.5 text-xs font-medium text-success">
            +55.58%
          </span>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            style={{ backgroundImage: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            <ArrowUpRight className="h-4 w-4" />
            Transfer
          </button>
          <button className="flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            Request
            <Send className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      <section className="panel flex-1 p-5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Balance Details</span>
          <Info className="h-3.5 w-3.5" />
        </div>

        <div className="mt-4">
          <DonutChart data={currencies} />
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {currencies.map((c) => (
            <span key={c.name} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ background: c.color }} />
              {c.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
