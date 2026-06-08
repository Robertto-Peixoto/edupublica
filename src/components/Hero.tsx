import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="hero-blob hero-blob-3" aria-hidden="true" />
      <div className="hero-blob hero-blob-4" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          <div className="tri-bar" aria-hidden="true" />

          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            Alinhado ao Decreto Federal nº 12.686/2025 — PNEEI
          </div>

          <h1>
            Formação que transforma<br />
            redes de ensino em<br />
            sistemas verdadeiramente inclusivos
          </h1>

          <p className="hero-subtitle">
            Capacitação continuada em Educação Especial Inclusiva para gestores,
            coordenadores e professores de secretarias e redes públicas de ensino.
          </p>

          <div className="hero-ctas">
            <a href="#modulos" className="btn-primary">
              Ver Módulos de Formação
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#precos" className="btn-secondary">
              Solicitar Proposta para Minha Rede
              <ChevronRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-metrics" role="list" aria-label="Números do programa">
            <div role="listitem">
              <span className="metric-value">+5</span>
              <span className="metric-label">módulos de formação temática</span>
            </div>
            <div role="listitem">
              <span className="metric-value">100%</span>
              <span className="metric-label">alinhado à PNEEI 2025</span>
            </div>
            <div role="listitem">
              <span className="metric-value">AEE + Sala</span>
              <span className="metric-label">integração garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
