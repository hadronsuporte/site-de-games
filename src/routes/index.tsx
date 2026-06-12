import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroBanner, NewsCard } from "@/components/NewsComponents";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-flow-dark text-white selection:bg-flow-yellow selection:text-black">
      <Navbar />

      <main>
        {/* Ad Placeholder */}
        <div className="container mx-auto px-4 py-8">
          <div className="w-full h-[150px] bg-gray-900/50 rounded-sm border border-white/5 flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" 
              alt="Promo Banner"
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-12">
          <HeroBanner
            category="GAMES"
            title="Mais um! Valor Mortis é adiado e ganha nova data para outubro"
            summary="Valor Mortis é mais um jogo adiado devido ao turbulento mês de setembro. Confira os detalhes sobre a nova data de lançamento e o que esperar."
            author="Thais Bassani"
            date="11.06.2026 às 15:00"
            image="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
          />
        </section>

        {/* Featured Grid */}
        <section className="container mx-auto px-4 mb-16">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-black italic tracking-tighter">ÚLTIMAS NOTÍCIAS</h2>
            <button className="text-[10px] font-black bg-white/5 hover:bg-flow-yellow hover:text-black px-4 py-2 rounded-sm transition-all uppercase">
              Ver Tudo
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <NewsCard
              category="REVIEWS"
              title="Review: Elden Ring: Shadow of the Erdtree é a perfeição em forma de DLC"
              author="Bruno Micali"
              date="Hoje"
              image="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop"
            />
            <NewsCard
              category="ESPORTS"
              title="CBLOL 2026: LOUD e paiN Gaming se enfrentam na grande final"
              author="Vitor"
              date="Ontem"
              image="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2084&auto=format&fit=crop"
            />
            <NewsCard
              category="CULTURA POP"
              title="Deadpool & Wolverine quebra recordes de bilheteria mundial"
              author="Igor"
              date="Ontem"
              image="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop"
            />
            <NewsCard
              category="GAMES"
              title="GTA VI: Novos rumores sugerem trailer em breve"
              author="Phoenix"
              date="10.06.2026"
              image="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-white/5 py-16 mb-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-[2px] bg-flow-yellow" />
              <h2 className="text-3xl font-black italic tracking-tighter">REVIEWS DE JOGOS</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <NewsCard
                  horizontal
                  category="GAMES"
                  title="Onde assistir a abertura da Copa do Mundo 2026?"
                  author="Staff"
                  date="Agora"
                  image="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop"
                />
                <NewsCard
                  horizontal
                  category="GAMES"
                  title="Qual é o próximo jogo grátis da Epic Games Store?"
                  author="Staff"
                  date="Agora"
                  image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
                />
              </div>
              <div className="bg-white/5 p-8 rounded-sm">
                <h3 className="text-sm font-black mb-6 border-b border-white/10 pb-4">DESCOBRIR MAIS</h3>
                <ul className="space-y-4">
                  {['Notícias da Capcom', 'podcasts', 'Jogos Resident Evil'].map((item) => (
                    <li key={item} className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-4 hover:border-flow-yellow transition-colors">
                      <span className="text-sm font-bold group-hover:text-flow-yellow uppercase">{item}</span>
                      <span className="text-gray-500 group-hover:text-flow-yellow">→</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Video Banner Placeholder */}
        <section className="container mx-auto px-4 mb-16">
          <div className="relative w-full aspect-[21/6] bg-purple-600 rounded-sm overflow-hidden flex items-center justify-center">
             <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-30 mix-blend-overlay" 
              alt="Promo Banner"
            />
            <div className="absolute flex flex-col items-center text-center">
               <h2 className="text-5xl font-black italic mb-4">FLOW GAMES CARDS</h2>
               <button className="bg-white text-black font-black px-8 py-3 rounded-full hover:bg-flow-yellow transition-colors">COMPRAR AGORA</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
