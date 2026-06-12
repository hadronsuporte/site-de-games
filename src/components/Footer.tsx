export function Footer() {
  const sections = [
    {
      title: "INSTITUCIONAL",
      links: ["Quem Somos", "Contato", "Política de Privacidade", "Conheça o Grupo Flow"]
    },
    {
      title: "NOSSOS CANAIS",
      links: ["Flow Games", "Cortes do Flow Games", "Flow Games Trailers", "Gameplayrj", "Discord", "WhatsApp", "Telegram"]
    },
    {
      title: "SERVIÇOS FG",
      links: ["Flow Games Store", "Flow Ping", "Low Games", "Games em Promoção", "Faz a Boa!", "Seja Membro"]
    },
    {
      title: "CONHEÇA O GRUPO FLOW",
      links: ["Flow Podcast", "Flow Sport Club", "Flow News", "Flow S.A.", "Ciência Sem Fim", "Venus Podcast"]
    }
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-black mb-6 tracking-wider">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-gray-400 hover:text-flow-yellow transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 bg-flow-yellow" />
              <h3 className="text-sm font-black tracking-wider uppercase">Cadastre-se em nossa newsletter</h3>
            </div>
            <div className="relative mt-4">
              <input
                type="email"
                placeholder="E-MAIL"
                className="w-full bg-transparent border-b border-gray-700 py-2 text-xs focus:outline-none focus:border-flow-yellow"
              />
              <button className="absolute right-0 bottom-2 text-flow-yellow">
                <span className="text-xl">→</span>
              </button>
            </div>
            <p className="text-[10px] text-gray-500 mt-2">CADASTRE SEU E-MAIL ACIMA</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-flow-yellow rounded-sm" />
              <span className="font-black text-lg">FLOW GAMES</span>
            </div>
          </div>
          <div className="text-[10px] text-gray-500 text-center md:text-right">
            <p>© 2024 Flow Games. Todos os direitos reservados.</p>
            <p>Desenvolvido por Wolfvision | Produtos de jogos</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
