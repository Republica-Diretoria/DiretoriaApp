import { useState } from 'react';
import { X, Check, GraduationCap, MessageCircle } from 'lucide-react';

const courseContacts: Record<string, string> = {
  "Administração": "5511951702995", //tripa
  "Ciências Biológicas": "5519994835044", //mort
  "Ciência da Computação": "5511996375606", //jiraya
  "Ciência de Dados e IA": "5519988402915", //bibi
  "Ciências Econômicas": "5519989823434", //olla
  "Engenharia de Produção": "5511991618586", //bilu
  "Engenharia Florestal": "5516997761761", //mureta
  "Física": "5514996890864", //baby
  "Geografia": "5518996905519", //rego
  "Matemática": "5511966326628", //gru
  "Pedagogia": "5512991242798", //bento
  "Química": "5519994835044", //mort
  "Turismo": "5511972137389", //zeca
};

interface FreshmanFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FreshmanForm({ isOpen, onClose }: FreshmanFormProps) {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Montagem da Mensagem Personalizada
    const phone = courseContacts[selectedCourse] || "5511966326628"; // gru é o fallback, se não tiver numero
    const message = encodeURIComponent(
      `Fala! Sou Bixo 2026 de *${selectedCourse}*! Vi o site da Diretoria e queria tirar umas dúvidas sobre o curso e a casa.`
    );
    
	window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    
    };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* Backdrop com Blur */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Container do Modal */}
      <div className="relative bg-diretoria-gray w-full max-w-md p-8 rounded-sm border-2 border-diretoria-yellow shadow-[0_0_50px_rgba(252,238,9,0.2)] animate-in fade-in zoom-in duration-300">
        
        {/* Botão Fechar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-title text-white mb-2">
            PARABÉNS PELA <br/>
            <span className="text-diretoria-yellow">APROVAÇÃO!</span>
          </h2>
          <p className="text-gray-400 text-sm font-sans">
            Você acaba de dar o primeiro passo. Preencha abaixo para falar com um veterano do <strong>seu curso</strong> e tirar dúvidas sobre a matricula, bolsas, moradia, ou qualquer outro assunto.
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Input de Curso */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-diretoria-yellow uppercase tracking-wider flex items-center gap-2">
              <GraduationCap size={14} /> Qual seu curso?
            </label>
            <select 
              required
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full bg-black border border-gray-700 text-white p-3 rounded-sm focus:border-diretoria-yellow focus:outline-none focus:ring-1 focus:ring-diretoria-yellow font-sans appearance-none"
            >
              <option value="" disabled>Selecione seu curso...</option>
              {Object.keys(courseContacts).sort().map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>

          {/* Botão Submit */}
          <button 
            type="submit"
            disabled={isSubmitting || !selectedCourse}
            className="w-full mt-4 bg-diretoria-yellow text-black font-title font-bold text-xl uppercase py-4 rounded-sm hover:bg-white hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              "Redirecionando..."
            ) : (
              <>
                <MessageCircle size={22} className="stroke-[3px]" />
                Falar com Veterano
              </>
            )}
          </button>

          {/* Microcopy de Segurança */}
          <p className="text-xs text-center text-gray-500 pt-2 font-sans">
            <span className="flex items-center justify-center gap-1">
              <Check size={12} className="text-green-500" /> Sem spam. Apenas papo reto.
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}
