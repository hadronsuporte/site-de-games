import React from "react";
import { cn } from "@/lib/utils";

interface FeaturedNewsCard {
  id: string;
  image: string;
  title: string;
  category?: string;
}

interface FeaturedNewsGridProps {
  news?: FeaturedNewsCard[];
}

const defaultNews: FeaturedNewsCard[] = [
  {
    id: "1",
    title: "Review: Elden Ring Shadow of the Erdtree é a perfeição em forma de DLC",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop",
    category: "REVIEWS"
  },
  {
    id: "2",
    title: "CBLOL 2026: LOUD e paiN Gaming se enfrentam na grande final",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2084&auto=format&fit=crop",
    category: "ESPORTS"
  },
  {
    id: "3",
    title: "Deadpool & Wolverine quebra recordes de bilheteria mundial",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop",
    category: "CULTURA POP"
  },
  {
    id: "4",
    title: "GTA VI: Novos rumores sugerem trailer em breve para PlayStation e Xbox",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    category: "GAMES"
  }
];

export function FeaturedNewsGrid({ news = defaultNews }: FeaturedNewsGridProps) {
  return (
    <section className="container mx-auto px-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {news.slice(0, 4).map((item) => (
          <div 
            key={item.id}
            className="group relative h-[380px] md:h-[420px] lg:h-[450px] overflow-hidden rounded-md cursor-pointer transition-all duration-300"
          >
            {/* FeaturedImage */}
            <img 
              src={item.image} 
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* FeaturedOverlay + Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            
            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              {item.category && (
                <span className="inline-block bg-flow-yellow text-black text-[10px] font-black italic px-2 py-0.5 w-fit mb-3 transform -skew-x-12">
                  {item.category}
                </span>
              )}
              
              {/* FeaturedTitle */}
              <h3 className="text-white text-lg md:text-xl font-black italic tracking-tighter leading-tight drop-shadow-lg group-hover:text-flow-yellow transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
