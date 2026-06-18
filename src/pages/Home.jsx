import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Carousel from '../components/Carousel.jsx';
import EspCard from '../components/EspCard.jsx';
import MedCard from '../components/MedCard.jsx';
import { especialidades } from '../data/especialidades.jsx';
import { medicos, WHATSAPP } from '../data/medicos.js';
import { ArrowBig, ImgIcon, Info } from '../components/icons.jsx';

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero" aria-labelledby="hero-h1">
        <div className="hero-bg-dots" aria-hidden="true"></div>
        <div className="hero-stripe" aria-hidden="true"></div>
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-line" aria-hidden="true"></span>
            Vila Velha, ES — fundada em 2014
          </span>
          <h1 id="hero-h1">Ortopedia de<br /><em>alta complexidade</em><br />com cuidado humano</h1>
          <p className="hero-sub">
            O GOES reúne especialistas em ortopedia e traumatologia para oferecer diagnóstico preciso
            e tratamento cirúrgico ou conservador com a atenção que cada paciente merece.
          </p>
          <div className="hero-btns">
            <a href={WHATSAPP} className="btn-primary" target="_blank" rel="noopener noreferrer">Agendar Consulta</a>
            <Link to="/especialidades" className="btn-ghost">Ver Especialidades <ArrowBig /></Link>
          </div>
        </div>
        <div className="hero-img-side" aria-hidden="true">
          <div className="hero-img-placeholder">
            <div className="hero-arc"></div>
            <div className="hero-arc-2"></div>
            <div className="img-box">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>
            <span className="img-lbl">Foto principal<br />equipe ou clínica</span>
            <span className="img-dim">1 200 × 800 px</span>
          </div>
        </div>
      </section>

      {/* ── SOBRE NÓS ── */}
      <section className="sobre-sec" id="sobre-nos" aria-labelledby="sobre-h2">
        <div className="wrap">
          <div className="sobre-layout">
            <Reveal className="sobre-img" aria-label="Foto da clínica GOES">
              <div className="sobre-img-inner">
                <div className="sobre-img-icon" aria-hidden="true"><ImgIcon width="22" height="22" /></div>
                <span className="sobre-img-lbl">Foto da clínica<br />ou equipe</span>
                <span className="sobre-img-dim">900 × 680 px</span>
              </div>
            </Reveal>
            <Reveal className="sobre-text reveal-delay-2">
              <span className="sobre-year">Fundada em 31 de maio de 2014</span>
              <h2 className="sec-title" id="sobre-h2">Excelência técnica<br />e ética em ortopedia</h2>
              <p className="sobre-body">
                O Grupo de Ortopedia do Espírito Santo foi fundado pelo anseio dos seus sócios
                idealizadores em unir um time de profissionais de excelência, tanto técnica, quanto ética.
              </p>
              <p className="sobre-body">
                Pautados neste objetivo foram constituídos os alicerces necessários para a construção de
                uma empresa médica cada vez mais consolidada no mercado, ofertando atendimento ortopédico
                de alta qualidade e preocupada principalmente com a atenção ao ator principal deste
                cenário: nosso paciente.
              </p>
              <a href="http://grupodeortopedia.com.br/clinica/" className="sobre-cta" target="_blank" rel="noopener noreferrer">
                Saiba Mais <ArrowBig />
              </a>
            </Reveal>
          </div>

          <div className="mvv-grid" role="list" aria-label="Missão, Visão e Valores">
            <Reveal className="mvv-card reveal-delay-1" role="listitem">
              <div className="mvv-label">
                <div className="mvv-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                Missão
              </div>
              <h3 className="mvv-title">Missão</h3>
              <p className="mvv-text">Atendimento ortopédico especializado de qualidade, por profissionais capacitados e com formação técnica diferenciada.</p>
            </Reveal>
            <Reveal className="mvv-card reveal-delay-2" role="listitem">
              <div className="mvv-label">
                <div className="mvv-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg></div>
                Visão
              </div>
              <h3 className="mvv-title">Visão</h3>
              <p className="mvv-text">Reconhecimento em âmbito nacional e internacional, pelo nível de integração de seus membros e pela excelência das práticas de suas atividades.</p>
            </Reveal>
            <Reveal className="mvv-card reveal-delay-3" role="listitem">
              <div className="mvv-label">
                <div className="mvv-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                Valores
              </div>
              <h3 className="mvv-title">Valores</h3>
              <div className="mvv-pills" aria-label="Lista de valores">
                <span className="mvv-pill">Credibilidade</span>
                <span className="mvv-pill">Excelência</span>
                <span className="mvv-pill">Unidade</span>
                <span className="mvv-pill">Comportamento ético</span>
                <span className="mvv-pill">Espírito científico</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section className="esp-sec" aria-labelledby="esp-h2">
        <div className="wrap">
          <Reveal className="sec-hdr">
            <div>
              <span className="sec-tag">Especialidades</span>
              <h2 className="sec-title" id="esp-h2">Tratamento especializado<br />para cada condição</h2>
              <p className="sec-sub">Atuamos com as principais subespecialidades da ortopedia, do joelho à neurocirurgia, com abordagem técnica de alto nível.</p>
            </div>
            <Link to="/especialidades" className="btn-outline">Ver Todas <ArrowBig /></Link>
          </Reveal>
          <Carousel footerClass="esp-carousel-footer" btnClass="esp-carousel-btn" dotClass="esp-dot" defaultVisible={4}>
            {especialidades.map((e) => <EspCard key={e.slug} esp={e} mode="home" />)}
          </Carousel>
        </div>
      </section>

      {/* ── MÉDICOS ── */}
      <section className="med-sec" aria-labelledby="med-h2">
        <div className="wrap">
          <Reveal className="sec-hdr">
            <div>
              <span className="sec-tag">Corpo Médico</span>
              <h2 className="sec-title" id="med-h2">Especialistas com excelência<br />técnica e ética</h2>
              <p className="sec-sub">Cirurgiões ortopédicos de referência no Espírito Santo, com especializações reconhecidas pelos principais centros do país.</p>
            </div>
            <Link to="/medicos" className="btn-outline">Ver Todos <ArrowBig /></Link>
          </Reveal>
          <Carousel footerClass="med-carousel-footer" btnClass="med-carousel-btn" dotClass="med-dot" defaultVisible={4}>
            {medicos.map((m) => <MedCard key={m.slug} med={m} />)}
          </Carousel>
        </div>
      </section>

      {/* ── CONVÊNIOS ── */}
      <section className="conv-sec" aria-labelledby="conv-h2">
        <div className="wrap">
          <Reveal className="sec-hdr">
            <div>
              <span className="sec-tag">Convênios Aceitos</span>
              <h2 className="sec-title" id="conv-h2">Atendemos os principais<br />planos de saúde</h2>
              <p className="sec-sub">Consulte os planos credenciados. Se o seu não estiver na lista, entre em contato — aceitamos reembolso médico.</p>
            </div>
            <Link to="/convenios" className="btn-outline">Consultar Convênios <ArrowBig /></Link>
          </Reveal>
          <Reveal className="conv-logos-grid" aria-label="Logos dos convênios aceitos">
            {Array.from({ length: 12 }).map((_, i) => (
              <div className="conv-logo-slot" key={i}>
                <div className="conv-logo-icon" aria-hidden="true"><ImgIcon width="14" height="14" /></div>
                <span className="conv-logo-lbl">Logo convênio</span>
              </div>
            ))}
          </Reveal>
          <p className="conv-note">
            <Info /> Lista sujeita a atualização. Confirme a cobertura pelo telefone <strong>(27) 3062-2282</strong> antes da consulta.
          </p>
        </div>
      </section>

      {/* ── BANNER CTA ── */}
      <section className="cta-sec tex" aria-labelledby="cta-h2">
        <div className="cta-circle-1" aria-hidden="true"></div>
        <div className="cta-circle-2" aria-hidden="true"></div>
        <div className="cta-circle-3" aria-hidden="true"></div>
        <div className="cta-tex" aria-hidden="true"></div>
        <div className="cta-inner">
          <Reveal className="banner-text">
            <p className="cta-eyebrow">Agende agora</p>
            <h2 className="cta-title" id="cta-h2">Não adie o cuidado<br />com a sua saúde óssea</h2>
            <p className="cta-sub">Atendemos de segunda a quinta das 8h às 18h e sexta até as 17h. Rua Porto Alegre, 331 – Itapoã, Vila Velha.</p>
          </Reveal>
          <Reveal className="cta-actions reveal-delay-2">
            <a href={`${WHATSAPP}?text=${encodeURIComponent('Olá, gostaria de agendar uma consulta.')}`} className="btn-white" target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp</a>
            <a href="tel:+552730622282" className="btn-w-ghost">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.67 3.35 2 2 0 0 1 3.64 1H6.7a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.29 6.29l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              (27) 3062-2282
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
