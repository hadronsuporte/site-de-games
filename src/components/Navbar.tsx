import { Link } from "@tanstack/react-router";
import { Search, Youtube, Instagram, Twitter, Linkedin, MessageSquare, Menu } from "lucide-react";

export function Navbar() {
  const navItems = [
    "NOTÍCIAS", "REVIEWS", "GAMES", "ESPORTS", "CULTURA POP", "LOW GAMES", "ESPECIAIS", "FG CARDS BY COPAG", "FLOW STORE", "FLOW PING"
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#121212]/95 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 border-b border-white/5">
          <div className="flex items-center gap-3">
            <Youtube className="w-3.5 h-3.5 text-white/70 hover:text-flow-yellow cursor-pointer transition-colors" />
            <Instagram className="w-3.5 h-3.5 text-white/70 hover:text-flow-yellow cursor-pointer transition-colors" />
            <Twitter className="w-3.5 h-3.5 text-white/70 hover:text-flow-yellow cursor-pointer transition-colors" />
            <Linkedin className="w-3.5 h-3.5 text-white/70 hover:text-flow-yellow cursor-pointer transition-colors" />
            <MessageSquare className="w-3.5 h-3.5 text-white/70 hover:text-flow-yellow cursor-pointer transition-colors" />
          </div>
          <div className="flex items-center">
            <Search className="w-4 h-4 text-white/70 hover:text-flow-yellow cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex items-center justify-between py-3 md:py-5">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 bg-flow-yellow flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
              <span className="text-black font-black text-xl italic">F</span>
            </div>
            <div className="flex flex-col -gap-1">
              <span className="text-white font-black text-xl md:text-2xl tracking-tighter leading-none italic">FLOW</span>
              <span className="text-white font-black text-xl md:text-2xl tracking-tighter leading-none italic">GAMES</span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item}
                to="/"
                className="text-[10px] font-black text-white/80 hover:text-flow-yellow transition-colors whitespace-nowrap tracking-wider"
              >
                {item}
              </Link>
            ))}
          </nav>

          <button className="xl:hidden text-white/80 p-1">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

