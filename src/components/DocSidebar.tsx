import { NavLink, useLocation } from "react-router-dom";
import { Home, BookOpen, Cpu, BarChart3, CheckCircle, FileText, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { title: "Overview", path: "/", icon: Home },
  { title: "Introduction", path: "/introduction", icon: BookOpen },
  { title: "Methodology", path: "/methodology", icon: Cpu },
  { title: "Results & Analysis", path: "/results", icon: BarChart3 },
  { title: "Conclusion", path: "/conclusion", icon: CheckCircle },
  { title: "References", path: "/references", icon: FileText },
];

export function DocSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden" onClick={onClose} />
      )}

      <aside
        className={cn(
          "fixed left-0 top-14 bottom-0 z-50 w-64 border-r border-border bg-sidebar overflow-y-auto transition-transform lg:translate-x-0 lg:z-30",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="p-4 space-y-1">
          <p className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Documentation
          </p>
          {sections.map((s) => {
            const active = location.pathname === s.path;
            return (
              <NavLink
                key={s.path}
                to={s.path}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-sidebar-foreground hover:bg-accent/50 hover:text-accent-foreground"
                )}
              >
                <s.icon className="h-4 w-4 shrink-0" />
                <span className="flex-1">{s.title}</span>
                {active && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 mt-4 mx-4 rounded-lg bg-accent/50 border border-border">
          <p className="text-xs font-medium text-accent-foreground">B.Tech Project</p>
          <p className="text-xs text-muted-foreground mt-1">IIT Jodhpur · 2023-24</p>
        </div>
      </aside>
    </>
  );
}
