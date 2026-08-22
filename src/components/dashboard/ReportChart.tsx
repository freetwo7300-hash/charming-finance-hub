import { ChevronDown, Info } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", income: 1.2, spend: -1.0 },
  { month: "Feb", income: 3.4, spend: -0.6 },
  { month: "Mar", income: 7.6, spend: -0.4 },
  { month: "Apr", income: 5.2, spend: -1.0 },
  { month: "May", income: 9.1, spend: -0.5 },
  { month: "Jun", income: 4.3, spend: -0.8 },
  { month: "Jul", income: 8.4, spend: -0.3 },
  { month: "Aug", income: 6.2, spend: -0.9 },
  { month: "Sep", income: 7.1, spend: -0.4 },
  { month: "Oct", income: 3.8, spend: -1.1 },
  { month: "Nov", income: 8.8, spend: -0.6 },
  { month: "Dec", income: 9.6, spend: -0.4 },
];

const highlight = "Jun";

function ReportTooltip({ active, payload }: { active?: boolean; payload?: any[] }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-center shadow-lg">
      <p className="font-display text-sm font-semibold">${payload[0].value}</p>
      <p className="text-[10px] text-muted-foreground">Income</p>
    </div>
  );
}

export function ReportChart() {
  return (
    <section className="panel p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Report</span>
          <Info className="h-3.5 w-3.5" />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-3 py-2 text-xs text-muted-foreground">
            This Year
            <ChevronDown className="h-3 w-3" />
          </button>
          <button className="flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-3 py-2 text-xs text-muted-foreground">
            This Month
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="mt-5 h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={-22} margin={{ top: 8, right: 4, left: -14, bottom: 0 }}>
            <CartesianGrid stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
              tickFormatter={(v: number) => `$${v}K`}
            />
            <Tooltip content={<ReportTooltip />} cursor={{ fill: "var(--muted)", opacity: 0.3 }} />
            <Bar dataKey="spend" radius={[6, 6, 6, 6]} barSize={22} fill="var(--chart-5)" />
            <Bar dataKey="income" radius={[6, 6, 6, 6]} barSize={22}>
              {data.map((d) => (
                <Cell
                  key={d.month}
                  fill={d.month === highlight ? "var(--primary-soft)" : "var(--chart-1)"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
