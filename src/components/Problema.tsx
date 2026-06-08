import React from 'react';
import { AlertTriangle, Unlink, FileX, BarChart2 } from 'lucide-react';

const dores = [
  {
    Icon: AlertTriangle,
    title: 'Professores sem formação específica',
    text: 'Apenas 6,4% dos professores regentes da Educação Básica possuem formação continuada em Educação Especial (Instituto Rodrigo Mendes, 2024).',
  },
  {
    Icon: Unlink,
    title: 'AEE desconectado da sala comum',
    text: 'O AEE frequentemente opera como substitutivo do ensino comum, em vez de serviço complementar articulado.',
  },
  {
    Icon: FileX,
    title: 'Laudos exigidos ilegalmente',
    text: 'A exigência de laudos médicos como pré-requisito para matrícula contraria os marcos legais da Educação Especial Inclusiva vigentes.',
  },
  {
    Icon: BarChart2,
    title: 'Recursos do Fundeb subutilizados',
    text: 'A dupla matrícula no Fundeb pode gerar até 2,8x mais recursos por aluno — mas poucos municípios planejam esses recursos com equidade.',
  },
] as const;

const Problema: React.FC = () => {
  return (
    <section id="sobre" className="section" style={{ background: 'var(--card)' }}>
      <div className="container">
        <div className="problema-layout">
          <div>
            <div className="tri-bar" aria-hidden="true" />
            <p className="section-label">O Desafio</p>
            <h2 className="section-title">
              A inclusão que existe no papel ainda não chegou à sala de aula
            </h2>
            <p className="section-subtitle">
              Municípios e redes de ensino enfrentam desafios estruturais para
              implementar a Educação Especial Inclusiva de forma efetiva: professores
              sem formação adequada, AEE desarticulado da sala comum, barreiras que
              persistem e laudos exigidos ilegalmente.
            </p>
          </div>

          <div className="dores-grid">
            {dores.map(({ Icon, title, text }, i) => (
              <div key={i} className="dor-card">
                <div className="dor-icon">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <p className="dor-title">{title}</p>
                <p className="dor-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problema;
