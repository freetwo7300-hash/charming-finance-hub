import { Check, CreditCard, Plus } from "lucide-react";

const methods = [
  { label: "Vorix Black", meta: "•••• 4429 · Visa", primary: true },
  { label: "Business USD", meta: "•••• 8812 · Mastercard", primary: false },
  { label: "Savings EUR", meta: "•••• 1174 · Visa", primary: false },
];

export function PaymentMethods() {
  return (
    <section className="panel p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium">Pay From</h2>
        <button className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground">
          <Plus className="h-3.5 w-3.5" /> Add
        </button>
      </div>

      <div className="mt-4 space-y-2.5">
        {methods.map((m) => (
          <button
            key={m.label}
            className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition-colors ${
              m.primary ? "border-primary/60 bg-primary/10" : "border-border bg-surface-2 hover:bg-muted"
            }`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2 text-muted-foreground">
              <CreditCard className="h-4 w-4" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium">{m.label}</span>
              <span className="block truncate text-xs text-muted-foreground">{m.meta}</span>
            </span>
            {m.primary && (
              <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3 w-3" />
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
