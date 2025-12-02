import { useState } from 'react'; // <--- Faltava importar o hook de estado
import { ChevronDown, GraduationCap } from 'lucide-react';
import { FreshmanForm } from './FreshmanForm';
import casa from "../assets/casa.jpg";

export function Hero() {
  // <--- Faltava essa linha para criar a variável de controle do modal
  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* 1. IMAGEM DE FUNDO COM OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img 
          src={casa} 
          alt="Fachada da República Diretoria" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-diretoria-black via-diretoria-black/80 to-diretoria-black/50"></div>
        <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKjR4/+B9FMyAAmYGRkZICyQYyR488/AwDEhQ/4c/f3bAAAAABJRU5ErkJggg==')] opacity-20 mix-blend-overlay"></div>
      </div>
      
      {/* 2. CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-start justify-center h-full pt-20">
        
        <span className="inline-block bg-diretoria-yellow text-black font-title font-bold uppercase tracking-widest px-3 py-1 text-sm mb-6">
          UFSCar Sorocaba • Desde 2008
        </span>

        <h1 className="text-6xl md:text-8xl lg:text-9xl leading-none mb-4">
          REPÚBLICA<br/>
          <span className="text-diretoria-yellow">DIRETORIA</span>
        </h1>

        <p className="font-sans text-xl md:text-2xl text-gray-300 max-w-2xl border-l-4 border-diretoria-yellow pl-6 mb-10">
          Muito mais que uma casa. Viva a tradição da primeira república universitária da UFSCar Sorocaba e entre para a família.
        </p>

        {/* Botão de Ação (CTA) - Corrigido */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group bg-diretoria-yellow text-black font-title font-bold uppercase tracking-wider px-10 py-5 text-xl flex items-center justify-center gap-3 hover:bg-white hover:shadow-[0_0_20px_rgba(252,238,9,0.5)] transition-all duration-300 rounded-sm w-full sm:w-auto"
          >
            <GraduationCap size={28} className="group-hover:rotate-12 transition-transform duration-300"/>
            Sou Bixo 2026
          </button>
        </div>

      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={32} className="text-diretoria-yellow" />
      </div>

      {/* Modal do Formulário */}
      <FreshmanForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </section>
  );
}
