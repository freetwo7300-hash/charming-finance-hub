import { useState } from "react";
import { ArrowUpRight, ChevronDown, Plus, Search, Zap } from "lucide-react";

const recipients = [
  { name: "Amelia R.", handle: "@amelia", tone: "var(--chart-1)" },
  { name: "Noah K.", handle: "@noahk", tone: "var(--chart-3)" },
  { name: "Sofia L.", handle: "@sofial", tone: "var(--chart-4)" },
  { name: "Ethan M.", handle: "@ethanm", tone: "var(--chart-5)" },
];

const quick = [50, 100, 250, 500];

export function SendMoney() {
  const [amount, setAmount] = useState("1,250.00");
  const [active, setActive] = useState(0);

  return (
    <section className="panel p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-foreground">Send Payment</h2>
        <button className="flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted-foreground">
          <Zap className="h-3 w-3" />
          Instant
          <ChevronDown className="h-3 w-3" />
        </button>
      </div>

      <div className="mt-4">
        <label className="text-xs text-muted-foreground">To</label>
        <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-3 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            placeholder="Name, @handle or account number"
            key={active}
            defaultValue={recipients[active]?.name}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-1">
        {recipients.map((r, i) => (
          <button
            key={r.handle}
            onClick={() => setActive(i)}
            className={`flex min-w-[68px] flex-col items-center gap-1.5 rounded-xl border px-2 py-2 transition-colors ${
              i === active ? "border-primary/60 bg-primary/10" : "border-border bg-surface-2 hover:bg-muted"
            }`}
          >
            <span
              className="grid h-9 w-9 place-items-center rounded-full text-xs font-semibold text-primary-foreground"
              style={{ background: r.tone }}
            >
              {r.name.charAt(0)}
            </span>
            <span className="text-[11px] text-muted-foreground">{r.name.split(" ")[0]}</span>
          </button>
        ))}
        <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-dashed border-border text-muted-foreground">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-5 rounded-2xl border border-border bg-surface-2 p-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Amount</span>
          <span>Available $525,255.00</span>
        </div>
        <div className="mt-2 flex items-end gap-2">
          <span className="font-display text-3xl font-semibold text-muted-foreground">$</span>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-transparent font-display text-4xl font-semibold tracking-tight outline-none"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {quick.map((q) => (
            <button
              key={q}
              onClick={() => setAmount(q.toLocaleString("en-US", { minimumFractionDigits: 2 }))}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted"
            >
              +${q}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-2 text-xs text-muted-foreground">
        <div className="flex justify-between">
          <span>Fee</span>
          <span className="text-foreground">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Arrives</span>
          <span className="text-foreground">In seconds</span>
        </div>
      </div>

      <button
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        style={{ backgroundImage: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
      >
        <ArrowUpRight className="h-4 w-4" />
        Send ${amount}
      </button>
    </section>
  );
}
