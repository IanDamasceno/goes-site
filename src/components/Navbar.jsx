import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { WHATSAPP } from '../data/medicos.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // fecha o menu ao trocar de rota
  useEffect(() => setOpen(false), [location.pathname]);

  const goSobre = (e) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById('sobre-nos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: 'sobre-nos' } });
    }
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo" aria-label="GOES – Grupo de Ortopedia do Espírito Santo">
          <span className="logo-mark">GOES</span>
          <span className="logo-sep" aria-hidden="true"></span>
          <span className="logo-sub">Grupo de Ortopedia<br />do Espírito Santo</span>
        </Link>

        <ul className={`nav-links ${open ? 'open' : ''}`} role="navigation" aria-label="Menu principal">
          <li><a href="/#sobre-nos" onClick={goSobre}>Sobre Nós</a></li>
          <li><NavLink to="/especialidades">Especialidades</NavLink></li>
          <li><NavLink to="/medicos">Corpo Médico</NavLink></li>
          <li><NavLink to="/convenios">Convênios</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contato">Contato</NavLink></li>
        </ul>

        <a href={WHATSAPP} className="btn-nav" target="_blank" rel="noopener noreferrer" aria-label="Agendar consulta">
          Agendar Consulta
        </a>

        <button
          className="nav-burger"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
