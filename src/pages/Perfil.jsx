import { Link, useParams, Navigate } from 'react-router-dom';
import { medicos, WHATSAPP, firstName } from '../data/medicos.js';
import { Portrait, Star, Pin, Phone, Clock } from '../components/icons.jsx';

export default function Perfil() {
  const { slug } = useParams();
  const med = medicos.find((m) => m.slug === slug);
  if (!med) return <Navigate to="/medicos" replace />;

  const fn = firstName(med.nome);

  return (
    <main>
      <section className="inner-head"><div className="wrap">
        <div className="crumb">
          <Link to="/">Home</Link><span className="sep">/</span>
          <Link to="/medicos">Corpo Clínico</Link><span className="sep">/</span>
          <span className="cur">{med.nome}</span>
        </div>
        <div className="perfil-hero">
          <div className="perfil-photo">
            <Portrait className="gp" />
            <span className="pf-lbl"><strong>400 × 480 px</strong>Fundo neutro · luz frontal</span>
          </div>
          <div className="perfil-info">
            <span className="p-tag">{med.tag}</span>
            <h1>{med.nome}</h1>
            <p className="p-crm">{med.crm}</p>
            <div className="p-btns">
              <a className="btn-primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Agendar com {fn}</a>
              <a className="btn-outline" href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </div></section>

      <section className="perfil-body"><div className="wrap"><div className="perfil-cols">
        <div className="perfil-main">
          <h2>Sobre o médico</h2>
          <p>{med.nome} integra o corpo clínico do GOES – Grupo de Ortopedia do Espírito Santo, com atuação em {med.area}. O atendimento combina avaliação criteriosa, conduta baseada em evidências e acompanhamento próximo de cada paciente.</p>
          <p>Formação com residência em Ortopedia e Traumatologia e especialização na área, com atualização contínua por meio de sociedades e congressos médicos. <em>(Texto de demonstração — substituir pela biografia real do profissional.)</em></p>

          <div className="blk">
            <h2>Áreas de atuação</h2>
            <div className="area-grid">
              {med.areas.map(([t, d]) => (
                <div className="area-item" key={t}>
                  <div className="ai-ic"><Star /></div>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="blk">
            <h2>Formação</h2>
            <div className="timeline">
              <div className="tl-item"><div className="tl-yr">Especialização</div><h3>Aperfeiçoamento em {med.area}</h3><p>Formação em centro de referência.</p></div>
              <div className="tl-item"><div className="tl-yr">Residência</div><h3>Ortopedia e Traumatologia</h3><p>Programa reconhecido pela SBOT.</p></div>
              <div className="tl-item"><div className="tl-yr">Graduação</div><h3>Medicina</h3><p>Formação médica.</p></div>
            </div>
          </div>
        </div>

        <aside className="perfil-side">
          <div className="side-card side-cta">
            <h3>Agende sua consulta</h3>
            <p>Atendimento humanizado em Vila Velha — ES. Fale com nossa equipe.</p>
            <a className="btn-white" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp</a>
          </div>
          <div className="side-card">
            <div className="sc-lbl">Contato</div>
            <div className="side-row"><Pin /><span><strong>Endereço</strong>Rua Porto Alegre, 331 — Itapoã, Vila Velha — ES</span></div>
            <div className="side-row"><Phone /><span><strong>Telefone</strong>(27) 3062-2282</span></div>
            <div className="side-row"><Clock /><span><strong>Horário</strong>Seg–Qui 8h–18h · Sex 8h–17h</span></div>
          </div>
        </aside>
      </div></div></section>
    </main>
  );
}
