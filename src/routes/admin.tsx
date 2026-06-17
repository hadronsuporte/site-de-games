import { type ReactNode, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  Camera,
  FileText,
  Home,
  Image as ImageIcon,
  LayoutDashboard,
  Menu as MenuIcon,
  Plus,
  RotateCcw,
  Save,
  Settings,
  Star,
  Trash2,
  Video,
} from "lucide-react";
import {
  createContentId,
  type CategoryItemContent,
  type CategorySectionContent,
  type FeaturedNewsContent,
  type FooterSectionContent,
  type MenuItemContent,
  type MostReadContent,
  type NewsContent,
  type ReviewContent,
  type SiteContent,
  type VideoContent,
  useSiteContent,
} from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

type AdminTab =
  | "overview"
  | "featured"
  | "news"
  | "reviews"
  | "videos"
  | "mostRead"
  | "sections"
  | "menu"
  | "settings";

const fallbackImage =
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop";

const tabs: Array<{ id: AdminTab; label: string; icon: ReactNode }> = [
  { id: "overview", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { id: "featured", label: "Destaques", icon: <Star size={18} /> },
  { id: "news", label: "Notícias", icon: <FileText size={18} /> },
  { id: "reviews", label: "Reviews", icon: <BarChart3 size={18} /> },
  { id: "videos", label: "Vídeos", icon: <Video size={18} /> },
  { id: "mostRead", label: "Mais Lidas", icon: <Camera size={18} /> },
  { id: "sections", label: "Seções", icon: <ImageIcon size={18} /> },
  { id: "menu", label: "Menu", icon: <MenuIcon size={18} /> },
  { id: "settings", label: "Configurações", icon: <Settings size={18} /> },
];

function AdminPage() {
  const { content, setContent, resetContent } = useSiteContent();
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");
  const [savedAt, setSavedAt] = useState<string>("Alterações salvas localmente");

  const metrics = useMemo(
    () => [
      { label: "Destaques", value: content.featuredNews.length },
      { label: "Notícias", value: content.latestNews.length },
      { label: "Reviews", value: content.reviews.length },
      { label: "Vídeos", value: content.videos.length },
      { label: "Menu", value: content.menuItems.length },
      { label: "Seções", value: content.categorySections.length },
    ],
    [content],
  );

  const updateContent = (updater: (draft: SiteContent) => void) => {
    const draft = cloneContent(content);
    updater(draft);
    setContent(draft);
    setSavedAt(
      `Salvo às ${new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`,
    );
  };

  const handleReset = () => {
    if (!window.confirm("Restaurar todo o conteúdo inicial?")) {
      return;
    }

    resetContent();
    setSavedAt("Conteúdo inicial restaurado");
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-slate-950 dark:bg-[#111318] dark:text-white">
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[280px] border-r border-black/10 bg-white p-4 dark:border-white/10 dark:bg-[#171a21] lg:flex lg:flex-col">
        <div className="mb-6 rounded-sm bg-black p-4 text-white dark:bg-white dark:text-black">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F5C518] dark:text-black/60">
            Admin sem login
          </p>
          <h1 className="mt-2 text-2xl font-black italic tracking-tighter">Games4Gamers</h1>
          <p className="mt-2 text-xs font-bold text-white/60 dark:text-black/60">
            Edite notícias, fotos, vídeos, menu e rodapé.
          </p>
        </div>

        <nav className="space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-black uppercase tracking-tight transition-colors",
                activeTab === tab.id
                  ? "bg-[#F5C518] text-black"
                  : "text-slate-600 hover:bg-slate-100 hover:text-black dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-3 border-t border-black/10 pt-4 dark:border-white/10">
          <Link
            to="/"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-black/10 px-3 py-2 text-sm font-black uppercase text-slate-700 hover:bg-slate-100 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
          >
            <Home size={16} />
            Ver site
          </Link>
          <button
            onClick={handleReset}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-red-500 px-3 py-2 text-sm font-black uppercase text-white hover:bg-red-600"
          >
            <RotateCcw size={16} />
            Restaurar padrão
          </button>
        </div>
      </aside>

      <main className="lg:pl-[280px]">
        <header className="sticky top-0 z-20 border-b border-black/10 bg-white/95 px-4 py-4 backdrop-blur dark:border-white/10 dark:bg-[#111318]/95 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F5C518]">
                Painel editorial
              </p>
              <h2 className="mt-1 text-2xl font-black italic tracking-tighter sm:text-3xl">
                Controle do site
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-2 text-xs font-black uppercase text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300">
                <Save size={14} />
                {savedAt}
              </span>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-black uppercase text-white hover:bg-slate-800 dark:bg-white dark:text-black"
              >
                <Home size={16} />
                Ver site
              </Link>
            </div>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-xs font-black uppercase",
                  activeTab === tab.id
                    ? "bg-[#F5C518] text-black"
                    : "bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-white",
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        <div className="px-4 py-6 sm:px-6 lg:px-8">
          {activeTab === "overview" && (
            <OverviewPanel metrics={metrics} content={content} setActiveTab={setActiveTab} />
          )}

          {activeTab === "featured" && (
            <FeaturedPanel content={content} updateContent={updateContent} />
          )}

          {activeTab === "news" && <NewsPanel content={content} updateContent={updateContent} />}

          {activeTab === "reviews" && (
            <ReviewsPanel content={content} updateContent={updateContent} />
          )}

          {activeTab === "videos" && (
            <VideosPanel content={content} updateContent={updateContent} />
          )}

          {activeTab === "mostRead" && (
            <MostReadPanel content={content} updateContent={updateContent} />
          )}

          {activeTab === "sections" && (
            <SectionsPanel content={content} updateContent={updateContent} />
          )}

          {activeTab === "menu" && <MenuPanel content={content} updateContent={updateContent} />}

          {activeTab === "settings" && (
            <SettingsPanel content={content} updateContent={updateContent} />
          )}
        </div>
      </main>
    </div>
  );
}

function OverviewPanel({
  metrics,
  content,
  setActiveTab,
}: {
  metrics: Array<{ label: string; value: number }>;
  content: SiteContent;
  setActiveTab: (tab: AdminTab) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-md border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-[#171a21]"
          >
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {metric.label}
            </p>
            <p className="mt-2 text-3xl font-black italic">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Panel title="Atalhos rápidos" description="Ir direto para os blocos mais usados.">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Editar manchetes", tab: "featured" as AdminTab },
              { label: "Nova notícia", tab: "news" as AdminTab },
              { label: "Trocar vídeos", tab: "videos" as AdminTab },
              { label: "Editar menu", tab: "menu" as AdminTab },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveTab(item.tab)}
                className="rounded-md border border-black/10 bg-slate-50 px-4 py-4 text-left text-sm font-black uppercase hover:border-[#F5C518] hover:bg-[#F5C518]/10 dark:border-white/10 dark:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </div>
        </Panel>

        <Panel title="Últimas notícias" description="Itens exibidos na coluna principal.">
          <div className="space-y-3">
            {content.latestNews.slice(0, 5).map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt=""
                  className="h-12 w-16 rounded-sm object-cover"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase text-[#F5C518]">{item.category}</p>
                  <p className="truncate text-sm font-black">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

function FeaturedPanel({
  content,
  updateContent,
}: {
  content: SiteContent;
  updateContent: (updater: (draft: SiteContent) => void) => void;
}) {
  return (
    <Panel
      title="Destaques principais"
      description="Edite os quatro cards grandes do topo da home."
      action={
        <AddButton
          onClick={() =>
            updateContent((draft) => {
              draft.featuredNews.push(emptyFeatured());
            })
          }
        />
      }
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {content.featuredNews.map((item, index) => (
          <EditableCard key={item.id} title={`Destaque ${index + 1}`} image={item.image}>
            <TextField
              label="Título"
              value={item.title}
              onChange={(value) =>
                updateContent((draft) => {
                  const target = draft.featuredNews[index];
                  if (target) target.title = value;
                })
              }
            />
            <TextField
              label="Categoria"
              value={item.category}
              onChange={(value) =>
                updateContent((draft) => {
                  const target = draft.featuredNews[index];
                  if (target) target.category = value;
                })
              }
            />
            <ImageField
              value={item.image}
              onChange={(value) =>
                updateContent((draft) => {
                  const target = draft.featuredNews[index];
                  if (target) target.image = value;
                })
              }
            />
            <DeleteButton
              onClick={() =>
                updateContent((draft) => {
                  draft.featuredNews.splice(index, 1);
                })
              }
            />
          </EditableCard>
        ))}
      </div>
    </Panel>
  );
}

function NewsPanel({
  content,
  updateContent,
}: {
  content: SiteContent;
  updateContent: (updater: (draft: SiteContent) => void) => void;
}) {
  return (
    <Panel
      title="Notícias"
      description="Crie e edite posts da lista de últimas notícias."
      action={
        <AddButton
          label="Nova notícia"
          onClick={() =>
            updateContent((draft) => {
              draft.latestNews.unshift(emptyNews());
            })
          }
        />
      }
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {content.latestNews.map((item, index) => (
          <EditableCard key={item.id} title={item.category} image={item.image}>
            <TextField
              label="Título"
              value={item.title}
              onChange={(value) =>
                updateContent((draft) => {
                  const target = draft.latestNews[index];
                  if (target) target.title = value;
                })
              }
            />
            <TextAreaField
              label="Resumo"
              value={item.summary}
              onChange={(value) =>
                updateContent((draft) => {
                  const target = draft.latestNews[index];
                  if (target) target.summary = value;
                })
              }
            />
            <div className="grid gap-3 sm:grid-cols-3">
              <TextField
                label="Categoria"
                value={item.category}
                onChange={(value) =>
                  updateContent((draft) => {
                    const target = draft.latestNews[index];
                    if (target) target.category = value;
                  })
                }
              />
              <TextField
                label="Autor"
                value={item.author}
                onChange={(value) =>
                  updateContent((draft) => {
                    const target = draft.latestNews[index];
                    if (target) target.author = value;
                  })
                }
              />
              <TextField
                label="Data"
                value={item.date}
                onChange={(value) =>
                  updateContent((draft) => {
                    const target = draft.latestNews[index];
                    if (target) target.date = value;
                  })
                }
              />
            </div>
            <ImageField
              value={item.image}
              onChange={(value) =>
                updateContent((draft) => {
                  const target = draft.latestNews[index];
                  if (target) target.image = value;
                })
              }
            />
            <DeleteButton
              onClick={() =>
                updateContent((draft) => {
                  draft.latestNews.splice(index, 1);
                })
              }
            />
          </EditableCard>
        ))}
      </div>
    </Panel>
  );
}

function ReviewsPanel({
  content,
  updateContent,
}: {
  content: SiteContent;
  updateContent: (updater: (draft: SiteContent) => void) => void;
}) {
  return (
    <Panel
      title="Reviews"
      description="Altere títulos, notas e imagens dos cards de review."
      action={
        <AddButton
          label="Novo review"
          onClick={() =>
            updateContent((draft) => {
              draft.reviews.unshift(emptyReview());
            })
          }
        />
      }
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {content.reviews.map((item, index) => (
          <EditableCard key={item.id} title={`Nota ${item.score}`} image={item.image}>
            <TextField
              label="Título"
              value={item.title}
              onChange={(value) =>
                updateContent((draft) => {
                  const target = draft.reviews[index];
                  if (target) target.title = value;
                })
              }
            />
            <TextField
              label="Nota"
              value={item.score}
              onChange={(value) =>
                updateContent((draft) => {
                  const target = draft.reviews[index];
                  if (target) target.score = value;
                })
              }
            />
            <ImageField
              value={item.image}
              onChange={(value) =>
                updateContent((draft) => {
                  const target = draft.reviews[index];
                  if (target) target.image = value;
                })
              }
            />
            <DeleteButton
              onClick={() =>
                updateContent((draft) => {
                  draft.reviews.splice(index, 1);
                })
              }
            />
          </EditableCard>
        ))}
      </div>
    </Panel>
  );
}

function VideosPanel({
  content,
  updateContent,
}: {
  content: SiteContent;
  updateContent: (updater: (draft: SiteContent) => void) => void;
}) {
  return (
    <Panel
      title="Podcasts e vídeos"
      description="Os dois primeiros itens viram cards grandes; os demais entram na lista lateral."
      action={
        <AddButton
          label="Novo vídeo"
          onClick={() =>
            updateContent((draft) => {
              draft.videos.push(emptyVideo());
            })
          }
        />
      }
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {content.videos.map((item, index) => (
          <EditableCard key={item.id} title={item.category} image={item.image}>
            <TextField
              label="Título"
              value={item.title}
              onChange={(value) =>
                updateContent((draft) => {
                  const target = draft.videos[index];
                  if (target) target.title = value;
                })
              }
            />
            <div className="grid gap-3 sm:grid-cols-3">
              <TextField
                label="Categoria"
                value={item.category}
                onChange={(value) =>
                  updateContent((draft) => {
                    const target = draft.videos[index];
                    if (target) target.category = value;
                  })
                }
              />
              <TextField
                label="Duração"
                value={item.duration}
                onChange={(value) =>
                  updateContent((draft) => {
                    const target = draft.videos[index];
                    if (target) target.duration = value;
                  })
                }
              />
              <TextField
                label="URL"
                value={item.url}
                onChange={(value) =>
                  updateContent((draft) => {
                    const target = draft.videos[index];
                    if (target) target.url = value;
                  })
                }
              />
            </div>
            <ImageField
              value={item.image}
              onChange={(value) =>
                updateContent((draft) => {
                  const target = draft.videos[index];
                  if (target) target.image = value;
                })
              }
            />
            <DeleteButton
              onClick={() =>
                updateContent((draft) => {
                  draft.videos.splice(index, 1);
                })
              }
            />
          </EditableCard>
        ))}
      </div>
    </Panel>
  );
}

function MostReadPanel({
  content,
  updateContent,
}: {
  content: SiteContent;
  updateContent: (updater: (draft: SiteContent) => void) => void;
}) {
  return (
    <Panel
      title="Mais lidas"
      description="Cards da lista As Mais Lidas da Semana."
      action={
        <AddButton
          label="Novo item"
          onClick={() =>
            updateContent((draft) => {
              draft.mostRead.push(emptyMostRead());
            })
          }
        />
      }
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {content.mostRead.map((item, index) => (
          <EditableCard key={item.id} title={item.category} image={item.image}>
            <TextField
              label="Título"
              value={item.title}
              onChange={(value) =>
                updateContent((draft) => {
                  const target = draft.mostRead[index];
                  if (target) target.title = value;
                })
              }
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <TextField
                label="Categoria"
                value={item.category}
                onChange={(value) =>
                  updateContent((draft) => {
                    const target = draft.mostRead[index];
                    if (target) target.category = value;
                  })
                }
              />
              <TextField
                label="Autor"
                value={item.author}
                onChange={(value) =>
                  updateContent((draft) => {
                    const target = draft.mostRead[index];
                    if (target) target.author = value;
                  })
                }
              />
            </div>
            <ImageField
              value={item.image}
              onChange={(value) =>
                updateContent((draft) => {
                  const target = draft.mostRead[index];
                  if (target) target.image = value;
                })
              }
            />
            <DeleteButton
              onClick={() =>
                updateContent((draft) => {
                  draft.mostRead.splice(index, 1);
                })
              }
            />
          </EditableCard>
        ))}
      </div>
    </Panel>
  );
}

function SectionsPanel({
  content,
  updateContent,
}: {
  content: SiteContent;
  updateContent: (updater: (draft: SiteContent) => void) => void;
}) {
  return (
    <Panel
      title="Seções editoriais"
      description="Edite blocos como Previews e Dicas, incluindo cards grandes e lista lateral."
      action={
        <AddButton
          label="Nova seção"
          onClick={() =>
            updateContent((draft) => {
              draft.categorySections.push(emptyCategorySection());
            })
          }
        />
      }
    >
      <div className="space-y-5">
        {content.categorySections.map((section, sectionIndex) => (
          <div
            key={section.id}
            className="rounded-md border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-[#171a21]"
          >
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
              <div className="flex-1">
                <TextField
                  label="Título da seção"
                  value={section.title}
                  onChange={(value) =>
                    updateContent((draft) => {
                      const target = draft.categorySections[sectionIndex];
                      if (target) target.title = value;
                    })
                  }
                />
              </div>
              <DeleteButton
                label="Excluir seção"
                onClick={() =>
                  updateContent((draft) => {
                    draft.categorySections.splice(sectionIndex, 1);
                  })
                }
              />
            </div>

            <NestedCardsEditor
              title="Cards grandes"
              items={section.bigCards}
              onAdd={() =>
                updateContent((draft) => {
                  draft.categorySections[sectionIndex]?.bigCards.push(emptyCategoryItem());
                })
              }
              onDelete={(cardIndex) =>
                updateContent((draft) => {
                  draft.categorySections[sectionIndex]?.bigCards.splice(cardIndex, 1);
                })
              }
              onChange={(cardIndex, field, value) =>
                updateContent((draft) => {
                  const target = draft.categorySections[sectionIndex]?.bigCards[cardIndex];
                  if (target) target[field] = value;
                })
              }
            />

            <NestedCardsEditor
              title="Lista lateral"
              items={section.sideList}
              onAdd={() =>
                updateContent((draft) => {
                  draft.categorySections[sectionIndex]?.sideList.push(emptyCategoryItem());
                })
              }
              onDelete={(cardIndex) =>
                updateContent((draft) => {
                  draft.categorySections[sectionIndex]?.sideList.splice(cardIndex, 1);
                })
              }
              onChange={(cardIndex, field, value) =>
                updateContent((draft) => {
                  const target = draft.categorySections[sectionIndex]?.sideList[cardIndex];
                  if (target) target[field] = value;
                })
              }
            />
          </div>
        ))}
      </div>
    </Panel>
  );
}

function MenuPanel({
  content,
  updateContent,
}: {
  content: SiteContent;
  updateContent: (updater: (draft: SiteContent) => void) => void;
}) {
  return (
    <Panel
      title="Menu lateral"
      description="Edite nome, link, ícone e item ativo do menu do site."
      action={
        <AddButton
          label="Novo item"
          onClick={() =>
            updateContent((draft) => {
              draft.menuItems.push(emptyMenuItem());
            })
          }
        />
      }
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {content.menuItems.map((item, index) => (
          <EditableCard key={item.id} title={item.label}>
            <TextField
              label="Label"
              value={item.label}
              onChange={(value) =>
                updateContent((draft) => {
                  const target = draft.menuItems[index];
                  if (target) target.label = value;
                })
              }
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <TextField
                label="Link"
                value={item.href}
                onChange={(value) =>
                  updateContent((draft) => {
                    const target = draft.menuItems[index];
                    if (target) target.href = value;
                  })
                }
              />
              <TextField
                label="Ícone"
                value={item.icon}
                helper="home, gamepad, star, dice, clapperboard, sparkles, monitor, tag, gem, play, image, more"
                onChange={(value) =>
                  updateContent((draft) => {
                    const target = draft.menuItems[index];
                    if (target) target.icon = value;
                  })
                }
              />
            </div>
            <label className="flex items-center gap-2 text-sm font-bold">
              <input
                type="checkbox"
                checked={item.active}
                onChange={(event) =>
                  updateContent((draft) => {
                    const target = draft.menuItems[index];
                    if (target) target.active = event.target.checked;
                  })
                }
              />
              Marcar como ativo
            </label>
            <DeleteButton
              onClick={() =>
                updateContent((draft) => {
                  draft.menuItems.splice(index, 1);
                })
              }
            />
          </EditableCard>
        ))}
      </div>
    </Panel>
  );
}

function SettingsPanel({
  content,
  updateContent,
}: {
  content: SiteContent;
  updateContent: (updater: (draft: SiteContent) => void) => void;
}) {
  return (
    <div className="space-y-5">
      <Panel title="Configurações do site" description="Textos principais, logo e newsletter.">
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            ["siteName", "Nome do site"],
            ["logoTop", "Logo linha 1"],
            ["logoBottom", "Logo linha 2"],
            ["newsletterTitle", "Título da newsletter"],
            ["newsletterHelper", "Texto auxiliar da newsletter"],
            ["footerCopyright", "Copyright"],
            ["footerCredit", "Crédito do rodapé"],
          ].map(([key, label]) => (
            <TextField
              key={key}
              label={label}
              value={content.settings[key as keyof typeof content.settings]}
              onChange={(value) =>
                updateContent((draft) => {
                  draft.settings[key as keyof typeof draft.settings] = value;
                })
              }
            />
          ))}
        </div>
      </Panel>

      <Panel
        title="Colunas do rodapé"
        description="Cada link deve ficar em uma linha separada."
        action={
          <AddButton
            label="Nova coluna"
            onClick={() =>
              updateContent((draft) => {
                draft.footerSections.push(emptyFooterSection());
              })
            }
          />
        }
      >
        <div className="grid gap-4 xl:grid-cols-2">
          {content.footerSections.map((section, index) => (
            <EditableCard key={section.id} title={section.title}>
              <TextField
                label="Título"
                value={section.title}
                onChange={(value) =>
                  updateContent((draft) => {
                    const target = draft.footerSections[index];
                    if (target) target.title = value;
                  })
                }
              />
              <TextAreaField
                label="Links"
                value={section.links.join("\n")}
                onChange={(value) =>
                  updateContent((draft) => {
                    const target = draft.footerSections[index];
                    if (target) {
                      target.links = value
                        .split("\n")
                        .map((line) => line.trim())
                        .filter(Boolean);
                    }
                  })
                }
              />
              <DeleteButton
                onClick={() =>
                  updateContent((draft) => {
                    draft.footerSections.splice(index, 1);
                  })
                }
              />
            </EditableCard>
          ))}
        </div>
      </Panel>
    </div>
  );
}

function NestedCardsEditor({
  title,
  items,
  onAdd,
  onDelete,
  onChange,
}: {
  title: string;
  items: CategoryItemContent[];
  onAdd: () => void;
  onDelete: (index: number) => void;
  onChange: (index: number, field: "title" | "image", value: string) => void;
}) {
  return (
    <div className="mt-5">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-black uppercase tracking-widest">{title}</h4>
        <AddButton label="Adicionar card" onClick={onAdd} compact />
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="grid gap-3 rounded-md border border-black/10 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5"
          >
            <TextField
              label="Título"
              value={item.title}
              onChange={(value) => onChange(index, "title", value)}
            />
            <ImageField value={item.image} onChange={(value) => onChange(index, "image", value)} />
            <DeleteButton label="Excluir card" onClick={() => onDelete(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Panel({
  title,
  description,
  action,
  children,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-md border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-[#171a21] sm:p-5">
      <div className="mb-5 flex flex-col gap-3 border-b border-black/10 pb-4 dark:border-white/10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-black italic tracking-tighter">{title}</h3>
          {description && (
            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
              {description}
            </p>
          )}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function EditableCard({
  title,
  image,
  children,
}: {
  title: string;
  image?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-md border border-black/10 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
      <div className="mb-3 flex items-center gap-3">
        {image && (
          <img src={image} alt="" className="h-14 w-20 rounded-sm object-cover" loading="lazy" />
        )}
        <div className="min-w-0">
          <p className="truncate text-sm font-black uppercase">{title}</p>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Editável
          </p>
        </div>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  helper,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  helper?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
        {label}
      </span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-semibold outline-none transition focus:border-[#F5C518] dark:border-white/10 dark:bg-[#111318]"
      />
      {helper && (
        <span className="mt-1 block text-[10px] font-bold text-slate-500 dark:text-slate-400">
          {helper}
        </span>
      )}
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={4}
        className="w-full resize-y rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-semibold outline-none transition focus:border-[#F5C518] dark:border-white/10 dark:bg-[#111318]"
      />
    </label>
  );
}

function ImageField({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="grid gap-3 sm:grid-cols-[120px_minmax(0,1fr)] sm:items-end">
      <img
        src={value || fallbackImage}
        alt=""
        className="h-20 w-full rounded-sm object-cover sm:w-[120px]"
        loading="lazy"
      />
      <TextField label="URL da imagem" value={value} onChange={onChange} />
    </div>
  );
}

function AddButton({
  onClick,
  label = "Adicionar",
  compact = false,
}: {
  onClick: () => void;
  label?: string;
  compact?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md bg-[#F5C518] font-black uppercase text-black hover:bg-[#D4A912]",
        compact ? "px-3 py-1.5 text-[10px]" : "px-4 py-2 text-sm",
      )}
    >
      <Plus size={compact ? 14 : 16} />
      {label}
    </button>
  );
}

function DeleteButton({ onClick, label = "Excluir" }: { onClick: () => void; label?: string }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex w-fit items-center gap-2 rounded-md border border-red-500/30 px-3 py-2 text-xs font-black uppercase text-red-600 hover:bg-red-500 hover:text-white dark:text-red-300"
    >
      <Trash2 size={14} />
      {label}
    </button>
  );
}

function cloneContent(content: SiteContent): SiteContent {
  return JSON.parse(JSON.stringify(content)) as SiteContent;
}

function emptyFeatured(): FeaturedNewsContent {
  return {
    id: createContentId("featured"),
    title: "Nova manchete em destaque",
    category: "Games",
    image: fallbackImage,
  };
}

function emptyNews(): NewsContent {
  return {
    id: createContentId("news"),
    title: "Nova notícia de games",
    summary: "Resumo curto da notícia para contextualizar o leitor.",
    category: "Games",
    author: "Equipe Games4Gamers",
    date: new Date().toLocaleDateString("pt-BR"),
    image: fallbackImage,
  };
}

function emptyReview(): ReviewContent {
  return {
    id: createContentId("review"),
    title: "Novo review",
    score: "8.0",
    image: fallbackImage,
  };
}

function emptyVideo(): VideoContent {
  return {
    id: createContentId("video"),
    title: "Novo vídeo",
    category: "Vídeos",
    duration: "10:00",
    url: "https://youtube.com/",
    image: fallbackImage,
  };
}

function emptyMostRead(): MostReadContent {
  return {
    id: createContentId("most"),
    title: "Nova matéria mais lida",
    category: "Games",
    author: "Equipe Games4Gamers",
    image: fallbackImage,
  };
}

function emptyCategoryItem(): CategoryItemContent {
  return {
    id: createContentId("card"),
    title: "Novo card editorial",
    image: fallbackImage,
  };
}

function emptyCategorySection(): CategorySectionContent {
  return {
    id: createContentId("section"),
    title: "Nova seção",
    bigCards: [emptyCategoryItem()],
    sideList: [emptyCategoryItem()],
  };
}

function emptyMenuItem(): MenuItemContent {
  return {
    id: createContentId("menu"),
    label: "Novo item",
    icon: "more",
    href: "#",
    active: false,
  };
}

function emptyFooterSection(): FooterSectionContent {
  return {
    id: createContentId("footer"),
    title: "Nova coluna",
    links: ["Novo link"],
  };
}
