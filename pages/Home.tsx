import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex w-full flex-col justify-center overflow-hidden bg-white py-12 lg:py-24">
        {/* Background Blobs */}
        <div className="absolute -right-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-mint/10 blur-[100px]"></div>
        <div className="absolute -left-[10%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[80px]"></div>

        <div className="mx-auto flex max-w-[1280px] flex-col px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Content */}
            <div className="flex flex-col gap-6 relative z-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-mint/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-teal-800">
                <span className="material-symbols-outlined text-sm">verified</span>
                Planejamento 2026
              </div>
              <h1 className="text-navy text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Estratégias Legais e Financeiras para <span className="text-primary">Educação Pública.</span>
              </h1>
              <p className="text-navy/70 text-lg leading-relaxed max-w-[600px]">
                Garanta conformidade total com o <strong>Decreto 12.686/25 (PNEEI)</strong> e maximize a captação de recursos da PNED (FUST/PAR). Transformamos desafios regulatórios em oportunidades de investimento.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/contato" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg bg-primary px-6 py-4 text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-xl transition-all">
                  Solicite Diagnóstico
                </Link>
                <Link to="/servicos" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg border-2 border-[#e7eaf3] bg-white px-6 py-4 text-navy text-base font-bold hover:bg-gray-50 transition-colors">
                  Conheça a Metodologia
                </Link>
              </div>
              <div className="flex items-center gap-4 pt-4 text-sm text-navy/60">
                <div className="flex -space-x-3">
                  {[10, 11, 12].map((i) => (
                    <div key={i} className="size-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://picsum.photos/id/${60 + i}/100/100`} alt="Avatar" loading="lazy" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
                <p>Já ajudamos mais de <strong className="text-navy">50 municípios</strong> este ano.</p>
              </div>
            </div>
            {/* Image */}
            <div className="relative w-full z-10">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent z-10"></div>
                <img
                  src="/simec_login_updated.jpg"
                  alt="Modern strategic meeting"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 z-20 rounded-xl bg-white/95 p-4 backdrop-blur shadow-lg border border-white/20">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint text-white">
                      <span className="material-symbols-outlined">trending_up</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-gray-500">Recursos Captados (Último Ciclo)</p>
                      <p className="text-xl font-bold text-navy">R$ 150.4 Milhões</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative pattern dots */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 opacity-20" style={{ backgroundImage: 'radial-gradient(#1246e2 2px, transparent 2px)', backgroundSize: '12px 12px' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-navy py-10 text-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { val: "50+", label: "Municípios Atendidos" },
              { val: "R$ 12mi", label: "Em Recursos Captados" },
              { val: "1.2k", label: "Gestores Capacitados" },
              { val: "100%", label: "Aprovação nos Tribunais" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1 border-l-2 border-mint/30 pl-6">
                <span className="text-3xl font-bold tracking-tight text-white md:text-4xl">{stat.val}</span>
                <span className="text-sm font-medium text-gray-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background-light py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-primary mb-3 text-sm font-bold uppercase tracking-widest">Diferenciais Estratégicos</h2>
            <h3 className="text-navy text-3xl font-bold tracking-tight sm:text-4xl mb-6">Por Que Nos Escolher?</h3>
            <p className="text-navy/70 text-lg">
              Nossa metodologia une segurança jurídica e eficiência financeira para modernizar a educação pública com foco em 2026.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: 'gavel', color: 'text-primary', bg: 'bg-blue-50', title: 'Expertise Legal Completa', desc: 'Segurança total na adequação ao novo PNEEI e normas vigentes. Protegemos seu município contra inconformidades fiscais e pedagógicas.' },
              { icon: 'payments', color: 'text-teal-600', bg: 'bg-mint/10', title: 'Resultados Financeiros', desc: 'Estratégias focadas na maximização de verbas do FUST e PAR. Identificamos linhas de crédito e fomento perdidas pela gestão convencional.' },
              { icon: 'psychology', color: 'text-indigo-600', bg: 'bg-indigo-50', title: 'Metodologia Comprovada', desc: 'Histórico de sucesso na modernização de redes municipais com foco pedagógico. Implementação ágil sem paralisar a secretaria.' }
            ].map((card, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl border border-gray-100">
                <div className={`mb-6 inline-flex size-14 items-center justify-center rounded-xl ${card.bg} ${card.color} group-hover:bg-primary group-hover:text-white transition-colors`}>
                  <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                </div>
                <h4 className="text-navy mb-3 text-xl font-bold">{card.title}</h4>
                <p className="text-navy/60 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="overflow-hidden bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            <div className="relative lg:w-1/2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
                <img
                  src="/desafio_2026.jpg"
                  alt="Modern public school hallway"
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 -z-10 h-64 w-64 rounded-xl bg-mint/20"></div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-navy text-3xl font-bold leading-tight sm:text-4xl mb-6">
                O Desafio de 2026: <br />
                <span className="text-primary">Conformidade e Modernização</span>
              </h2>
              <p className="mb-8 text-lg text-navy/70">
                O cenário educacional mudou. A simples gestão de folha de pagamento não sustenta mais a qualidade exigida pelo MEC.
              </p>
              <ul className="flex flex-col gap-6">
                <li className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  <div>
                    <h5 className="text-navy font-bold">Decreto 12.686/25 (PNEEI)</h5>
                    <p className="text-sm text-navy/60 mt-1">Adequação imediata às novas diretrizes de inclusão e equidade, evitando sanções e garantindo repasses.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  <div>
                    <h5 className="text-navy font-bold">Captação PNED (FUST/PAR)</h5>
                    <p className="text-sm text-navy/60 mt-1">Elaboração de projetos técnicos robustos para acessar fundos de conectividade e infraestrutura escolar.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10">
                <Link to="/servicos" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group">
                  Saiba mais sobre nossas soluções
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary relative isolate overflow-hidden py-16 sm:py-24">
        {/* Simple Pattern */}
        <div className="absolute inset-0 -z-10 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pronto para transformar a educação do seu município?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Não espere 2026 chegar. Antecipe-se às mudanças regulatórias e garanta os recursos que sua rede precisa hoje.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/contato" className="rounded-lg bg-mint px-8 py-3.5 text-base font-bold text-teal-900 shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors">
              Agende uma Conversa Estratégica
            </Link>
            <Link to="/contato" className="text-sm font-semibold leading-6 text-white hover:text-blue-100 flex items-center gap-1">
              Fale com um consultor <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;