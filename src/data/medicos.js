// Dados do corpo clínico da GOES.
// Os textos de biografia/áreas são de demonstração — substituir pelos reais.

export const WHATSAPP = 'https://wa.me/552730622282';

export const medicos = [
  {
    slug: 'andre-franca',
    nome: 'Dr. André Luiz Pellacani França',
    tag: 'Cirurgia do Quadril',
    crm: 'CRM-ES · Quadril / Osteometabolismo',
    area: 'cirurgia do quadril e osteometabolismo',
    areas: [
      ['Prótese de quadril', 'Substituição articular em artrose avançada.'],
      ['Preservação articular', 'Tratamento que retarda ou evita a prótese.'],
      ['Osteometabolismo', 'Acompanhamento de osteoporose e saúde óssea.'],
      ['Fraturas do quadril', 'Tratamento cirúrgico de fraturas.'],
    ],
  },
  {
    slug: 'cristiano-maia',
    nome: 'Dr. Cristiano Felde Maia',
    tag: 'Reconstrução Óssea',
    crm: 'CRM-ES · Reconstrução e Alongamento Ósseo',
    area: 'reconstrução e alongamento ósseo',
    areas: [
      ['Alongamento ósseo', 'Correção de discrepâncias de comprimento.'],
      ['Correção de deformidades', 'Realinhamento de eixos ósseos.'],
      ['Pseudoartrose', 'Tratamento de fraturas que não consolidam.'],
      ['Fixadores externos', 'Técnicas de reconstrução com fixadores.'],
    ],
  },
  {
    slug: 'nilo-lemos',
    nome: 'Dr. Nilo Lemos Neto',
    tag: 'Ombro e Cotovelo',
    crm: 'CRM-ES · Ombro, Cotovelo / Ondas de Choque',
    area: 'cirurgia de ombro e cotovelo',
    areas: [
      ['Manguito rotador', 'Reparo das lesões do ombro.'],
      ['Artroscopia de ombro', 'Tratamento minimamente invasivo.'],
      ['Cotovelo', 'Epicondilite e instabilidades.'],
      ['Ondas de choque', 'Terapia para tendinopatias.'],
    ],
  },
  {
    slug: 'gustavo-drumond',
    nome: 'Dr. Gustavo Costalonga Drumond',
    tag: 'Oncologia Ortopédica',
    crm: 'CRM-ES · Oncologia Ortopédica',
    area: 'oncologia ortopédica',
    areas: [
      ['Tumores ósseos', 'Diagnóstico e tratamento.'],
      ['Tumores de partes moles', 'Abordagem cirúrgica.'],
      ['Cirurgia de preservação', 'Preservação do membro.'],
      ['Metástases ósseas', 'Tratamento e estabilização.'],
    ],
  },
  {
    slug: 'victo-mazzini',
    nome: 'Dr. Victo Acha Mazzini',
    tag: 'Cirurgia do Joelho',
    crm: 'CRM-ES · Cirurgia do Joelho',
    area: 'cirurgia do joelho',
    areas: [
      ['Artroscopia', 'Tratamento minimamente invasivo.'],
      ['Reconstrução de LCA', 'Lesões ligamentares do joelho.'],
      ['Lesões de menisco', 'Reparo e preservação.'],
      ['Prótese de joelho', 'Artrose avançada.'],
    ],
  },
  {
    slug: 'diego-vidal',
    nome: 'Dr. Diego Campolina Vidal',
    tag: 'Neurocirurgia',
    crm: 'CRM-ES · Neurocirurgião',
    area: 'neurocirurgia e cirurgia da coluna',
    areas: [
      ['Cirurgia da coluna', 'Tratamento de patologias da coluna.'],
      ['Hérnia de disco', 'Abordagem cervical e lombar.'],
      ['Descompressão neural', 'Alívio da compressão nervosa.'],
      ['Minimamente invasiva', 'Menor agressão e recuperação.'],
    ],
  },
  {
    slug: 'jose-lira',
    nome: 'Dr. Jose Claudio Lira Jr',
    tag: 'Pé e Tornozelo',
    crm: 'CRM-ES · Cirurgia do Tornozelo e Pé',
    area: 'cirurgia do pé e tornozelo',
    areas: [
      ['Hálux valgo (joanete)', 'Correção da deformidade.'],
      ['Lesões do tornozelo', 'Entorses e instabilidades.'],
      ['Reconstrução do pé', 'Correção de deformidades.'],
      ['Tendão de Aquiles', 'Tratamento de lesões.'],
    ],
  },
  {
    slug: 'guilherme-amariz',
    nome: 'Dr. Guilherme Augusto Silva Amariz',
    tag: 'Cirurgia de Mão',
    crm: 'CRM-ES · Cirurgia de Mão',
    area: 'cirurgia da mão e microcirurgia',
    areas: [
      ['Túnel do carpo', 'Liberação do nervo mediano.'],
      ['Lesões de tendões', 'Reparo de tendões da mão.'],
      ['Microcirurgia', 'Reconstruções delicadas.'],
      ['Fraturas da mão', 'Fixação e reabilitação.'],
    ],
  },
];

export const firstName = (nome) =>
  nome.replace('Dr. ', '').replace('Dra. ', '').split(' ')[0];
