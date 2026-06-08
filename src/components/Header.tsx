import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface Props {
  wa: string;
}

const Header: React.FC<Props> = ({ wa }) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        {/* Logo */}
        <a href="#" className="logo" aria-label="EduPublica Formação — início">
          EduPublica <strong>Formação</strong>
        </a>

        {/* Nav desktop (≥1024px) */}
        <nav className="nav-desktop" aria-label="Navegação principal">
          <a href="#sobre"       className="nav-link">Sobre</a>
          <a href="#modulos"     className="nav-link">Módulos</a>
          <a href="#metodologia" className="nav-link">Metodologia</a>
          <a href="#para-quem"   className="nav-link">Para Quem</a>
          <a href="#faq"         className="nav-link">FAQ</a>
        </nav>

        {/* Ações (hamburger sempre visível no mobile) */}
        <div className="nav-actions">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary nav-cta"
          >
            Solicitar Proposta
          </a>
          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen
              ? <X size={18} aria-hidden="true" />
              : <Menu size={18} aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Menu mobile">
          <a href="#sobre"       className="mobile-nav-link" onClick={close}>Sobre</a>
          <a href="#modulos"     className="mobile-nav-link" onClick={close}>Módulos</a>
          <a href="#metodologia" className="mobile-nav-link" onClick={close}>Metodologia</a>
          <a href="#para-quem"   className="mobile-nav-link" onClick={close}>Para Quem</a>
          <a href="#faq"         className="mobile-nav-link" onClick={close}>FAQ</a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mobile-menu-cta"
            onClick={close}
          >
            Solicitar Proposta via WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
