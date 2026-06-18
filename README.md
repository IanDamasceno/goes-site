# GOES — Site institucional (React + Vite)

Site do **Grupo de Ortopedia do Espírito Santo (GOES)** reconstruído em React, seguindo o
manual de identidade visual da marca (vermelho + cinza, tipografia Playfair Display / Inter,
grid e componentes padronizados).

## Como rodar

Pré-requisito: **Node.js 18+**.

```bash
npm install      # instala as dependências
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # gera a versão de produção na pasta dist/
npm run preview  # pré-visualiza o build de produção
```

## Estrutura

```
src/
  main.jsx              Ponto de entrada
  App.jsx               Rotas (React Router) + layout
  index.css             Todo o estilo da marca (tokens + componentes)
  data/
    medicos.js          Lista do corpo clínico (+ link do WhatsApp)
    especialidades.jsx  Lista de especialidades (com ícones)
  components/
    Navbar, Footer, WhatsAppFloat, BackToTop
    Carousel            Carrossel com arrastar/setas/dots
    Reveal              Animação ao rolar (IntersectionObserver)
    MedCard, EspCard    Cards reutilizáveis
    icons.jsx           Ícones SVG
  pages/
    Home, Especialidades, CorpoClinico, Perfil,
    Convenios, Blog, Contato
```

## Rotas

- `/` — Home
- `/especialidades` — Especialidades
- `/medicos` — Corpo clínico (listagem)
- `/medicos/:slug` — Perfil do médico
- `/convenios` — Convênios e reembolso
- `/blog` — Blog educacional
- `/contato` — Contato (formulário que abre o WhatsApp)

> Usa `HashRouter`, então as URLs ficam no formato `/#/medicos`. Isso faz o site funcionar
> em qualquer hospedagem estática (e até abrindo o `index.html` do build localmente), sem
> precisar configurar redirecionamentos no servidor.

## O que ainda é placeholder (substituir pelo conteúdo real)

- **Fotos** dos médicos e da clínica (há marcações com as dimensões recomendadas).
- **Logos dos convênios** (12 espaços prontos na página de Convênios).
- **Biografia / formação** dos médicos (textos de demonstração em `data/medicos.js`).
- **Artigos do Blog** (conteúdo ilustrativo).
- **Mapa** na página de Contato.

## Contato GOES

Rua Porto Alegre, 331 — Itapoã, Vila Velha — ES · (27) 3062-2282 ·
grupodeortopedia.com.br · @grupodeortopedia
