import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const rows = [
  { period: "Q1 2026", base: "$182,400.00", rate: "19%", due: "$34,656.00", status: "Filed" },
  { period: "Q4 2025", base: "$164,120.00", rate: "19%", due: "$31,182.80", status: "Filed" },
  { period: "Q3 2025", base: "$151,900.00", rate: "19%", due: "$28,861.00", status: "Pending" },
  { period: "Q2 2025", base: "$139,540.00", rate: "19%", due: "$26,512.60", status: "Filed" },
];

export const Route = createFileRoute("/taxes")({
  head: () => ({
    meta: [
      { title: "Taxes — Vorix Finance Dashboard" },
      {
        name: "description",
        content: "Review quarterly taxable base, applied rates and amounts due for each period.",
      },
      { property: "og:title", content: "Taxes — Vorix Finance Dashboard" },
      {
        property: "og:description",
        content: "Review quarterly taxable base, applied rates and amounts due for each period.",
      },
    ],
  }),
  component: TaxesPage,
});

function TaxesPage() {
  return (
    <DashboardLayout title="Taxes">
      <section className="panel mt-5 overflow-x-auto p-5">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              <th className="pb-3 font-medium">Period</th>
              <th className="pb-3 font-medium">Taxable base</th>
              <th className="pb-3 font-medium">Rate</th>
              <th className="pb-3 font-medium">Due</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.period} className="border-t border-border">
                <td className="py-3 font-medium">{r.period}</td>
                <td className="py-3 text-muted-foreground">{r.base}</td>
                <td className="py-3 text-muted-foreground">{r.rate}</td>
                <td className="py-3">{r.due}</td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      r.status === "Filed"
                        ? "bg-success/15 text-success"
                        : "bg-warning/15 text-warning"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </DashboardLayout>
  );
}
