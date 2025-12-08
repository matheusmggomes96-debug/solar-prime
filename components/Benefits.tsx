import React from 'react';
import { PiggyBank, Home, Leaf, Zap, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <PiggyBank className="h-8 w-8 text-primary" />,
    title: "Economia Imediata",
    description: "Reduza sua conta de luz em até 95% logo no primeiro mês após a instalação."
  },
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: "Valorização do Imóvel",
    description: "Imóveis com energia solar são valorizados em até 10% no mercado imobiliário."
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: "Sustentabilidade",
    description: "Produza energia 100% limpa e renovável, reduzindo sua pegada de carbono."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Alto Retorno (ROI)",
    description: "Retorno do investimento entre 18 e 36 meses, com vida útil de 25+ anos."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Independência Energética",
    description: "Proteja-se contra a inflação energética e as bandeiras tarifárias vermelhas."
  }
];

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Vantagens</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-montserrat font-bold text-gray-900">
            Por que investir em energia solar?
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-transparent hover:border-secondary group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};