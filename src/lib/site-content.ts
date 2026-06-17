import { useCallback, useEffect, useState } from "react";

export interface SiteSettings {
  siteName: string;
  logoTop: string;
  logoBottom: string;
  footerCopyright: string;
  footerCredit: string;
  newsletterTitle: string;
  newsletterHelper: string;
}

export interface MenuItemContent {
  id: string;
  label: string;
  icon: string;
  href: string;
  active: boolean;
}

export interface FeaturedNewsContent {
  id: string;
  image: string;
  title: string;
  category: string;
}

export interface NewsContent {
  id: string;
  category: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  image: string;
}

export interface ReviewContent {
  id: string;
  score: string;
  title: string;
  image: string;
}

export interface MostReadContent {
  id: string;
  category: string;
  title: string;
  author: string;
  image: string;
}

export interface VideoContent {
  id: string;
  category: string;
  title: string;
  image: string;
  url: string;
  duration: string;
}

export interface CategoryItemContent {
  id: string;
  title: string;
  image: string;
}

export interface CategorySectionContent {
  id: string;
  title: string;
  bigCards: CategoryItemContent[];
  sideList: CategoryItemContent[];
}

export interface FooterSectionContent {
  id: string;
  title: string;
  links: string[];
}

export interface SiteContent {
  settings: SiteSettings;
  menuItems: MenuItemContent[];
  featuredNews: FeaturedNewsContent[];
  latestNews: NewsContent[];
  reviews: ReviewContent[];
  mostRead: MostReadContent[];
  videos: VideoContent[];
  categorySections: CategorySectionContent[];
  footerSections: FooterSectionContent[];
}

export const SITE_CONTENT_STORAGE_KEY = "g4g-site-content";
const SITE_CONTENT_EVENT = "g4g-site-content-updated";

const gameImages = {
  fantasy:
    "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2070&auto=format&fit=crop",
  controller:
    "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop",
  esports:
    "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2084&auto=format&fit=crop",
  arcade:
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
  tv: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop",
  handheld:
    "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2070&auto=format&fit=crop",
  cards:
    "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=2070&auto=format&fit=crop",
  anime:
    "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=2070&auto=format&fit=crop",
  neon: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop",
  headphones:
    "https://images.unsplash.com/photo-1614294148960-9aa740632a87?q=80&w=2070&auto=format&fit=crop",
  roblox:
    "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2070&auto=format&fit=crop",
  retro:
    "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
};

export const defaultSiteContent: SiteContent = {
  settings: {
    siteName: "Games4Gamers",
    logoTop: "GAMES4",
    logoBottom: "GAMERS",
    footerCopyright: "© 2026 Games4Gamers. Todos os direitos reservados.",
    footerCredit: "Desenvolvido por Xgiggsbr",
    newsletterTitle: "Cadastre-se em nossa Newsletter",
    newsletterHelper: "Cadastre seu e-mail acima",
  },
  menuItems: [
    { id: "menu-home", icon: "home", label: "Início", href: "/", active: true },
    { id: "menu-ps5", icon: "gamepad", label: "PS5", href: "#ps5", active: false },
    {
      id: "menu-xbox",
      icon: "gamepad",
      label: "Xbox Series X/S",
      href: "#xbox",
      active: false,
    },
    { id: "menu-switch", icon: "gamepad", label: "Switch", href: "#switch", active: false },
    { id: "menu-reviews", icon: "star", label: "Reviews", href: "#reviews", active: false },
    { id: "menu-tabletop", icon: "dice", label: "Tabletop", href: "#tabletop", active: false },
    {
      id: "menu-cinema",
      icon: "clapperboard",
      label: "Cinema & TV",
      href: "#cinema",
      active: false,
    },
    { id: "menu-anime", icon: "sparkles", label: "Anime", href: "#anime", active: false },
    { id: "menu-tech", icon: "monitor", label: "Tech", href: "#tech", active: false },
    { id: "menu-discounts", icon: "tag", label: "Descontos", href: "#descontos", active: false },
    { id: "menu-shop", icon: "gem", label: "Codashop", href: "#shop", active: false },
    { id: "menu-videos", icon: "play", label: "Vídeos", href: "#videos", active: false },
    { id: "menu-gallery", icon: "image", label: "Galerias", href: "#galerias", active: false },
    { id: "menu-more", icon: "more", label: "Ver Mais", href: "#mais", active: false },
  ],
  featuredNews: [
    {
      id: "featured-1",
      title: "Review: Elden Ring Shadow of the Erdtree é a perfeição em forma de DLC",
      image: gameImages.controller,
      category: "Reviews",
    },
    {
      id: "featured-2",
      title: "CBLOL 2026: LOUD e paiN Gaming se enfrentam na grande final",
      image: gameImages.esports,
      category: "Esports",
    },
    {
      id: "featured-3",
      title: "Deadpool & Wolverine quebra recordes de bilheteria mundial",
      image: gameImages.tv,
      category: "Cultura Pop",
    },
    {
      id: "featured-4",
      title: "GTA VI: novos rumores sugerem trailer em breve para PlayStation e Xbox",
      image: gameImages.arcade,
      category: "Games",
    },
  ],
  latestNews: [
    {
      id: "news-1",
      category: "Reviews",
      title: "Review: Elden Ring Shadow of the Erdtree é a perfeição em forma de DLC",
      summary: "A expansão amplia o mapa, muda o ritmo das batalhas e entrega chefes memoráveis.",
      author: "Guss",
      date: "12.06.2026 às 12:28",
      image: gameImages.controller,
    },
    {
      id: "news-2",
      category: "Esports",
      title: "CBLOL 2026: LOUD e paiN Gaming se enfrentam na grande final",
      summary:
        "A rivalidade mais quente do cenário brasileiro decide o split em uma série melhor de cinco.",
      author: "Guss",
      date: "11.06.2026 às 19:42",
      image: gameImages.esports,
    },
    {
      id: "news-3",
      category: "Cinema & TV",
      title: "Deadpool & Wolverine quebra recordes de bilheteria mundial",
      summary:
        "O encontro dos heróis reacende o interesse dos fãs e domina as conversas da semana.",
      author: "Guss",
      date: "11.06.2026 às 14:10",
      image: gameImages.tv,
    },
    {
      id: "news-4",
      category: "Games",
      title: "GTA VI: novos rumores sugerem trailer em breve para os fãs",
      summary:
        "Fontes próximas ao mercado apontam nova janela de divulgação antes do grande evento do ano.",
      author: "Guss",
      date: "10.06.2026 às 09:55",
      image: gameImages.arcade,
    },
    {
      id: "news-5",
      category: "Games",
      title: "Fable terá diferentes níveis de dificuldade e foco em exploração",
      summary:
        "A Playground quer equilibrar humor, fantasia e liberdade sem afastar novos jogadores.",
      author: "Guss",
      date: "17.06.2026 às 10:56",
      image: gameImages.fantasy,
    },
    {
      id: "news-6",
      category: "Tabletop",
      title: "Por que Disney Lorcana funciona tão bem como produto familiar?",
      summary:
        "O card game aposta em regras simples e ilustrações fortes para atrair pais e filhos.",
      author: "Guss",
      date: "17.06.2026 às 10:00",
      image: gameImages.cards,
    },
    {
      id: "news-7",
      category: "Descontos",
      title: "Oferta de férias da PS Store: veja 15 jogos por menos de R$ 60",
      summary:
        "A nova rodada de promoções traz RPGs, indies e clássicos recentes com preços agressivos.",
      author: "Guss",
      date: "17.06.2026 às 09:44",
      image: gameImages.handheld,
    },
    {
      id: "news-8",
      category: "Games",
      title: "Outward 2 é adiado para 2027 para polimento extra",
      summary:
        "O estúdio afirma que precisa de mais tempo para ajustar combate, cooperação e progressão.",
      author: "Guss",
      date: "16.06.2026 às 14:54",
      image: gameImages.retro,
    },
  ],
  reviews: [
    {
      id: "review-1",
      score: "9.5",
      title: "Elden Ring: Shadow of the Erdtree - A obra-prima da FromSoftware",
      image: gameImages.fantasy,
    },
    {
      id: "review-2",
      score: "8.7",
      title: "Final Fantasy XVI: Rebirth entrega aventura épica e emocionante",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "review-3",
      score: "9.0",
      title: "Hellblade II: Senua's Saga impressiona pela direção visual",
      image: gameImages.retro,
    },
    {
      id: "review-4",
      score: "8.5",
      title: "Black Myth: Wukong surpreende com combate fluido e visuais deslumbrantes",
      image: gameImages.arcade,
    },
    {
      id: "review-5",
      score: "9.2",
      title: "Metaphor: ReFantazio nasce atemporal e é um verdadeiro jogaço",
      image: gameImages.neon,
    },
  ],
  mostRead: [
    {
      id: "most-1",
      category: "Dicas",
      title: "Blox Fruits: veja a lista de códigos no Roblox e saiba como resgatar",
      author: "Guss",
      image: gameImages.cards,
    },
    {
      id: "most-2",
      category: "Dicas",
      title: "Roblox: veja lista de códigos e saiba como resgatar itens de graça",
      author: "Guss",
      image: gameImages.roblox,
    },
    {
      id: "most-3",
      category: "Dicas",
      title: "Anime Fighters Simulator: veja a lista de códigos e saiba como resgatar",
      author: "Guss",
      image: gameImages.anime,
    },
    {
      id: "most-4",
      category: "Dicas",
      title: "Qual é o próximo jogo grátis da Epic Games Store? Saiba aqui!",
      author: "Guss",
      image:
        "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "most-5",
      category: "Games",
      title: "Steam: os 10 jogos mais vendidos da semana",
      author: "Guss",
      image: gameImages.headphones,
    },
  ],
  videos: [
    {
      id: "video-1",
      category: "Podcasts",
      title: "GTA Online Secreto e Nintendo Switch 2! FGN #83",
      image: gameImages.arcade,
      url: "https://youtube.com/",
      duration: "58:12",
    },
    {
      id: "video-2",
      category: "Vídeos",
      title: "Cobertura Pokémon Presents!",
      image: gameImages.cards,
      url: "https://youtube.com/",
      duration: "21:48",
    },
    {
      id: "video-3",
      category: "Podcasts",
      title: "Animes mais estranhos da história! Flowtaku #05",
      image: gameImages.anime,
      url: "https://youtube.com/",
      duration: "43:09",
    },
    {
      id: "video-4",
      category: "Podcasts",
      title: "Camilota XP, esports é com ela! Games4Gamers #81",
      image: gameImages.neon,
      url: "https://youtube.com/",
      duration: "49:31",
    },
    {
      id: "video-5",
      category: "Vídeos",
      title: "Lançamentos aguardados de agosto!",
      image: gameImages.headphones,
      url: "https://youtube.com/",
      duration: "12:26",
    },
  ],
  categorySections: [
    {
      id: "section-previews",
      title: "Previews",
      bigCards: [
        {
          id: "preview-big-1",
          title: 'Zeus em God of War Laufey? "Possibilidade", diz diretora',
          image: gameImages.arcade,
        },
        {
          id: "preview-big-2",
          title: "Exodus ganha novo gameplay e tem vibe Mass Effect muito boa",
          image: gameImages.fantasy,
        },
      ],
      sideList: [
        {
          id: "preview-side-1",
          title: "Já jogamos! Star Fox vai deleitar os fãs no Switch 2",
          image: gameImages.cards,
        },
        {
          id: "preview-side-2",
          title: "Jogamos: Rayman Legends Retold é bem mais que um remake",
          image: gameImages.neon,
        },
        {
          id: "preview-side-3",
          title: "Steam traz jogo divertido de plataforma na faixa",
          image: gameImages.headphones,
        },
      ],
    },
    {
      id: "section-dicas",
      title: "Dicas",
      bigCards: [
        {
          id: "tips-big-1",
          title: "Roblox: veja lista de códigos e saiba como resgatar itens de graça",
          image: gameImages.roblox,
        },
        {
          id: "tips-big-2",
          title: "Anime Fighters Simulator: veja a lista de códigos e saiba como resgatar",
          image: gameImages.anime,
        },
      ],
      sideList: [
        {
          id: "tips-side-1",
          title: "Blox Fruits: veja a lista de códigos no Roblox e saiba como resgatar",
          image: gameImages.cards,
        },
        {
          id: "tips-side-2",
          title: "Saiba qual é a agenda de podcasts do Games4Gamers nesta semana",
          image: gameImages.neon,
        },
        {
          id: "tips-side-3",
          title: "Voidling Bound faz sucesso na Steam com mistura inusitada",
          image: gameImages.retro,
        },
      ],
    },
  ],
  footerSections: [
    {
      id: "footer-institutional",
      title: "Institucional",
      links: ["Quem Somos", "Contato", "Política de Privacidade", "Conheça o Grupo Flow"],
    },
    {
      id: "footer-channels",
      title: "Nossos Canais",
      links: [
        "Games4Gamers",
        "Cortes do Games4Gamers",
        "Games4Gamers Trailers",
        "Gameplayrj",
        "Discord",
        "WhatsApp",
        "Telegram",
      ],
    },
    {
      id: "footer-services",
      title: "Serviços G4G",
      links: ["Games4Gamers Store", "Games em Promoção", "Faz a Boa!", "Seja Membro"],
    },
    {
      id: "footer-group",
      title: "Conheça o Grupo",
      links: ["Ciência Sem Fim", "Venus Podcast"],
    },
  ],
};

export function createContentId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function normalizeSiteContent(value: Partial<SiteContent> | null | undefined): SiteContent {
  return {
    settings: { ...defaultSiteContent.settings, ...(value?.settings ?? {}) },
    menuItems: Array.isArray(value?.menuItems) ? value.menuItems : defaultSiteContent.menuItems,
    featuredNews: Array.isArray(value?.featuredNews)
      ? value.featuredNews
      : defaultSiteContent.featuredNews,
    latestNews: Array.isArray(value?.latestNews) ? value.latestNews : defaultSiteContent.latestNews,
    reviews: Array.isArray(value?.reviews) ? value.reviews : defaultSiteContent.reviews,
    mostRead: Array.isArray(value?.mostRead) ? value.mostRead : defaultSiteContent.mostRead,
    videos: Array.isArray(value?.videos) ? value.videos : defaultSiteContent.videos,
    categorySections: Array.isArray(value?.categorySections)
      ? value.categorySections
      : defaultSiteContent.categorySections,
    footerSections: Array.isArray(value?.footerSections)
      ? value.footerSections
      : defaultSiteContent.footerSections,
  };
}

export function readSiteContent(): SiteContent {
  if (typeof window === "undefined") {
    return defaultSiteContent;
  }

  try {
    const raw = window.localStorage.getItem(SITE_CONTENT_STORAGE_KEY);
    if (!raw) {
      return defaultSiteContent;
    }

    return normalizeSiteContent(JSON.parse(raw) as Partial<SiteContent>);
  } catch (error) {
    console.error("Failed to read site content", error);
    return defaultSiteContent;
  }
}

export type WriteSiteContentResult = { ok: true } | { ok: false; error: string };

export function writeSiteContent(content: SiteContent): WriteSiteContentResult {
  if (typeof window === "undefined") {
    return { ok: true };
  }

  try {
    window.localStorage.setItem(SITE_CONTENT_STORAGE_KEY, JSON.stringify(content));
    window.dispatchEvent(new CustomEvent(SITE_CONTENT_EVENT, { detail: content }));
    return { ok: true };
  } catch (error) {
    console.error("Failed to save site content", error);
    return {
      ok: false,
      error: "Não foi possível salvar. Tente imagens menores ou remova algumas imagens locais.",
    };
  }
}

export function useSiteContent() {
  const [content, setContentState] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    setContentState(readSiteContent());

    const handleContentUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<SiteContent>;
      setContentState(normalizeSiteContent(customEvent.detail));
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === SITE_CONTENT_STORAGE_KEY) {
        setContentState(readSiteContent());
      }
    };

    window.addEventListener(SITE_CONTENT_EVENT, handleContentUpdate);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener(SITE_CONTENT_EVENT, handleContentUpdate);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const setContent = useCallback((nextContent: SiteContent) => {
    const result = writeSiteContent(nextContent);

    if (result.ok) {
      setContentState(nextContent);
    }

    return result;
  }, []);

  const resetContent = useCallback(() => {
    const result = writeSiteContent(defaultSiteContent);

    if (result.ok) {
      setContentState(defaultSiteContent);
    }

    return result;
  }, []);

  return { content, setContent, resetContent };
}
