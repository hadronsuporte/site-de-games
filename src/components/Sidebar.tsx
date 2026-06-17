import {
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Dice5,
  Gamepad2,
  Gem,
  Home,
  Image as ImageIcon,
  Monitor,
  MoreHorizontal,
  Play,
  Sparkles,
  Star,
  Tag,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { MenuItemContent } from "@/lib/site-content";
import { SidebarItem } from "./SidebarItem";
import { SidebarSearch } from "./SidebarSearch";
import { SidebarFooter } from "./SidebarFooter";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  menuItems: MenuItemContent[];
  logoTop: string;
  logoBottom: string;
}

const iconMap = {
  home: Home,
  gamepad: Gamepad2,
  star: Star,
  dice: Dice5,
  clapperboard: Clapperboard,
  sparkles: Sparkles,
  monitor: Monitor,
  tag: Tag,
  gem: Gem,
  play: Play,
  image: ImageIcon,
  more: MoreHorizontal,
};

export function Sidebar({
  isCollapsed,
  setIsCollapsed,
  menuItems,
  logoTop,
  logoBottom,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar border-r border-border flex flex-col transition-all duration-300 z-50",
        isCollapsed ? "w-[70px]" : "w-[260px]",
      )}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-10 bg-background border border-border rounded-full p-1 text-muted-foreground hover:text-foreground shadow-sm z-[60] transition-transform hover:scale-110"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      <div className={cn("p-6 mb-2", isCollapsed && "flex justify-center p-4")}>
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 bg-foreground flex items-center justify-center rounded-sm transition-transform group-hover:scale-105 flex-shrink-0">
            <span className="text-background font-black text-lg italic">G</span>
          </div>
          {!isCollapsed && (
            <div className="flex flex-col -gap-1">
              <span className="text-foreground font-black text-xl tracking-tighter leading-none italic">
                {logoTop}
              </span>
              <span className="text-foreground font-black text-xl tracking-tighter leading-none italic">
                {logoBottom}
              </span>
            </div>
          )}
        </Link>
      </div>

      <SidebarSearch collapsed={isCollapsed} />

      <nav className="flex-1 overflow-y-auto px-3 space-y-1 custom-scrollbar">
        {menuItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap] ?? MoreHorizontal;

          return (
            <SidebarItem
              key={item.id}
              icon={<Icon size={20} />}
              label={item.label}
              active={item.active}
              collapsed={isCollapsed}
              href={item.href}
            />
          );
        })}
      </nav>

      <SidebarFooter collapsed={isCollapsed} />
    </aside>
  );
}
