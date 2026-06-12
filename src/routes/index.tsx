import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { NewsRow, ReviewCard } from "@/components/NewsComponents";
import { FeaturedNewsGrid } from "@/components/FeaturedNewsGrid";
import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="min-h-screen bg-black" />;
  }

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
            <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
              <h2 className="text-2xl font-black italic tracking-tighter uppercase">Últimas Notícias</h2>
              <button className="text-[10px] font-black bg-muted hover:bg-flow-yellow hover:text-black px-4 py-2 rounded-sm transition-all uppercase">
                Ver Tudo
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,1.2fr)] gap-4 lg:gap-5">
              {/* Coluna esquerda: notícias */}
              <div className="lg:border-r lg:border-border lg:pr-4 xl:pr-5">
                <NewsRow
                  category="Reviews"
                  title="Review: Elden Ring: Shadow of the Erdtree é a perfeição em forma de DLC"
                  author="Bruno Micali"
                  date="12.06.2026 às 12:28"
                  image="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop"
                />
                <NewsRow
                  category="Esports"
                  title="CBLOL 2026: LOUD e paiN Gaming se enfrentam na grande final"
                  author="Vitor Almeida"
                  date="11.06.2026 às 19:42"
                  image="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2084&auto=format&fit=crop"
                />
                <NewsRow
                  category="Cinema & TV"
                  title="Deadpool & Wolverine quebra recordes de bilheteria mundial"
                  author="Igor Santos"
                  date="11.06.2026 às 14:10"
                  image="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop"
                />
                <NewsRow
                  category="Games"
                  title="GTA VI: Novos rumores sugerem trailer em breve para os fãs"
                  author="Phoenix Lima"
                  date="10.06.2026 às 09:55"
                  image="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
                />
              </div>

              {/* Coluna direita: reviews */}
              <aside>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-black italic tracking-tighter uppercase">Reviews</h3>
                  <span className="h-px flex-1 bg-border ml-4" />
                </div>
                <div className="space-y-3">
                  <ReviewCard
                    score="9.5"
                    title="Elden Ring: Shadow of the Erdtree - A obra-prima da FromSoftware"
                    image="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2070&auto=format&fit=crop"
                  />
                  <ReviewCard
                    score="8.7"
                    title="Final Fantasy XVI: Rebirth entrega aventura épica e emocionante"
                    image="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop"
                  />
                  <ReviewCard
                    score="9.0"
                    title="Hellblade II: Senua's Saga impressiona pela direção visual"
                    image="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop"
                  />
                </div>
              </aside>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
