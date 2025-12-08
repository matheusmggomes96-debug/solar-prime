import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1589275776107-e193042128bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Equipe SolarPrime" 
            className="rounded-lg shadow-xl w-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">
            Sobre a SolarPrime Energia
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Desde 2018, a SolarPrime Energia tem a missão de democratizar o acesso à energia limpa no Brasil. Não somos apenas instaladores de painéis; somos parceiros na sua jornada de economia e sustentabilidade.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Com mais de 400 projetos entregues com excelência, nos destacamos pela transparência técnica, cumprimento rigoroso de prazos e um pós-venda que realmente funciona.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="border-l-4 border-secondary pl-4">
              <span className="block text-3xl font-bold text-primary">5+</span>
              <span className="text-sm text-gray-500">Anos de Mercado</span>
            </div>
            <div className="border-l-4 border-secondary pl-4">
              <span className="block text-3xl font-bold text-primary">98%</span>
              <span className="text-sm text-gray-500">Clientes Satisfeitos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};