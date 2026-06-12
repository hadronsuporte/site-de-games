import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarSearchProps {
  collapsed?: boolean;
}

export function SidebarSearch({ collapsed }: SidebarSearchProps) {
  if (collapsed) {
    return (
      <div className="flex justify-center p-2 text-muted-foreground cursor-pointer hover:bg-muted dark:text-[#555] dark:hover:bg-[#ebebeb] rounded-lg mx-2 transition-all">
        <Search size={20} />
      </div>
    );
  }

  return (
    <div className="px-3 mb-6">
      <div className="relative flex items-center bg-background border border-border rounded-full px-3 py-2 focus-within:ring-1 focus-within:ring-ring transition-all dark:bg-white dark:border-[#ddd]">
        <Search size={18} className="text-muted-foreground mr-2 dark:text-[#999]" />
        <input
          type="text"
          placeholder="Pesquisar..."
          className="bg-transparent border-none outline-none text-sm w-full text-foreground placeholder:text-muted-foreground placeholder:font-bold placeholder:italic placeholder:uppercase dark:text-black dark:placeholder:text-[#999]"
        />
      </div>
    </div>
  );
}

