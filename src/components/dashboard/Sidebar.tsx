import { Link } from "@tanstack/react-router";
import { Search, Sparkles, X } from "lucide-react";
import { navItems } from "./nav-items";

function SidebarBody({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <div>
        <div className="flex items-center justify-between gap-2 px-2">
          <Link to="/" onClick={onNavigate} className="flex items-center gap-2">
            <span
              className="grid h-8 w-8 place-items-center rounded-lg text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">Vorix</span>
          </Link>
          {onNavigate ? (
            <button
              onClick={onNavigate}
              aria-label="Close menu"
              className="grid h-8 w-8 place-items-center rounded-lg border border-border text-muted-foreground lg:hidden"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-xl border border-border bg-surface-2/60 px-3 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search"
            aria-label="Search"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <span className="whitespace-nowrap rounded-md bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
            ⌘ +K
          </span>
        </div>

        <p className="mt-7 px-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Main Menu
        </p>

        <nav className="mt-3 space-y-1">
          {navItems.map(({ label, to, icon: Icon }) => (
            <Link
              key={label}
              to={to}
              onClick={onNavigate}
              activeOptions={{ exact: to === "/" }}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent/50 hover:text-foreground data-[status=active]:bg-sidebar-accent data-[status=active]:font-medium data-[status=active]:text-sidebar-accent-foreground"
            >
              <Icon className="h-4 w-4" />
              <span className="flex-1 text-left">{label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl p-4"
        style={{ backgroundImage: "var(--gradient-primary)" }}
      >
        <p className="text-sm font-semibold text-primary-foreground">Activate Super</p>
        <p className="mt-1 text-xs text-primary-foreground/80">
          Upgrade for unlimited transfers and deeper insights.
        </p>
        <button className="mt-3 rounded-lg bg-background/25 px-3 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/40">
          Upgrade now
        </button>
      </div>
    </div>
  );
}

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <aside className="hidden w-[248px] shrink-0 border-r border-sidebar-border bg-sidebar px-4 pb-5 pt-6 lg:block">
        <div className="sticky top-6 h-[calc(100vh-3rem)]">
          <SidebarBody />
        </div>
      </aside>

      {/* Mobile drawer */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[264px] max-w-[85vw] overflow-y-auto border-r border-sidebar-border bg-sidebar px-4 pb-5 pt-6 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarBody onNavigate={onClose} />
      </aside>
    </>
  );
}
