import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Structure } from './components/Structure';
import { Location } from './components/Location';
import { ScrollAnimation } from './components/ScrollAnimation';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-diretoria-black selection:bg-diretoria-yellow selection:text-black">
	<Navbar />
	<main>
	    <ScrollAnimation>
		<Hero />
	    </ScrollAnimation>


	    <ScrollAnimation>
		<Structure /> 
	    </ScrollAnimation>

	    <ScrollAnimation>
		<Location />
	    </ScrollAnimation>

	    <section id="moradores" className="h-[50vh] flex items-center justify-center border-t border-diretoria-yellow/10">
		    <h2 className="text-4xl text-gray-500">Próxima Seção: Moradores</h2>
	    </section>


	    <ScrollAnimation>
		<Testimonials />
	    </ScrollAnimation>

	    <section id="faq" className="h-[50vh] flex items-center justify-center border-t border-diretoria-yellow/10">
		    <h2 className="text-4xl text-gray-500">Próxima Seção: FAQ</h2>
	    </section>

      </main>
    </div>
  )
}

export default App
