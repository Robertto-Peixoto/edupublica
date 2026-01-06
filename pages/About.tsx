import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <section className="relative bg-white py-16 lg:py-24 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20"></div>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint/10 w-fit">
                <span className="size-2 rounded-full bg-mint"></span>
                <span className="text-mint-dark text-xs font-bold uppercase tracking-wider">Quem Somos</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-navy leading-[1.15] tracking-tight">
                Expertise Técnica para a <span className="text-primary relative inline-block">
                  Gestão Pública
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-mint/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-navy/70 leading-relaxed max-w-xl">
                Somos uma consultoria especializada em transformar desafios complexos da educação pública em resultados mensuráveis. Preparamos secretarias e gestores para os desafios de 2026 com ética, dados e estratégia.
              </p>

            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-mint/20 rounded-2xl rotate-3 blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img src="/expertise_tecnica.jpg" alt="Meeting" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-primary text-white py-12">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20 text-center">
            {[
              { val: "12+", label: "Anos de Atuação" },
              { val: "50+", label: "Secretarias Atendidas" },
              { val: "1.2k", label: "Gestores Capacitados" },
              { val: "500k", label: "Alunos Impactados" }
            ].map((stat, i) => (
              <div key={i} className="px-4">
                <p className="text-4xl font-black tracking-tight mb-1">{stat.val}</p>
                <p className="text-white/80 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Identity */}
      <section className="py-20 bg-background-light">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Nossa Identidade Institucional</h2>
            <p className="text-navy/70">
              Fundamentados na ética pública e na busca incessante pela qualidade do ensino, construímos nossa reputação resolvendo os problemas reais do chão da escola e da administração central.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'target', title: 'Nossa Missão', color: 'text-primary', bg: 'bg-primary/10', desc: 'Empoderar gestores públicos com inteligência de dados e estratégias eficientes para elevar os indicadores de aprendizagem e otimizar o uso dos recursos públicos.' },
              { icon: 'visibility', title: 'Nossa Visão', color: 'text-mint-dark', bg: 'bg-mint/10', desc: 'Ser a consultoria de referência nacional em inovação na gestão educacional até 2030, reconhecida por transformar realidades locais em cases de sucesso.' },
              { icon: 'verified', title: 'Nossos Valores', color: 'text-blue-600', bg: 'bg-blue-50', desc: 'Compromisso com a verdade pedagógica, transparência administrativa, equidade no acesso ao conhecimento e responsabilidade fiscal absoluta.' }
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                <div className={`size-14 ${card.bg} rounded-xl flex items-center justify-center ${card.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{card.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="inline-block text-primary font-bold text-sm tracking-widest uppercase mb-2">Metodologia 4D</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">Como Entregamos Resultados</h2>
              <p className="text-navy/60 mb-10 leading-relaxed">
                Nossa abordagem não é teórica. Entramos na estrutura da secretaria para entender gargalos e propor soluções que permanecem como legado após nossa saída.
              </p>
              <div className="space-y-8">
                {[
                  { num: '1', title: 'Diagnóstico Profundo', desc: 'Análise de dados do Censo Escolar, IDEB e contas públicas para identificar a real situação da rede.' },
                  { num: '2', title: 'Desenho da Estratégia', desc: 'Co-criação de planos de ação com metas claras, responsáveis definidos e cronogramas realistas.' },
                  { num: '3', title: 'Desdobramento & Capacitação', desc: 'Treinamento intensivo de diretores e coordenadores para garantir a execução do plano na ponta.' },
                  { num: '4', title: 'Dados e Monitoramento', desc: 'Acompanhamento mensal de indicadores para correção de rota rápida e garantia de sucesso.' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className={`size-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${i === 3 ? 'bg-mint text-white' : 'bg-white border-2 border-primary text-primary'}`}>
                        {step.num}
                      </div>
                      {i !== 3 && <div className="w-0.5 h-full bg-gray-200 my-2"></div>}
                    </div>
                    <div className="pb-8">
                      <h4 className="text-lg font-bold text-navy mb-2">{step.title}</h4>
                      <p className="text-sm text-navy/60">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-mint/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para transformar a educação no seu município?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Agende um diagnóstico inicial gratuito com nossa equipe e descubra onde estão as maiores oportunidades de melhoria para sua gestão.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contato" className="bg-white text-primary hover:bg-gray-50 text-base font-bold py-4 px-8 rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
              Agendar Diagnóstico
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;