import { ChevronDown, MessageCircle } from 'lucide-react';
import casa from "../assets/casa.jpg";

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* 1. IMAGEM DE FUNDO COM OVERLAY */}
      <div className="absolute inset-0 z-0">
        {/* Substitua a URL abaixo pela foto da fachada da sua república */}
        <img 
          src={casa} 
          alt="Fachada da República Diretoria" 
          className="w-full h-full object-cover scale-105" // scale cria um efeito sutil de zoom
        />
        {/* Overlay: Gradiente preto moderno que escurece a imagem */}
        <div className="absolute inset-0 bg-gradient-to-t from-diretoria-black via-diretoria-black/80 to-diretoria-black/50"></div>
         {/* Textura sutil de pontilhados para um toque urbano (opcional) */}
        <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKjR4/+B9FMyAAmYGRkZICyQYyR488/AwDEhQ/4c/f3bAAAAABJRU5ErkJggg==')] opacity-20 mix-blend-overlay"></div>
      </div>
      
      {/* 2. CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-start justify-center h-full pt-20">
        
        {/* "Tag" superior */}
        <span className="inline-block bg-diretoria-yellow text-black font-title font-bold uppercase tracking-widest px-3 py-1 text-sm mb-6">
          UFSCar Sorocaba • Desde 2008
        </span>

        {/* Título Principal - Reto, Bold e Gigante */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl leading-none mb-4">
          REPÚBLICA<br/>
          <span className="text-diretoria-yellow">DIRETORIA</span>
        </h1>

        {/* Subtítulo com a barra lateral amarela */}
        <p className="font-sans text-xl md:text-2xl text-gray-300 max-w-2xl border-l-4 border-diretoria-yellow pl-6 mb-10">
          Muito mais que uma casa. Viva a tradição da vivência universitária e entre para a nossa família.
        </p>

        {/* Botões de Ação (CTA) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* Botão Primário (Amarelo) */}
          <a 
            href="https://wa.me/5511996375606" 
            className="group bg-diretoria-yellow text-black font-title font-bold uppercase tracking-wider px-8 py-4 flex items-center justify-center gap-3 hover:bg-white transition-all duration-300"
          >
            <MessageCircle size={24} className="group-hover:scale-110 transition-transform"/>
            Quero Conhecer a Casa
          </a>
           
           {/* Botão Secundário (Outline/Transparente) para Calouros */}
          <a 
            href="#calouros" 
            className="group border-2 border-white text-white font-title font-bold uppercase tracking-wider px-8 py-4 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
          >
            Sou Bixo 2026
          </a>
        </div>

      </div>

      {/* Indicador de Scroll animado na parte inferior */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={32} className="text-diretoria-yellow" />
      </div>

    </section>
  );
}
