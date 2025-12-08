import React from 'react';
import { Sun, Instagram, Facebook, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-secondary mr-2" />
              <span className="font-montserrat font-bold text-2xl">Solar<span className="text-secondary">Prime</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluções completas em energia solar fotovoltaica. Economia, sustentabilidade e tecnologia para sua casa ou empresa.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#benefits" className="hover:text-secondary transition-colors">Vantagens</a></li>
              <li><a href="#how-it-works" className="hover:text-secondary transition-colors">Como Funciona</a></li>
              <li><a href="#portfolio" className="hover:text-secondary transition-colors">Projetos</a></li>
              <li><a href="#faq" className="hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-4 text-white">Serviços</h4>
             <ul className="space-y-2 text-gray-400">
               <li>Instalação Residencial</li>
               <li>Instalação Comercial</li>
               <li>Projetos para Agronegócio</li>
               <li>Manutenção e Limpeza</li>
             </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2023 SolarPrime Energia. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};