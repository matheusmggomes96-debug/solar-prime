import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

export const Calculator: React.FC = () => {
  const [billValue, setBillValue] = useState<number | string>('');
  const [result, setResult] = useState<{ monthly: string; annual: string; lifetime: string } | null>(null);

  const calculateSavings = (e: React.FormEvent) => {
    e.preventDefault();
    const val = Number(billValue);
    if (!val || val <= 0) return;

    // Logic: 95% savings. Cost per kWh assumed constant for simplicity.
    const monthlySavings = val * 0.95;
    const annualSavings = monthlySavings * 12;
    const lifetimeSavings = annualSavings * 25; // 25 years warranty

    setResult({
      monthly: monthlySavings.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      annual: annualSavings.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      lifetime: lifetimeSavings.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    });
  };

  return (
    <section id="calculator" className="py-20 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-primary rounded-full mb-6">
              <CalcIcon className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Simule sua Economia
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Descubra quanto dinheiro você está perdendo todos os meses e quanto poderia investir no seu futuro.
            </p>

            <form onSubmit={calculateSavings} className="max-w-md mx-auto mb-10">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 font-bold z-10">R$</span>
                  <input 
                    type="number" 
                    placeholder="Valor médio da conta" 
                    value={billValue}
                    onChange={(e) => setBillValue(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-600 bg-gray-700 !text-white placeholder-gray-400 focus:border-secondary focus:outline-none text-lg transition-colors"
                    style={{ color: 'white' }}
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-secondary text-primary font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
                >
                  Calcular
                </button>
              </div>
            </form>

            {result && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <p className="text-gray-500 text-sm font-semibold uppercase mb-2">Economia Mensal</p>
                  <p className="text-2xl font-bold text-green-600">{result.monthly}</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <p className="text-blue-500 text-sm font-semibold uppercase mb-2">Economia Anual</p>
                  <p className="text-2xl font-bold text-primary">{result.annual}</p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 transform scale-105 shadow-md">
                  <p className="text-yellow-700 text-sm font-semibold uppercase mb-2">Em 25 Anos</p>
                  <p className="text-3xl font-extrabold text-yellow-600">{result.lifetime}</p>
                </div>
              </div>
            )}
            
            {result && (
              <div className="mt-8">
                 <a href="#contact" className="text-primary font-bold hover:underline">Solicitar proposta detalhada &rarr;</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};