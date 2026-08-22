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
  { month: "Jan", base: -1.2, value: 2.6, top: 1.4 },
  { month: "Feb", base: 0.4, value: 3.2, top: 3.6 },
  { month: "Mar", base: 2.6, value: 5.8, top: 8.4 },
  { month: "Apr", base: 1.2, value: 4.2, top: 5.4 },
  { month: "May", base: 3.1, value: 6.5, top: 9.6 },
  { month: "Jun", base: 1.8, value: 2.5, top: 4.3 },
  { month: "Jul", base: 2.4, value: 6.4, top: 8.8 },
  { month: "Aug", base: 1.6, value: 4.8, top: 6.4 },
  { month: "Sep", base: 2.2, value: 5.2, top: 7.4 },
  { month: "Oct", base: -0.6, value: 4.4, top: 3.8 },
  { month: "Nov", base: 3.4, value: 5.8, top: 9.2 },
  { month: "Dec", base: 4.2, value: 6.2, top: 10.4 },
];

const dimmed = new Set(["Jan", "Oct"]);

const highlight = "Jun";

function ReportTooltip({ active, payload }: { active?: boolean; payload?: any[] }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-center shadow-lg">
      <p className="font-display text-sm font-semibold">${payload[0].payload.top}</p>
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

      <div className="mt-5 h-[420px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 4, left: -14, bottom: 0 }}>
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
            <Bar dataKey="base" stackId="a" barSize={26} fill="transparent" isAnimationActive={false} />
            <Bar dataKey="value" stackId="a" radius={[8, 8, 8, 8]} barSize={26}>
              {data.map((d) => (
                <Cell
                  key={d.month}
                  fill={
                    d.month === highlight
                      ? "var(--primary-soft)"
                      : dimmed.has(d.month)
                        ? "var(--chart-5)"
                        : "var(--chart-1)"
                  }
                />
              ))}
            </Bar>

          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
