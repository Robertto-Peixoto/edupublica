import React, { useEffect } from 'react';
import './index.css';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import Problema from './src/components/Problema';
import Solucao from './src/components/Solucao';
import Modulos from './src/components/Modulos';
import Metodologia from './src/components/Metodologia';
import ParaQuem from './src/components/ParaQuem';
import Depoimentos from './src/components/Depoimentos';
import FAQ from './src/components/FAQ';
import Footer from './src/components/Footer';

const WA = 'https://wa.me/5584981289184';

const App: React.FC = () => {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('.animate-item'));

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header wa={WA} />
      <main>
        <Hero wa={WA} />
        <Problema />
        <Solucao />
        <Modulos />
        <Metodologia />
        <ParaQuem />
        <Depoimentos />
        <FAQ />
      </main>
      <Footer />
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta-float"
        aria-label="Solicitar proposta via WhatsApp"
      >
        Solicitar Proposta
      </a>
    </>
  );
};

export default App;
