# Tintin-CV Site Enhancement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the portfolio site more recruiter-friendly: CV download button, impact-focused experience bullets, project card links and private indicators.

**Architecture:** Pure HTML/CSS/JS static site. All changes are direct edits to `index.html` and `style.css` — no build tools, no new dependencies. New CSS classes follow the existing `var(--*)` design token system.

**Tech Stack:** HTML5, CSS3 (custom properties), GitHub Pages (auto-deploy on push to `main` via GitHub Actions)

---

## File Map

| File | Action | What changes |
|------|--------|--------------|
| `assets/tintin-cv.pdf` | Create | CV PDF asset copied from Desktop |
| `index.html` | Modify | CV buttons, bullet rewrites, project card HTML |
| `style.css` | Modify | `.project-links`, `.project-link`, `.project-title-row`, `.project-private-badge` |

---

## Task 1: Copy CV PDF Asset

**Files:**
- Create: `assets/tintin-cv.pdf`

- [ ] **Step 1: Copy the PDF**

```bash
cp ~/Desktop/Tintin-CV.pdf /Users/tintinwu/Desktop/Tintin-CV-site/assets/tintin-cv.pdf
```

- [ ] **Step 2: Verify**

```bash
ls -lh /Users/tintinwu/Desktop/Tintin-CV-site/assets/tintin-cv.pdf
```
Expected: file exists with non-zero size.

- [ ] **Step 3: Commit**

```bash
git -C /Users/tintinwu/Desktop/Tintin-CV-site add assets/tintin-cv.pdf
git -C /Users/tintinwu/Desktop/Tintin-CV-site commit -m "feat: add CV PDF asset"
```

---

## Task 2: Add CV Download Buttons

**Files:**
- Modify: `index.html`

No new CSS needed — uses existing `.hero-btn` and `.icon-link` classes.

- [ ] **Step 1: Add Download CV as the first button in `.hero-links`**

Find this block in `index.html` (around line 52):
```html
        <div class="hero-links">
          <a href="https://github.com/Tintin-Wu" target="_blank" rel="noopener" class="hero-btn">GitHub</a>
```

Replace with:
```html
        <div class="hero-links">
          <a href="assets/tintin-cv.pdf" download="Tintin-Wu-CV.pdf" class="hero-btn">Download CV</a>
          <a href="https://github.com/Tintin-Wu" target="_blank" rel="noopener" class="hero-btn">GitHub</a>
```

- [ ] **Step 2: Add CV link to sidebar footer**

Find this block in `index.html` (around line 27):
```html
    <div class="sidebar-links">
      <a href="https://github.com/Tintin-Wu" target="_blank" rel="noopener" class="icon-link">GitHub</a>
      <a href="https://www.linkedin.com/in/tintin-wu-431780167" target="_blank" rel="noopener" class="icon-link">LinkedIn</a>
      <a href="mailto:tintinwu1999@gmail.com" class="icon-link">Email</a>
    </div>
```

Replace with:
```html
    <div class="sidebar-links">
      <a href="https://github.com/Tintin-Wu" target="_blank" rel="noopener" class="icon-link">GitHub</a>
      <a href="https://www.linkedin.com/in/tintin-wu-431780167" target="_blank" rel="noopener" class="icon-link">LinkedIn</a>
      <a href="mailto:tintinwu1999@gmail.com" class="icon-link">Email</a>
      <a href="assets/tintin-cv.pdf" download="Tintin-Wu-CV.pdf" class="icon-link">↓ CV</a>
    </div>
```

- [ ] **Step 3: Verify locally**

Open `index.html` in a browser (`open /Users/tintinwu/Desktop/Tintin-CV-site/index.html`). Confirm:
- "Download CV" appears as the first button in the hero card (blue accent border)
- "↓ CV" appears at the bottom of the sidebar links
- Clicking either triggers a file download (not a new tab open)

- [ ] **Step 4: Commit**

```bash
git -C /Users/tintinwu/Desktop/Tintin-CV-site add index.html
git -C /Users/tintinwu/Desktop/Tintin-CV-site commit -m "feat: add CV download buttons to hero and sidebar"
```

---

## Task 3: Rewrite Experience Bullets

**Files:**
- Modify: `index.html`

Replace the four `<ul class="timeline-bullets">` blocks in the Experience section with the impact-focused rewrites below.

- [ ] **Step 1: Replace Binance bullets**

Find (around line 73):
```html
            <ul class="timeline-bullets">
              <li>Multi-Modal Agentic AI System (MCP, ADK, A2A, LangGraph, LangSmith)</li>
              <li>InfraBot: universal multi-agent orchestration across HTTP/A2A/chatroom platforms</li>
              <li>Agent-Runtime: internal agent factory for instant AI agent deployment; Opik tracing observability</li>
            </ul>
```

Replace with:
```html
            <ul class="timeline-bullets">
              <li>Designing multi-modal agentic AI systems integrating MCP, ADK, A2A, LangGraph, and LangSmith</li>
              <li>Built InfraBot — universal orchestration layer connecting multi-agent pipelines across HTTP, A2A, and internal chatroom platforms</li>
              <li>Launched Agent-Runtime, an internal platform for on-demand AI agent deployment</li>
              <li>Enhanced OpenClaw observability by integrating Opik tracing — built span-tree tracking relationships across main agents, sub-agents, and tool calls</li>
            </ul>
```

- [ ] **Step 2: Replace Delta Electronics bullets**

Find (around line 89):
```html
            <ul class="timeline-bullets">
              <li>LLM/VLM training and deployment (PyTorch, HuggingFace, vLLM)</li>
              <li>MCP-based Agentic AI System; AutoGen and LangGraph pipelines</li>
              <li>Built Agentic AI ecosystem and Office Automation tooling within Delta Electronics</li>
            </ul>
```

Replace with:
```html
            <ul class="timeline-bullets">
              <li>Led LLM/VLM fine-tuning and production deployment pipeline (PyTorch, HuggingFace, vLLM)</li>
              <li>Architected MCP-based agentic AI systems with AutoGen and LangGraph orchestration</li>
              <li>Bootstrapped the company's agentic AI ecosystem and Office Automation tooling from the ground up</li>
            </ul>
```

- [ ] **Step 3: Replace Academia Sinica bullet**

Find (around line 105):
```html
            <ul class="timeline-bullets">
              <li>3D Gaussian Splatting and 4D real-time dynamic scene rendering research</li>
            </ul>
```

Replace with:
```html
            <ul class="timeline-bullets">
              <li>Researched 4D real-time dynamic scene rendering with 3D Gaussian Splatting — culminating in ICIP 2026 publication</li>
            </ul>
```

- [ ] **Step 4: Replace Taiwan Mobile bullet**

Find (around line 120):
```html
            <ul class="timeline-bullets">
              <li>eKYC: Computer Vision and Deep Learning for face and ID Card recognition</li>
            </ul>
```

Replace with:
```html
            <ul class="timeline-bullets">
              <li>Shipped production eKYC pipeline — CV/DL system for face verification and ID card recognition</li>
            </ul>
```

- [ ] **Step 5: Verify locally**

Open `index.html` in a browser. Scroll to Experience. Confirm all four companies show the new bullet text with no leftover old bullets.

- [ ] **Step 6: Commit**

```bash
git -C /Users/tintinwu/Desktop/Tintin-CV-site add index.html
git -C /Users/tintinwu/Desktop/Tintin-CV-site commit -m "feat: rewrite experience bullets with impact-focused language"
```

---

## Task 4: Add Publication Links to 4D Rendering Project Card

**Files:**
- Modify: `index.html`
- Modify: `style.css`

- [ ] **Step 1: Add CSS for project links**

Append to the end of `style.css` (after the last `}` in the `@media` block):

```css
/* ── Project links ── */
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

- [ ] **Step 2: Add links row to the 4D rendering card**

Find this card in `index.html` (around line 199):
```html
        <div class="project-card" data-category="3dcv">
          <h3 class="project-title">4D Real-Time Dynamic Scene Rendering</h3>
          <p class="project-desc">Novel view synthesis with photorealistic quality, real-time FPS, and rapid convergence. ICIP 2026 · SotA performance with lower memory and training time.</p>
          <div class="project-tags">
            <span class="tag">Python</span><span class="tag">PyTorch</span><span class="tag">CUDA</span>
          </div>
        </div>
```

Replace with:
```html
        <div class="project-card" data-category="3dcv">
          <h3 class="project-title">4D Real-Time Dynamic Scene Rendering</h3>
          <p class="project-desc">Novel view synthesis with photorealistic quality, real-time FPS, and rapid convergence. ICIP 2026 · SotA performance with lower memory and training time.</p>
          <div class="project-tags">
            <span class="tag">Python</span><span class="tag">PyTorch</span><span class="tag">CUDA</span>
          </div>
          <div class="project-links">
            <a href="https://arxiv.org/abs/2511.00560" target="_blank" rel="noopener" class="project-link">arXiv ↗</a>
            <a href="https://tintin-wu.github.io/4d-neural-voxel-splatting/" target="_blank" rel="noopener" class="project-link">Project Page ↗</a>
          </div>
        </div>
```

- [ ] **Step 3: Verify locally**

Open `index.html`, go to Projects → 3D CV tab. Confirm the first card has a separator line with "arXiv ↗" and "Project Page ↗" links in blue. Click each to confirm they navigate to the correct URLs.

- [ ] **Step 4: Commit**

```bash
git -C /Users/tintinwu/Desktop/Tintin-CV-site add index.html style.css
git -C /Users/tintinwu/Desktop/Tintin-CV-site commit -m "feat: add arXiv and project page links to 4D rendering card"
```

---

## Task 5: Add PRIVATE Badge to Remaining Project Cards

**Files:**
- Modify: `index.html`
- Modify: `style.css`

- [ ] **Step 1: Add CSS for the title row and badge**

Append to `style.css` (after the `.project-link:hover` rule added in Task 4):

```css
/* ── Project private badge ── */
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

- [ ] **Step 2: Update the 4D Surface Reconstruction card**

Find:
```html
        <div class="project-card" data-category="3dcv">
          <h3 class="project-title">4D Surface Reconstruction</h3>
```

Replace with:
```html
        <div class="project-card" data-category="3dcv">
          <div class="project-title-row">
            <h3 class="project-title">4D Surface Reconstruction</h3>
            <span class="project-private-badge">PRIVATE</span>
          </div>
```

- [ ] **Step 3: Update the 3D Gaussian Splatting Surface & Mesh card**

Find:
```html
        <div class="project-card" data-category="3dcv">
          <h3 class="project-title">3D Gaussian Splatting Surface &amp; Mesh</h3>
```

Replace with:
```html
        <div class="project-card" data-category="3dcv">
          <div class="project-title-row">
            <h3 class="project-title">3D Gaussian Splatting Surface &amp; Mesh</h3>
            <span class="project-private-badge">PRIVATE</span>
          </div>
```

- [ ] **Step 4: Update the Semantic Scene Completion card**

Find:
```html
        <div class="project-card" data-category="3dcv">
          <h3 class="project-title">Semantic Scene Completion</h3>
```

Replace with:
```html
        <div class="project-card" data-category="3dcv">
          <div class="project-title-row">
            <h3 class="project-title">Semantic Scene Completion</h3>
            <span class="project-private-badge">PRIVATE</span>
          </div>
```

- [ ] **Step 5: Update the Face Presentation Attack Detection card**

Find:
```html
        <div class="project-card hidden" data-category="2dcv">
          <h3 class="project-title">Face Presentation Attack Detection</h3>
```

Replace with:
```html
        <div class="project-card hidden" data-category="2dcv">
          <div class="project-title-row">
            <h3 class="project-title">Face Presentation Attack Detection</h3>
            <span class="project-private-badge">PRIVATE</span>
          </div>
```

- [ ] **Step 6: Update the One Class Fake ID Detection card**

Find:
```html
        <div class="project-card hidden" data-category="2dcv">
          <h3 class="project-title">One Class Fake ID Detection</h3>
```

Replace with:
```html
        <div class="project-card hidden" data-category="2dcv">
          <div class="project-title-row">
            <h3 class="project-title">One Class Fake ID Detection</h3>
            <span class="project-private-badge">PRIVATE</span>
          </div>
```

- [ ] **Step 7: Update the Anti-Counterfeiting Label Detection card**

Find:
```html
        <div class="project-card hidden" data-category="2dcv">
          <h3 class="project-title">Anti-Counterfeiting Label Detection</h3>
```

Replace with:
```html
        <div class="project-card hidden" data-category="2dcv">
          <div class="project-title-row">
            <h3 class="project-title">Anti-Counterfeiting Label Detection</h3>
            <span class="project-private-badge">PRIVATE</span>
          </div>
```

- [ ] **Step 8: Update the Light Weight Face Detection card**

Find:
```html
        <div class="project-card hidden" data-category="2dcv">
          <h3 class="project-title">Light Weight Face Detection</h3>
```

Replace with:
```html
        <div class="project-card hidden" data-category="2dcv">
          <div class="project-title-row">
            <h3 class="project-title">Light Weight Face Detection</h3>
            <span class="project-private-badge">PRIVATE</span>
          </div>
```

- [ ] **Step 9: Update the Face Anti-Spoofing card**

Find:
```html
        <div class="project-card hidden" data-category="2dcv">
          <h3 class="project-title">Face Anti-Spoofing</h3>
```

Replace with:
```html
        <div class="project-card hidden" data-category="2dcv">
          <div class="project-title-row">
            <h3 class="project-title">Face Anti-Spoofing</h3>
            <span class="project-private-badge">PRIVATE</span>
          </div>
```

- [ ] **Step 10: Update the Peng-Hu VR Project card**

Find:
```html
        <div class="project-card hidden" data-category="side">
          <h3 class="project-title">Peng-Hu VR Project</h3>
```

Replace with:
```html
        <div class="project-card hidden" data-category="side">
          <div class="project-title-row">
            <h3 class="project-title">Peng-Hu VR Project</h3>
            <span class="project-private-badge">PRIVATE</span>
          </div>
```

- [ ] **Step 11: Verify locally**

Open `index.html`. Switch through all three project tabs (3D CV / 2D CV / Side). Confirm:
- Every card except "4D Real-Time Dynamic Scene Rendering" shows a "PRIVATE" pill in the top-right corner
- The pill is subtle (muted color, no bright accent)
- Card titles are still left-aligned and green
- The 4D rendering card has no badge (only the arXiv / Project Page links)

- [ ] **Step 12: Commit**

```bash
git -C /Users/tintinwu/Desktop/Tintin-CV-site add index.html style.css
git -C /Users/tintinwu/Desktop/Tintin-CV-site commit -m "feat: add PRIVATE badge to all non-public project cards"
```

---

## Task 6: Push and Verify Live Deployment

- [ ] **Step 1: Push to main**

```bash
git -C /Users/tintinwu/Desktop/Tintin-CV-site push origin main
```

- [ ] **Step 2: Monitor GitHub Actions**

Go to https://github.com/Tintin-Wu/Tintin-CV/actions and wait for the deploy workflow to complete (usually ~1 minute).

- [ ] **Step 3: Verify live site**

Open https://tintin-wu.github.io/Tintin-CV/ and confirm:
- "Download CV" button appears in hero (first button)
- "↓ CV" appears in sidebar
- Clicking "Download CV" downloads the PDF (not opens in browser)
- Experience section shows the new impact-focused bullets for all four companies (including the OpenClaw bullet under Binance)
- Projects → 3D CV: first card has "arXiv ↗" and "Project Page ↗" links
- Projects → 3D CV: remaining 3 cards each have a "PRIVATE" pill
- Projects → 2D CV: all 5 cards have "PRIVATE" pill
- Projects → Side: Peng-Hu VR card has "PRIVATE" pill
