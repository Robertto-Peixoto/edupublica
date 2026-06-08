import React from 'react';
import { BookOpen, Users, RefreshCw } from 'lucide-react';

const pilares = [
  {
    Icon: BookOpen,
    color: 'green' as const,
    title: 'Base Legal e Conceitual',
    text: 'Fundamentação sólida na PNEEI (Decreto nº 12.686/2025), LBI, LDB e modelo social da deficiência — o ponto de partida que toda rede precisa.',
  },
  {
    Icon: Users,
    color: 'blue' as const,
    title: 'Práticas Inclusivas Reais',
    text: 'Estratégias aplicáveis imediatamente: planejamento colaborativo AEE + sala comum, comunicação acessível, tecnologia assistiva e remoção de barreiras.',
  },
  {
    Icon: RefreshCw,
    color: 'yellow' as const,
    title: 'Formação Continuada em Ciclo',
    text: 'Antes, durante e depois: diagnóstico de barreiras, desenvolvimento ativo e devolutivas pedagógicas com monitoramento de resultados.',
  },
] as const;

const Solucao: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header-center">
          <div className="tri-bar" aria-hidden="true" />
          <p className="section-label">Nossa Abordagem</p>
          <h2 className="section-title">
            Formação que muda práticas, não apenas certifica
          </h2>
          <p className="section-subtitle">
            Nossa metodologia parte dos desafios reais das escolas e das redes,
            não de conteúdos abstratos. Combinamos base normativa, estudos
            sociais da deficiência e prática pedagógica aplicada.
          </p>
        </div>

        <div className="grid-3">
          {pilares.map(({ Icon, color, title, text }, i) => (
            <div key={i} className="animated-gradient-border">
              <div className="card-inner">
                <div className={`module-icon ${color}`}>
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'var(--foreground)',
                  marginBottom: '0.625rem',
                }}>
                  {title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)', lineHeight: 1.65 }}>
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solucao;
