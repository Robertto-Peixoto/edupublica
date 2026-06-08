# EduPublica Formação — Pacote de Desenvolvimento

## O que é este pacote?

Este pacote contém 3 arquivos de instrução para o **Claude Code no VS Code** montar a landing page completa do produto **EduPublica Formação**.

---

## Arquivos incluídos

| Arquivo | Conteúdo |
|---------|----------|
| `PROMPT_CLAUDE_CODE.md` | **Entregue este primeiro ao Claude Code.** Instruções técnicas completas: stack, estrutura de arquivos, regras de implementação por componente. |
| `DESIGN_SYSTEM.md` | Sistema de design completo: variáveis CSS, botões, cards, animações, keyframes, tipografia. |
| `CONTEUDO.md` | Todo o texto da landing page: hero, seções, módulos, preços, FAQ, footer. |

---

## Como usar no VS Code com Claude Code

### 1. Abra o VS Code na pasta onde quer criar o projeto

```bash
code ~/projetos
```

### 2. Abra o Claude Code (terminal ou painel lateral)

### 3. Cole esta mensagem inicial:

```
Leia o arquivo PROMPT_CLAUDE_CODE.md e execute as instruções para criar
a landing page EduPublica Formação. Use o DESIGN_SYSTEM.md para todo o
CSS e o CONTEUDO.md para todos os textos. Comece pelo setup do projeto
com Vite + React e depois implemente componente por componente.
```

### 4. O Claude Code irá:
- Criar o projeto React + Vite
- Instalar dependências (lucide-react)
- Criar `index.css` com todas as variáveis do design system
- Criar cada componente seguindo o conteúdo e design especificados
- Testar com `npm run dev`

---

## Publicar no GitHub

Após o Claude Code criar o projeto:

```bash
cd edupublica-formacao
git init
git add .
git commit -m "feat: landing page EduPublica Formação — React + Vite"
git remote add origin https://github.com/Robertto-Peixoto/edupublica-formacao.git
git push -u origin main
```

---

## Deploy rápido (Vercel)

```bash
npm install -g vercel
vercel --prod
```

Ou conecte o repositório GitHub diretamente em vercel.com.

---

## Créditos de conteúdo

Conteúdo educacional baseado em:
- **Caderno de Gestão: Educação Especial Inclusiva** — MEC/SECADI, 2026
- **Decreto nº 12.686/2025** — Política Nacional de Educação Especial Inclusiva (PNEEI)
- **Lei nº 13.146/2015** — Lei Brasileira de Inclusão (LBI)

Empresa responsável: **i9AI Soluções em Inteligência Artificial SLU**
CNPJ: 40.641.253/0001-69 | Natal/RN
