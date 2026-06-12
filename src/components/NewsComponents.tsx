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
      <div className="group flex gap-5 cursor-pointer items-start">
        <div className="relative w-36 aspect-video flex-shrink-0 overflow-hidden rounded-sm">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col py-1">
          <span className="text-[9px] font-black text-flow-yellow uppercase mb-2 tracking-widest">{category}</span>
          <h3 className="text-[15px] font-black leading-snug group-hover:text-flow-yellow transition-colors line-clamp-2 italic">
            {title}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-sm mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-flow-yellow text-black text-[9px] font-black px-2 py-1 rounded-sm uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      <h3 className="text-[19px] font-black leading-tight mb-3 group-hover:text-flow-yellow transition-colors italic tracking-tight">
        {title}
      </h3>
      <div className="flex items-center gap-4 text-[9px] text-foreground/50 font-black uppercase tracking-wider">
        <div className="flex items-center gap-1.5">
          <User className="w-3 h-3 text-flow-yellow/70" />
          <span>Por {author}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-flow-yellow/70" />
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
    <div className="relative w-full aspect-[21/9] md:aspect-[21/8] overflow-hidden group cursor-pointer rounded-sm shadow-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-14 lg:p-20">
        <div className="max-w-4xl border-l-[6px] border-flow-yellow pl-8">
          <span className="inline-block bg-flow-yellow text-black text-[10px] font-black px-2.5 py-1.5 rounded-sm uppercase mb-5 tracking-widest shadow-lg">
            {category}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] group-hover:underline decoration-flow-yellow underline-offset-[12px] italic tracking-tighter">
            {title}
          </h1>
          <p className="text-white/80 text-sm md:text-lg max-w-2xl mb-8 font-medium leading-relaxed line-clamp-2 md:line-clamp-none">
            {summary}
          </p>
          <div className="flex items-center gap-5 text-[10px] md:text-xs text-white/60 font-black uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-flow-yellow" />
              Por {author}
            </span>
            <span className="w-1.5 h-1.5 bg-flow-yellow/50 rounded-full" />
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-flow-yellow" />
              {date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface NewsRowProps {
  category: string;
  title: string;
  author: string;
  date: string;
  image: string;
}

export function NewsRow({ category, title, author, date, image }: NewsRowProps) {
  return (
    <article className="group cursor-pointer py-5 border-b border-border last:border-b-0">
      <div className="grid grid-cols-[110px_minmax(0,1fr)] sm:grid-cols-[160px_minmax(0,1fr)] gap-4 sm:gap-5">
        <div className="relative aspect-video overflow-hidden rounded-sm bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] font-black uppercase tracking-widest mb-1.5 text-[#c026d3]">
            {category}
          </span>
          <h3 className="text-sm sm:text-base md:text-lg font-black italic leading-[1.2] tracking-tight text-foreground group-hover:text-flow-yellow transition-colors line-clamp-3 mb-3">
            {title}
          </h3>
          <div className="mt-auto pt-2.5 border-t border-border/70 flex items-center justify-between gap-3 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-1.5 truncate">
              <span className="inline-block w-2 h-2 bg-[#c026d3]" />
              <span className="truncate">Por {author}</span>
            </span>
            <span className="shrink-0">{date}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

interface ReviewCardProps {
  score: string;
  title: string;
  image: string;
}

export function ReviewCard({ score, title, image }: ReviewCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-sm bg-muted mb-2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-1.5 left-1.5 bg-flow-yellow text-black font-black italic text-xs px-1.5 py-0.5 rounded-sm shadow-lg tracking-tight">
          {score}
        </div>
      </div>
      <span className="text-[8px] font-black uppercase tracking-widest text-[#c026d3] block mb-0.5">
        Review
      </span>
      <h4 className="text-[11px] font-black italic leading-snug tracking-tight text-foreground group-hover:text-flow-yellow transition-colors line-clamp-3">
        {title}
      </h4>
    </article>
  );
}
