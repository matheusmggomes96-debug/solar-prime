import React from 'react';

const projects = [
  { 
    id: 1, 
    img: "https://images.unsplash.com/photo-1655300256335-beef51a914fe?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    title: "Residência Família Silva", 
    loc: "Campinas - SP", 
    savings: "92%" 
  },
  { 
    id: 2, 
    img: "https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    title: "Supermercado CompreBem", 
    loc: "Sorocaba - SP", 
    savings: "85%" 
  },
  { 
    id: 3, 
    img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=600&auto=format&fit=crop", 
    title: "Fazenda Sol Nascente", 
    loc: "Ribeirão Preto - SP", 
    savings: "98%" 
  },
  { 
    id: 4, 
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop", 
    title: "Condomínio Jardins", 
    loc: "São Paulo - SP", 
    savings: "70%" 
  },
  { 
    id: 5, 
    img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=600&auto=format&fit=crop", 
    title: "Residência Moderna", 
    loc: "Jundiaí - SP", 
    savings: "94%" 
  },
  { 
    id: 6, 
    img: "https://images.unsplash.com/photo-1698755394930-9bb2042c6f8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hcmtldCUyMHNvbGFyJTIwZW5lcmd5fGVufDB8fDB8fHwy", 
    title: "Centro Comercial", 
    loc: "Osasco - SP", 
    savings: "88%" 
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Nosso Portfólio</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-montserrat font-bold text-gray-900">
              Projetos Realizados
            </h2>
            <p className="mt-4 text-gray-600">
              Confira algumas das instalações que estão gerando economia todos os dias.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-block text-primary font-bold hover:text-secondary transition-colors mt-4 md:mt-0">
            Ver todos os projetos &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <div className="aspect-w-3 aspect-h-2">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="bg-secondary text-primary text-xs font-bold px-2 py-1 rounded w-max mb-2">Economia de {project.savings}</span>
                <h3 className="text-white font-bold text-xl">{project.title}</h3>
                <p className="text-gray-200 text-sm">{project.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};