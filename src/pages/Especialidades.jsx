import { Link } from 'react-router-dom';
import EspCard from '../components/EspCard.jsx';
import { especialidades } from '../data/especialidades.jsx';

export default function Especialidades() {
  return (
    <main>
      <section className="inner-head"><div className="wrap">
        <div className="crumb"><Link to="/">Home</Link><span className="sep">/</span><span className="cur">Especialidades</span></div>
        <span className="sec-tag">Especialidades</span>
        <h1>Tratamento especializado para cada condição</h1>
        <p className="inner-sub">Atuamos com as principais subespecialidades da ortopedia e da traumatologia, do joelho à neurocirurgia, com abordagem técnica de alto nível e atendimento humanizado.</p>
      </div></section>
      <section className="esp-sec" style={{ paddingTop: 64 }}><div className="wrap">
        <div className="esp-grid">
          {especialidades.map((e) => <EspCard key={e.slug} esp={e} mode="page" />)}
        </div>
      </div></section>
    </main>
  );
}
