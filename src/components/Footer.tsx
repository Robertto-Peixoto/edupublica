import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <span className="footer-logo">
              EduPublica <strong>Formação</strong>
            </span>
            <p className="footer-tagline">
              Formação continuada que transforma redes em sistemas
              verdadeiramente inclusivos.
            </p>
            <address className="footer-contact" style={{ fontStyle: 'normal' }}>
              <a
                href="https://wa.me/5584987012471"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp: +55 84 98701-2471"
              >
                WhatsApp: +55 84 98701-2471
              </a>
              <a href="mailto:contato@i9ai.org">contato@i9ai.org</a>
              <a
                href="https://i9ai.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                i9ai.org
              </a>
            </address>
          </div>

          <nav aria-label="Links rápidos">
            <p className="footer-heading">Links rápidos</p>
            <div className="footer-links">
              <a href="#modulos">Módulos</a>
              <a href="#metodologia">Metodologia</a>
              <a href="#para-quem">Para Quem</a>
              <a href="#precos">Preços</a>
              <a href="#faq">FAQ</a>
            </div>
          </nav>

          <div>
            <p className="footer-heading">Empresa</p>
            <div className="footer-contact">
              <span>i9AI Soluções em Inteligência Artificial SLU</span>
              <span>CNPJ: 40.641.253/0001-69</span>
              <span>Natal, Rio Grande do Norte — Brasil</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 EduPublica Formação — i9AI Soluções em IA.</p>
          <p>
            Conteúdo educacional baseado nos Cadernos de Gestão MEC/SECADI (2026).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
