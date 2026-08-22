import { Bell, Menu, Moon, Settings, Sun, ShoppingBag, DollarSign, Gauge } from "lucide-react";
import { useTheme } from "@/lib/theme";

const stats = [
  { label: "Total Revenue", value: "$47,255", cents: ".00", icon: DollarSign },
  { label: "AVG. Order Value", value: "$98,747", cents: ".00", icon: Gauge },
  { label: "New Order", value: "$47,255", cents: ".00", icon: ShoppingBag },
];

export function Topbar({ onMenu }: { onMenu: () => void }) {
  const { theme, mounted, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="flex flex-col gap-4 border-b border-border px-4 py-4 md:px-8 md:py-5 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex items-center gap-3 xl:hidden">
        <button
          onClick={onMenu}
          aria-label="Open menu"
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground lg:hidden"
        >
          <Menu className="h-4 w-4" />
        </button>
        <span className="font-display text-base font-semibold lg:hidden">Vorix</span>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-3 xl:max-w-4xl">
        {stats.map(({ label, value, cents, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-2 text-primary-soft">
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                {label}
              </p>
              <p className="font-display text-lg font-semibold">
                {value}
                <span className="text-muted-foreground">{cents}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 self-end">
        <button
          onClick={toggleTheme}
          className="grid h-10 w-10 place-items-center rounded-full text-primary-foreground transition-opacity hover:opacity-90"
          style={{ backgroundImage: "var(--gradient-primary)" }}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {mounted && !isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Settings"
        >
          <Settings className="h-4 w-4" />
        </button>
        <button
          className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-primary-soft" />
        </button>
        <div className="ml-1 flex items-center gap-2 rounded-full border border-border bg-surface py-1 pl-1 pr-3">
          <span
            className="grid h-8 w-8 place-items-center rounded-full text-xs font-semibold text-primary-foreground"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            AS
          </span>
          <span className="hidden text-sm sm:block">Amin S.</span>
        </div>
      </div>
    </header>
  );
}
