import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Facebook, Twitter, MessageCircle, ArrowLeft, User, Clock } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { useSiteContent, type SiteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/noticia/$id")({
  component: NewsDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-3xl font-black italic mb-4">Notícia não encontrada</h1>
        <Link to="/" className="text-flow-yellow font-bold uppercase tracking-wider">
          ← Voltar à home
        </Link>
      </div>
    </div>
  ),
});

interface ResolvedNews {
  title: string;
  image: string;
  category: string;
  summary?: string;
  author?: string;
  date?: string;
}

function findNews(content: SiteContent, id: string): ResolvedNews | null {
  const featured = content.featuredNews.find((n) => n.id === id);
  if (featured)
    return {
      title: featured.title,
      image: featured.image,
      category: featured.category,
      author: "Redação",
      date: new Date().toLocaleDateString("pt-BR"),
    };

  const latest = content.latestNews.find((n) => n.id === id);
  if (latest)
    return {
      title: latest.title,
      image: latest.image,
      category: latest.category,
      summary: latest.summary,
      author: latest.author,
      date: latest.date,
    };

  const most = content.mostRead.find((n) => n.id === id);
  if (most)
    return {
      title: most.title,
      image: most.image,
      category: most.category,
      author: most.author,
    };

  const review = content.reviews.find((n) => n.id === id);
  if (review)
    return {
      title: review.title,
      image: review.image,
      category: "Reviews",
    };

  for (const section of content.categorySections) {
    const item =
      section.bigCards.find((i) => i.id === id) ?? section.sideList.find((i) => i.id === id);
    if (item) return { title: item.title, image: item.image, category: section.title };
  }

  return null;
}

function NewsDetail() {
  const { id } = Route.useParams();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { content } = useSiteContent();
  const news = findNews(content, id);

  if (!news) throw notFound();

  return (
    <div className="min-h-screen bg-background text-foreground flex transition-colors duration-300">
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
          <article className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-4 mb-8 flex-wrap max-w-[990px] mx-auto">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-flow-yellow text-xs font-black uppercase tracking-widest transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Link>
            </div>

            {/* Layered hero */}
            <div className="mx-auto max-w-[990px]">
              {/* Image + yellow plate */}
              <div className="relative z-20 mx-auto w-full max-w-[840px]">
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 md:translate-x-4 md:translate-y-5 bg-flow-yellow rounded-sm -z-10"
                />
                <figure className="relative h-[200px] sm:h-[260px] md:h-[340px] overflow-hidden rounded-sm bg-muted/30 shadow-2xl">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 20%" }}
                  />
                </figure>
              </div>

              {/* Content panel overlapping bottom of image */}
              <div className="relative z-10 -mt-10 sm:-mt-14 md:-mt-20 bg-card text-card-foreground rounded-sm shadow-xl px-5 sm:px-8 md:px-12 pt-16 sm:pt-20 md:pt-28 pb-10">
                {/* Category */}
                <span className="inline-block bg-flow-yellow text-black text-[11px] font-black px-3 py-1.5 uppercase tracking-widest mb-4">
                  {news.category}
                </span>

                {/* Title */}
                <h1 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black italic tracking-tighter leading-[1.1] mb-4">
                  {news.title}
                </h1>

                {/* Summary */}
                {news.summary && (
                  <p className="text-foreground/80 text-base md:text-lg font-medium leading-relaxed mb-6">
                    {news.summary}
                  </p>
                )}

                {/* Author / date / share */}
                <div className="flex items-center justify-between flex-wrap gap-4 pt-5 border-t border-border">
                  <div className="flex items-center gap-4 text-foreground/70 text-xs font-black uppercase tracking-widest">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4 text-flow-yellow" />
                      Por {news.author ?? "Redação"}
                    </span>
                    {news.date && (
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-flow-yellow" />
                        {news.date}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-flow-yellow flex items-center justify-center text-black hover:scale-110 transition-transform"
                      aria-label="Compartilhar no Twitter"
                    >
                      <Twitter className="w-4 h-4" fill="currentColor" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-flow-yellow flex items-center justify-center text-black hover:scale-110 transition-transform"
                      aria-label="Compartilhar no WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" fill="currentColor" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-flow-yellow flex items-center justify-center text-black hover:scale-110 transition-transform"
                      aria-label="Compartilhar no Facebook"
                    >
                      <Facebook className="w-4 h-4" fill="currentColor" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="prose prose-invert max-w-[840px] mx-auto mt-10">
              <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-5">
                {news.summary ??
                  "Esta é uma notícia em destaque no Games4Gamers. O conteúdo completo desta matéria estará disponível em breve."}
              </p>
              <p className="text-base leading-relaxed text-foreground/80 mb-5">
                Fique ligado em nosso portal para todas as novidades sobre {news.category}, com
                análises, opiniões e a melhor cobertura do mundo gamer.
              </p>
            </div>
          </article>
        </main>

        <Footer settings={content.settings} sections={content.footerSections} />
      </div>
    </div>
  );
}
