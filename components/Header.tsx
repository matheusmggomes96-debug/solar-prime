import React from 'react';
import { Menu, X, Sun } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const navLinks = [
    { name: 'Vantagens', href: '#benefits' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Projetos', href: '#portfolio' },
    { name: 'Calculadora', href: '#calculator' },
    { name: 'Sobre', href: '#about' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-yellow-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
              <Sun className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="font-montserrat font-bold text-2xl text-primary">Solar<span className="text-secondary">Prime</span></span>
              <span className="block text-[10px] font-lato tracking-widest text-gray-500 -mt-1 uppercase">Energia</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary font-medium transition-colors font-lato"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary hover:bg-blue-800 text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Orçamento Grátis
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none p-2"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
               <a
                href="#contact"
                onClick={toggleMenu}
                className="block w-full text-center bg-secondary text-primary px-4 py-3 rounded-md font-bold text-lg"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};