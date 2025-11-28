import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero'; // Importe o novo Hero
import { Structure } from './components/Structure';

function App() {
  return (
    <div className="min-h-screen bg-diretoria-black selection:bg-diretoria-yellow selection:text-black">
      <Navbar />
      <main>
        {/* Novo Hero Moderno */}
        <Hero />

	<Structure /> 

        {/* ... Outras seções (Moradores, etc) ... */}
        <section id="moradores" className="h-[50vh] flex items-center justify-center border-t border-diretoria-yellow/10">
             <h2 className="text-4xl text-gray-500">Próxima Seção: Moradores</h2>
        </section>

        {/* Seções de Placeholder (manter por enquanto) */}

      </main>
    </div>
  )
}

export default App
