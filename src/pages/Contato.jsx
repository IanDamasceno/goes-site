import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP } from '../data/medicos.js';
import { Pin, Phone, Clock, Globe } from '../components/icons.jsx';

export default function Contato() {
  const [form, setForm] = useState({ nome: '', tel: '', msg: '' });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const enviar = (e) => {
    e.preventDefault();
    let txt = 'Olá! ';
    if (form.nome) txt += `Meu nome é ${form.nome}. `;
    if (form.msg) txt += `${form.msg} `;
    if (form.tel) txt += `(Tel: ${form.tel})`;
    if (!form.nome && !form.msg) txt = 'Olá, gostaria de agendar uma consulta na GOES.';
    window.open(`${WHATSAPP}?text=${encodeURIComponent(txt.trim())}`, '_blank', 'noopener');
  };

  return (
    <main>
      <section className="inner-head"><div className="wrap">
        <div className="crumb"><Link to="/">Home</Link><span className="sep">/</span><span className="cur">Contato</span></div>
        <span className="sec-tag">Contato</span>
        <h1>Fale com a GOES</h1>
        <p className="inner-sub">Agende sua consulta ou tire suas dúvidas. Atendemos em Vila Velha e em toda a Grande Vitória.</p>
      </div></section>

      <section className="esp-sec" style={{ paddingTop: 64 }}><div className="wrap">
        <div className="contato-grid">
          <div className="contato-info">
            <div className="ct-card"><div className="ct-ic"><Pin /></div><div><h3>Endereço</h3><p>Rua Porto Alegre, 331 — Itapoã<br />Vila Velha — ES</p></div></div>
            <div className="ct-card"><div className="ct-ic"><Phone /></div><div><h3>Telefone / WhatsApp</h3><p><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">(27) 3062-2282</a></p></div></div>
            <div className="ct-card"><div className="ct-ic"><Clock /></div><div><h3>Horário de atendimento</h3><p>Seg a Qui: 8h às 18h<br />Sex: 8h às 17h</p></div></div>
            <div className="ct-card"><div className="ct-ic"><Globe /></div><div><h3>Online</h3><p><a href="https://instagram.com/grupodeortopedia" target="_blank" rel="noopener noreferrer">@grupodeortopedia</a><br /><span>grupodeortopedia.com.br</span></p></div></div>
          </div>

          <div>
            <form className="ct-form" onSubmit={enviar}>
              <h3>Envie uma mensagem</h3>
              <p className="ct-note">Preencha os campos e continue a conversa pelo WhatsApp.</p>
              <div className="ct-field"><label htmlFor="ct-nome">Nome</label><input id="ct-nome" type="text" placeholder="Seu nome" value={form.nome} onChange={set('nome')} /></div>
              <div className="ct-field"><label htmlFor="ct-tel">Telefone</label><input id="ct-tel" type="tel" placeholder="(27) 90000-0000" value={form.tel} onChange={set('tel')} /></div>
              <div className="ct-field"><label htmlFor="ct-msg">Mensagem</label><textarea id="ct-msg" placeholder="Como podemos ajudar?" value={form.msg} onChange={set('msg')} /></div>
              <button type="submit" className="btn-primary">Enviar pelo WhatsApp</button>
            </form>
            <div className="ct-map">
              <Pin />
              <span className="cm-lbl">Mapa · Rua Porto Alegre, 331 — Itapoã, Vila Velha — ES</span>
            </div>
          </div>
        </div>
      </div></section>
    </main>
  );
}
