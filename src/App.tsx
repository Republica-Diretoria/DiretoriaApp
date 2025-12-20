import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Structure } from './components/Structure';
import { Location } from './components/Location';
import { ScrollAnimation } from './components/ScrollAnimation';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';

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

	    <ScrollAnimation>
		<Testimonials />
	    </ScrollAnimation>

	    <ScrollAnimation>
		<Location />
	    </ScrollAnimation>

	    <ScrollAnimation>
		<FAQ />
	    </ScrollAnimation>

      </main>
    </div>
  )
}

export default App
