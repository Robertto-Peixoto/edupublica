import React from 'react';
import { Building2, GraduationCap, BookMarked, BarChart } from 'lucide-react';

const personas = [
  {
    Icon: Building2,
    color: 'green' as const,
    titulo: 'Secretarias Municipais de Educação',
    bullets: [
      'Precisam implementar a PNEEI no território',
      'Têm recursos do Fundeb (dupla matrícula) para aplicar',
      'Respondem à fiscalização do MEC e conselhos municipais',
    ],
  },
  {
    Icon: GraduationCap,
    color: 'blue' as const,
    titulo: 'Coordenadores Pedagógicos',
    bullets: [
      'Responsáveis pela formação em serviço nas escolas',
      'Precisam articular sala comum e AEE',
      'Fazem a ponte entre política e prática',
    ],
  },
  {
    Icon: BookMarked,
    color: 'yellow' as const,
    titulo: 'Professores do AEE e Sala Comum',
    bullets: [
      'Atuam diretamente com estudantes público da Educação Especial',
      'Precisam planejar juntos, mas raramente têm espaço para isso',
      'Buscam estratégias aplicáveis na segunda-feira seguinte',
    ],
  },
  {
    Icon: BarChart,
    color: 'red' as const,
    titulo: 'Gestores e Diretores Escolares',
    bullets: [
      'Responsáveis pela matrícula e organização das turmas',
      'Precisam entender a legislação para evitar práticas discriminatórias',
      'Querem resultados nos indicadores de inclusão',
    ],
  },
] as const;

const ParaQuem: React.FC = () => {
  return (
    <section id="para-quem" className="section">
      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label animate-item">Público-Alvo</p>
          <h2 className="section-title animate-item delay-1">
            Feito para quem implementa a política na prática
          </h2>
          <div className="tri-bar-under animate-item delay-1" aria-hidden="true" />
        </div>

        <div className="grid-2">
          {personas.map(({ Icon, color, titulo, bullets }, i) => (
            <div key={i} className={`surface-card-hover animate-item delay-${(i % 2) + 1}`}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div className={`module-icon ${color}`} style={{ marginBottom: 0 }}>
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: 'var(--foreground)',
                    marginBottom: '0.375rem',
                    lineHeight: 1.3,
                  }}>
                    {titulo}
                  </h3>
                  <ul className="persona-bullets">
                    {bullets.map((b, j) => (
                      <li key={j} className="persona-bullet">
                        <span className="persona-bullet-dot" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParaQuem;
