import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Services Hero */}
      <section className="relative w-full bg-white border-b border-gray-100 py-12 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
            <div className="flex-1 flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-4">
                <span className="text-primary font-bold text-sm tracking-widest uppercase">Expertise para Gestão Pública</span>
                <h1 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-navy">
                  Soluções Estratégicas para os Desafios de 2026
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Apoiamos Secretarias de Educação na implementação rigorosa do <span className="font-bold text-primary">PNEEI</span> e do <span className="font-bold text-mint-dark">PNED</span>. Conformidade legal, eficiência pedagógica e captação de recursos.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link to="/contato" className="bg-primary hover:bg-primary-dark text-white h-12 px-6 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 flex items-center justify-center">
                  Agendar Diagnóstico
                </Link>
                <Link to="/sobre" className="bg-white border border-gray-200 hover:bg-gray-50 text-navy h-12 px-6 rounded-lg font-bold transition-all flex items-center justify-center">
                  Conhecer Metodologia
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="w-full aspect-video bg-gray-200 rounded-xl shadow-2xl overflow-hidden relative group">
                <img src="/solucoes_estrategicas.jpg" alt="Meeting" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-mint/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Axis 1: PNEEI */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col gap-2 mb-12">
            <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-lg">accessibility_new</span>
              Eixo 1
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">Educação Especial Inclusiva</h2>
            <p className="text-gray-500 max-w-2xl text-lg mt-2">
              Garantindo conformidade com o Decreto nº 12.686/2025 através de adequação normativa e pedagógica robusta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'gavel', title: 'Adequação Normativa', desc: 'Revisão e alinhamento da legislação municipal às novas diretrizes federais do PNEEI 2026.' },
              { icon: 'analytics', title: 'Diagnóstico de Rede', desc: 'Mapeamento quantitativo e qualitativo da demanda reprimida e oferta de serviços especializados.' },
              { icon: 'school', title: 'Formação em DUA', desc: 'Capacitação continuada de gestores e docentes em Desenho Universal para Aprendizagem.' },
              { icon: 'clinical_notes', title: 'Avaliação Biopsicossocial', desc: 'Implementação de novos protocolos de avaliação multidisciplinar focados na funcionalidade.' },
            ].map((item, i) => (
              <div key={i} className="group flex flex-col p-6 rounded-xl border border-gray-200 bg-background-light hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Axis 2: PNED */}
      <section className="py-16 bg-background-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-mint/5 to-transparent pointer-events-none"></div>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 relative z-10">
          <div className="flex flex-col gap-2 mb-12">
            <span className="inline-flex items-center gap-2 text-mint-dark font-bold text-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-lg">devices</span>
              Eixo 2
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">Educação Digital</h2>
            <p className="text-gray-500 max-w-2xl text-lg mt-2">
              Estratégias para a Lei nº 14.533/2023, conectividade e inovação curricular.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'menu_book', title: 'Revisão Curricular', desc: 'Integração das competências digitais na BNCC local e currículos escolares.' },
              { icon: 'account_balance', title: 'Captação FUST/PAR', desc: 'Assessoria técnica para desbloqueio de verbas do Fundo de Universalização (FUST).' },
              { icon: 'router', title: 'Infraestrutura', desc: 'Planejamento de conectividade significativa e modernização de laboratórios.' },
              { icon: 'monitor_heart', title: 'Saúde Digital', desc: 'Protocolos para o bem-estar digital e uso consciente de telas nas escolas.' },
            ].map((item, i) => (
              <div key={i} className="group flex flex-col p-6 rounded-xl border border-gray-200 bg-white hover:border-mint-dark/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-mint-dark mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intersection Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
          <div className="rounded-2xl bg-gradient-to-br from-[#101522] to-[#1e293b] p-1 shadow-2xl overflow-hidden">
            <div className="relative bg-navy h-full w-full rounded-xl flex flex-col md:flex-row overflow-hidden">
              <div className="w-full md:w-2/5 h-64 md:h-auto bg-cover bg-center relative">
                <img src="/tecnologia_assistiva.jpg" alt="Assistive Tech" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
              </div>
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-white/80 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">Intersecção Estratégica</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Tecnologia Assistiva</h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Descubra como a Política Nacional de Educação Digital (PNED) pode financiar e potencializar as metas de inclusão do PNEEI.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-mint mt-1">check_circle</span>
                    <span className="text-white/90">Softwares de acessibilidade financiados pelo FUST.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-mint mt-1">check_circle</span>
                    <span className="text-white/90">Salas de Recursos Multifuncionais 4.0.</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/contato" className="flex items-center gap-2 text-white font-bold hover:text-mint transition-colors group">
                    <span>Ver projeto integrado</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-background-light border-t border-gray-200 py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-black text-navy mb-4">Pronto para 2026?</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Agende uma reunião com nossos especialistas e receba um pré-diagnóstico da sua rede de ensino.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contato" className="bg-primary hover:bg-primary-dark text-white font-bold h-12 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">calendar_month</span>
              Agendar Reunião
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;