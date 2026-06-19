import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Facebook, Twitter, MessageCircle, ArrowLeft } from "lucide-react";
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
        <main>
          {/* HERO HEADER */}
          <section className="relative bg-[#7B2EBD] overflow-hidden">
            {/* Lightning bolt pattern background */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><path d='M40 10 L28 40 L38 40 L32 70 L52 36 L42 36 L48 10 Z' fill='white'/></svg>\")",
                backgroundSize: "70px 70px",
              }}
            />

            <div className="relative container mx-auto px-4 pt-10 pb-10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/80 hover:text-flow-yellow text-xs font-black uppercase tracking-widest mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Link>

              {/* Image with yellow offset */}
              <div className="relative w-full max-w-4xl mx-auto mb-8">
                <div className="absolute top-6 left-6 right-[-12px] bottom-[-12px] bg-flow-yellow rounded-sm" />
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-2xl">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Category badge */}
              <span className="inline-block bg-black text-white text-[11px] font-black px-3 py-1.5 uppercase tracking-widest mb-5">
                {news.category}
              </span>

              {/* Title */}
              <h1 className="text-white text-3xl md:text-5xl font-black italic tracking-tighter leading-[1.05] mb-4 max-w-5xl">
                {news.title}
              </h1>

              {/* Summary */}
              {news.summary && (
                <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed mb-6 max-w-3xl">
                  {news.summary}
                </p>
              )}

              <div className="h-px bg-white/20 my-5" />

              {/* Author + share */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-sm">
                    {(news.author ?? "G4G").charAt(0).toUpperCase()}
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <span className="text-sm font-bold">Por {news.author ?? "Redação"}</span>
                    {news.date && (
                      <span className="text-sm font-bold text-white/80">{news.date}</span>
                    )}
                  </div>
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
          </section>

          {/* CONTENT BODY */}
          <article className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="prose prose-invert max-w-none">
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
