import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap } from "lucide-react";
import { FeaturedNewsGrid } from "@/components/FeaturedNewsGrid";
import { Footer } from "@/components/Footer";
import { MostReadCard, NewsRow, ReviewCard } from "@/components/NewsComponents";
import { Sidebar } from "@/components/Sidebar";
import { useSiteContent, type CategoryItemContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { content } = useSiteContent();

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
                    id={item.id}
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
                      id={item.id}
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
                        id={item.id}
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
              <button className="inline-flex items-center gap-3 bg-[#FFD60A] hover:bg-[#FFC700] text-black text-sm font-bold uppercase tracking-wider px-8 py-3 transition-colors duration-150">
                <span>Ver mais notícias</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
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
