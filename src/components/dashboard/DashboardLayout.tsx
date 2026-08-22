import { useState, type ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function DashboardLayout({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <main className="relative min-w-0 flex-1">
        <div className="glow-surface pointer-events-none absolute -top-40 left-1/3 h-80 w-[640px] max-w-full opacity-40" />
        <div className="relative">
          <Topbar onMenu={() => setOpen(true)} />
          <div className="px-4 pb-10 pt-6 md:px-8">
            <h1 className="font-display text-2xl font-semibold tracking-tight">{title}</h1>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
