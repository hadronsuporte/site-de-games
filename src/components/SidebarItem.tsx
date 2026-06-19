import React from "react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  collapsed?: boolean;
  href?: string;
}

export function SidebarItem({ icon, label, active, collapsed, href = "#" }: SidebarItemProps) {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 group",
        active
          ? "bg-muted text-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
        collapsed && "justify-center px-0",
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 transition-colors",
          active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
        )}
      >
        {icon}
      </div>
      {!collapsed && (
        <span
          className={cn(
            "text-sm font-bold uppercase tracking-tight italic",
            active ? "text-accent-foreground" : "text-muted-foreground group-hover:text-foreground",
          )}
        >
          {label}
        </span>
      )}
    </a>
  );
}
