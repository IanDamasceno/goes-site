import { Link } from 'react-router-dom';
import MedCard from '../components/MedCard.jsx';
import { medicos } from '../data/medicos.js';

export default function CorpoClinico() {
  return (
    <main>
      <section className="inner-head"><div className="wrap">
        <div className="crumb"><Link to="/">Home</Link><span className="sep">/</span><span className="cur">Corpo Clínico</span></div>
        <span className="sec-tag">Corpo Médico</span>
        <h1>Nosso corpo clínico</h1>
        <p className="inner-sub">Conheça os especialistas do GOES. Clique em um profissional para ver o perfil completo.</p>
      </div></section>
      <section className="esp-sec" style={{ paddingTop: 64 }}><div className="wrap">
        <div className="esp-grid" role="list">
          {medicos.map((m) => <MedCard key={m.slug} med={m} />)}
        </div>
      </div></section>
    </main>
  );
}
