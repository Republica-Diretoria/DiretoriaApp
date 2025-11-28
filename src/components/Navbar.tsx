// src/components/Navbar.tsx
import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react'; // Ícones
import logo from "../assets/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Links de navegação para reutilizar
  const navLinks = [
    { name: 'A CASA', href: '#casa' },
    { name: 'MORADORES', href: '#moradores' },
    { name: 'DEPOIMENTOS', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-diretoria-black/90 backdrop-blur-md border-b border-diretoria-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <a href="#" className="hover:opacity-80 transition-opacity">
		<img 
		    src={logo} 
		    alt="Logo República Diretoria" 
		    className="h-14 w-auto object-contain" // h-14 (56px) fica um tamanho bom na barra de 80px
		/>
            </a>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-diretoria-yellow px-3 py-2 rounded-md text-lg font-bold font-sans transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Botão WhatsApp Desktop */}
              <a 
                href="https://wa.me/55NUMERODORESPONSAVEL" 
                target="_blank"
                className="bg-diretoria-yellow text-diretoria-black px-5 py-2 rounded font-bold font-sans flex items-center gap-2 hover:bg-white transition-colors"
              >
                <MessageCircle size={20} />
                FALAR COM MORADOR
              </a>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-diretoria-yellow hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (Full Screen Overlay) */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full h-screen bg-diretoria-black border-t border-diretoria-yellow/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center justify-center h-[60vh] gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-gray-300 hover:text-diretoria-yellow block px-3 py-2 text-2xl font-brush tracking-widest"
              >
                {link.name}
              </a>
            ))}
             <a 
                href="https://wa.me/5511996375606" 
                target="_blank"
                className="mt-8 bg-diretoria-yellow text-diretoria-black px-8 py-4 rounded font-bold font-sans flex items-center gap-2 text-xl"
              >
                <MessageCircle size={24} />
                CHAMAR NO ZAP
              </a>
          </div>
        </div>
      )}
    </nav>
  );
}
