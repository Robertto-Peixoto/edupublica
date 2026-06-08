# 🎯 PROMPT PARA CLAUDE CODE — EduPublica Formação
> Entregue este arquivo ao Claude Code no VS Code como primeira mensagem.

---

## MISSÃO

Criar uma landing page completa em **React + Vite** para o produto **EduPublica Formação** — um serviço de formação continuada em Educação Especial Inclusiva voltado a municípios brasileiros, secretarias de educação e redes de ensino.

O site deve seguir rigorosamente o **Design System descrito em `DESIGN_SYSTEM.md`** e o **conteúdo definido em `CONTEUDO.md`**.

---

## STACK TÉCNICA

```bash
# Inicializar projeto
npm create vite@latest edupublica-formacao -- --template react
cd edupublica-formacao
npm install
npm install lucide-react
```

**Dependências adicionais (instalar via npm):**
- `lucide-react` — ícones
- Sem Tailwind. CSS puro via CSS Modules ou um único `index.css` global com variáveis CSS.

---

## ESTRUTURA DE ARQUIVOS A CRIAR

```
edupublica-formacao/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css          ← variáveis globais + reset + tipografia
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── Problema.jsx
│       ├── Solucao.jsx
│       ├── Modulos.jsx
│       ├── Metodologia.jsx
│       ├── ParaQuem.jsx
│       ├── Depoimentos.jsx
│       ├── Precos.jsx
│       ├── FAQ.jsx
│       └── Footer.jsx
```

---

## REGRAS DE IMPLEMENTAÇÃO

### 1. CSS Global (`index.css`)
- Definir todas as variáveis CSS conforme `DESIGN_SYSTEM.md` na seção `:root`
- Aplicar `box-sizing: border-box` e reset mínimo
- Carregar as fontes via `@import` do Google Fonts: `Syne` (títulos) e `DM Sans` (corpo)
- Criar as classes utilitárias: `.container`, `.section`, `.btn-primary`, `.btn-secondary`, `.tri-bar`, `.animated-gradient-border`
- Criar o keyframe `@keyframes tri-bar-flow` e `@keyframes pulse` e `@keyframes marquee-scroll`

### 2. App.jsx
- Importar e renderizar todos os componentes em sequência
- Sem roteamento por ora (single page)

### 3. Header.jsx
- Sticky, glassmorphism (backdrop-filter: blur(40px), fundo 70% opaco)
- Logo: "EduPublica **Formação**" (peso diferente nas duas palavras)
- Links: Sobre, Módulos, Metodologia, Para Quem, Preços
- Botão CTA: "Solicitar Proposta" → âncora `#precos`
- Mobile: hamburger menu simples (useState toggle)

### 4. Hero.jsx
- Fundo escuro com 4 blobs animados (vermelho, amarelo, verde, azul) conforme DESIGN_SYSTEM
- Badge superior: "Decreto Federal nº 12.686/2025"
- H1 responsivo com `clamp(2rem, 5vw, 4rem)`
- Subtítulo
- Dois botões CTA
- 3 métricas em linha (números grandes + label)
- `.tri-bar` decorativo

### 5. Problema.jsx
- Seção com fundo ligeiramente diferente (`--card`)
- Grid 2 colunas: texto à esquerda, cards de "dores" à direita
- Usar ícones `lucide-react`

### 6. Solucao.jsx
- Cards com `.animated-gradient-border` para os 3 pilares da solução

### 7. Modulos.jsx
- Grid 3 colunas em desktop, 1 em mobile
- Cards com ícone colorido temático + título + descrição curta
- Conteúdo dos 5 módulos conforme `CONTEUDO.md`

### 8. Metodologia.jsx
- Timeline horizontal em desktop / vertical em mobile
- 3 etapas: Antes / Durante / Depois (extraídas do Cap. 9 do Caderno MEC)

### 9. ParaQuem.jsx
- Cards de personas com ícone + título + bullets

### 10. Depoimentos.jsx
- Marquee automático horizontal (CSS animation)
- Cards com aspas grandes em verde accent
- Pausar no hover

### 11. Precos.jsx
- 3 cards de plano: Essencial / Avançado / Institucional
- Card do meio com `.animated-gradient-border`
- Botão de CTA em cada card

### 12. FAQ.jsx
- Accordion com useState
- 6 perguntas conforme `CONTEUDO.md`

### 13. Footer.jsx
- Logo + tagline
- Links rápidos
- CNPJ da i9AI Soluções: 40.641.253/0001-69
- Copyright 2026

---

## RESPONSIVIDADE

- Mobile first
- Breakpoints: 768px (tablet) e 1024px (desktop)
- Usar `@media (min-width: 768px)` e `@media (min-width: 1024px)`

---

## ACESSIBILIDADE MÍNIMA

- `lang="pt-BR"` no `index.html`
- `aria-label` nos botões de ícone
- Contraste adequado (texto claro em fundo escuro)
- `alt` em todas as imagens (mesmo que sejam SVG inline)

---

## DEPLOY (OPCIONAL)

Após criar o projeto localmente:
```bash
npm run build
# A pasta dist/ pode ser hospedada no Vercel, Netlify ou GitHub Pages
```

---

## ORDEM DE EXECUÇÃO SUGERIDA

1. Criar `package.json` e instalar dependências
2. Criar `index.css` com todas as variáveis e utilitários
3. Criar `App.jsx`
4. Criar componentes na ordem: Header → Hero → Problema → Solucao → Modulos → Metodologia → ParaQuem → Depoimentos → Precos → FAQ → Footer
5. Testar com `npm run dev`
6. Ajustar responsividade
7. Commit no GitHub

---

> ⚠️ **IMPORTANTE**: Não usar Tailwind. Não usar bibliotecas de componentes (MUI, Chakra, etc.). CSS puro com variáveis conforme DESIGN_SYSTEM.md.
