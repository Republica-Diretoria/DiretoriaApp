import { useState } from 'react';
import { ChevronLeft, ChevronRight, Wifi, Bean,  Gamepad2, Waves } from 'lucide-react';
import piscina from '../assets/piscina.jpg';
import quartao from '../assets/quartao.jpg';
import churrasqueira from '../assets/churrasqueira.jpg';
import salaantiga from '../assets/salaantinga.jpg';


// DADOS MOCKADOS 
const photos = [
  {
    url: piscina,
    label: "Área da Piscina",
    desc: "Lazer completo para os finais de semana e integrações."
  },
  {
    url: salaantiga,
    label: "Sala de Estar",
    desc: "Espaço amplo com TV 4K e sofás confortáveis para a galera."
  },
  {
    url: quartao,
    label: "Quartos",
    desc: "Mobília completa e ambiente propício para estudos."
  },
  {
    url: churrasqueira,
    label: "Área de Churrasco",
    desc: "O coração da casa. Onde as melhores histórias acontecem."
  }
];

// Ícones de facilidades
const features = [
  { icon: <Wifi />, text: "Internet Fibra 600Mb" },
  { icon: <Waves />, text: "Piscina" },
  { icon: <Bean />, text: "Compras compartilhadas" },
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
      
      <div 
        className="absolute top-0 right-0 w-[600px] h-64 bg-yellow-900/20 rotate-12 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            #FCEE09 20px,
            #FCEE09 40px
          )`
        }}
      ></div>
      {/* Segundo elemento decorativo (mancha de 'pixo' ou sujeira) */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-diretoria-yellow/10 via-transparent to-transparent pointer-events-none blur-2xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO: Texto e Vendas */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl text-white mb-2 font-title">
              A ESTRUTURA DA <br/>
              <span className="text-diretoria-yellow">DIRETORIA</span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed font-sans border-l-4 border-diretoria-yellow pl-4">
              Morar em república é bom, mas morar na Diretoria é outro nível. 
              Temos uma das maiores casas da região, pensada para equilibrar 
              seus estudos com momentos inesquecíveis de lazer.
            </p>

            {/* Grid de Facilidades */}
            <div className="grid grid-cols-2 gap-4 py-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white font-bold font-title uppercase tracking-wide group cursor-default">
                  <div className="p-2 rounded bg-diretoria-gray border border-diretoria-yellow/20 group-hover:border-diretoria-yellow group-hover:bg-diretoria-yellow group-hover:text-black transition-all duration-300">
                    {feature.icon}
                  </div>
                  <span className="group-hover:text-diretoria-yellow transition-colors">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="hidden lg:block pt-4">
               <p className="text-sm text-gray-500 italic font-mono">
                 // Manutenção e limpeza de áreas comuns inclusas.
               </p>
            </div>
          </div>

          {/* LADO DIREITO: Carrossel Interativo com GLOW */}
          <div className="relative group">
            
            {/* AQUI ESTÁ A MÁGICA DO BRILHO:
                Adicionei shadow-[...] e hover:shadow-[...] com a cor amarela.
                Também adicionei border-diretoria-yellow.
            */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden border-2 border-diretoria-yellow/50 bg-black transition-all duration-500 shadow-[0_0_20px_rgba(252,238,9,0.2)] hover:shadow-[0_0_40px_rgba(252,238,9,0.6)] hover:border-diretoria-yellow">
              
              {/* Imagem Atual */}
              <div 
                style={{ backgroundImage: `url(${photos[currentIndex].url})` }} 
                className="w-full h-full bg-center bg-cover duration-700 ease-out transition-all hover:scale-110"
              >
                {/* Overlay Gradiente na base */}
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Legenda da Foto */}
              <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                <h3 className="text-4xl mb-1 text-diretoria-yellow font-title uppercase tracking-wider drop-shadow-md">
                  {photos[currentIndex].label}
                </h3>
                <p className="font-sans text-sm md:text-base opacity-90 border-l-2 border-white pl-3">
                  {photos[currentIndex].desc}
                </p>
              </div>

            </div>

            {/* Controles de Navegação (Estilizados) */}
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-4 p-3 bg-black/50 hover:bg-diretoria-yellow hover:text-black text-white rounded-sm border border-diretoria-yellow/30 transition-all backdrop-blur-sm"
            >
              <ChevronLeft size={28} />
            </button>

            <button 
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-4 p-3 bg-black/50 hover:bg-diretoria-yellow hover:text-black text-white rounded-sm border border-diretoria-yellow/30 transition-all backdrop-blur-sm"
            >
              <ChevronRight size={28} />
            </button>

            {/* Indicadores (Barrinhas estilo "Loading") */}
            <div className="flex justify-center py-6 gap-2">
              {photos.map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`h-1 cursor-pointer transition-all duration-300 ${currentIndex === slideIndex ? "w-12 bg-diretoria-yellow shadow-[0_0_10px_#FCEE09]" : "w-4 bg-gray-700 hover:bg-gray-500"}`}
                ></div>
              ))}
            </div>

          </div>
        </div>
      </div>
</section>

  );
}
