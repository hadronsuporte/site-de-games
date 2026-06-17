import { Zap } from "lucide-react";
import footerBanner from "@/assets/footer-banner.jpg";

export function Footer() {
  const sections = [
    {
      title: "Institucional",
      links: ["Quem Somos", "Contato", "Política de Privacidade", "Conheça o Grupo Flow"],
    },
    {
      title: "Nossos Canais",
      links: ["Flow Games", "Cortes do Flow Games", "Flow Games Trailers", "Gameplayrj", "Discord", "WhatsApp", "Telegram"],
    },
    {
      title: "Serviços FG",
      links: ["Flow Games Store", "Flow Ping", "Low Games", "Games em Promoção", "Faz a Boa!", "Seja Membro"],
    },
    {
      title: "Conheça o Grupo Flow",
      links: ["Flow Podcast", "Flow Sport Club", "Flow News", "Flow S.A.", "Ciência Sem Fim", "Venus Podcast"],
    },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Purple banner */}
      <div className="relative w-full h-24 md:h-32 overflow-hidden bg-[#a020f0]">
        <img
          src={footerBanner}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Main footer area */}
      <div className="relative">
        <div className="container mx-auto px-4 pt-14 pb-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-[11px] font-black uppercase tracking-widest mb-5 text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[12px] text-white/70 hover:text-flow-yellow transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="flex items-center gap-2 mb-5">
                <span className="flex items-center justify-center w-5 h-5 bg-[#c026d3] rounded-sm">
                  <Zap className="w-3 h-3 text-white" fill="currentColor" />
                </span>
                <h3 className="text-[11px] font-black uppercase tracking-widest">
                  Cadastre-se em nossa Newsletter
                </h3>
              </div>
              <div className="relative">
                <label className="block text-[11px] font-black uppercase tracking-widest text-flow-yellow mb-2">
                  E-mail
                </label>
                <div className="relative border-b border-white/30">
                  <input
                    type="email"
                    placeholder=""
                    className="w-full bg-transparent py-2 pr-10 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-0 bottom-1.5 flex items-center justify-center w-7 h-7 bg-[#c026d3] hover:bg-[#a21caf] rounded-sm transition-colors"
                    aria-label="Cadastrar"
                  >
                    <span className="text-white text-sm">→</span>
                  </button>
                </div>
                <p className="text-[10px] text-white/40 mt-3 uppercase tracking-widest">
                  Cadastre seu e-mail acima
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[11px] text-white/50 text-center md:text-left leading-relaxed">
              <p>© 2024 Flow Games. Todos os direitos reservados.</p>
              <p>
                Desenvolvido por <a href="#" className="underline hover:text-flow-yellow">Wolfvision</a>
              </p>
            </div>
            <div className="flex items-center gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-flow-yellow" fill="currentColor" />
                <span className="text-[11px] font-black uppercase tracking-widest">
                  Grupo<br />Flow
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 bg-flow-yellow rounded-sm text-black font-black italic text-xs">
                  FG
                </span>
                <span className="text-[11px] font-black uppercase tracking-widest italic">
                  Flow<br />Games
                </span>
              </div>
              <div className="w-7 h-7 grid place-items-center border border-white/40 rounded-sm text-white/70 font-black italic text-xs">
                W
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
