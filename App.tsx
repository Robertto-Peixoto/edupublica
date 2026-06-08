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
import Precos from './src/components/Precos';
import FAQ from './src/components/FAQ';
import Footer from './src/components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    );

    document.querySelectorAll('.animate-item').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Solucao />
        <Modulos />
        <Metodologia />
        <ParaQuem />
        <Depoimentos />
        <Precos />
        <FAQ />
      </main>
      <Footer />
      <a href="#precos" className="btn-cta-float" aria-label="Solicitar proposta">
        Solicitar Proposta
      </a>
    </>
  );
};

export default App;
