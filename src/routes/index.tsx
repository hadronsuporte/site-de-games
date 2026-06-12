import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsComponents";
import { FeaturedNewsGrid } from "@/components/FeaturedNewsGrid";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-flow-yellow selection:text-black flex transition-colors duration-300">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div 
        className={cn(
          "flex-1 transition-all duration-300",
          isCollapsed ? "ml-[70px]" : "ml-[260px]"
        )}
      >
        <main className="bg-background">
          <div className="pt-6">
            <FeaturedNewsGrid />
          </div>

          <section className="container mx-auto px-4 mb-16">
            <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
              <h2 className="text-2xl font-black italic tracking-tighter uppercase">Últimas Notícias</h2>
              <button className="text-[10px] font-black bg-muted hover:bg-flow-yellow hover:text-black px-4 py-2 rounded-sm transition-all uppercase">
                Ver Tudo
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <NewsCard
                category="REVIEWS"
                title="Review: Elden Ring: Shadow of the Erdtree é a perfeição em forma de DLC"
                author="Bruno Micali"
                date="Hoje"
                image="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop"
              />
              <NewsCard
                category="ESPORTS"
                title="CBLOL 2026: LOUD e paiN Gaming se enfrentam na grande final"
                author="Vitor"
                date="Ontem"
                image="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2084&auto=format&fit=crop"
              />
              <NewsCard
                category="CULTURA POP"
                title="Deadpool & Wolverine quebra recordes de bilheteria mundial"
                author="Igor"
                date="Ontem"
                image="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop"
              />
              <NewsCard
                category="GAMES"
                title="GTA VI: Novos rumores sugerem trailer em breve"
                author="Phoenix"
                date="10.06.2026"
                image="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
