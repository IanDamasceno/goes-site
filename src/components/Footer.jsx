import { Link } from 'react-router-dom';
import { especialidades } from '../data/especialidades.jsx';
import { WHATSAPP } from '../data/medicos.js';
import { Pin, Phone, Clock } from './icons.jsx';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo-mark">GOES</div>
          <div className="footer-tagline">Grupo de Ortopedia do Espírito Santo</div>
          <p className="footer-desc">
            Fundado em 2014, reunimos especialistas em ortopedia e traumatologia comprometidos com
            excelência técnica e atenção humana a cada paciente de Vila Velha e da Grande Vitória.
          </p>
          <div className="footer-socials" aria-label="Redes sociais">
            <a href="https://instagram.com/grupodeortopedia" className="soc-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram GOES">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href={WHATSAPP} className="soc-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp GOES">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.93 2C6.451 2 2 6.451 2 11.93c0 1.8.488 3.49 1.34 4.946L2 22l5.275-1.382A9.898 9.898 0 0011.93 22c5.479 0 9.93-4.451 9.93-9.93S17.41 2 11.93 2zm0 18.065a8.116 8.116 0 01-4.14-1.13l-.297-.177-3.128.82.834-3.047-.197-.313a8.065 8.065 0 01-1.237-4.288c0-4.467 3.633-8.1 8.1-8.1 4.466 0 8.1 3.633 8.1 8.1s-3.634 8.135-8.035 8.135z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <div className="footer-col-label">Especialidades</div>
          <ul className="footer-links">
            {especialidades.map((e) => (
              <li key={e.slug}><Link to="/especialidades">{e.nome}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-label">Institucional</div>
          <ul className="footer-links">
            <li><Link to="/" state={{ scrollTo: 'sobre-nos' }}>Sobre Nós</Link></li>
            <li><Link to="/medicos">Corpo Médico</Link></li>
            <li><Link to="/convenios">Convênios</Link></li>
            <li><Link to="/convenios" state={{ scrollTo: 'reembolso' }}>Reembolso Médico</Link></li>
            <li><Link to="/blog">Blog Educacional</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-label">Onde Estamos</div>
          <div className="footer-contact-row">
            <div className="fc-icon" aria-hidden="true"><Pin width="14" height="14" /></div>
            <div className="fc-text"><strong>Endereço</strong>Rua Porto Alegre, 331<br />Itapoã – Vila Velha, ES</div>
          </div>
          <div className="footer-contact-row">
            <div className="fc-icon" aria-hidden="true"><Phone width="14" height="14" /></div>
            <div className="fc-text"><strong>Telefone</strong>(27) 3062-2282</div>
          </div>
          <div className="footer-contact-row">
            <div className="fc-icon" aria-hidden="true"><Clock width="14" height="14" /></div>
            <div className="fc-text"><strong>Horário</strong>Seg–Qui: 8h às 18h<br />Sex: 8h às 17h</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2025 GOES – Grupo de Ortopedia do Espírito Santo. Todos os direitos reservados.</span>
        <span className="footer-url">grupodeortopedia.com.br</span>
      </div>
    </footer>
  );
}
