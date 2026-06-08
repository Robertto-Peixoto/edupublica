# EduPublica Formação Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the existing multi-page site into a single-page landing page for EduPublica Formação following the design system in DESIGN_SYSTEM.md and content in CONTEUDO.md.

**Architecture:** Single-page React + Vite (TypeScript) app. All CSS via one global `index.css` with CSS custom properties — no Tailwind, no CSS Modules. Components in `src/components/`. Entry point remains `index.tsx` at root.

**Tech Stack:** React 19, TypeScript, Vite 6, lucide-react (icons), Google Fonts (Syne + DM Sans), pure CSS with CSS variables.

---

### Task 1: Setup — index.html + index.css design system

**Files:**
- Modify: `index.html`
- Create: `index.css`
- Modify: `App.tsx`

- [ ] Overwrite `index.html` removing Tailwind CDN, updating title, adding pt-BR lang
- [ ] Create `index.css` with full design system (variables, reset, utilities, buttons, cards, header, hero, marquee, timeline, FAQ, footer, keyframes, grid)
- [ ] Rewrite `App.tsx` as single-page composition importing index.css and all components

### Task 2: Header component

**Files:**
- Create: `src/components/Header.tsx`

- [ ] Sticky glassmorphism header with logo, nav links, CTA button, hamburger menu (useState toggle)

### Task 3: Hero component

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] 4 animated blobs, badge, H1, subtitle, 2 CTAs, 3 metrics

### Task 4: Problema component

**Files:**
- Create: `src/components/Problema.tsx`

- [ ] 2-col grid: text left, 4 pain-point cards right; lucide-react icons

### Task 5: Solucao component

**Files:**
- Create: `src/components/Solucao.tsx`

- [ ] 3 pillar cards with animated-gradient-border

### Task 6: Modulos component

**Files:**
- Create: `src/components/Modulos.tsx`

- [ ] 5 module cards in 3-col grid with colored icons

### Task 7: Metodologia component

**Files:**
- Create: `src/components/Metodologia.tsx`

- [ ] Timeline horizontal desktop / vertical mobile — 3 etapas

### Task 8: ParaQuem component

**Files:**
- Create: `src/components/ParaQuem.tsx`

- [ ] 4 persona cards with bullets

### Task 9: Depoimentos component

**Files:**
- Create: `src/components/Depoimentos.tsx`

- [ ] Marquee infinite scroll, 6 testimonials doubled, hover to pause

### Task 10: Precos component

**Files:**
- Create: `src/components/Precos.tsx`

- [ ] 3 plan cards, middle one with animated-gradient-border, feature lists

### Task 11: FAQ component

**Files:**
- Create: `src/components/FAQ.tsx`

- [ ] Accordion with useState, 6 questions

### Task 12: Footer component

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] Logo, tagline, quick links, contact info, CNPJ, copyright

### Task 13: Verify

- [ ] Run `npm run dev` and confirm page renders correctly
