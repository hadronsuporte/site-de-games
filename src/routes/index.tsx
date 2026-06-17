import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { NewsRow, ReviewCard, MostReadCard } from "@/components/NewsComponents";
import { Zap } from "lucide-react";
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

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,1.5fr)] gap-4 lg:gap-5">
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
                <NewsRow
                  category="Games"
                  title="Fable terá diferentes níveis de dificuldade"
                  author="Alvaro Neto"
                  date="17.06.2026 às 10:56"
                  image="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2070&auto=format&fit=crop"
                />
                <NewsRow
                  category="FG Cards by Copag"
                  title="Por que Disney Lorcana funciona tão bem como produto familiar?"
                  author="Equipe Flow Games"
                  date="17.06.2026 às 10:00"
                  image="https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=2070&auto=format&fit=crop"
                />
                <NewsRow
                  category="Games"
                  title="Oferta de férias da PS Store: veja 15 jogos por menos de R$ 60"
                  author="Thais Bassani"
                  date="17.06.2026 às 9:44"
                  image="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2070&auto=format&fit=crop"
                />
                <NewsRow
                  category="Games"
                  title="Outward 2 é adiado para 2027"
                  author="Thomas Schulze"
                  date="16.06.2026 às 14:54"
                  image="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop"
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
                  <ReviewCard
                    score="8.5"
                    title="Black Myth: Wukong surpreende com combate fluido e visuais deslumbrantes"
                    image="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
                  />
                  <ReviewCard
                    score="9.2"
                    title="Metaphor: ReFantazio nasce atemporal e é um verdadeiro jogaço"
                    image="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop"
                  />
                </div>

                {/* As Mais Lidas da Semana */}
                <div className="mt-8 pt-6 border-t-2 border-dashed border-[#c026d3]/40">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#c026d3] rounded-sm">
                      <Zap className="w-3.5 h-3.5 text-white" fill="currentColor" />
                    </span>
                    <h3 className="text-base font-black italic tracking-tighter uppercase">As Mais Lidas da Semana</h3>
                  </div>
                  <div className="space-y-4">
                    <MostReadCard
                      category="Dicas"
                      title="Blox Fruits: veja a lista de códigos no Roblox e saiba como resgatar"
                      author="Marcelo Rodrigues"
                      image="https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=2070&auto=format&fit=crop"
                    />
                    <MostReadCard
                      category="Dicas"
                      title="Roblox: veja lista de códigos e saiba como resgatar itens de graça"
                      author="Marcelo Rodrigues"
                      image="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2070&auto=format&fit=crop"
                    />
                    <MostReadCard
                      category="Dicas"
                      title="Anime Fighters Simulator: veja a lista de códigos e saiba como resgatar"
                      author="Marcelo Rodrigues"
                      image="https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=2070&auto=format&fit=crop"
                    />
                    <MostReadCard
                      category="Dicas"
                      title="Qual é o próximo jogo grátis da Epic Games Store? Saiba aqui!"
                      author="Vinicius Munhoz"
                      image="https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=2070&auto=format&fit=crop"
                    />
                    <MostReadCard
                      category="Games"
                      title="Steam: os 10 jogos mais vendidos da semana"
                      author="Alvaro Neto"
                      image="https://images.unsplash.com/photo-1614294148960-9aa740632a87?q=80&w=2070&auto=format&fit=crop"
                    />
                  </div>
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
