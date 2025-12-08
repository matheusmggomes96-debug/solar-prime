import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Differentials } from './components/Differentials';
import { HowItWorks } from './components/HowItWorks';
import { Portfolio } from './components/Portfolio';
import { Calculator } from './components/Calculator';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppBtn } from './components/WhatsAppBtn';
import { ExitPopup } from './components/ExitPopup';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Differentials />
        <HowItWorks />
        <Portfolio />
        <Calculator />
        <Testimonials />
        <About />
        <FAQ />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppBtn />
      <ExitPopup />
    </div>
  );
};

export default App;