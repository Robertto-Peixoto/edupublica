import React from 'react';

const depoimentos = [
  {
    nome: 'Dra. Patrícia Souza',
    cargo: 'Secretária de Educação, Mossoró/RN',
    texto: 'Depois da formação, nossas escolas pararam de exigir laudos médicos para matrícula. Isso sozinho já foi uma revolução na relação com as famílias.',
  },
  {
    nome: 'Prof. Marcos Lima',
    cargo: 'Coordenador Pedagógico, Caicó/RN',
    texto: 'O módulo de planejamento colaborativo mudou a dinâmica entre os professores do AEE e da sala comum. Hoje eles planejam juntos semanalmente.',
  },
  {
    nome: 'Ana Beatriz Costa',
    cargo: 'Diretora Escolar, Parnamirim/RN',
    texto: 'Finalmente entendi como usar os recursos do PDDE Equidade da forma certa. Montamos a sala de recursos multifuncionais e capacitamos toda a equipe.',
  },
  {
    nome: 'Tárcio Fernandes',
    cargo: 'Gestor Municipal, Currais Novos/RN',
    texto: 'A formação de gestão nos ajudou a organizar a dupla matrícula no Fundeb. Aumentamos significativamente os recursos destinados à Educação Especial.',
  },
  {
    nome: 'Profa. Renata Alves',
    cargo: 'Professora do AEE, Natal/RN',
    texto: 'O Estudo de Caso deixou de ser burocracia. Hoje é a ferramenta mais importante que uso para planejar o atendimento de cada estudante.',
  },
  {
    nome: 'Edilene Nascimento',
    cargo: 'Coordenadora de Inclusão, Mossoró/RN',
    texto: 'A articulação intersetorial com saúde e assistência social saiu do papel. Temos protocolo formalizado e reuniões mensais entre as secretarias.',
  },
] as const;

const initials = (name: string) =>
  name.split(' ').filter(Boolean).slice(0, 2).map(n => n[0].toUpperCase()).join('');

const Depoimentos: React.FC = () => {
  const track = [...depoimentos, ...depoimentos];

  return (
    <section className="section">
      <div className="container section-header-center" style={{ marginBottom: '2.5rem' }}>
        <div className="tri-bar" aria-hidden="true" />
        <p className="section-label">Quem Já Passou pela Formação</p>
        <h2 className="section-title">Redes que transformaram sua prática</h2>
      </div>

      <div className="marquee-wrapper" aria-label="Depoimentos de participantes" role="region">
        <div className="marquee-track" aria-hidden="true">
          {track.map((d, i) => (
            <article key={i} className="testimonial-card">
              <div className="testimonial-quote" aria-hidden="true">"</div>
              <p className="testimonial-text">{d.texto}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  {initials(d.nome)}
                </div>
                <div>
                  <p className="testimonial-name">{d.nome}</p>
                  <p className="testimonial-role">{d.cargo}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
