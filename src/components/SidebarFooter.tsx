import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

interface SidebarFooterProps {
  collapsed?: boolean;
}

export function SidebarFooter({ collapsed }: SidebarFooterProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn("p-4 border-t border-border mt-auto bg-sidebar", collapsed && "flex flex-col items-center px-0 gap-2")}>
      <button
        onClick={toggleTheme}
        className={cn(
          "flex items-center gap-2 w-full px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-all text-xs font-bold uppercase italic",
          collapsed && "justify-center px-0"
        )}
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        {!collapsed && (
          <span className="flex-1 text-left">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
        )}
      </button>
    </div>
  );
}

