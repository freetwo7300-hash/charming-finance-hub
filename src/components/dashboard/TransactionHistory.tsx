import { Info, MoreVertical, Trash2 } from "lucide-react";

type Status = "Successful" | "Pending" | "Failed";

const rows: {
  name: string;
  id: string;
  date: string;
  amount: string;
  status: Status;
  logo: string;
}[] = [
  {
    name: "Chat Gpt",
    id: "A3652",
    date: "20 July 2025",
    amount: "$585,658.00",
    status: "Successful",
    logo: "GP",
  },
  {
    name: "Gitlab",
    id: "B5784",
    date: "21 July 2025",
    amount: "$965,854.00",
    status: "Pending",
    logo: "GL",
  },
  {
    name: "Nextjs",
    id: "C8542",
    date: "25 July 2025",
    amount: "$985,414.00",
    status: "Successful",
    logo: "NX",
  },
  {
    name: "Figma",
    id: "D1198",
    date: "28 July 2025",
    amount: "$412,320.00",
    status: "Failed",
    logo: "FG",
  },
  {
    name: "Vercel",
    id: "E4471",
    date: "02 Aug 2025",
    amount: "$774,090.00",
    status: "Successful",
    logo: "VC",
  },
];

const statusClass: Record<Status, string> = {
  Successful: "border-success/30 bg-success/10 text-success",
  Pending: "border-warning/30 bg-warning/10 text-warning",
  Failed: "border-destructive/30 bg-destructive/10 text-destructive",
};

export function TransactionHistory() {
  return (
    <section className="panel p-5">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Transaction History</span>
        <Info className="h-3.5 w-3.5" />
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              <th className="pb-3 font-normal">Transaction</th>
              <th className="pb-3 font-normal">Date</th>
              <th className="pb-3 font-normal">Approx</th>
              <th className="pb-3 font-normal">Status</th>
              <th className="pb-3 text-right font-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-border">
                <td className="py-3.5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-surface-2 text-[11px] font-semibold text-primary-soft">
                      {r.logo}
                    </span>
                    <div>
                      <p className="font-medium">{r.name}</p>
                      <p className="text-xs text-muted-foreground">ID: {r.id}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 text-muted-foreground">{r.date}</td>
                <td className="py-3.5 font-display font-medium">{r.amount}</td>
                <td className="py-3.5">
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass[r.status]}`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="py-3.5">
                  <div className="flex items-center justify-end gap-1 text-muted-foreground">
                    <button
                      className="grid h-8 w-8 place-items-center rounded-lg transition-colors hover:bg-muted hover:text-foreground"
                      aria-label={`More options for ${r.name}`}
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>
                    <button
                      className="grid h-8 w-8 place-items-center rounded-lg transition-colors hover:bg-destructive/15 hover:text-destructive"
                      aria-label={`Delete ${r.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
