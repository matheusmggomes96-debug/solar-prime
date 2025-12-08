import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bill: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado! Recebemos seus dados e um consultor entrará em contato em breve.");
    setFormData({ name: '', phone: '', email: '', bill: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Pronto para zerar sua conta de luz?
            </h2>
            <p className="text-blue-100 text-lg mb-10">
              Preencha o formulário para receber uma proposta personalizada gratuita. Nossa equipe técnica fará uma análise detalhada do seu consumo.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-secondary/20 p-3 rounded-full">
                  <Phone className="text-secondary h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Ligue para nós</p>
                  <p className="font-bold text-lg">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-secondary/20 p-3 rounded-full">
                  <Mail className="text-secondary h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Envie um e-mail</p>
                  <p className="font-bold text-lg">contato@solarprime.com.br</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-secondary/20 p-3 rounded-full">
                  <MapPin className="text-secondary h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Sede</p>
                  <p className="font-bold text-lg">Av. Paulista, 1000 - SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Orçamento Grátis</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent text-gray-900 outline-none"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent text-gray-900 outline-none"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent text-gray-900 outline-none"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                   <label htmlFor="bill" className="block text-sm font-medium text-gray-700 mb-1">Valor Médio da Conta (R$)</label>
                   <input
                    type="number"
                    id="bill"
                    name="bill"
                    value={formData.bill}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent text-gray-900 outline-none"
                    placeholder="Ex: 500,00"
                    required
                  />
                </div>
                
                <div className="pt-2">
                   <button 
                    type="submit" 
                    className="w-full bg-secondary text-primary font-bold text-lg py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    Quero economizar agora
                    <Send className="h-5 w-5" />
                  </button>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    Seus dados estão seguros. Respeitamos a LGPD.
                  </p>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};