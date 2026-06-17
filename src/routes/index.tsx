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
                  author="Guss"
                  date="12.06.2026 às 12:28"
                  image="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop"
                />
                <NewsRow
                  category="Esports"
                  title="CBLOL 2026: LOUD e paiN Gaming se enfrentam na grande final"
                  author="Guss"
                  date="11.06.2026 às 19:42"
                  image="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2084&auto=format&fit=crop"
                />
                <NewsRow
                  category="Cinema & TV"
                  title="Deadpool & Wolverine quebra recordes de bilheteria mundial"
                  author="Guss"
                  date="11.06.2026 às 14:10"
                  image="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop"
                />
                <NewsRow
                  category="Games"
                  title="GTA VI: Novos rumores sugerem trailer em breve para os fãs"
                  author="Guss"
                  date="10.06.2026 às 09:55"
                  image="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
                />
                <NewsRow
                  category="Games"
                  title="Fable terá diferentes níveis de dificuldade"
                  author="Guss"
                  date="17.06.2026 às 10:56"
                  image="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2070&auto=format&fit=crop"
                />
                <NewsRow
                  category="FG Cards by Copag"
                  title="Por que Disney Lorcana funciona tão bem como produto familiar?"
                  author="Guss"
                  date="17.06.2026 às 10:00"
                  image="https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=2070&auto=format&fit=crop"
                />
                <NewsRow
                  category="Games"
                  title="Oferta de férias da PS Store: veja 15 jogos por menos de R$ 60"
                  author="Guss"
                  date="17.06.2026 às 9:44"
                  image="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2070&auto=format&fit=crop"
                />
                <NewsRow
                  category="Games"
                  title="Outward 2 é adiado para 2027"
                  author="Guss"
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
                <div className="mt-8 pt-6 border-t-2 border-dashed border-[#F5C518]/40">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#F5C518] rounded-sm">
                      <Zap className="w-3.5 h-3.5 text-white" fill="currentColor" />
                    </span>
                    <h3 className="text-base font-black italic tracking-tighter uppercase">As Mais Lidas da Semana</h3>
                  </div>
                  <div className="space-y-4">
                    <MostReadCard
                      category="Dicas"
                      title="Blox Fruits: veja a lista de códigos no Roblox e saiba como resgatar"
                      author="Guss"
                      image="https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=2070&auto=format&fit=crop"
                    />
                    <MostReadCard
                      category="Dicas"
                      title="Roblox: veja lista de códigos e saiba como resgatar itens de graça"
                      author="Guss"
                      image="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2070&auto=format&fit=crop"
                    />
                    <MostReadCard
                      category="Dicas"
                      title="Anime Fighters Simulator: veja a lista de códigos e saiba como resgatar"
                      author="Guss"
                      image="https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=2070&auto=format&fit=crop"
                    />
                    <MostReadCard
                      category="Dicas"
                      title="Qual é o próximo jogo grátis da Epic Games Store? Saiba aqui!"
                      author="Guss"
                      image="https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=2070&auto=format&fit=crop"
                    />
                    <MostReadCard
                      category="Games"
                      title="Steam: os 10 jogos mais vendidos da semana"
                      author="Guss"
                      image="https://images.unsplash.com/photo-1614294148960-9aa740632a87?q=80&w=2070&auto=format&fit=crop"
                    />
                  </div>
                </div>
              </aside>
            </div>

            <div className="flex justify-center mt-10">
              <button className="group inline-flex items-center gap-3 bg-[#F5C518] hover:bg-[#D4A912] text-white text-[11px] font-black uppercase tracking-widest px-6 py-3 rounded-sm transition-all">
                Ver mais notícias
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-white/60 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </section>

          {/* Podcasts e Vídeos */}
          <section className="relative bg-[#F5C518] py-12 mb-16 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.12] pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' fill='none' stroke='white' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><g transform='translate(6 14)'><path d='M6 12 Q0 12 0 6 Q0 0 6 0 H22 Q28 0 28 6 Q28 12 22 12 Z'/><circle cx='6' cy='6' r='1.2'/><circle cx='22' cy='6' r='1.2'/></g><g transform='translate(46 44)'><circle cx='8' cy='8' r='8'/><path d='M2 8 H14 M8 2 V14'/></g><g transform='translate(10 50)'><path d='M0 6 L6 0 L12 6 L6 12 Z'/></g><g transform='translate(54 8)'><rect x='0' y='0' width='14' height='10' rx='2'/><path d='M3 5 H11'/></g></svg>\")",
                backgroundSize: "120px 120px",
              }}
            />
            <div className="container mx-auto px-4 relative">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-4 h-4 text-white" fill="currentColor" />
                <h2 className="text-lg font-black italic tracking-tighter uppercase text-white">Podcasts e Vídeos</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] gap-6">
                {/* Card 1 */}
                <div className="group cursor-pointer">
                  <div className="relative aspect-video overflow-hidden rounded-sm bg-black mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
                      alt="GTA Online Secreto"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-2 left-2 bg-white text-[#F5C518] text-[9px] font-black px-2 py-1 rounded-sm uppercase tracking-widest">
                      Podcasts
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full shrink-0 mt-0.5">
                      <span className="text-[#F5C518] text-[10px]">▶</span>
                    </span>
                    <h3 className="text-[13px] font-black italic uppercase tracking-tight text-white leading-snug group-hover:underline">
                      GTA Online Secreto e Nintendo Switch 2! FGN #83
                    </h3>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group cursor-pointer">
                  <div className="relative aspect-video overflow-hidden rounded-sm bg-black mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=2070&auto=format&fit=crop"
                      alt="Cobertura Pokémon Presents"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-2 left-2 bg-white text-[#F5C518] text-[9px] font-black px-2 py-1 rounded-sm uppercase tracking-widest">
                      Vídeos
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full shrink-0 mt-0.5">
                      <span className="text-[#F5C518] text-[10px]">▶</span>
                    </span>
                    <h3 className="text-[13px] font-black italic uppercase tracking-tight text-white leading-snug group-hover:underline">
                      Cobertura Pokémon Presents!
                    </h3>
                  </div>

                  <a className="inline-flex items-center gap-2 mt-6 text-white text-[11px] font-black italic uppercase tracking-widest hover:underline cursor-pointer">
                    <span className="flex items-center justify-center w-5 h-5 bg-white rounded-sm">
                      <span className="text-[#F5C518] text-[8px]">▶</span>
                    </span>
                    Acesse nosso canal no YouTube →
                  </a>
                </div>

                {/* Right list */}
                <div className="space-y-4">
                  {[
                    { cat: "Podcasts", title: "Animes mais ESTRANHOS da HISTÓRIA! Flowtaku #05", img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=2070&auto=format&fit=crop" },
                    { cat: "Podcasts", title: "CAMILOTA XP, esports é com ela! Games4Gamers #81", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop" },
                    { cat: "Vídeos", title: "LANÇAMENTOS AGUARDADOS de AGOSTO!", img: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?q=80&w=2070&auto=format&fit=crop" },
                  ].map((item, i) => (
                    <article key={i} className="group cursor-pointer flex items-start gap-3">
                      <div className="relative w-28 sm:w-32 aspect-video flex-shrink-0 overflow-hidden rounded-sm bg-black">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/80 mb-1">{item.cat}</span>
                        <h4 className="text-[12px] font-black italic uppercase leading-snug tracking-tight text-white group-hover:underline line-clamp-3">
                          {item.title}
                        </h4>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <CategorySection
            title="Previews"
            bigCards={[
              { title: 'Zeus em God of War Laufey? "Possibilidade", diz diretora', image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" },
              { title: "Exodus ganha novo gameplay e tem vibe Mass Effect MUITO boa", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2070&auto=format&fit=crop" },
            ]}
            sideList={[
              { title: "Já jogamos! Star Fox vai deleitar os fãs no Switch 2", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=2070&auto=format&fit=crop" },
              { title: "Jogamos: Rayman Legends Retold é bem mais que um remake", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop" },
              { title: "Steam traz jogo divertido de plataforma na faixa", image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?q=80&w=2070&auto=format&fit=crop" },
            ]}
          />

          <CategorySection
            title="Dicas"
            bigCards={[
              { title: "Roblox: veja lista de códigos e saiba como resgatar itens de graça", image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2070&auto=format&fit=crop" },
              { title: "Anime Fighters Simulator: veja a lista de códigos e saiba como resgatar", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=2070&auto=format&fit=crop" },
            ]}
            sideList={[
              { title: "Blox Fruits: veja a lista de códigos no Roblox e saiba como resgatar", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=2070&auto=format&fit=crop" },
              { title: "Saiba qual é a agenda de podcasts do Games4Gamers nesta semana", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop" },
              { title: "Voidling Bound faz sucesso na Steam com mistura inusitada", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop" },
            ]}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

interface CategoryItem {
  title: string;
  image: string;
}

function CategorySection({ title, bigCards, sideList }: { title: string; bigCards: CategoryItem[]; sideList: CategoryItem[] }) {
  return (
    <section className="container mx-auto px-4 mb-12">
      <div className="flex items-center gap-2 mb-6">
        <span className="flex items-center justify-center w-6 h-6 bg-[#F5C518] rounded-sm">
          <Zap className="w-3.5 h-3.5 text-white" fill="currentColor" />
        </span>
        <h2 className="text-lg font-black italic tracking-tighter uppercase">{title}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-6 lg:gap-8 pb-6 border-b border-border">
        {/* Big cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:border-r lg:border-border lg:pr-8">
          {bigCards.map((c, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-sm bg-muted mb-3">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <h3 className="text-sm sm:text-[15px] font-black italic leading-snug tracking-tight text-foreground group-hover:text-flow-yellow transition-colors line-clamp-2">
                {c.title}
              </h3>
            </article>
          ))}
          <div className="sm:col-span-2 pt-2">
            <a className="inline-flex items-center gap-2 text-foreground/80 hover:text-[#F5C518] text-[11px] font-black uppercase tracking-widest cursor-pointer transition-colors">
              Ver mais
              <span className="text-[#F5C518]">→</span>
            </a>
          </div>
        </div>

        {/* Side list */}
        <div className="space-y-4">
          {sideList.map((item, i) => (
            <article key={i} className="group cursor-pointer flex items-start gap-3">
              <div className="relative w-28 sm:w-32 aspect-video flex-shrink-0 overflow-hidden rounded-sm bg-muted">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="flex flex-col min-w-0 pt-0.5">
                <h4 className="text-[13px] font-black italic leading-snug tracking-tight text-foreground group-hover:text-flow-yellow transition-colors line-clamp-3">
                  {item.title}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
