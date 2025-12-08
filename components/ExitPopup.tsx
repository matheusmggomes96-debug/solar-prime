import React, { useState, useEffect } from 'react';
import { X, Zap } from 'lucide-react';

export const ExitPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="p-8 w-full">
            <div className="flex items-center gap-2 text-secondary font-bold mb-2">
              <Zap className="h-5 w-5 fill-current" />
              <span>ESPERE! NÃO VÁ AINDA</span>
            </div>
            
            <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
              Quer um desconto exclusivo na instalação?
            </h3>
            
            <p className="text-gray-600 mb-6">
              Deixe seu WhatsApp abaixo e nossa equipe entrará em contato com uma condição especial válida apenas para hoje.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert('Solicitação enviada!'); setIsVisible(false); }}>
              <input 
                type="tel" 
                placeholder="Seu WhatsApp (com DDD)" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent mb-4"
                required
              />
              <button 
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-lg"
              >
                Quero meu desconto
              </button>
            </form>
            
            <p className="text-xs text-center text-gray-400 mt-4">
              Não fazemos spam. Oferta por tempo limitado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};