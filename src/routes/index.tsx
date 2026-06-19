import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Play, Zap } from "lucide-react";
import { FeaturedNewsGrid } from "@/components/FeaturedNewsGrid";
import { Footer } from "@/components/Footer";
import { MostReadCard, NewsRow, ReviewCard } from "@/components/NewsComponents";
import { Sidebar } from "@/components/Sidebar";
import gamingDoodles from "@/assets/gaming-doodles.png.asset.json";
import { useSiteContent, type CategoryItemContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { content } = useSiteContent();

  const featuredVideos = content.videos.slice(0, 2);
  const sideVideos = content.videos.slice(2, 5);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-flow-yellow selection:text-black flex transition-colors duration-300">
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        menuItems={content.menuItems}
        logoTop={content.settings.logoTop}
        logoBottom={content.settings.logoBottom}
      />

      <div
        className={cn(
          "flex-1 transition-all duration-300",
          isCollapsed ? "ml-[70px]" : "ml-[260px]",
        )}
      >
        <main className="bg-background">
          <div className="pt-6">
            <FeaturedNewsGrid news={content.featuredNews} />
          </div>

          <section className="container mx-auto px-4 mb-16">
            <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
              <h2 className="text-2xl font-black italic tracking-tighter uppercase">
                Últimas Notícias
              </h2>
              <button className="text-[10px] font-black bg-muted hover:bg-flow-yellow hover:text-black px-4 py-2 rounded-sm transition-all uppercase">
                Ver Tudo
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,1.5fr)] gap-4 lg:gap-5">
              <div className="lg:border-r lg:border-border lg:pr-4 xl:pr-5">
                {content.latestNews.map((item) => (
                  <NewsRow
                    key={item.id}
                    category={item.category}
                    title={item.title}
                    summary={item.summary}
                    author={item.author}
                    date={item.date}
                    image={item.image}
                  />
                ))}
              </div>

              <aside>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-black italic tracking-tighter uppercase">Reviews</h3>
                  <span className="h-px flex-1 bg-border ml-4" />
                </div>
                <div className="space-y-3">
                  {content.reviews.map((item) => (
                    <ReviewCard
                      key={item.id}
                      score={item.score}
                      title={item.title}
                      image={item.image}
                    />
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t-2 border-dashed border-[#F5C518]/40">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#F5C518] rounded-sm">
                      <Zap className="w-3.5 h-3.5 text-black" fill="currentColor" />
                    </span>
                    <h3 className="text-base font-black italic tracking-tighter uppercase">
                      As Mais Lidas da Semana
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {content.mostRead.map((item) => (
                      <MostReadCard
                        key={item.id}
                        category={item.category}
                        title={item.title}
                        author={item.author}
                        image={item.image}
                      />
                    ))}
                  </div>
                </div>
              </aside>
            </div>

            <div className="flex justify-center mt-10">
              <button className="group relative inline-flex items-center gap-3 bg-gradient-to-b from-[#FFD83D] to-[#F5C518] hover:from-[#FFE055] hover:to-[#E8B810] text-black text-[11px] font-black uppercase tracking-[0.2em] px-8 py-4 rounded-md shadow-[0_6px_0_0_#9A7A0E,0_10px_20px_-6px_rgba(245,197,24,0.6)] hover:shadow-[0_4px_0_0_#9A7A0E,0_8px_16px_-6px_rgba(245,197,24,0.7)] hover:translate-y-[2px] active:translate-y-[6px] active:shadow-[0_0_0_0_#9A7A0E] transition-all duration-150 border border-black/10">
                <span className="relative">Ver mais notícias</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-[1.5px] border-black/70 group-hover:bg-black/10 group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-3 h-3" strokeWidth={3} />
                </span>
              </button>
            </div>
          </section>


          {content.categorySections.map((section) => (
            <CategorySection
              key={section.id}
              title={section.title}
              bigCards={section.bigCards}
              sideList={section.sideList}
            />
          ))}
        </main>
        <Footer settings={content.settings} sections={content.footerSections} />
      </div>
    </div>
  );
}

function CategorySection({
  title,
  bigCards,
  sideList,
}: {
  title: string;
  bigCards: CategoryItemContent[];
  sideList: CategoryItemContent[];
}) {
  return (
    <section className="container mx-auto px-4 mb-12">
      <div className="flex items-center gap-2 mb-6">
        <span className="flex items-center justify-center w-6 h-6 bg-[#F5C518] rounded-sm">
          <Zap className="w-3.5 h-3.5 text-black" fill="currentColor" />
        </span>
        <h2 className="text-lg font-black italic tracking-tighter uppercase">{title}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-6 lg:gap-8 pb-6 border-b border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:border-r lg:border-border lg:pr-8">
          {bigCards.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-sm bg-muted mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm sm:text-[15px] font-black italic leading-snug tracking-tight text-foreground group-hover:text-flow-yellow transition-colors line-clamp-2">
                {item.title}
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

        <div className="space-y-4">
          {sideList.map((item) => (
            <article key={item.id} className="group cursor-pointer flex items-start gap-3">
              <div className="relative w-28 sm:w-32 aspect-video flex-shrink-0 overflow-hidden rounded-sm bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
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
