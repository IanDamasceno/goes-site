import { WHATSAPP } from '../data/medicos.js';
import { WhatsAppIcon } from './icons.jsx';

export default function WhatsAppFloat() {
  return (
    <a
      href={`${WHATSAPP}?text=${encodeURIComponent('Olá, gostaria de agendar uma consulta na GOES.')}`}
      className="wa-float"
      aria-label="Falar com a GOES pelo WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="wa-pulse" aria-hidden="true"></div>
      <span className="wa-tip" aria-hidden="true">Agendar pelo WhatsApp</span>
      <WhatsAppIcon width="28" height="28" style={{ fill: 'white' }} />
    </a>
  );
}
