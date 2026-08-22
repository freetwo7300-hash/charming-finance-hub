import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const users = [
  { name: "Amin S.", email: "amin@vorix.io", role: "Owner", status: "Active" },
  { name: "Lena Ortiz", email: "lena@vorix.io", role: "Finance", status: "Active" },
  { name: "Marc Dubois", email: "marc@vorix.io", role: "Analyst", status: "Invited" },
  { name: "Sara Haddad", email: "sara@vorix.io", role: "Support", status: "Active" },
];

export const Route = createFileRoute("/users")({
  head: () => ({
    meta: [
      { title: "Users — Vorix Finance Dashboard" },
      {
        name: "description",
        content: "Manage team members, roles and access status inside your Vorix workspace.",
      },
      { property: "og:title", content: "Users — Vorix Finance Dashboard" },
      {
        property: "og:description",
        content: "Manage team members, roles and access status inside your Vorix workspace.",
      },
    ],
  }),
  component: UsersPage,
});

function UsersPage() {
  return (
    <DashboardLayout title="Users">
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {users.map((u) => (
          <section key={u.email} className="panel p-5">
            <span
              className="grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              {u.name
                .split(" ")
                .map((p) => p[0])
                .join("")}
            </span>
            <p className="mt-3 font-medium">{u.name}</p>
            <p className="truncate text-xs text-muted-foreground">{u.email}</p>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <span className="rounded-full bg-surface-2 px-2.5 py-1 text-muted-foreground">
                {u.role}
              </span>
              <span
                className={`rounded-full px-2.5 py-1 font-medium ${
                  u.status === "Active" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"
                }`}
              >
                {u.status}
              </span>
            </div>
          </section>
        ))}
      </div>
    </DashboardLayout>
  );
}
