import { MapPin, Bus, Store, CheckCircle2 } from 'lucide-react';

export function Location() {
  return (
    <section id="localizacao" className="py-20 bg-diretoria-black border-t border-diretoria-yellow/20 relative overflow-hidden">
      
      {/* 1. FUNDO COM TEXTURA SUTIL (Grid Técnico) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#FCEE09 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
            NOSSA <span className="text-diretoria-yellow">LOCALIZAÇÃO</span>
          </h2>
          <p className="text-gray-400 font-sans text-xl max-w-2xl mx-auto">
            Vila Jardini: O ponto de equilíbrio perfeito entre o agito universitário e a tranquilidade para estudar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* LADO ESQUERDO: Informações */}
          <div className="flex flex-col gap-6">
            
            {/* Card Principal: Endereço */}
            <div className="bg-diretoria-gray/80 backdrop-blur-sm p-6 rounded-sm border-l-4 border-diretoria-yellow flex items-start gap-4 hover:bg-diretoria-gray transition-colors">
              <div className="bg-diretoria-yellow p-3 rounded text-black shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-2xl text-white font-title mb-2">O QG da Diretoria</h3>
                <p className="text-gray-300 font-sans text-lg">
                  Rua Abolição, 469 - Vila Jardini<br/>
                  Sorocaba - SP <span className="text-gray-500 text-sm block mt-1">CEP: 18044-070</span>
                </p>
              </div>
            </div>

            {/* Card: Proximidades (Features) */}
            <div className="bg-diretoria-gray/80 backdrop-blur-sm p-6 rounded-sm border-l-4 border-gray-600 flex items-start gap-4 hover:border-white transition-colors group">
              <div className="bg-gray-700 text-white p-3 rounded group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                <Store size={28} />
              </div>
              <div className="w-full">
                <h3 className="text-2xl text-white font-title mb-3">Tudo Perto</h3>
                <ul className="space-y-2 font-sans text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-diretoria-yellow"/> 5 min do Supermercado Tauste</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-diretoria-yellow"/> 3 min da Farmácia Drogasil</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-diretoria-yellow"/> Academias SmartFit e Panobianco a pé</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-diretoria-yellow"/> Pertinho do BK e McDonald's</li>
                </ul>
              </div>
            </div>

            {/* 2. DESTAQUE DO ÔNIBUS (Visual Diferente) */}
            <div className="bg-gradient-to-r from-diretoria-yellow/20 to-transparent p-6 rounded-sm border border-diretoria-yellow/50 flex items-center gap-5 relative overflow-hidden group">
               {/* Brilho de fundo ao passar o mouse */}
               <div className="absolute inset-0 bg-diretoria-yellow/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
               
               <div className="bg-diretoria-yellow text-black p-4 rounded-full shadow-[0_0_15px_rgba(252,238,9,0.4)] z-10 shrink-0">
                <Bus size={32} />
              </div>
              <div className="z-10">
                <h3 className="text-2xl text-white font-title mb-1">Ponto UFSCar na Esquina</h3>
                <p className="text-gray-200 font-sans">
                  A apenas <strong>200m da casa</strong>. Você sai da cama e está no ponto em 2 minutos. Linha direta para o Campus.
                </p>
              </div>
            </div>

          </div>

          {/* LADO DIREITO: O Mapa com Efeito de Borda Animada */}
          <div className="relative group w-full min-h-[500px] h-full">
            
            {/* 3. A BORDA ANIMADA (Conceito: Pseudo-elementos girando ou gradiente) */}
            {/* Abordagem Simples e Performática: Glow amarelo no hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-diretoria-yellow via-white to-diretoria-yellow opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
            
            <div className="relative w-full h-full rounded-sm overflow-hidden bg-gray-900 border-2 border-transparent group-hover:border-diretoria-yellow transition-colors duration-300">
               <iframe 
                src="https://www.google.com/maps/d/u/0/embed?mid=1kA6FqnkcFqxpwhEu1EXA387CMJlA2rc&ehbc=2E312F&noprof=1"
                className="absolute inset-0 w-full h-full border-0 filter opacity-90 hover:opacity-100 transition-all duration-500"
                allowFullScreen={true} 
                loading="lazy" 
                title="Mapa Vila Jardini"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              {/* Badge Flutuante sobre o mapa */}
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur text-white px-4 py-2 rounded border-l-4 border-diretoria-yellow text-sm font-sans pointer-events-none">
                📍 Clique no mapa para explorar
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
