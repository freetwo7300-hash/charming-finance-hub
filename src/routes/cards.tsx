import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, Plus, Snowflake } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const cards = [
  { name: "Vorix Black", number: "•••• •••• •••• 4425", holder: "Amin S.", exp: "09/29" },
  { name: "Vorix Business", number: "•••• •••• •••• 1180", holder: "Vorix LLC", exp: "04/28" },
  { name: "Vorix Travel", number: "•••• •••• •••• 7732", holder: "Amin S.", exp: "12/27" },
];

export const Route = createFileRoute("/cards")({
  head: () => ({
    meta: [
      { title: "Cards — Vorix Finance Dashboard" },
      {
        name: "description",
        content: "Manage physical and virtual Vorix cards, freeze them and track spending limits.",
      },
      { property: "og:title", content: "Cards — Vorix Finance Dashboard" },
      {
        property: "og:description",
        content: "Manage physical and virtual Vorix cards, freeze them and track spending limits.",
      },
    ],
  }),
  component: CardsPage,
});

function CardsPage() {
  return (
    <DashboardLayout title="Cards">
      <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((c) => (
          <section key={c.name} className="panel overflow-hidden p-5">
            <div
              className="rounded-2xl p-4 text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{c.name}</span>
                <CreditCard className="h-4 w-4" />
              </div>
              <p className="mt-8 font-display text-lg tracking-widest">{c.number}</p>
              <div className="mt-4 flex items-center justify-between text-xs opacity-85">
                <span>{c.holder}</span>
                <span>{c.exp}</span>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface-2 px-3 py-2 text-xs font-medium transition-colors hover:bg-muted">
                <Snowflake className="h-3.5 w-3.5" /> Freeze
              </button>
              <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface-2 px-3 py-2 text-xs font-medium transition-colors hover:bg-muted">
                Details
              </button>
            </div>
          </section>
        ))}

        <button className="panel flex min-h-[220px] flex-col items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <Plus className="h-5 w-5" />
          Add new card
        </button>
      </div>
    </DashboardLayout>
  );
}
