import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X, Github } from "lucide-react";
import { DocSidebar } from "./DocSidebar";
import { cn } from "@/lib/utils";

export function DocLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="flex h-full items-center px-4 gap-4">
          <button
            className="lg:hidden p-1.5 rounded-md hover:bg-muted transition-colors"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg doc-gradient flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">LT</span>
            </div>
            <div>
              <span className="text-sm font-semibold text-foreground">Lottery Tickets in FSL</span>
            </div>
          </div>

          <div className="flex-1" />

          <span className="hidden sm:inline text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium">
            Research Docs
          </span>
        </div>
      </header>

      <DocSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <main className={cn("pt-14 lg:pl-64 min-h-screen")}>
        <div className="max-w-3xl mx-auto px-6 py-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
