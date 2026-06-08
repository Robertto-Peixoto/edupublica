import React from 'react';

const etapas = [
  {
    fase: 'Antes',
    titulo: 'Diagnóstico e Preparação',
    itens: [
      'Mapeamento sistêmico de barreiras pedagógicas, atitudinais, arquitetônicas e tecnológicas',
      'Levantamento do perfil dos estudantes-público da Educação Especial na rede',
      'Análise da articulação atual entre AEE e sala comum',
      'Definição de objetivos formativos com base no diagnóstico real',
      'Organização de materiais acessíveis para a formação',
    ],
  },
  {
    fase: 'Durante',
    titulo: 'Desenvolvimento Ativo',
    itens: [
      'Metodologias ativas: resolução de problemas, análise de casos reais, grupos de trabalho',
      'Duplas AEE + sala comum trabalhando juntas',
      'Oficinas de comunicação acessível e tecnologia assistiva',
      'Rodas de solução de desafios inclusivos da própria rede',
      'Facilitadores com experiência prática em educação inclusiva',
    ],
  },
  {
    fase: 'Depois',
    titulo: 'Devolutivas e Continuidade',
    itens: [
      'Síntese de aprendizados com orientações práticas aplicáveis imediatamente',
      'Materiais universalizados e modelos de planejamento acessível',
      'Monitoramento da redução de barreiras identificadas no diagnóstico inicial',
      'Canal de apoio remoto para dúvidas pós-formação',
      'Relatório de indicadores para a secretaria',
    ],
  },
] as const;

const Metodologia: React.FC = () => {
  return (
    <section id="metodologia" className="section">
      <div className="container">
        <div className="section-center">
          <p className="section-label animate-item">Metodologia</p>
          <h2 className="section-title animate-item delay-1">Como a formação é estruturada</h2>
          <div className="tri-bar-under animate-item delay-1" aria-hidden="true" />
          <p className="section-subtitle animate-item delay-2" style={{ marginTop: '1.5rem' }}>
            Seguimos o ciclo do Caderno de Gestão MEC/SECADI (2026): diagnóstico,
            ação e continuidade. Nada de formação pontual desconectada da prática.
          </p>
        </div>

        <div className="timeline" role="list">
          {etapas.map(({ fase, titulo, itens }, i) => (
            <div key={i} className={`timeline-step animate-item delay-${i + 1}`} role="listitem">
              <div className="timeline-number" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="timeline-phase">{fase}</p>
              <h3 className="timeline-title">{titulo}</h3>
              <ul className="timeline-list">
                {itens.map((item, j) => (
                  <li key={j}>
                    <span className="timeline-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metodologia;
