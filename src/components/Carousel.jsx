import { useCallback, useEffect, useRef, useState } from 'react';
import { Children } from 'react';

const GAP = 20;
const getVisible = (w, def) => (w < 480 ? 1 : w < 780 ? 2 : w < 1050 ? 3 : def);

// Carrossel com arrastar (mouse/touch), setas e dots — equivalente ao do site original.
export default function Carousel({
  children,
  footerClass = '',
  btnClass = '',
  dotClass = '',
  defaultVisible = 4,
  prevLabel = 'Anterior',
  nextLabel = 'Próximo',
}) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const total = Children.count(children);

  const [visible, setVisible] = useState(defaultVisible);
  const [slideW, setSlideW] = useState(0);
  const [current, setCurrent] = useState(0);
  const drag = useRef({ active: false, startX: 0, startIndex: 0 });

  const maxIndex = Math.max(0, total - visible);

  const layout = useCallback(() => {
    const vp = viewportRef.current;
    const track = trackRef.current;
    if (!vp || !track) return;
    const w = vp.offsetWidth;
    const vis = getVisible(w, defaultVisible);
    const sw = (w - GAP * (vis - 1)) / vis;
    Array.from(track.children).forEach((c) => {
      c.style.width = sw + 'px';
    });
    setVisible(vis);
    setSlideW(sw);
    setCurrent((c) => Math.min(c, Math.max(0, total - vis)));
  }, [defaultVisible, total]);

  useEffect(() => {
    layout();
    window.addEventListener('resize', layout, { passive: true });
    return () => window.removeEventListener('resize', layout);
  }, [layout]);

  const goTo = (idx) => setCurrent(Math.max(0, Math.min(idx, maxIndex)));

  // aplica o transform de acordo com o índice atual
  useEffect(() => {
    const track = trackRef.current;
    if (track && !drag.current.active) {
      track.style.transition = '';
      track.style.transform = `translateX(-${current * (slideW + GAP)}px)`;
    }
  }, [current, slideW]);

  // ── arrastar ──
  const onStart = (x) => {
    drag.current = { active: true, startX: x, startIndex: current };
    if (trackRef.current) trackRef.current.style.transition = 'none';
  };
  const onMove = (x) => {
    if (!drag.current.active) return;
    const diff = drag.current.startX - x;
    const raw = drag.current.startIndex + diff / (slideW + GAP);
    const clamped = Math.max(0, Math.min(raw, maxIndex));
    if (trackRef.current)
      trackRef.current.style.transform = `translateX(-${clamped * (slideW + GAP)}px)`;
  };
  const onEnd = (x) => {
    if (!drag.current.active) return;
    const diff = drag.current.startX - x;
    drag.current.active = false;
    if (trackRef.current) trackRef.current.style.transition = '';
    if (Math.abs(diff) > 60) goTo(diff > 0 ? current + 1 : current - 1);
    else goTo(current);
  };

  useEffect(() => {
    const mm = (e) => onMove(e.clientX);
    const mu = (e) => onEnd(e.clientX);
    window.addEventListener('mousemove', mm);
    window.addEventListener('mouseup', mu);
    return () => {
      window.removeEventListener('mousemove', mm);
      window.removeEventListener('mouseup', mu);
    };
  });

  const pages = maxIndex + 1;

  return (
    <div className="carousel-wrap">
      <div
        className="carousel-viewport"
        ref={viewportRef}
        onMouseDown={(e) => onStart(e.clientX)}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
      >
        <div className="carousel-track" ref={trackRef} role="list">
          {children}
        </div>
      </div>

      <div className={footerClass}>
        <div className="carousel-dots" aria-label="Navegação do carrossel">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${dotClass} ${i === current ? 'active' : ''}`}
              aria-label={`Página ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="carousel-nav">
          <button
            className={`carousel-btn ${btnClass}`}
            aria-label={prevLabel}
            disabled={current === 0}
            onClick={() => goTo(current - 1)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          </button>
          <button
            className={`carousel-btn ${btnClass}`}
            aria-label={nextLabel}
            disabled={current >= maxIndex}
            onClick={() => goTo(current + 1)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
