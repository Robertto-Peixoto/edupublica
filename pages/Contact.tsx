import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex-grow bg-background-light">
      {/* Hero */}
      <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Fale com especialistas
          </span>
          <h1 className="text-4xl lg:text-5xl font-black text-navy tracking-tight mb-6 leading-[1.1]">
            Transforme a gestão educacional em 2026.
          </h1>
          <p className="text-lg text-navy/70 leading-relaxed max-w-2xl">
            Estamos prontos para ouvir seus desafios e propor soluções estratégicas para sua secretaria ou instituição. Entre em contato para agendar uma reunião de diagnóstico.
          </p>
        </div>
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-mint/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      </section>

      {/* Main Content Split */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="grid gap-6">
              {[
                {
                  icon: 'chat',
                  color: 'text-emerald-600',
                  bg: 'bg-emerald-50',
                  title: 'Atendimento via WhatsApp',
                  text: 'Resposta rápida para gestores e secretários.',
                  link: '(84) 98128-9184',
                  href: 'https://wa.me/5584981289184'
                },
                {
                  icon: 'mail',
                  color: 'text-primary',
                  bg: 'bg-blue-50',
                  title: 'E-mail Corporativo',
                  text: 'Envie RFPs, editais ou dúvidas detalhadas.',
                  link: 'edupublicabr@proton.me',
                  href: 'mailto:edupublicabr@proton.me'
                }
              ].map((card, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className={`w-12 h-12 rounded-lg ${card.bg} flex items-center justify-center ${card.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{card.title}</h3>
                  <p className="text-navy/60 text-sm mb-4">{card.text}</p>
                  <a href={card.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-bold text-sm hover:underline">
                    {card.link}
                    <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                  </a>
                </div>
              ))}

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">Sede Administrativa</h3>
                <p className="text-navy/60 text-sm mb-4">
                  Av. Engenheiro Roberto Freire, 1962<br />
                  Natal - RN
                </p>
                <div className="h-48 w-full rounded-lg overflow-hidden relative bg-gray-200">
                  <img
                    src="/sede.jpg"
                    alt="Sede Administrativa - Sala de Reuniões"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-mint to-primary"></div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-navy">Envie uma mensagem</h2>
                <p className="text-navy/60 mt-2">Preencha o formulário abaixo e nossa equipe retornará em até 24 horas úteis.</p>
              </div>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements[0] as HTMLInputElement).value;
                const subject = (form.elements[4] as HTMLSelectElement).value;
                const message = (form.elements[5] as HTMLTextAreaElement).value;
                window.location.href = `mailto:edupublicabr@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nome: ${name}\n\n${message}`)}`;
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-navy/80">Nome completo</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <span className="material-symbols-outlined text-[20px]">person</span>
                      </div>
                      <input className="pl-10 block w-full rounded-lg border-gray-200 bg-gray-50 text-navy focus:border-primary focus:ring-primary sm:text-sm py-3" type="text" placeholder="Seu nome" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-navy/80">E-mail corporativo</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <span className="material-symbols-outlined text-[20px]">email</span>
                      </div>
                      <input className="pl-10 block w-full rounded-lg border-gray-200 bg-gray-50 text-navy focus:border-primary focus:ring-primary sm:text-sm py-3" type="email" placeholder="exemplo@educacao.gov.br" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-navy/80">Telefone/Celular</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <span className="material-symbols-outlined text-[20px]">call</span>
                      </div>
                      <input className="pl-10 block w-full rounded-lg border-gray-200 bg-gray-50 text-navy focus:border-primary focus:ring-primary sm:text-sm py-3" type="tel" placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-navy/80">Cargo/Secretaria</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <span className="material-symbols-outlined text-[20px]">badge</span>
                      </div>
                      <input className="pl-10 block w-full rounded-lg border-gray-200 bg-gray-50 text-navy focus:border-primary focus:ring-primary sm:text-sm py-3" type="text" placeholder="Ex: Secretário de Educação" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-navy/80">Assunto de interesse</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <span className="material-symbols-outlined text-[20px]">topic</span>
                    </div>
                    <select className="pl-10 block w-full rounded-lg border-gray-200 bg-gray-50 text-navy focus:border-primary focus:ring-primary sm:text-sm py-3 appearance-none">
                      <option>Diagnóstico de Gestão</option>
                      <option>Planejamento Estratégico 2026</option>
                      <option>Formação de Equipes</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-navy/80">Mensagem</label>
                  <textarea className="block w-full rounded-lg border-gray-200 bg-gray-50 text-navy focus:border-primary focus:ring-primary sm:text-sm p-4 resize-none" rows={4} placeholder="Descreva brevemente sua necessidade..."></textarea>
                </div>
                <div className="pt-4 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-xs text-gray-400 order-2 sm:order-1 flex-1 min-w-[200px]">
                    Ao enviar, você concorda com nossa <a href="#" className="underline hover:text-primary">Política de Privacidade</a>.
                  </p>
                  <button className="order-1 sm:order-2 w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-8 rounded-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5">
                    <span>Enviar Mensagem</span>
                    <span className="material-symbols-outlined text-[20px]">send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy mb-8">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-2">
              <h4 className="font-bold text-navy flex gap-2 items-start">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                Atendem em todo o Brasil?
              </h4>
              <p className="text-navy/60 text-sm ml-8">Sim, atuamos com secretarias estaduais e municipais em todas as regiões, com consultores locais e atendimento remoto.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-navy flex gap-2 items-start">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                Como funciona o diagnóstico inicial?
              </h4>
              <p className="text-navy/60 text-sm ml-8">Realizamos uma análise preliminar gratuita dos indicadores da sua rede para propor um plano de ação personalizado.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;