import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    pergunta: 'A formação é reconhecida pelo MEC?',
    resposta: 'A formação é elaborada com base nos documentos oficiais do MEC/SECADI (Cadernos de Gestão das Modalidades Educacionais, 2026) e na PNEEI (Decreto nº 12.686/2025). Os certificados são emitidos pela i9AI Soluções em IA. Para validação específica no plano de carreira municipal, consulte a legislação do seu município.',
  },
  {
    pergunta: 'Posso contratar sem licitação?',
    resposta: 'Sim. Para valores até R$ 57.200, é possível realizar dispensa de licitação com base no Art. 75, inciso II, da Lei Federal nº 14.133/2021 (Nova Lei de Licitações). Auxiliamos na elaboração da justificativa técnica e documentação necessária.',
  },
  {
    pergunta: 'Quantos profissionais podem participar por turma?',
    resposta: 'Recomendamos turmas de até 30 participantes para garantir qualidade nas dinâmicas. Para redes maiores, realizamos múltiplas turmas simultâneas ou em módulos sequenciais conforme o calendário escolar.',
  },
  {
    pergunta: 'A formação pode ser realizada no contraturno dos professores?',
    resposta: 'Sim. Montamos o cronograma de acordo com a realidade da sua rede — fins de semana, recesso escolar, semanas pedagógicas ou encontros mensais. A flexibilidade é parte da proposta.',
  },
  {
    pergunta: 'Os conteúdos são os mesmos para todos os municípios?',
    resposta: 'Não. Partimos de um diagnóstico das barreiras e do contexto específico da sua rede para personalizar os conteúdos. O programa de Mossoró não é igual ao de Caicó — e isso é intencional.',
  },
  {
    pergunta: 'Como funciona o certificado para o plano de carreira?',
    resposta: 'Emitimos certificado digital com carga horária discriminada por módulo. A aceitação para progressão no plano de carreira depende das regras de cada município. Recomendamos consultar a Secretaria de Educação ou RH antes da contratação.',
  },
] as const;

const FAQ: React.FC = () => {
  const [aberto, setAberto] = useState<number | null>(null);

  const toggle = (i: number) => setAberto(aberto === i ? null : i);

  return (
    <section id="faq" className="section">
      <div className="container">
        <div style={{ maxWidth: '720px', marginBottom: '2.5rem' }}>
          <div className="tri-bar" aria-hidden="true" />
          <p className="section-label">Dúvidas Frequentes</p>
          <h2 className="section-title">Perguntas que toda secretaria faz</h2>
        </div>

        <div className="faq-list" style={{ maxWidth: '720px' }} role="list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item${aberto === i ? ' open' : ''}`}
              role="listitem"
            >
              <button
                className="faq-trigger"
                onClick={() => toggle(i)}
                aria-expanded={aberto === i}
                aria-controls={`faq-content-${i}`}
                id={`faq-trigger-${i}`}
              >
                {faq.pergunta}
                <Plus size={18} className="faq-icon" aria-hidden="true" />
              </button>
              {aberto === i && (
                <div
                  className="faq-content"
                  id={`faq-content-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                >
                  {faq.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
