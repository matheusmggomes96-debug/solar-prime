import React from 'react';
import { ShieldCheck, Clock, Users, Wrench, Smartphone, Award } from 'lucide-react';

export const Differentials: React.FC = () => {
  const items = [
    { text: "Equipe própria de engenharia", icon: <Users /> },
    { text: "Instalação em até 7 dias", icon: <Clock /> },
    { text: "Projeto personalizado gratuito", icon: <Wrench /> },
    { text: "Garantia total de 10 anos", icon: <ShieldCheck /> },
    { text: "Monitoramento por App 24h", icon: <Smartphone /> },
    { text: "Suporte técnico vitalício", icon: <Award /> },
  ];

  return (
    <section id="differentials" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Por que escolher a <span className="text-secondary">SolarPrime?</span>
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Não vendemos apenas placas solares. Entregamos uma solução completa de engenharia focada na sua segurança e no máximo desempenho do sistema.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 bg-blue-900/50 p-4 rounded-lg backdrop-blur-sm border border-blue-700 hover:border-secondary transition-colors">
                  <div className="text-secondary h-6 w-6 flex-shrink-0">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
             <div className="relative">
                {/* Removed the blur effect div */}
                <img 
                  src="https://plus.unsplash.com/premium_photo-1679952890714-7eead60c1c12?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Engenheiro SolarPrime" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] border-4 border-secondary"
                />
                <div className="absolute bottom-6 right-6 bg-white text-gray-900 p-4 rounded-lg shadow-xl max-w-xs border-2 border-gray-100">
                  <p className="font-bold text-2xl text-primary">400+</p>
                  <p className="text-sm text-gray-600">Projetos instalados e clientes satisfeitos em todo o Brasil.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};