import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppBtn: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all transform hover:scale-110 flex items-center gap-2 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
        Orçamento Rápido
      </span>
    </a>
  );
};