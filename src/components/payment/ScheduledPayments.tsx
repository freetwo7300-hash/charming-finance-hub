import { CalendarClock, MoreHorizontal } from "lucide-react";

const scheduled = [
  { name: "Cloud Infrastructure", when: "Aug 25 · Monthly", amount: "$1,240.00" },
  { name: "Payroll — Design Team", when: "Aug 28 · Monthly", amount: "$18,400.00" },
  { name: "Office Lease", when: "Sep 01 · Monthly", amount: "$6,750.00" },
];

const activity = [
  { name: "Amelia Rivers", type: "Instant transfer", amount: "-$1,250.00", status: "Completed" },
  { name: "Stripe Payout", type: "Incoming", amount: "+$8,420.00", status: "Completed" },
  { name: "Noah Klein", type: "Bank transfer", amount: "-$540.00", status: "Pending" },
  { name: "Figma Inc.", type: "Subscription", amount: "-$96.00", status: "Completed" },
  { name: "Sofia Lang", type: "Request paid", amount: "+$310.00", status: "Completed" },
];

export function ScheduledPayments() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <section className="panel p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium">Scheduled</h2>
          <CalendarClock className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="mt-4 space-y-3">
          {scheduled.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 px-3 py-3"
            >
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium">{s.name}</span>
                <span className="block text-xs text-muted-foreground">{s.when}</span>
              </span>
              <span className="text-sm font-medium">{s.amount}</span>
              <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </section>

      <section className="panel p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium">Recent Payments</h2>
          <button className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            View all
          </button>
        </div>
        <div className="mt-4 divide-y divide-border">
          {activity.map((a) => (
            <div key={a.name} className="flex items-center gap-3 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-2 text-xs font-semibold text-muted-foreground">
                {a.name.charAt(0)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium">{a.name}</span>
                <span className="block text-xs text-muted-foreground">{a.type}</span>
              </span>
              <span className="text-right">
                <span
                  className={`block text-sm font-medium ${
                    a.amount.startsWith("+") ? "text-success" : "text-foreground"
                  }`}
                >
                  {a.amount}
                </span>
                <span
                  className={`block text-[11px] ${
                    a.status === "Pending" ? "text-warning" : "text-muted-foreground"
                  }`}
                >
                  {a.status}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
