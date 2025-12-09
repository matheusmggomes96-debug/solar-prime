import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItemData } from '../types';

const questions: FAQItemData[] = [
  {
    question: "Qual é o prazo médio de instalação?",
    answer: "Após a aprovação do projeto, nossa equipe realiza a instalação física em 1 a 3 dias para residências. O processo completo, incluindo a troca do medidor pela distribuidora, leva em média 30 a 45 dias."
  },
  {
    question: "O sistema funciona em dias nublados?",
    answer: "Sim! Os painéis fotovoltaicos funcionam com a radiação solar, não apenas com o sol direto. Embora a produção seja menor em dias nublados, o sistema continua gerando energia."
  },
  {
    question: "Existe financiamento disponível?",
    answer: "Com certeza. Temos parcerias com os principais bancos (BV, Santander, Solfácil) com taxas especiais para energia solar. Muitas vezes, a parcela do financiamento fica menor que sua conta de luz atual."
  },
  {
    question: "Qual a garantia dos equipamentos?",
    answer: "Oferecemos 10 anos de garantia na instalação. Os painéis solares possuem garantia de performance de 25 anos (80% de eficiência) e os inversores variam de 5 a 10 anos."
  },
  {
    question: "O que acontece se eu gerar mais energia do que consumo?",
    answer: "O excedente é injetado na rede elétrica e vira 'créditos energéticos' que podem ser usados para abater o consumo nos meses seguintes (válidos por até 60 meses) ou em outro imóvel da mesma titularidade."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-gray-900 mb-12">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="border border-gray-200 border-t-4 border-t-primary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <button
                className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span className="font-bold text-gray-800">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-secondary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 text-gray-600 bg-white border-t border-gray-100">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};