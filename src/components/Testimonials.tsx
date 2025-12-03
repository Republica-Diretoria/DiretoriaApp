import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import bandeirinho from '../assets/bandeirinho.jpg';

// --- DADOS DOS DEPOIMENTOS (8 ITENS) ---
const testimonials = [
	{
		id: 1,
		name: "Nicolas Catalano",
		nickname: "CATALANO",
		course: "Turismo",
		year: "07",
		company: "Fundador da República",
		text: "Em 2008, junto com um grupo especial de recém conhecidos, eu e mais 6 decidimos fundar a República Diretoria. Essa foi a nossa melhor decisão, pois construímos um família, construímos um sentimento que só cresce mesmo depois de mais de 15 anos. Uma boa universidade faz a diferença na sua vida, porém morar em república e compartilhar experiências de vida diarimente, aprender a respeitar e admirar seus amigos e irmãos da república faz uma grande diferença para a vida toda.",
		image: bandeirinho
	},
	{
		id: 2,
		name: "Matheus",
		nickname: "FUNIL",
		course: "Economia",
		year: "09",
		company: "Ex-Morador",
		text: "Com certeza, morar na Diretoria foi a melhor decisão. Conviver com pessoas diferentes foi um grande passo e me abriu para diversas experiências e convívios, que contribuíram e ainda contribuem para meu crescimento pessoal e profissional. Como um dos primeiros bixos, fico feliz de ver que a cada ano, essa família cresce e se fortalece mais. Diretoria eterna!",
		image: bandeirinho
	},
	{
		id: 3,
		name: "Caio",
		nickname: "MIJÃO",
		course: "Turismo",
		year: "10",
		company: "Ex-Morador",
		text: "A rep foi um passo muito importante na linha de formação como estudante, mas principalmente como pessoa e para desenvolver habilidades para o campo profissional. Nas entrevistas que fiz ao longo dos cargos que fui assumindo e até do mestrado e doutorado, sempre fiz questão de expressar a importância de ter vivenciado o período de 8 anos incríveis na Diretoria, pois foi lá que eu aprendi a lidar com diferentes visões e opiniões, saber respeitar os espaços dos outros e os momentos de fala, mas principalmente a desenvolver habilidades de conviver em coletivo diverso e também conseguir liderar pautas entre meus irmãos de rep. Por isso, sempre digo #moreemrep! Truco, Cerveja e Putaria, só é melhor porque é na Diretoria!",
		image: bandeirinho
	},
	{
		id: 4,
		name: "Micael",
		nickname: "PRESUNTO",
		course: "Matemática",
		year: "13",
		company: "Ex-Morador",
		text: "Quando me pediram para escrever algo sobre a Diretoria a princípio fiquei bastante pensativo, como eu poderia escrever algo muito maior do que quaisquer palavras poderiam descrever. É sorriso e abraços tímidos para toda a vida, é poder compartilhar momentos BONS e RUINS, é poder crescer como ser humano, seja no âmbito pessoal ou profissional, é APRENDER, conviver, evoluir e ACEITAR o próximo como ele realmente é. A república é mais do que um sistema de dividir despesas, é mais do que morar com outras pessoas. É um sistema que preza pelo seu desenvolvimento como pessoa e como profissional, mas não há nada mais importante do que o sentimento de FAMÍLIA. Esse sentimento nunca deixou de existir, a Diretoria é gigante e mais gigante ainda é o sentimento de ter uma segunda família, uma segunda CASA onde a gente pode chorar, sorrir, se apoiar e agradecer. Não se iluda, a Diretoria não é colônia de férias, somos TRADIÇÃO, somos responsáveis por fazer os melhores roles de Sorocaba e região, ser DIRETOR é sinônimo de orgulho, mas também de RESPONSABILIDADE, é carregar todos os dias uma camisa tão pesada que enverga varal. Tenho muito orgulho de fazer parte desse bando de loucos, ter escolhido essa família mudou a minha vida e me trouxe as melhores histórias, resenhas, humilhações & alegrias que eu poderia ter. Entrar para a Diretoria foi a melhor decisão da minha VIDA, está pronto para tomar a sua?",
		image: bandeirinho
	},
	{
		id: 5,
		name: "Felipe",
		nickname: "FURUSE",
		course: "Ciência da Computação",
		year: "13",
		company: "Ex-Morador",
		text: "A Diretoria sempre foi e sempre será muito mais que uma casa cheia de estudantes, ela é uma família que nos acolheu em um dos momentos mais delicados das nossas vidas, momento em que deixamos o conforto de casa, a segurança das asas dos pais e o calor das amizades de infância, para se aventurar longe de tudo e todos e passar a viver nossas próprias vidas. É lá que passamos uma fase crucial da nossa formação como pessoa, assumindo responsabilidades, encarando novos desafios, mas sempre sabendo que temos todo o apoio nos momentos felizes e nos momentos nem tão alegres. Não consigo imaginar como seria minha vida sem os irmãos que ganhamos nessa casa, sem as histórias vividas e sem os aprendizados sobre respeito, empatia, solidariedade e amizade. Cada dia que passa e cada vez que piso nessa casa me sinto mais acolhido e me sinto parte desses 15 anos de história. 15 anos que são só o começo... DIRETORIA PORRAIII",
		image: bandeirinho
	},
	{
		id: 6,
		name: "Iago",
		nickname: "GUIMÊ",
		course: "Ciência da Computação",
		year: "14",
		company: "Ex-Morador",
		text: "Morar na Diretoria me proporcionou a vivência com pessoas das mais variadas crenças, culturas, costumes e ideias. Isso foi super importante para aprender a lidar com diversas situações e melhorou muito o senso de coletividade e trabalho, que são muito importantes no mercado de trabalho. Além disso me proporcionou o contato com diversas pessoas de diferentes áreas do mercado e que podem vir a te ajudar no mercado de trabalho, assim como foi comigo em meu primeiro emprego que consegui com ajuda de indicações de moradores e ex-moradores da rep. Hoje com a família Diretoria cada vez maior as oportunidades de contato em diversas empresas e áreas fica cada vez mais presente.",
		image: bandeirinho
	},
	{
		id: 7,
		name: "Bernardo",
		nickname: "BRONHA",
		course: "Ciência da Computação",
		year: "15",
		company: "Ex-Morador",
		text: "Ter ido morar na República Diretoria foi uma das melhores decisões que já tomei em minha vida. Foi lá onde consegui indicação para meu primeiro emprego, o qual garantiu minha continuação na faculdade, foi onde assumi minhas primeiras responsabilidades e sem dúvidas foi onde fiz amizades incríveis que levarei para o resto da minha vida. Logo que entrei na Diretoria em 2015, conversei com um dos moradores, que também cursava Ciências da Computação, sobre como encontrar oportunidade de trabalho na área antes de formar. A resposta dele foi basicamente já me encaminhando os conteúdos que precisaria estudar por conta para conseguir essa oportunidade. Depois de alguns meses de estudo, ele me levou até o projeto da universidade onde trabalhava para me apresentar e foi assim que consegui meu primeiro emprego como programador. Essa oportunidade me garantiu que conseguisse pagar minhas contas para poder continuar na universidade e posso garantir que se não fosse a República Diretoria, ou não teria conseguido formar ou teria retornado para minha cidade natal no mesmo ano. Fazer parte da república não significa apenas dividir o mesmo teto, é algo muito maior. Fazer parte de uma república, é fazer parte de uma família, é dividir problemas, é ajudar e ser ajudado, é conhecer pessoas que vivem realidades muito diferentes da que você está acostumado, é aprender a viver com a diversidade e principalmente aprender a viver em comunidade. É uma experiência incrível que eu recomendo para todas as pessoas, principalmente para aquelas que estão ingressando na faculdade agora.",
		image: bandeirinho
	}
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  
  // Estados para controlar o Swipe (Toque)
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-play (Pausa se o usuário estiver interagindo/tocando)
  useEffect(() => {
    if (touchStart !== null) return; // Não muda sozinho se o usuário estiver segurando

    const timer = setInterval(() => {
      handleNext();
    }, 15000); //15 segundos 
    return () => clearInterval(timer);
  }, [current, touchStart]);

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // --- LÓGICA DO SWIPE (ARRASTAR) ---
  const minSwipeDistance = 50; // Distância mínima em pixels para considerar um arrasto

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reseta o fim para evitar bugs
    setTouchStart(e.targetTouches[0].clientX); // Pega a posição X inicial
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX); // Atualiza a posição X enquanto move
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext(); // Arrastou pra esquerda -> Próximo
    }
    if (isRightSwipe) {
      handlePrev(); // Arrastou pra direita -> Anterior
    }
  };

  const active = testimonials[current];

  return (
    <section 
      id="depoimentos" 
      className="relative h-screen w-full bg-diretoria-black overflow-hidden flex items-center justify-center touch-pan-y"
      // Adicionamos os eventos aqui no container principal
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      
      {/* 1. BACKGROUND DINÂMICO */}
      <div className="absolute inset-0 z-0">
        <div 
            key={active.id} 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out scale-105 animate-in fade-in zoom-in-50"
            style={{ backgroundImage: `url(${active.image})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40"></div>
            <div className="absolute inset-0 bg-diretoria-yellow/10 mix-blend-overlay"></div>
        </div>
      </div>

      {/* 2. CONTEÚDO */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center pointer-events-none">
        {/* Adicionei pointer-events-none no container e auto nos botões para o texto não bloquear o arrasto */}
        
        <div className="left-6 md:left-12 flex items-center gap-4 opacity-50">
            <span className="text-diretoria-yellow text-6xl font-brush">"</span>
            <span className="text-white font-sans uppercase tracking-widest text-sm">Hall da Fama • Ex-Moradores</span>
        </div>

        <div className="max-w-4xl pointer-events-auto"> {/* pointer-events-auto para permitir selecionar texto se quiser */}
            
            <div key={current} className="animate-in slide-in-from-right-10 fade-in duration-500">
                
                <div className="flex flex-wrap items-center gap-4 mb-2 text-diretoria-yellow font-sans font-bold uppercase tracking-wider text-sm md:text-base">
                    <span className="flex items-center gap-2 bg-diretoria-yellow/10 px-3 py-1 rounded-sm border border-diretoria-yellow/20">
                        <GraduationCap size={16} /> {active.course}
                    </span>
                    <span className="flex items-center gap-2 bg-diretoria-yellow/10 px-3 py-1 rounded-sm border border-diretoria-yellow/20">
                        <Calendar size={16} /> Turma 0{active.year}
                    </span>
                </div>

                {/* APELIDO AMARELO PURO */}
                <h1 className="text-5xl sm:text-6xl break-words md:text-9xl font-brush text-[#ffff00] mb-2 drop-shadow-lg leading-none">
                    {active.nickname}
                </h1>
                
                <h3 className="text-xl md:text-2xl text-gray-400 font-sans mb-8 border-l-4 border-diretoria-yellow pl-4">
                    {active.name}
                </h3>

                <div className="relative mb-8 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
                    <Quote className="absolute -top-4 -left-6 text-diretoria-yellow/20 w-12 h-12 rotate-180" />
                    <p className="text-lg md:text-xl text-gray-200 font-sans leading-relaxed italic whitespace-pre-wrap">
                        "{active.text}"
                    </p>
                </div>

                <div className="flex items-center gap-3 text-white">
                    <div className="p-2 bg-diretoria-yellow text-black rounded-sm">
                        <Briefcase size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Atualmente</p>
                        <p className="text-lg md:text-xl font-bold font-title">{active.company}</p>
                    </div>
                </div>

            </div>

        </div>

        {/* CONTROLES E PAGINAÇÃO */}
        <div className="absolute bottom-8 right-6 md:right-12 flex items-center gap-4 pointer-events-auto">
            
            {/* Dica visual de Swipe para Mobile */}
            <span className="md:hidden text-gray-500 text-xs mr-2 animate-pulse">
                Deslize para navegar ↔
            </span>

            <div className="text-white font-mono text-xl mr-4">
                <span className="text-diretoria-yellow">0{current + 1}</span>
                <span className="text-gray-600 mx-2">/</span>
                <span className="text-gray-400">0{testimonials.length}</span>
            </div>

            <button 
                onClick={handlePrev}
                className="p-4 rounded-full border border-gray-600 text-white hover:bg-diretoria-yellow hover:text-black hover:border-diretoria-yellow transition-all"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={handleNext}
                className="p-4 rounded-full border border-gray-600 text-white hover:bg-diretoria-yellow hover:text-black hover:border-diretoria-yellow transition-all"
            >
                <ChevronRight size={24} />
            </button>
        </div>

      </div>

    </section>
  );
}
