import { Clock, User } from "lucide-react";

interface NewsCardProps {
  category: string;
  title: string;
  author: string;
  date: string;
  image: string;
  horizontal?: boolean;
}

export function NewsCard({ category, title, author, date, image, horizontal }: NewsCardProps) {
  if (horizontal) {
    return (
      <div className="group flex gap-4 cursor-pointer">
        <div className="relative w-32 h-20 flex-shrink-0 overflow-hidden rounded-sm">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-black text-flow-yellow uppercase mb-1">{category}</span>
          <h3 className="text-sm font-bold leading-tight group-hover:text-flow-yellow transition-colors line-clamp-2">
            {title}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-sm mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-flow-yellow text-black text-[10px] font-black px-2 py-1 rounded-sm uppercase">
            {category}
          </span>
        </div>
      </div>
      <h3 className="text-lg font-black leading-tight mb-2 group-hover:text-flow-yellow transition-colors">
        {title}
      </h3>
      <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase">
        <div className="flex items-center gap-1">
          <User className="w-3 h-3" />
          <span>Por {author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

interface HeroBannerProps {
  category: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  image: string;
}

export function HeroBanner({ category, title, summary, author, date, image }: HeroBannerProps) {
  return (
    <div className="relative w-full aspect-[21/9] overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
        <div className="max-w-4xl border-l-4 border-flow-yellow pl-6">
          <span className="inline-block bg-flow-yellow text-black text-[10px] font-black px-2 py-1 rounded-sm uppercase mb-4">
            {category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight group-hover:underline decoration-flow-yellow underline-offset-8">
            {title}
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mb-6 font-medium">
            {summary}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400 font-bold uppercase">
            <span>Por {author}</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
