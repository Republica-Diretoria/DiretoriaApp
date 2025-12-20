import { useState } from 'react';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

const faqQA = [
  {
    question: "O que está incluso no valor do aluguel?",
    answer: "No valor da mensalidade já está tudo incluso: aluguel, internet fibra de alta velocidade, água, luz, gás, diarista, piscineiro, jardineiro, itens básicos da cozinha (arroz, feijão, café, açúcar, óleo, etc)"
  },
  {
    question: "A casa é mobiliada?",
    answer: "Sim. Todos os cômodos são mobiliados, e para cada morador há cama, colchão, mesa para estudo/trabalho. Caso prefira, você pode também trazer suas coisas pra cá"
  },
  {
    question: "A república tem animais de estimação?",
    answer: "Sim! Hoje, moramos com 3 cachorros: a Maju, a Lara e o Bob."
  },
  {
    question: "República é tipo Big Brother?",
    answer: "Não! Apesar da maior parte dos espaços serem compartilhados, o ambiente é leve e não tem ninguém te vigiando (tirando a câmera da louça, ela está sempre atenta)."
  },
  {
    question: "Dá pra ter privacidade ou é tudo coletivo mesmo?",
    answer: "Cada um tem seu espaço. Quando quiser uma galera para trocar ideia, sempre vai ter alguém. Mas, se quiser ficar na sua, é você quem decide!"
  },
  {
    question: "Tem regra ou é cada um por si?",
    answer: "Temos algumas regras, que desenvolvemos nesses 18 anos de República Diretoria. Quando você mora aqui, o que você faz, na maioria das vezes, não afeta só você. Por isso, usamos alguma regras (e bom senso!) para organizar a vida aqui em casa."
  },
  {
    question: "É verdade que sempre tem alguém usando o banheiro quando você mais precisa?",
    answer: "Não! Apesar de morarmos em vários, temos banheiros mais do que suficiente para ninguém ficar sem."
  },
  {
    question: "República é só festa ou também rola rotina normal?",
    answer: "Todo mundo precisa de rotina! Em dias de semana, não é permitido música alta ou muito barulho, para não atrapalhar aqueles que trabalham e estudam (somos uma república universitária!)"
  },
  {
    question: "É realmente mais barato que morar sozinho?",
    answer: "Sim, especialmente considerando o padrão de vida que temos aqui. Temos piscina (com visita do piscineiro duas vezes na semanas), diarista, internet de alta velocidade, videogames, televisão, serviços de streaming... Dividindo esses custos em várias pessoas, não fica pesado para ninguém"
  },
  {
    question: "Como funcionam as contas?",
    answer: "Dividimos a conta em duas vezes, todo mês. A primeira, no dia 10, é referente a contas (água, luz, internet, gás). No dia 20, são pagos os valores do aluguel, divido proporcionalmente em todos os moradores."
  },
  // {question: "E quando alguém atrasa ou esquece de pagar?", answer: ""}, {question: "Tem multa pra quem some e não limpa nada?", answer: ""},
  {
    question: "Quem limpa a casa",
    answer: "Toda semana, a Dona Lúcia vem ajudar a gente com a organização da casa. Para manter a casa limpa, dividimos as tarefas, dividindo elas semanalmente, mudando para não ficar injusto para ninguém"
  },
  {
    question: "Pode deixar louça na pia ou é crime?",
    answer: "É crime! Aqui em casa, cada um lava sua louça. Se alguém deixar sua louça na pia, é flagrado pela nossa câmera e multado."
  },
  {
    question: "Como evitar tretas por coisas bobas?",
    answer: "Aqui na república, somos todos irmãos, e comunicação é tudo para gente. Sempre que há um problema, por menor que seja, a única saída para resolução é o diálogo"
  },
  {
    question: "Quarto individual ou dividido?",
    answer: "Ao entrar na república, todos os calouros vão para um grande quarto, o Quartão. Todos passam por isso pois enxergamos que o momento de ingresso é muito diferente, e com todos vivendo essa etapa ao mesmo tempo, compartilhar esses momentos tem um grande impacto na união dos calouros. Depois do quartão, a casa conta com quartos individuais e compartilhados, com o aluguel sendo proporcional à quantidade de pessoas no cômodo."
  },
  {
    question: "Posso decorar meu quarto do meu jeito?",
    answer: "Sim! Porém, é sempre necessário o acordo entre as pessoas que dividem o espaço"
  },
  {
    question: "E se eu estudo de madrugada e alguém dorme cedo ?",
    answer: "É tudo conversado. Se você divide quarto com alguém e seus horários não coincidem, com um pouco de papo logo se ajeitam. Se preferirem, é possível estudar em outro cômodo, por exemplo (apesar de isso raramente acontecer)."
  },
  {
    question: "Dá pra levar visitas?",
    answer: "Claro!"
  },
  // {question: "Pode trazer amigos(as) e dates?", answer: ""},
  {
    question: "Festa é sempre liberada ou tem limite?",
    answer: "Durante a semana, o barulho é limitado, para não atrapalhar os que estão estudando ou trabalhando"
  },
  {
    question: "E quando alguém quer dormir e outro quer socializar?",
    answer: "Aqui na república, sempre tem alguém disponível para trocar ideia. Se você quer conversar, com certeza vai ter outra pessoa querendo também."
  },
  {
    question: "Todo mundo vira melhor amigo?",
    answer: "Sim! É claro que cada um tem mais intimidade com uns ou outros, mas a convivência diária, os momentos familiares e as experiências compartilhadas cria vínculos que se leva para a vida toda."
  },
  {
    question: "E quando não bate santo com alguém?",
    answer: "No começo, acontece às vezes. Com o passar do tempo, pela vivência do dia a dia e pelas experiências vividas, todo mundo se aproxima."
  },
  {
    question: "Já rolaram conflitos? Como vocês resolvem?",
    answer: "Claro que sim. Vivendo com muitas pessoas, conflitos ocorrem (raramente). Quando há algum tipo de problema entre os moradores, a conversa é a forma de resolução. Quando não há acordo entre os envolvidos, decisões compartilhadas podem ser tomadas pelos membros da casa"
  },
  {
    question: "Vale a pena morar em república?",
    answer: "Muito! Morar em rep é uma experiência transformadora para todos que passam por ela."
  },
  {
    question: "O que muda na vida de quem mora aqui?",
    answer: "Na república, acabamos desenvolvendo diversas habilidades: comunicação, convivência com pessoas diferentes (e com bagagens diferentes), responsabilidade, autodefinição de limites, lidar e resolver problemas. impacto profissional: comunicação, divisão de tarefas, colaboração, proatividade, organização, responsabilidade pessoal, versatilidade, improvisação"
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-diretoria-black relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
  
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-diretoria-yellow to-transparent opacity-50"></div>
      
      <div className="absolute -left-20 top-40 w-64 h-64 bg-diretoria-yellow/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-diretoria-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-diretoria-gray border border-diretoria-yellow/30 text-diretoria-yellow">
            <MessageCircleQuestion size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl text-white font-title mb-4">
            DÚVIDAS <span className="text-diretoria-yellow">FREQUENTES</span>
          </h2>
          <p className="text-gray-400 font-sans text-lg max-w-2xl mx-auto">
            Ainda tá perdido? Separamos as perguntas que a galera mais faz antes de virar bixo da Diretoria.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqQA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className={`group border-2 transition-all duration-300 rounded-sm overflow-hidden ${
                  isOpen 
                    ? 'border-diretoria-yellow bg-diretoria-gray/50' 
                    : 'border-zinc-800 bg-diretoria-gray hover:border-diretoria-yellow/50'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-title text-xl uppercase tracking-wide transition-colors ${isOpen ? 'text-diretoria-yellow' : 'text-white group-hover:text-gray-200'}`}>
                    {item.question}
                  </span>
                  <div className={`p-1 rounded-full border transition-all duration-300 ${
                    isOpen 
                      ? 'bg-diretoria-yellow border-diretoria-yellow text-black rotate-180' 
                      : 'border-zinc-600 text-gray-400 group-hover:border-diretoria-yellow group-hover:text-diretoria-yellow'
                  }`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-gray-300 font-sans leading-relaxed border-t border-dashed border-zinc-700/50 mt-2">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action Final */}
        <div className="text-center mt-12">
           <p className="text-gray-400 font-sans mb-4">Ainda tem alguma dúvida?</p>
           <a 
	     href="https://wa.me/5518996905519?text=Olá,%20tenho%20algumas%20dúvidas%20sobre%20a%20república"
             className="inline-block px-8 py-3 bg-transparent border-2 border-diretoria-yellow text-diretoria-yellow font-title uppercase tracking-wider hover:bg-diretoria-yellow hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(252,238,9,0.1)] hover:shadow-[0_0_25px_rgba(252,238,9,0.4)]"
           >
		Chama no WhatsApp!
           </a>
        </div>

      </div>
    </section>
  );
}
