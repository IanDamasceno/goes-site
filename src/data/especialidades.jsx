// Dados das especialidades da GOES.
// O campo `icon` é um SVG (JSX) reaproveitado da identidade visual.

export const especialidades = [
  {
    slug: 'cirurgia-joelho',
    nome: 'Cirurgia do Joelho',
    desc: 'Artroscopia, reconstrução de LCA, cirurgia de menisco e tratamento da artrose. Técnicas minimamente invasivas para recuperação mais rápida.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2a7 7 0 1 0 7 7"/><path d="M19 9a7 7 0 1 0-7 7"/><circle cx="12" cy="12" r="2"/></svg>
    ),
  },
  {
    slug: 'cirurgia-quadril',
    nome: 'Quadril e Osteometabolismo',
    desc: 'Osteonecrose, fraturas do fêmur, artroplastia total do quadril e tratamento metabólico ósseo com reabilitação personalizada.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg>
    ),
  },
  {
    slug: 'cirurgia-ombro-cotovelo',
    nome: 'Ombro e Cotovelo',
    desc: 'Manguito rotador, capsulite adesiva, instabilidade e terapia por ondas de choque. Opções cirúrgicas e conservadoras com diagnóstico preciso.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 4v16M18 4v16"/><path d="M6 8h12M6 16h12"/></svg>
    ),
  },
  {
    slug: 'cirurgia-mao',
    nome: 'Mão e Microcirurgia',
    desc: 'Túnel do carpo, dedo em gatilho, Dupuytren, cistos sinoviais e lesões do plexo braquial. Microcirurgia com tecnologia de ponta.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8H6a8 8 0 0 1-8-8 2 2 0 1 1 4 0"/></svg>
    ),
  },
  {
    slug: 'cirurgia-pe-tornozelo',
    nome: 'Pé e Tornozelo',
    desc: 'Esporão de calcâneo, hallux valgus, fraturas e instabilidade do tornozelo. Diagnóstico e tratamento cirúrgico ou conservador.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18"/><path d="M12 3v18"/><path d="M12 3c0 0-4 4-4 9s4 9 4 9"/><path d="M12 3c0 0 4 4 4 9s-4 9-4 9"/></svg>
    ),
  },
  {
    slug: 'neurocirurgia',
    nome: 'Neurocirurgia',
    desc: 'Hérnia de disco, estenose de canal medular, instabilidade cervical e lombar. Tratamento cirúrgico minimamente invasivo da coluna.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M12 3a9 4 0 1 0 0 .01"/><path d="M3 12a9 4 0 1 0 .01 0"/></svg>
    ),
  },
  {
    slug: 'oncologia-ortopedica',
    nome: 'Oncologia Ortopédica',
    desc: 'Diagnóstico e tratamento cirúrgico de tumores ósseos e de partes moles. Abordagem multidisciplinar com preservação de membro.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
  },
  {
    slug: 'alongamento-osseo',
    nome: 'Reconstrução Óssea',
    desc: 'Alongamento e reconstrução óssea com fixadores externos. Tratamento de deformidades congênitas, sequelas de fraturas e discrepâncias.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 3a3 3 0 0 0-3 3l-7 12a3 3 0 1 0 5.196 3l7-12A3 3 0 0 0 18 3z"/><path d="M6.5 6.5a3 3 0 1 0 5.196-3L5 15a3 3 0 1 0-5.196 3l7-12"/></svg>
    ),
  },
];
