import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { TransactionHistory } from "@/components/dashboard/TransactionHistory";

export const Route = createFileRoute("/transactions")({
  head: () => ({
    meta: [
      { title: "Transactions — Vorix Finance Dashboard" },
      {
        name: "description",
        content: "Browse every incoming and outgoing transaction with status and amount details.",
      },
      { property: "og:title", content: "Transactions — Vorix Finance Dashboard" },
      {
        property: "og:description",
        content: "Browse every incoming and outgoing transaction with status and amount details.",
      },
    ],
  }),
  component: TransactionsPage,
});

function TransactionsPage() {
  return (
    <DashboardLayout title="Transactions">
      <div className="mt-5">
        <TransactionHistory />
      </div>
    </DashboardLayout>
  );
}
