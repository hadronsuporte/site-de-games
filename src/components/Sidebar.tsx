import React from "react";
import { 
  Home, 
  Gamepad2, 
  Star, 
  Dice5, 
  Clapperboard, 
  Sparkles, 
  Monitor, 
  Tag, 
  Gem, 
  Play, 
  Image as ImageIcon, 
  MoreHorizontal,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarItem } from "./SidebarItem";
import { SidebarSearch } from "./SidebarSearch";
import { SidebarFooter } from "./SidebarFooter";
import { Link } from "@tanstack/react-router";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const menuItems = [
    { icon: <Home size={20} />, label: "Início", active: true },
    { icon: <Gamepad2 size={20} />, label: "PS5" },
    { icon: <Gamepad2 size={20} />, label: "Xbox Series X/S" },
    { icon: <Gamepad2 size={20} />, label: "Switch" },
    { icon: <Star size={20} />, label: "Reviews" },
    { icon: <Dice5 size={20} />, label: "Tabletop" },
    { icon: <Clapperboard size={20} />, label: "Cinema & TV" },
    { icon: <Sparkles size={20} />, label: "Anime" },
    { icon: <Monitor size={20} />, label: "Tech" },
    { icon: <Tag size={20} />, label: "Descontos" },
    { icon: <Gem size={20} />, label: "Codashop" },
    { icon: <Play size={20} />, label: "Vídeos" },
    { icon: <ImageIcon size={20} />, label: "Galerias" },
    { icon: <MoreHorizontal size={20} />, label: "Ver Mais" },
  ];

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar border-r border-border flex flex-col transition-all duration-300 z-50",
        isCollapsed ? "w-[70px]" : "w-[260px]"
      )}
    >
      {/* Retractable Button */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-10 bg-background border border-border rounded-full p-1 text-muted-foreground hover:text-foreground shadow-sm z-[60] transition-transform hover:scale-110"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Logo */}
      <div className={cn("p-6 mb-2", isCollapsed && "flex justify-center p-4")}>
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 bg-foreground flex items-center justify-center rounded-sm transition-transform group-hover:scale-105 flex-shrink-0">
            <span className="text-background font-black text-lg italic">F</span>
          </div>
          {!isCollapsed && (
            <div className="flex flex-col -gap-1">
              <span className="text-foreground font-black text-xl tracking-tighter leading-none italic">FLOW</span>
              <span className="text-foreground font-black text-xl tracking-tighter leading-none italic">GAMES</span>
            </div>
          )}
        </Link>
      </div>

      {/* Search */}
      <SidebarSearch collapsed={isCollapsed} />

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto px-3 space-y-1 custom-scrollbar">
        {menuItems.map((item, index) => (
          <SidebarItem 
            key={index}
            icon={item.icon}
            label={item.label}
            active={item.active}
            collapsed={isCollapsed}
          />
        ))}
      </nav>

      {/* Footer */}
      <SidebarFooter collapsed={isCollapsed} />
    </aside>
  );
}
