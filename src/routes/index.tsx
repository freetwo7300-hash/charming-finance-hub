import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { BalanceCards } from "@/components/dashboard/BalanceCards";
import { ReportChart } from "@/components/dashboard/ReportChart";
import { TransactionHistory } from "@/components/dashboard/TransactionHistory";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vorix — Finance Dashboard for Payments & Balances" },
      {
        name: "description",
        content:
          "Vorix finance dashboard: track balances, revenue, currency split and transaction history in one modern payments workspace.",
      },
      { property: "og:title", content: "Vorix — Finance Dashboard for Payments & Balances" },
      {
        property: "og:description",
        content:
          "Track balances, revenue, currency split and transaction history in one modern payments workspace.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
        <BalanceCards />
        <ReportChart />
      </div>
      <div className="mt-5">
        <TransactionHistory />
      </div>
    </DashboardLayout>
  );
}
