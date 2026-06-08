import React from 'react';
import { Check } from 'lucide-react';

interface Plano {
  nome: string;
  badge: string;
  preco: string;
  periodo: string;
  features: readonly string[];
  cta: string;
  ctaVariant: 'primary' | 'secondary';
  destaque: boolean;
}

const planos: Plano[] = [
  {
    nome: 'Essencial',
    badge: 'Para redes pequenas · até 50 profissionais',
    preco: 'R$ 4.800',
    periodo: 'a partir de · por módulo',
    features: [
      '1 módulo à escolha (6 a 12h)',
      'Modalidade online ao vivo',
      'Material didático digital acessível',
      'Certificado de participação',
      '30 dias de suporte por WhatsApp',
    ],
    cta: 'Solicitar Proposta',
    ctaVariant: 'secondary',
    destaque: false,
  },
  {
    nome: 'Avançado',
    badge: 'Mais escolhido · Redes de 50 a 200 profissionais',
    preco: 'R$ 14.500',
    periodo: 'a partir de · programa completo',
    features: [
      '3 módulos à escolha (até 30h)',
      'Modalidade híbrida (online + presencial)',
      'Diagnóstico inicial de barreiras da rede',
      'Material didático impresso e digital',
      'Certificado + relatório da rede',
      '90 dias de suporte técnico',
      'Adequado para dispensa de licitação',
    ],
    cta: 'Solicitar Proposta',
    ctaVariant: 'primary',
    destaque: true,
  },
  {
    nome: 'Institucional',
    badge: 'Secretarias e redes de médio/grande porte',
    preco: 'Sob consulta',
    periodo: 'programa anual personalizado',
    features: [
      'Todos os 5 módulos (carga negociável)',
      'Presencial + online conforme cronograma',
      'Diagnóstico completo + plano anual',
      'Acompanhamento de indicadores',
      'Relatórios semestrais para a secretaria',
      'Assessoria para acesso ao PAR e PDDE',
      'Suporte permanente durante o contrato',
    ],
    cta: 'Agendar Reunião',
    ctaVariant: 'secondary',
    destaque: false,
  },
];

const PlanoContent: React.FC<{ plano: Plano }> = ({ plano }) => (
  <>
    <span className="plan-badge">{plano.badge}</span>
    <h3 className="plan-name">{plano.nome}</h3>
    <p className="plan-price">{plano.preco}</p>
    <p className="plan-period">{plano.periodo}</p>
    <ul className="plan-features" style={{ flex: 1 }}>
      {plano.features.map((f, i) => (
        <li key={i} className="plan-feature">
          <Check size={14} className="plan-feature-icon" aria-hidden="true" />
          {f}
        </li>
      ))}
    </ul>
    <a href="mailto:contato@i9ai.org" className={`plan-cta cta-${plano.ctaVariant}`}>
      {plano.cta}
    </a>
  </>
);

const Precos: React.FC = () => {
  return (
    <section id="precos" className="section">
      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label animate-item">Planos</p>
          <h2 className="section-title animate-item delay-1">
            Formação para redes de todos os portes
          </h2>
          <div className="tri-bar-under animate-item delay-1" aria-hidden="true" />
          <p className="section-subtitle animate-item delay-2" style={{ marginTop: '1.5rem' }}>
            Valores adaptados ao tamanho da rede e número de participantes.
            Emissão de nota fiscal pela i9AI Soluções em IA (CNPJ 40.641.253/0001-69).
            Dispensa de licitação até R$ 57.200 (Lei 14.133/2021, Art. 75, II).
          </p>
        </div>

        <div className="precos-grid">
          {planos.map((plano, i) =>
            plano.destaque ? (
              <div
                key={plano.nome}
                className={`animated-gradient-border animate-item delay-${i + 1}`}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div className="card-inner">
                  <PlanoContent plano={plano} />
                </div>
              </div>
            ) : (
              <div
                key={plano.nome}
                className={`surface-card animate-item delay-${i + 1}`}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <PlanoContent plano={plano} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Precos;
