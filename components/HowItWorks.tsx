import React from 'react';
import { FileSearch, PenTool, Hammer, Power } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Análise e Viabilidade",
      desc: "Analisamos sua conta de luz e o local de instalação para dimensionar o sistema ideal.",
      icon: <FileSearch className="h-8 w-8 text-white" />
    },
    {
      id: 2,
      title: "Projeto e Aprovação",
      desc: "Nossos engenheiros elaboram o projeto técnico e cuidamos de toda burocracia com a distribuidora.",
      icon: <PenTool className="h-8 w-8 text-white" />
    },
    {
      id: 3,
      title: "Instalação Certificada",
      desc: "Equipe técnica realiza a instalação com segurança e equipamentos de ponta em poucos dias.",
      icon: <Hammer className="h-8 w-8 text-white" />
    },
    {
      id: 4,
      title: "Homologação e Economia",
      desc: "Conectamos seu sistema à rede, ativamos o monitoramento e você começa a economizar.",
      icon: <Power className="h-8 w-8 text-white" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900">
            Como funciona o processo
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Cuidamos de tudo para você, do projeto à homologação. Sem dor de cabeça.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg mb-6 relative group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center font-bold text-primary border-2 border-white">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};