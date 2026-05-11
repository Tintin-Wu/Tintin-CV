# Project Page Enhancement Design

**Date:** 2026-05-11
**Goal:** Make the site more impressive to recruiters by adding CV download, strengthening experience bullets, and improving project cards.

---

## 1. CV Download Button

**Asset:** Copy `~/Desktop/Tintin-CV.pdf` to `assets/tintin-cv.pdf` in the repo.

**Hero card** — insert as the first button in `.hero-links`:
```html
<a href="assets/tintin-cv.pdf" download="Tintin-Wu-CV.pdf" class="hero-btn">Download CV</a>
```
Uses the existing primary `.hero-btn` style (blue accent border). The `download` attribute triggers a file download rather than opening in-browser.

**Sidebar footer** — add to `.sidebar-links` alongside the existing GitHub/LinkedIn/Email links:
```html
<a href="assets/tintin-cv.pdf" download="Tintin-Wu-CV.pdf" class="icon-link">↓ CV</a>
```

No new CSS required.

---

## 2. Experience Bullet Rewrites

Shift from stack-list bullets to impact statements. All rewrites stay within the existing `<ul class="timeline-bullets">` structure.

### Binance (4 bullets)
1. Designing multi-modal agentic AI systems integrating MCP, ADK, A2A, LangGraph, and LangSmith
2. Built InfraBot — universal orchestration layer connecting multi-agent pipelines across HTTP, A2A, and internal chatroom platforms
3. Launched Agent-Runtime, an internal platform for on-demand AI agent deployment
4. Enhanced OpenClaw observability by integrating Opik tracing — built span-tree tracking relationships across main agents, sub-agents, and tool calls

### Delta Electronics (3 bullets)
1. Led LLM/VLM fine-tuning and production deployment pipeline (PyTorch, HuggingFace, vLLM)
2. Architected MCP-based agentic AI systems with AutoGen and LangGraph orchestration
3. Bootstrapped the company's agentic AI ecosystem and Office Automation tooling from the ground up

### Academia Sinica (1 bullet)
1. Researched 4D real-time dynamic scene rendering with 3D Gaussian Splatting — culminating in ICIP 2026 publication

### Taiwan Mobile (1 bullet)
1. Shipped production eKYC pipeline — CV/DL system for face verification and ID card recognition

---

## 3. Project Cards

### 4D Real-Time Dynamic Scene Rendering (published)

Add a links row at the bottom of the card, separated by a top border. Two links:
- `arXiv ↗` → `https://arxiv.org/abs/2511.00560`
- `Project Page ↗` → `https://tintin-wu.github.io/4d-neural-voxel-splatting/`

HTML addition inside the existing `.project-card`:
```html
<div class="project-links">
  <a href="https://arxiv.org/abs/2511.00560" target="_blank" rel="noopener" class="project-link">arXiv ↗</a>
  <a href="https://tintin-wu.github.io/4d-neural-voxel-splatting/" target="_blank" rel="noopener" class="project-link">Project Page ↗</a>
</div>
```

New CSS (minimal):
```css
.project-links {
  display: flex;
  gap: 12px;
  padding-top: 10px;
  border-top: 1px solid var(--border);
  margin-top: 2px;
}

.project-link {
  font-size: 11px;
  color: var(--accent);
  text-decoration: none;
}

.project-link:hover { text-decoration: underline; }
```

### All other project cards (private/NDA)

Add a "PRIVATE" pill in the top-right corner of the card title row. Achieved by wrapping the existing `<h3>` in a flex row:

```html
<div class="project-title-row">
  <h3 class="project-title">...</h3>
  <span class="project-private-badge">PRIVATE</span>
</div>
```

New CSS:
```css
.project-title-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 6px;
}

.project-title-row .project-title { margin-bottom: 0; }

.project-private-badge {
  background: rgba(139, 148, 158, 0.1);
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  white-space: nowrap;
  letter-spacing: 0.4px;
  flex-shrink: 0;
}
```

Cards receiving the PRIVATE badge: all project cards **except** "4D Real-Time Dynamic Scene Rendering".

---

## Files Changed

| File | Change |
|------|--------|
| `assets/tintin-cv.pdf` | New — CV PDF asset |
| `index.html` | CV buttons, bullet rewrites, project card updates |
| `style.css` | `.project-links`, `.project-link`, `.project-title-row`, `.project-private-badge` |
