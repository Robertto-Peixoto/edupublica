import React from 'react';
import { Landmark, ClipboardCheck, Layers, TrendingUp, Network } from 'lucide-react';

const modulos = [
  {
    Icon: Landmark,
    color: 'green' as const,
    num: '01',
    carga: '8h',
    title: 'Fundamentos da Educação Especial Inclusiva',
    desc: 'Marco legal, modelo social da deficiência, PNEEI 2025, perfil do público-alvo (deficiência, TEA, altas habilidades/superdotação), serviços obrigatórios e eliminação da lógica medicalizante. Capacitismo: identificar e enfrentar.',
    para: 'Gestores, coordenadores pedagógicos, professores em geral.',
  },
  {
    Icon: ClipboardCheck,
    color: 'blue' as const,
    num: '02',
    carga: '12h',
    title: 'Atendimento Educacional Especializado (AEE) na Prática',
    desc: 'Estudo de Caso e PAEE: elaboração obrigatória. Sala de Recursos Multifuncionais: organização e uso. Articulação entre professor do AEE e sala de aula comum. Tecnologia assistiva e Comunicação alternativa.',
    para: 'Professores do AEE, coordenadores pedagógicos.',
  },
  {
    Icon: Layers,
    color: 'yellow' as const,
    num: '03',
    carga: '10h',
    title: 'Planejamento Colaborativo e Acessibilidade Curricular',
    desc: 'Duplas sala comum + AEE: como planejar juntos. Acessibilidade curricular individualizada sem segregação. Adaptações razoáveis. Metodologias ativas e múltiplas formas de expressão e avaliação.',
    para: 'Professores da sala comum e do AEE em conjunto.',
  },
  {
    Icon: TrendingUp,
    color: 'red' as const,
    num: '04',
    carga: '8h',
    title: 'Gestão Inclusiva: Matrícula, Financiamento e Monitoramento',
    desc: 'Vedação da exigência de laudos. Dupla matrícula no Fundeb: como usar bem. PDDE-SRM e PDDE Equidade. Busca Ativa Escolar para o público da Educação Especial. Indicadores de inclusão.',
    para: 'Gestores municipais, secretários de educação, diretores escolares.',
  },
  {
    Icon: Network,
    color: 'cyan' as const,
    num: '05',
    carga: '6h',
    title: 'Articulação Intersetorial e Família',
    desc: 'Protocolos entre educação, saúde e assistência social. BPC na Escola. Como envolver famílias no Estudo de Caso e no PAEE. Busca Ativa como política permanente. Enfrentamento ao capacitismo na comunidade escolar.',
    para: 'Equipes gestoras, coordenações de inclusão, professores.',
  },
] as const;

const Modulos: React.FC = () => {
  return (
    <section id="modulos" className="section" style={{ background: 'var(--card)' }}>
      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <div className="tri-bar" aria-hidden="true" />
          <p className="section-label">Programa</p>
          <h2 className="section-title">
            5 módulos que cobrem o que sua rede realmente precisa
          </h2>
          <p className="section-subtitle">
            Cada módulo pode ser contratado separadamente ou como programa completo.
            Carga horária flexível: presencial, remoto ou híbrido.
          </p>
        </div>

        <div className="grid-3">
          {modulos.map(({ Icon, color, num, carga, title, desc, para }, i) => (
            <article key={i} className="modulo-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <div className={`module-icon ${color}`} style={{ marginBottom: 0 }}>
                  <Icon size={20} aria-hidden="true" />
                </div>
                <span className="modulo-carga" style={{ marginBottom: 0 }}>{carga}</span>
              </div>
              <p className="modulo-num">Módulo {num}</p>
              <h3 className="modulo-title">{title}</h3>
              <p className="modulo-desc">{desc}</p>
              <p className="modulo-para-quem">↳ {para}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modulos;
