# DESIGN SYSTEM — EduPublica Formação
> Dark mode premium. Adaptado de assesi.com para contexto educacional-governamental brasileiro.
> Fontes escolhidas: Syne (títulos) + DM Sans (corpo) — evitar Inter/Roboto.

---

## 1. VARIÁVEIS CSS (colar no `:root` do `index.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

:root {
  /* ── FUNDOS DARK ── */
  --background:        hsl(220, 15%, 5%);    /* #0b0c0f — fundo principal */
  --card:              hsl(220, 15%, 8%);    /* #111317 — fundo de cards */
  --secondary:         hsl(220, 15%, 12%);   /* #1a1d23 — hover, elevado */
  --muted:             hsl(220, 12%, 14%);   /* #1f2228 — mutted */
  --brand-surface:     #111317;
  --brand-surface-hover: #16181d;
  --brand-dark:        #0b0c0f;

  /* ── TEXTOS ── */
  --foreground:        hsl(210, 20%, 92%);   /* #e7ebef — texto principal */
  --foreground-muted:  hsl(215, 15%, 58%);   /* #8491a4 — texto auxiliar */
  --foreground-secondary: hsl(210, 20%, 75%);

  /* ── ACCENT / PRIMARY ── */
  --primary:           hsl(152, 60%, 40%);   /* #29a36a — verde ação */
  --primary-hover:     hsl(152, 60%, 35%);
  --accent:            hsl(152, 60%, 40%);
  --ring:              hsl(152, 60%, 40%);

  /* ── 4 CORES DE MARCA (gradiente animado) ── */
  --brand-red:    oklch(0.62, 0.22, 27);     /* vermelho-laranja */
  --brand-yellow: oklch(0.85, 0.18, 85);     /* amarelo dourado */
  --brand-green:  oklch(0.62, 0.17, 152);    /* verde médio */
  --brand-blue:   oklch(0.62, 0.22, 262);    /* azul médio */

  /* ── BORDAS ── */
  --border:       rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.14);
  --input:        hsl(220, 15%, 15%);
  --radius:       12px;
  --radius-sm:    8px;

  /* ── TIPOGRAFIA ── */
  --font-display: 'Syne', sans-serif;
  --font-body:    'DM Sans', sans-serif;

  /* ── ESPAÇAMENTOS ── */
  --section-py:    5rem;
  --container-max: 1280px;
  --container-px:  1.5rem;
}
```

---

## 2. RESET E BASE

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  line-height: 1.15;
  color: var(--foreground);
}

a {
  color: inherit;
  text-decoration: none;
}

img, svg {
  display: block;
  max-width: 100%;
}
```

---

## 3. UTILITÁRIOS GLOBAIS

```css
/* Container */
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-px);
}

/* Seção padrão */
.section {
  padding: var(--section-py) 0;
}

/* Label de seção (ex: "MÓDULOS", "METODOLOGIA") */
.section-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--foreground-muted);
  margin-bottom: 0.75rem;
}

/* Título de seção H2 */
.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.75rem);
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 1rem;
}

/* Separador entre seções */
.section-divider {
  border: none;
  border-top: 1px solid var(--border);
}
```

---

## 4. BOTÕES

```css
/* Botão primário com borda gradiente animada */
.btn-primary {
  position: relative;
  z-index: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--foreground);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.5px;
  background: linear-gradient(90deg,
    var(--brand-red),
    var(--brand-yellow),
    var(--brand-green),
    var(--brand-blue),
    var(--brand-red)
  );
  background-size: 300% 100%;
  animation: tri-bar-flow 18s linear infinite;
  -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.btn-primary:hover {
  opacity: 0.85;
}

/* Botão secundário sólido escuro */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--foreground);
  background: var(--brand-surface);
  border: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.btn-secondary:hover {
  background: var(--brand-surface-hover);
  border-color: rgba(255, 255, 255, 0.12);
}

/* CTA flutuante pill */
.btn-cta-float {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 40;
  height: 48px;
  padding: 0 1.25rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, #4285F4, #29a36a);
  color: white;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  transition: box-shadow 0.2s, transform 0.2s;
}

.btn-cta-float:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  transform: translateY(-2px);
}
```

---

## 5. CARDS

```css
/* Card padrão */
.surface-card {
  background: var(--brand-surface);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: rgba(255, 255, 255, 0.04) 0px 1px 0px inset;
  border-radius: var(--radius);
  padding: 1.5rem;
}

/* Card com hover */
.surface-card-hover {
  background: var(--brand-surface);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: rgba(255, 255, 255, 0.04) 0px 1px 0px inset;
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: background 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.2s;
}

.surface-card-hover:hover {
  background: var(--brand-surface-hover);
  transform: translateY(-2px);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 24px -4px;
}

/* Card com borda gradiente animada */
.animated-gradient-border {
  position: relative;
  padding: 2px;
  border-radius: var(--radius);
  background: linear-gradient(90deg,
    var(--brand-red),
    var(--brand-yellow),
    var(--brand-green),
    var(--brand-blue),
    var(--brand-red)
  );
  background-size: 300% 100%;
  animation: tri-bar-flow 18s linear infinite;
}

.animated-gradient-border > .card-inner {
  background: var(--brand-surface);
  border-radius: calc(var(--radius) - 2px);
  padding: 1.5rem;
  height: 100%;
}
```

---

## 6. LINHA DECORATIVA TRI-BAR

```css
.tri-bar {
  height: 3px;
  width: 3rem;
  border-radius: 2px;
  background: linear-gradient(90deg,
    var(--brand-red),
    var(--brand-yellow),
    var(--brand-green),
    var(--brand-blue),
    var(--brand-red)
  );
  background-size: 200% 100%;
  animation: tri-bar-flow 12s linear infinite;
  margin-bottom: 1.25rem;
}
```

---

## 7. NAVEGAÇÃO (Header)

```css
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: 64px;
  display: flex;
  align-items: center;
  background: rgba(11, 12, 15, 0.70);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--foreground-muted);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  transition: color 0.2s, background 0.2s;
}

.nav-link:hover {
  color: var(--foreground);
  background: var(--secondary);
}
```

---

## 8. HERO — BLOBS ANIMADOS

```css
.hero {
  position: relative;
  min-height: 85svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--brand-dark);
}

@media (min-width: 768px) {
  .hero {
    min-height: 65vh;
  }
}

.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
}

.hero-blob-1 {
  top: -80px; left: -80px;
  width: 600px; height: 600px;
  background: var(--brand-red);
  opacity: 0.12;
  animation: pulse 6s ease-in-out infinite;
}

.hero-blob-2 {
  top: 25%; left: 33%;
  width: 500px; height: 500px;
  background: var(--brand-yellow);
  opacity: 0.10;
  animation: pulse 7s ease-in-out 1s infinite;
}

.hero-blob-3 {
  top: 50%; right: 25%;
  width: 500px; height: 500px;
  background: var(--brand-green);
  opacity: 0.10;
  animation: pulse 8s ease-in-out 2s infinite;
}

.hero-blob-4 {
  bottom: -80px; right: -80px;
  width: 600px; height: 600px;
  background: var(--brand-blue);
  opacity: 0.12;
  animation: pulse 9s ease-in-out 3s infinite;
}
```

---

## 9. MARQUEE (Depoimentos)

```css
.marquee-wrapper {
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-track {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: marquee-scroll 45s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.testimonial-card {
  width: 360px;
  flex-shrink: 0;
  background: var(--brand-surface);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius);
  padding: 1.25rem;
  cursor: pointer;
}

.testimonial-quote {
  font-size: 2.5rem;
  line-height: 1;
  color: var(--primary);
  font-family: var(--font-display);
  margin-bottom: 0.5rem;
}
```

---

## 10. ÍCONES DE COR POR MÓDULO

```css
/* Padrão: ícone circular com cor temática */
.module-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.module-icon.green  { background: rgba(41, 163, 106, 0.12); color: #29a36a; }
.module-icon.blue   { background: rgba(66, 133, 244, 0.12); color: #4285F4; }
.module-icon.yellow { background: rgba(251, 188, 4,   0.12); color: #FBBC04; }
.module-icon.red    { background: rgba(234, 67,  53,  0.12); color: #EA4335; }
.module-icon.cyan   { background: rgba(0,   188, 212, 0.12); color: #00BCD4; }
```

---

## 11. KEYFRAMES

```css
@keyframes pulse {
  50% { opacity: 0.5; }
}

@keyframes tri-bar-flow {
  0%   { background-position: 0% 0%; }
  100% { background-position: -200% 0%; }
}

@keyframes marquee-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 12. TIPOGRAFIA ESCALA

| Elemento           | Tamanho                     | Peso | Fonte   |
|--------------------|-----------------------------|------|---------|
| Hero H1            | `clamp(2rem, 5vw, 4rem)`   | 800  | Syne    |
| H2 seção           | `clamp(1.75rem, 3vw, 2.75rem)` | 700 | Syne |
| H3 card            | `1.125rem`                  | 600  | Syne    |
| Label seção        | `0.75rem` uppercase         | 500  | DM Sans |
| Corpo              | `1rem`                      | 400  | DM Sans |
| Corpo pequeno      | `0.875rem`                  | 400  | DM Sans |
| Nav links          | `0.875rem`                  | 500  | DM Sans |

---

## 13. GRID RESPONSIVO

```css
/* Grid de cards 3 colunas */
.grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
}

/* Grid 2 colunas */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
}
```
