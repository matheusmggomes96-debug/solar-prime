import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Painéis solares no telhado" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-white mb-12 lg:mb-0">
          <div className="inline-flex items-center bg-secondary/20 backdrop-blur-md border border-secondary/50 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
            <span className="text-sm font-semibold text-secondary uppercase tracking-wide">Energia Limpa e Renovável</span>
          </div>
          
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Economize até <span className="text-secondary">95%</span> na sua conta de luz
          </h1>
          
          <p className="font-lato text-lg sm:text-xl text-gray-100 mb-8 max-w-lg leading-relaxed">
            Transforme o sol em economia real. Valorize seu imóvel e livre-se dos aumentos na tarifa de energia com a SolarPrime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-primary bg-secondary hover:bg-yellow-400 transition-all shadow-lg transform hover:-translate-y-1"
            >
              Simular Economia
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-white text-lg font-bold rounded-lg text-white hover:bg-white hover:text-primary transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm font-medium text-gray-200">
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-secondary mr-2" />
              <span>Garantia de 10 anos</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-secondary mr-2" />
              <span>Instalação rápida</span>
            </div>
          </div>
        </div>

        {/* Hero Image / Form visual placeholder */}
        <div className="w-full lg:w-1/2 lg:pl-12 hidden lg:block">
           <div className="relative rounded-2xl overflow-hidden shadow-2xl">
             <img 
               src="https://plus.unsplash.com/premium_photo-1679952890714-7eead60c1c12?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt="Instalação Solar Residencial" 
               className="w-full h-[500px] object-cover"
             />
           </div>
        </div>
      </div>
    </section>
  );
};