import { Link } from "@tanstack/react-router";
import { Search, Youtube, Instagram, Twitter, Linkedin, MessageSquare, ExternalLink, Menu } from "lucide-react";

export function Navbar() {
  const navItems = [
    "NOTÍCIAS", "REVIEWS", "GAMES", "ESPORTS", "CULTURA POP", "LOW GAMES", "ESPECIAIS", "FG CARDS BY COPAG", "FLOW STORE", "FLOW PING"
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        {/* Top bar with social and search */}
        <div className="flex items-center justify-between py-2 border-b border-white/5">
          <div className="flex items-center gap-4">
            <Youtube className="w-4 h-4 text-white hover:text-flow-yellow cursor-pointer" />
            <Instagram className="w-4 h-4 text-white hover:text-flow-yellow cursor-pointer" />
            <Twitter className="w-4 h-4 text-white hover:text-flow-yellow cursor-pointer" />
            <Linkedin className="w-4 h-4 text-white hover:text-flow-yellow cursor-pointer" />
            <MessageSquare className="w-4 h-4 text-white hover:text-flow-yellow cursor-pointer" />
          </div>
          <div className="flex items-center gap-4">
            <Search className="w-4 h-4 text-white cursor-pointer" />
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-flow-yellow flex items-center justify-center rounded-sm rotate-12">
                <span className="text-black font-black text-xl -rotate-12">F</span>
              </div>
              <span className="text-white font-black text-2xl tracking-tighter">FLOW GAMES</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item}
                to="/"
                className="text-[11px] font-bold text-white hover:text-flow-yellow transition-colors whitespace-nowrap"
              >
                {item}
              </Link>
            ))}
          </nav>

          <button className="lg:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
