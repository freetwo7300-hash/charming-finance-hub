import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { BalanceCards } from "@/components/dashboard/BalanceCards";
import { ReportChart } from "@/components/dashboard/ReportChart";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Payments — Vorix Finance Dashboard" },
      {
        name: "description",
        content: "Send transfers, request funds and review payment volume across your currencies.",
      },
      { property: "og:title", content: "Payments — Vorix Finance Dashboard" },
      {
        property: "og:description",
        content: "Send transfers, request funds and review payment volume across your currencies.",
      },
    ],
  }),
  component: PaymentPage,
});

function PaymentPage() {
  return (
    <DashboardLayout title="Payment">
      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
        <BalanceCards />
        <ReportChart />
      </div>
    </DashboardLayout>
  );
}
