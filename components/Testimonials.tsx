import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "João Mendes",
    role: "Proprietário Residencial",
    text: "Economizei 87% na minha conta de luz logo no primeiro mês. A equipe foi impecável da venda até a instalação. Recomendo de olhos fechados!",
    image: "https://picsum.photos/id/1005/100/100"
  },
  {
    name: "Camila Barreto",
    role: "Empresária",
    text: "A instalação foi super rápida e a equipe muito profissional. Tiraram todas as minhas dúvidas. O monitoramento pelo app é fantástico.",
    image: "https://picsum.photos/id/338/100/100"
  },
  {
    name: "Renato Oliveira",
    role: "Dono de Supermercado",
    text: "O investimento se pagou muito mais rápido do que eu imaginava. A SolarPrime reduziu drasticamente os custos fixos da minha empresa.",
    image: "https://picsum.photos/id/203/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-secondary/30">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex text-secondary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{item.text}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{item.name}</h4>
                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};