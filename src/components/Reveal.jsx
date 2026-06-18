import { useEffect, useRef, useState } from 'react';

// Envolve um bloco e adiciona a classe `.visible` quando ele entra na tela
// (mesmo efeito de revelar-ao-rolar do site original).
export default function Reveal({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
