import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface Props {
  wa: string;
}

const Hero: React.FC<Props> = ({ wa }) => {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-content-inner">
            <div className="hero-badge animate-item">
              <span className="hero-badge-dot" aria-hidden="true" />
              Decreto nº 12.686/2025 · PNEEI
            </div>

            <h1 className="animate-item delay-1">
              Formação que transforma redes de ensino em sistemas
              verdadeiramente inclusivos
            </h1>

            <p className="hero-subtitle animate-item delay-2">
              Capacitação continuada em Educação Especial Inclusiva para
              gestores, coordenadores e professores de secretarias e redes
              públicas de ensino.
            </p>

            <div className="hero-ctas animate-item delay-3">
              <a href="#modulos" className="btn-primary">
                Ver Módulos de Formação
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Solicitar Proposta
              </a>
            </div>

            <hr className="hero-divider animate-item delay-4" />

            <div className="hero-metrics animate-item delay-4" role="list" aria-label="Números do programa">
              <div role="listitem">
                <span className="metric-value">+5</span>
                <span className="metric-label">módulos temáticos</span>
              </div>
              <div role="listitem">
                <span className="metric-value">100%</span>
                <span className="metric-label">alinhado à PNEEI</span>
              </div>
              <div role="listitem">
                <span className="metric-value">AEE+Sala</span>
                <span className="metric-label">integração garantida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
