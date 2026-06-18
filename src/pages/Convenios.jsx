import { Link } from 'react-router-dom';
import { WHATSAPP } from '../data/medicos.js';
import { ImgIcon, Info } from '../components/icons.jsx';

export default function Convenios() {
  return (
    <main>
      <section className="inner-head"><div className="wrap">
        <div className="crumb"><Link to="/">Home</Link><span className="sep">/</span><span className="cur">Convênios</span></div>
        <span className="sec-tag">Convênios Aceitos</span>
        <h1>Convênios e reembolso</h1>
        <p className="inner-sub">Atendemos os principais planos de saúde da região. Se o seu plano não estiver na lista, fale conosco — trabalhamos também com reembolso médico.</p>
      </div></section>

      <section className="conv-sec" style={{ paddingTop: 64 }}><div className="wrap">
        <div className="conv-logos-grid" aria-label="Logos dos convênios aceitos">
          {Array.from({ length: 12 }).map((_, i) => (
            <div className="conv-logo-slot" key={i}>
              <div className="conv-logo-icon" aria-hidden="true"><ImgIcon width="14" height="14" /></div>
              <span className="conv-logo-lbl">Logo convênio</span>
            </div>
          ))}
        </div>

        <p className="conv-note">
          <Info /> Lista sujeita a atualização. Confirme a cobertura pelo telefone <strong>(27) 3062-2282</strong> antes da consulta.
        </p>

        <div className="reembolso-block" id="reembolso">
          <h2>Reembolso médico</h2>
          <p>Não encontrou seu plano na lista? A GOES auxilia no processo de reembolso médico: você realiza a consulta ou o procedimento e recebe os documentos necessários para solicitar o ressarcimento junto à sua operadora. Fale com nossa equipe e entenda como funciona para o seu caso.</p>
          <a className="btn-primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Falar sobre reembolso</a>
        </div>
      </div></section>
    </main>
  );
}
