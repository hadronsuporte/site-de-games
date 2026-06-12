import { Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarFooterProps {
  collapsed?: boolean;
}

export function SidebarFooter({ collapsed }: SidebarFooterProps) {
  return (
    <div className={cn("p-4 border-t border-[#ddd] mt-auto bg-[#f3f3f3]", collapsed && "flex justify-center px-0")}>
      <button className={cn(
        "flex items-center gap-2 w-full px-3 py-2 text-[#555] hover:bg-[#ebebeb] hover:text-black rounded-lg transition-all text-xs font-bold uppercase italic",
        collapsed && "justify-center px-0"
      )}>
        <Globe size={18} />
        {!collapsed && (
          <>
            <span className="flex-1 text-left">Change Region</span>
            <ChevronDown size={14} />
          </>
        )}
      </button>
    </div>
  );
}
