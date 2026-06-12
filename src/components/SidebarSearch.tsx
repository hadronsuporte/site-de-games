import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarSearchProps {
  collapsed?: boolean;
}

export function SidebarSearch({ collapsed }: SidebarSearchProps) {
  if (collapsed) {
    return (
      <div className="flex justify-center p-2 text-[#555] cursor-pointer hover:bg-[#ebebeb] rounded-lg mx-2 transition-all">
        <Search size={20} />
      </div>
    );
  }

  return (
    <div className="px-3 mb-6">
      <div className="relative flex items-center bg-white border border-[#ddd] rounded-full px-3 py-2 focus-within:ring-1 focus-within:ring-[#ccc] transition-all">
        <Search size={18} className="text-[#999] mr-2" />
        <input
          type="text"
          placeholder="Pesquisar..."
          className="bg-transparent border-none outline-none text-sm w-full text-black placeholder:text-[#999] placeholder:font-bold placeholder:italic placeholder:uppercase"
        />
      </div>
    </div>
  );
}
