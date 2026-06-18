import { Link } from 'react-router-dom';
import { Arrow } from './icons.jsx';
import { WHATSAPP } from '../data/medicos.js';

// Card de especialidade.
// mode="home"  -> link "Saiba mais" leva à página de Especialidades
// mode="page"  -> link "Agendar avaliação" abre o WhatsApp
export default function EspCard({ esp, mode = 'home' }) {
  return (
    <article className="esp-card" role="listitem">
      <div className="esp-icon" aria-hidden="true">{esp.icon}</div>
      <h3 className="esp-title">{esp.nome}</h3>
      <p className="esp-text">{esp.desc}</p>
      {mode === 'home' ? (
        <Link to="/especialidades" className="esp-link">
          Saiba mais <Arrow />
        </Link>
      ) : (
        <a className="esp-link" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          Agendar avaliação <Arrow />
        </a>
      )}
    </article>
  );
}
