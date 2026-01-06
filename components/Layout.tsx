import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-bold" : "text-navy/80 hover:text-primary font-medium";
  };

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Soluções', path: '/servicos' },
    { name: 'Quem Somos', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full">
        <nav className="w-full border-b border-[#e7eaf3] bg-white/95 backdrop-blur-md transition-all duration-300">
          <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10">
            <Link to="/" className="flex items-center gap-3 text-primary group">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-white">
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>school</span>
              </div>
              <h2 className="text-navy text-xl font-extrabold tracking-tight">EduPública</h2>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${isActive(link.path)} text-sm transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link to="/contato" className="cursor-pointer items-center justify-center rounded-lg bg-primary hover:bg-primary-dark transition-colors px-6 py-2.5 text-white text-sm font-bold shadow-sm ring-4 ring-transparent hover:ring-primary/20 flex gap-2">
                Agende uma Conversa
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex lg:hidden text-navy hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base py-2 border-b border-gray-50 ${isActive(link.path)}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center w-full rounded-lg bg-primary px-6 py-3 text-white text-base font-bold shadow-sm"
              >
                Agende uma Conversa
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy pt-16 pb-8 text-white/80 border-t border-navy-light">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 pb-12 border-b border-white/10">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6 text-white">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '32px' }}>school</span>
                <span className="text-xl font-bold">EduPública</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Consultoria especializada em gestão pública educacional. Foco em legalidade, finanças e resultados pedagógicos para 2026.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Serviços</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/servicos" className="hover:text-primary transition-colors">Diagnóstico de Rede</Link></li>
                <li><Link to="/servicos" className="hover:text-primary transition-colors">Adequação PNEEI</Link></li>
                <li><Link to="/servicos" className="hover:text-primary transition-colors">Captação FUST/PAR</Link></li>
                <li><Link to="/servicos" className="hover:text-primary transition-colors">Formação de Gestores</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Contato</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">mail</span>
                  edupublicabr@proton.me
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">call</span>
                  (84) 98128-9184
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-0.5">location_on</span>
                  Av. Engenheiro Roberto Freire, 1962<br />Natal - RN
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">© 2024 EduPública Consultoria. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <Link to="/privacidade" className="text-gray-500 hover:text-white transition-colors text-sm">Privacidade</Link>
              <Link to="/termos" className="text-gray-500 hover:text-white transition-colors text-sm">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;