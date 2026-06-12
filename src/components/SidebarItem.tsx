import React from "react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  collapsed?: boolean;
}

export function SidebarItem({ icon, label, active, collapsed }: SidebarItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 group",
        active 
          ? "bg-accent text-accent-foreground" 
          : "text-muted-foreground hover:bg-muted hover:text-foreground dark:hover:text-black",
        collapsed && "justify-center px-0"
      )}
    >
      <div className={cn("flex-shrink-0 transition-colors", active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground dark:group-hover:text-black")}>
        {icon}
      </div>
      {!collapsed && (
        <span className={cn("text-sm font-bold uppercase tracking-tight italic", active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground dark:group-hover:text-black")}>
          {label}
        </span>
      )}
    </div>

  );
}
