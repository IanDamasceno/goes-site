import { Link } from 'react-router-dom';
import { Portrait, Arrow } from './icons.jsx';

// Card de médico (usado na home e na listagem do corpo clínico).
export default function MedCard({ med }) {
  return (
    <Link to={`/medicos/${med.slug}`} className="med-card" role="listitem" style={{ display: 'block' }}>
      <div className="med-photo">
        <div className="med-portrait" aria-hidden="true">
          <Portrait />
        </div>
        <span className="med-ph-lbl">Foto · 400 × 480 px</span>
        <div className="med-tag">{med.tag}</div>
      </div>
      <div className="med-body">
        <h3 className="med-name">{med.nome}</h3>
        <p className="med-crm">{med.crm}</p>
        <span className="med-link">
          Ver perfil <Arrow />
        </span>
      </div>
    </Link>
  );
}
