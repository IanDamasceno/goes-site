import { Link } from 'react-router-dom';
import { ImgIcon, Info } from '../components/icons.jsx';

const posts = [
  ['Joelho', 'Quando a dor no joelho exige avaliação médica?', 'Entenda os sinais que indicam que é hora de procurar um especialista.'],
  ['Coluna', 'Hérnia de disco: a cirurgia é sempre necessária?', 'Boa parte dos casos melhora com tratamento conservador. Saiba quando operar.'],
  ['Quadril', 'Prótese de quadril: como é a recuperação?', 'O que esperar das semanas seguintes à artroplastia e dicas de reabilitação.'],
  ['Ombro', 'Lesão do manguito rotador: sinais de alerta', 'Dor noturna e perda de força podem indicar lesão. Veja o que observar.'],
  ['Esporte', 'Prevenção de lesões esportivas no dia a dia', 'Aquecimento, fortalecimento e descanso: como reduzir o risco de lesões.'],
  ['Osteoporose', 'Saúde óssea após os 50: como cuidar', 'Alimentação, exercícios e acompanhamento para ossos mais fortes.'],
];

export default function Blog() {
  return (
    <main>
      <section className="inner-head"><div className="wrap">
        <div className="crumb"><Link to="/">Home</Link><span className="sep">/</span><span className="cur">Blog</span></div>
        <span className="sec-tag">Blog Educacional</span>
        <h1>Conteúdo que cuida de você</h1>
        <p className="inner-sub">Artigos educativos sobre ortopedia, prevenção e recuperação, escritos pela equipe médica da GOES.</p>
      </div></section>

      <section className="esp-sec" style={{ paddingTop: 64 }}><div className="wrap">
        <div className="blog-grid">
          {posts.map(([cat, title, desc]) => (
            <article className="blog-card" key={title}>
              <div className="blog-thumb"><ImgIcon /></div>
              <div className="blog-body">
                <span className="blog-cat">{cat}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="conv-note" style={{ marginTop: 36 }}>
          <Info /> Conteúdo ilustrativo de demonstração. Os artigos reais serão publicados pela equipe da GOES.
        </p>
      </div></section>
    </main>
  );
}
