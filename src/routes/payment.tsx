import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { SendMoney } from "@/components/payment/SendMoney";
import { PaymentMethods } from "@/components/payment/PaymentMethods";
import { PaymentFlow } from "@/components/payment/PaymentFlow";
import { ScheduledPayments } from "@/components/payment/ScheduledPayments";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Payments — Vorix Finance Dashboard" },
      {
        name: "description",
        content: "Send instant transfers, manage payment methods and track outgoing and incoming payment flow.",
      },
      { property: "og:title", content: "Payments — Vorix Finance Dashboard" },
      {
        property: "og:description",
        content: "Send instant transfers, manage payment methods and track outgoing and incoming payment flow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PaymentPage,
});

const stats = [
  { label: "Sent this month", value: "$84,320.00", delta: "+12.4%", positive: true },
  { label: "Received", value: "$126,940.00", delta: "+8.1%", positive: true },
  { label: "Pending", value: "$3,120.00", delta: "3 payments", positive: false },
  { label: "Avg. settlement", value: "1.8s", delta: "Instant rail", positive: true },
];

function PaymentPage() {
  return (
    <DashboardLayout title="Payment">
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="panel p-4">
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className="mt-2 font-display text-xl font-semibold tracking-tight">{s.value}</p>
            <p className={`mt-1 text-xs ${s.positive ? "text-success" : "text-warning"}`}>{s.delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
        <div className="flex flex-col gap-5">
          <SendMoney />
          <PaymentMethods />
        </div>
        <div className="flex flex-col gap-5">
          <PaymentFlow />
          <ScheduledPayments />
        </div>
      </div>
    </DashboardLayout>
  );
}
