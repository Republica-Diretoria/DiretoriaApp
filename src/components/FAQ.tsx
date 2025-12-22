import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircleQuestion } from 'lucide-react';

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
    question: "Como funcionam as contas?",
    answer: "Dividimos a conta em duas vezes, todo mês. A primeira, no dia 10, é referente a contas (água, luz, internet, gás). No dia 20, são pagos os valores do aluguel, divido proporcionalmente em todos os moradores"
  },
  {
    question: "É realmente mais barato que morar sozinho?",
    answer: "Sim, especialmente considerando o padrão de vida que temos aqui. Temos piscina (com visita do piscineiro duas vezes na semanas), diarista, internet de alta velocidade, videogames, televisão, serviços de streaming... Dividindo esses custos em várias pessoas, não fica pesado para ninguém"
  },
  {
    question: "Tem regra ou é cada um por si?",
    answer: "Temos algumas regras e pessoas com responsabilidades específicas, mas a convivência é mais baseada em bom senso e diálogo. Por exemplo, durante a semana, música alta e festas não ocorrem durante o dia, em respeito àqueles trabalhando e estudando. Para garantir a comunicação em casa, toda a semana fazemos reuniões gerais, para tratar sobre assuntos da casa, moradores e qualquer outra coisa que diga respeito aos moradores da rep"
  },
  {
    question: "Quarto individual ou dividido?",
    answer: "Ao entrar na república, todos os bixos vão para um quarto especial, o Quartão. Todos passam por isso, pois enxergamos que o momento de ingresso é muito diferente, e com todos vivendo essa etapa ao mesmo tempo, compartilhar esses momentos tem um grande impacto na união dos bixos. Depois do quartão, a casa conta com quartos individuais e compartilhados, com o aluguel sendo proporcional à quantidade de pessoas no cômodo"
  },
  {
    question: "Como funciona a organização da casa?",
    answer: "Durante o dia a dia, dividimos as tarefas da casa pelos moradores, cada um fazendo um pouquinho. Algumas funções, como as contas da casa, são concentradas em moradores específicos (voluntariamente) durante algum tempo. Além disso, uma diarista vem toda semana nos ajudar a manter a casa em ordem. Toda semana, fazemos pelo menos uma reunião por semana, para trocar ideia com sobre a casa, o pessoal e outros assuntos da república"
  },
  {
    question: "Pode deixar louça na pia ou é crime?",
    answer: "É crime! Aqui em casa, cada um lava sua louça. Se alguém deixar sua louça na pia, é flagrado pela nossa câmera e a polícia da multa dá multa!"
  },
  {
    question: "A república tem animais de estimação? Posso levar o meu pet?",
    answer: "Hoje, moramos com 3 cachorros: a Maju, a Lara e o Bob. Como vivemos coletivamente, trazer um pet é algo que deve ser discutido antes, de acordo com a situação, qual o animal, e outros fatores que afetam no dia a dia. Amamos animais, mas com nossos 3 doguinhos já temos bastante trabalho (e surpresas) atualmente"
  },
  {
    question: "Dá pra levar visitas?",
    answer: "Claro!"
  },
  {
    question: "Posso decorar meu quarto do meu jeito?",
    answer: "Sim! Porém, é sempre necessário o acordo entre as pessoas que dividem o espaço"
  },
  {
    question: "República é tipo Big Brother?",
    answer: "Não! Apesar da maior parte dos espaços serem compartilhados, o ambiente é leve, e não tem ninguém te vigiando (tirando a câmera da louça, ela está sempre atenta)"
  },
  {
    question: "É verdade que sempre tem alguém usando o banheiro quando você mais precisa?"
    ,
    answer: "Não! Apesar de morarmos em vários, temos banheiros mais do que suficiente para ninguém ficar sem. Temos 5 banheiros e 1 lavabo. Mesmo que um banheiro esteja na suíte de algum morador, o banheiro é uma área compartilhada entre todos da casa"
  },
  {
    question: "O que muda na vida de quem mora aqui?",
    answer: "Morar em rep é uma experiência transformadora para todos que passam por isso. Na república, acabamos desenvolvendo diversas habilidades, como comunicação, companheirismo, colaboração, convivência com pessoas diferentes (e com bagagens diferentes), responsabilidade, autodefinição de limites, lidar e resolver problemas. Além disso, a república desenvolve também habilidades úteis no mercado de trabalho, como proatividade, organização e comprometimento com prazos, responsabilidade pessoal, divisão de tarefas, adaptação a diferentes cenários, colaboração, versatilidade, além das conexões com pessoas inseridas no mercado, muitas do seu curso ou áreas semelhantes. Mas o que achamos mais importante são os laços que criamos morando aqui, as amizades que levamos para a vida e a família que encontramos tão longe de casa"
  },
  // {question: "República é só festa ou também rola rotina normal?", answer: "Todo mundo precisa de rotina! Em dias de semana, não é permitido música alta ou muito barulho, para não atrapalhar aqueles que trabalham e estudam (somos uma república universitária!)"},
  // {question: "E quando alguém atrasa ou esquece de pagar?", answer: ""}, {question: "Tem multa pra quem some e não limpa nada?", answer: ""},
  {
    question: "E se eu estudo de madrugada e alguém dorme cedo ?",
    answer: "É tudo conversado. Se você divide quarto com alguém e seus horários não coincidem, com um pouco de papo logo se ajeitam. Se preferirem, é possível estudar em outro cômodo, por exemplo (apesar de isso raramente acontecer)"
  },
  // {question: "Pode trazer amigos(as) e dates?", answer: ""},
  // {question: "Festa é sempre liberada ou tem limite?", answer: "Durante a semana, o barulho é limitado, para não atrapalhar os que estão estudando ou trabalhando"},
  {
    question: "Todo mundo vira amigo?",
    answer: "Sim! É claro que cada um tem mais intimidade com uns ou outros, mas a convivência diária, os momentos familiares e as experiências compartilhadas criam vínculos que se leva para a vida toda"
  },
  {
    question: "E quando alguém quer dormir e outro quer socializar?",
    answer: "Aqui na república, sempre tem alguém disponível para trocar ideia. Se você quer conversar, com certeza vai ter outra pessoa querendo também"
  },
  {
    question: "Como evitar tretas por coisas bobas?",
    answer: "Aqui na república, somos todos irmãos, e comunicação é tudo para gente. Sempre que há um problema, por menor que seja, a única saída para resolução é o diálogo"
  },
  {
    question: "E quando não bate santo com alguém?",
    answer: "Às vezes, acontece no começo. Com o passar do tempo, pela vivência do dia a dia e pelas experiências vividas, todo mundo se aproxima"
  },
  {
    question: "Já rolaram conflitos? Como vocês resolvem?",
    answer: "Claro que sim. Quando há algum tipo de problema entre os moradores, a conversa é a forma de resolução. Quando não há acordo entre os envolvidos, o problema é discutido em reunião, com todos os integrantes da casa, para manter a harmonia e conforto de todos na casa"
  },
];

export function FAQ() {
  // qual pergunta tá aberta
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-diretoria-black relative overflow-hidden">
  
      {/* elementos do fundo */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-diretoria-yellow to-transparent opacity-50"></div>
      
      <div className="absolute -left-20 top-40 w-64 h-64 bg-diretoria-yellow/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-diretoria-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* cabeçalho do faq */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-diretoria-gray border border-diretoria-yellow/30 text-diretoria-yellow">
            <MessageCircleQuestion size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl text-white font-title mb-4">
            DÚVIDAS <span className="text-diretoria-yellow">FREQUENTES</span>
          </h2>
          <p className="text-gray-400 font-sans text-lg max-w-2xl mx-auto">
            Ainda tem dúvidas? Separamos as perguntas que a galera mais faz antes de virar bixo da Diretoria.
          </p>
        </div>

        {/* accordion */}
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
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 text-gray-300 font-sans leading-relaxed border-t border-dashed border-zinc-700/50 mt-2">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* encaminha pro zap */}
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
