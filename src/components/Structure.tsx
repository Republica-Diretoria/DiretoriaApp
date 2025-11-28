import { useState } from 'react';
import { ChevronLeft, ChevronRight, Wifi, Shield,  Gamepad2, Waves } from 'lucide-react';
import piscina from '../assets/piscina.jpg';

// DADOS MOCKADOS (Substitua pelas fotos reais depois)
const photos = [
  {
    url: piscina,
    label: "Área da Piscina",
    desc: "Lazer completo para os finais de semana e integrações."
  },
  {
    url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1000",
    label: "Sala de Estar",
    desc: "Espaço amplo com TV 4K e sofás confortáveis para a galera."
  },
  {
    url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1000",
    label: "Quartos",
    desc: "Mobília completa e ambiente propício para estudos."
  },
  {
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
    label: "Área de Churrasco",
    desc: "O coração da casa. Onde as melhores histórias acontecem."
  }
];

// Ícones de facilidades
const features = [
  { icon: <Wifi />, text: "Internet Fibra 600Mb" },
  { icon: <Waves />, text: "Piscina" },
  { icon: <Shield />, text: "Segurança 24h" },
  { icon: <Gamepad2 />, text: "Área de Jogos" },
];

export function Structure() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="casa" className="py-20 bg-diretoria-gray relative overflow-hidden">
      
      {/* Elemento decorativo de fundo (mancha amarela sutil) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-diretoria-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO: Texto e Vendas */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl text-white mb-2">
              A ESTRUTURA DA <br/>
              <span className="text-diretoria-yellow">DIRETORIA</span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed font-sans">
              Morar em república é bom, mas morar na Diretoria é outro nível. 
              Temos uma das maiores casas da região, pensada para equilibrar 
              seus estudos com momentos inesquecíveis de lazer.
            </p>

            {/* Grid de Facilidades */}
            <div className="grid grid-cols-2 gap-4 py-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white font-bold font-title uppercase tracking-wide">
                  <span className="text-diretoria-yellow">{feature.icon}</span>
                  {feature.text}
                </div>
              ))}
            </div>

            <div className="hidden lg:block pt-4">
               <p className="text-sm text-gray-500 italic">
                 * Manutenção e limpeza de áreas comuns inclusas.
               </p>
            </div>
          </div>

          {/* LADO DIREITO: Carrossel Interativo */}
          <div className="relative group">
            
            {/* Moldura do Carrossel */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden border-2 border-diretoria-yellow/30 shadow-[0_0_30px_rgba(252,238,9,0.1)] bg-black">
              
              {/* Imagem Atual */}
              <div 
                style={{ backgroundImage: `url(${photos[currentIndex].url})` }} 
                className="w-full h-full bg-center bg-cover duration-500 ease-out transition-all hover:scale-105"
              >
                {/* Overlay Gradiente na base da foto para ler a legenda */}
                <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              </div>

              {/* Legenda da Foto */}
              <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                <h3 className="text-3xl mb-1 text-diretoria-yellow drop-shadow-md">{photos[currentIndex].label}</h3>
                <p className="font-sans text-sm md:text-base opacity-90">{photos[currentIndex].desc}</p>
              </div>

            </div>

            {/* Botão Esquerdo */}
            <button 
              onClick={prevSlide}
              className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-diretoria-yellow hover:text-black transition-all border border-white/20"
            >
              <ChevronLeft size={30} />
            </button>

            {/* Botão Direito */}
            <button 
              onClick={nextSlide}
              className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-diretoria-yellow hover:text-black transition-all border border-white/20"
            >
              <ChevronRight size={30} />
            </button>

            {/* Indicadores (Bolinhas) */}
            <div className="flex justify-center py-4 gap-2">
              {photos.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`transition-all duration-300 cursor-pointer h-2 rounded-full ${currentIndex === slideIndex ? "w-8 bg-diretoria-yellow" : "w-2 bg-gray-600 hover:bg-gray-400"}`}
                ></div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
