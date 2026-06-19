import { Link } from "@tanstack/react-router";
import type { FeaturedNewsContent } from "@/lib/site-content";

interface FeaturedNewsGridProps {
  news: FeaturedNewsContent[];
}

export function FeaturedNewsGrid({ news }: FeaturedNewsGridProps) {
  return (
    <section className="container mx-auto px-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {news.slice(0, 4).map((item) => (
          <Link
            key={item.id}
            to="/noticia/$id"
            params={{ id: item.id }}
            className="group relative h-[380px] md:h-[420px] lg:h-[450px] overflow-hidden rounded-md cursor-pointer transition-all duration-300 block"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              {item.category && (
                <span className="inline-block bg-flow-yellow text-black text-[10px] font-black italic px-2 py-0.5 w-fit mb-3 transform -skew-x-12">
                  {item.category}
                </span>
              )}

              <h3 className="text-white text-lg md:text-xl font-black italic tracking-tighter leading-tight drop-shadow-lg group-hover:text-flow-yellow transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
