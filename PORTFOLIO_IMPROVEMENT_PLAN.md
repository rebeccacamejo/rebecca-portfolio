# Portfolio Improvement Plan - rebeccacamejo.com

**Date Created:** March 26, 2026
**Career Goal:** ML/AI Engineering Lead
**Focus Domain:** AI/ML & LLMs
**Timeline:** 1-2 weeks (Urgent - High-impact improvements)

---

## Executive Summary

This plan outlines a comprehensive audit and improvement roadmap for rebeccacamejo.com, prioritizing changes that position Rebecca as an ML/AI Engineering Lead. The focus is on quick wins that enhance personal branding, showcase key projects (DISHA, NanoFaaS), and improve SEO/discoverability.

---

## 🎯 PRIORITY 1: Critical Fixes (Week 1)

### 1.1 Missing OG Image ⚠️ CRITICAL
**Issue:** `/public/images/ogimage.png` is referenced throughout the site but doesn't exist
**Impact:** Broken social sharing on LinkedIn, Twitter - no preview images when sharing portfolio
**Current State:** 404 error on all social shares

**Solution:**
- Create professional OG image (1200x630px)
- Include: Name, title "ML/AI Engineering Lead", subtle tech/AI visual
- Save to `/public/images/ogimage.png`
- Tool suggestions: Canva, Figma, or custom design

**Success Metric:** Portfolio link shows proper preview card when shared on LinkedIn/Twitter

---

### 1.2 Add DISHA Project Ship ⭐ HIGH PRIORITY
**Issue:** Your primary work project at American Express is not showcased
**Impact:** Missing the most impressive, real-world AI/ML work

**Solution:** Create `src/content/ship/disha.mdx`

**Content Structure:**
```markdown
---
title: DISHA - AI-Powered Dispute Investigation System
description: [Your description of the system]
category: 'ai-ml'
ship_count: 1
pubDate: '[Current date]'
---

## The Problem
[Describe inefficiencies in manual dispute investigation]

## The Solution
[AI/ML approach - LLM integration, automation, architecture]

## Technical Implementation
- Tech stack: [Python, LLMs, etc.]
- Architecture decisions
- Integration with existing Amex systems

## Impact
- Time saved: [X% reduction in investigation time]
- Accuracy improvements: [metrics]
- Scale: [number of cases processed]

## Leadership & Collaboration
[Your role in leading implementation, mentoring team members]

## Technical Challenges & Learnings
[Key technical decisions, trade-offs, lessons learned]
```

**Success Metric:** DISHA appears on /ships page with compelling business + technical narrative

---

### 1.3 Strengthen Homepage Bio for AI Leadership 🎯
**Issue:** Current bio is generic, doesn't position you as AI/ML engineering leader
**Current:** "obsessive problem solver", generic statements
**Needed:** Clear AI/ML expertise, leadership, business impact

**Solution:** Rewrite `src/pages/index.astro` bio section

**New Bio Framework:**
```
PARAGRAPH 1: Current role + AI/ML expertise
- AI/ML Engineer at American Express
- Specialization: LLMs, agentic AI systems, fraud detection
- Leading DISHA project (quantify impact)

PARAGRAPH 2: Technical depth + leadership
- Building production AI/ML systems
- Mentoring engineers on LLM integration patterns
- Architecting scalable AI solutions

PARAGRAPH 3: Personal mission/philosophy
- Why you're passionate about AI/ML
- Your approach to technical leadership
- Vision for AI in fintech/beyond

PARAGRAPH 4: Community/side work
- Church multimedia team leadership (shows people skills)
- Technical writing (thought leadership)

PARAGRAPH 5: Personal touch (keep brief)
- Adventurous spirit, Interstellar reference OK but shorter
- Faith quote (humanizes you)
```

**Success Metric:** Visitors immediately understand you're an AI/ML engineering leader, not just "engineer"

---

### 1.4 Add Professional Headshot/Avatar 📸
**Issue:** No visual identity on the site
**Impact:** Lower trust, harder to connect personally with visitors

**Solution:**
- Add professional headshot to homepage
- Place near bio section
- Size: ~200-300px circle or rounded square
- Save to `/public/images/rebecca-headshot.jpg` or `.webp`

**Implementation:**
```astro
<!-- In src/pages/index.astro, before or after bio -->
<img
  src="/images/rebecca-headshot.webp"
  alt="Rebecca Camejo, ML/AI Engineering Lead"
  class="w-48 h-48 rounded-full object-cover"
/>
```

**Success Metric:** Homepage has personal, professional visual identity

---

## 🚀 PRIORITY 2: Content Enhancement (Week 1-2)

### 2.1 Add Skills/Technologies Section
**Why:** Quickly communicates technical expertise, helps with recruiter SEO

**Solution:** Add to homepage after bio

**Content:**
```
**AI/ML & LLMs**
- Large Language Models (GPT, BERT, Transformers)
- LangChain, RAG architectures
- Agentic AI systems
- Model deployment & production ML

**Languages & Frameworks**
- Python, Java, TypeScript
- FastAPI, Vert.x, Spring Boot
- PyTorch, TensorFlow (if applicable)

**Platforms & Infrastructure**
- AWS (specific services you use)
- Docker, Kubernetes
- Serverless architectures
- Redis, PostgreSQL

**Domains**
- Financial Technology (Fraud Detection, Disputes)
- Distributed Systems
- API Design & Integration
```

**Success Metric:** Technical expertise is immediately scannable

---

### 2.2 Enhance NanoFaaS Ship Content
**Current State:** Excellent technical depth ✅
**Missing:** Visual aids, links, AI/ML connection

**Enhancements to `src/content/ship/nanofaas.mdx`:**

1. **Add GitHub Link** (if shareable/sanitized)
```markdown
[View on GitHub](https://github.com/rebeccacamejo/nanofaas) (if applicable)
```

2. **Add "Why This Matters for AI/ML" Section**
```markdown
## Why This Matters for AI/ML Systems

Understanding serverless runtimes is critical for deploying ML models at scale:

- **Model Serving:** Serverless functions are increasingly used for model inference
- **Cold Start Impact:** Critical for real-time ML applications
- **Cost Optimization:** Understanding execution models helps optimize ML inference costs
- **Scalability:** Function packing principles apply to ML model serving platforms
```

3. **Add Architecture Diagram** (optional but impactful)
- Create simple architecture diagram showing NanoFaaS components
- Save as `/public/images/nanofaas-architecture.png`
- Embed in MDX

**Success Metric:** NanoFaaS project is linked, contextualized for AI/ML work, more shareable

---

### 2.3 Create AI/ML Leadership Thought Piece
**Why:** Demonstrates thought leadership beyond technical execution

**Suggested Topics:**
1. "What Makes AI Systems Production-Ready" (recommended)
2. "Leading AI/ML Teams: Beyond the Hype"
3. "Building AI Systems That Actually Ship"
4. "From POC to Production: LLM Integration Lessons"

**File:** `src/content/writing/production-ready-ai-systems.mdx` or `src/content/thought/...`

**Content Framework:**
- Your experience shipping DISHA and other AI systems
- Common pitfalls (hype vs reality)
- Engineering rigor required for production AI
- Balance between innovation and reliability
- Mentoring perspective (what you teach your team)

**Success Metric:** One published thought leadership piece by end of week 2

---

## 🎨 PRIORITY 3: Design & UX Improvements (Week 2)

### 3.1 Fix Mobile Responsiveness on Ships Page 📱
**Issue:** `grid-cols-10` doesn't adapt to mobile screens
**File:** `src/pages/ships/index.astro`

**Current:**
```astro
<div class='grid grid-cols-10 gap-3'>
```

**Fixed:**
```astro
<div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3'>
```

**Also check:** `src/components/cards/ships-item.astro` - ensure it has responsive column spans

**Success Metric:** Ships page looks good on mobile (320px), tablet (768px), desktop (1024px+)

---

### 3.2 Update Site Tagline to Reflect AI/ML Leadership
**Current:** "engineer & writer"
**New Options:**
- "ML/AI Engineering Lead"
- "AI/ML Engineer & Technical Writer"
- "Machine Learning Engineer & Writer"

**Files to Update:**
1. `src/pages/index.astro` - Line 27: `<span>` tagline
2. `src/content/whoami/intro.md` - If used elsewhere
3. `src/data/index.ts` - SITE_DESCRIPTION if needed

**Success Metric:** Tagline clearly communicates AI/ML specialization

---

### 3.3 Improve Navigation & CTAs
**Issue:** No clear call-to-action or visitor guidance

**Solution:** Add hero CTA section on homepage

```astro
<div class="flex flex-col sm:flex-row gap-4 my-8">
  <a href="/ships"
     class="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600">
    View AI/ML Projects
  </a>
  <a href="/writings"
     class="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
    Read Technical Writing
  </a>
</div>
```

**Success Metric:** Clear action paths for visitors

---

## 📊 PRIORITY 4: SEO & Performance (Week 2)

### 4.1 Add Structured Data (Schema.org) 🔍
**Why:** Enables rich snippets in Google, improves discoverability

**File:** `src/components/seo/base-head.astro`

**Add Before Closing `</head>`:**
```astro
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rebecca Camejo",
  "jobTitle": "ML/AI Engineering Lead",
  "url": "https://rebeccacamejo.com",
  "sameAs": [
    "https://github.com/rebeccacamejo",
    "https://www.linkedin.com/in/rebeccacamejo"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "American Express"
  },
  "knowsAbout": ["Machine Learning", "Large Language Models", "AI Systems", "Python", "Java"],
  "alumniOf": "[Your university if you want to include]"
})} />
```

**For Blog Posts:** Add BlogPosting schema in writing-layout.astro

**Success Metric:** Validate with Google's Rich Results Test

---

### 4.2 Add Twitter Card Meta Tags 🐦
**Issue:** Only OpenGraph tags exist (Facebook), missing Twitter-specific tags

**File:** `src/components/seo/base-head.astro`

**Add After OG Tags (around line 121):**
```astro
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={new URL(image, Astro.url)} />
<meta name="twitter:creator" content="@[your_twitter_handle]" /> <!-- Add if you have Twitter -->
```

**Success Metric:** Twitter Card Validator shows proper preview

---

### 4.3 Image Optimization Strategy
**Current:** Only rocket.png, no optimized formats

**Actions:**
1. Convert all images to WebP format (better compression)
2. Add `loading="lazy"` to images below the fold
3. Use `<picture>` elements with fallbacks

**Example:**
```astro
<picture>
  <source srcset="/images/rebecca-headshot.webp" type="image/webp">
  <img src="/images/rebecca-headshot.jpg" alt="Rebecca Camejo" loading="lazy">
</picture>
```

**Success Metric:** Lighthouse performance score > 90

---

## 💼 PRIORITY 5: Personal Branding as AI/ML Lead (Week 2)

### 5.1 Add Leadership Indicators Throughout Content
**Where:** Homepage bio, project descriptions, thought pieces

**Examples:**
- "Led implementation of DISHA, reducing dispute investigation time by X%"
- "Mentored Y engineers on LLM integration best practices"
- "Architected fraud detection system processing Z million transactions/day"
- "Designed RAG architecture for [specific use case]"
- "Evaluated and selected LLM providers for enterprise use"

**Success Metric:** Leadership and impact are evident, not just technical skills

---

### 5.2 Create Case Study Format for Ships
**Current:** NanoFaaS is well-written but informal
**New Standard:** Problem → Solution → Impact → Learnings

**Template for Future Ships:**
```markdown
## The Problem
[Business context, pain points, why this matters]

## My Role
[What you led, designed, implemented]

## Technical Solution
[Architecture, tech stack, key decisions]

## Implementation & Challenges
[Technical hurdles, how you solved them]

## Results & Impact
[Quantified outcomes: time saved, accuracy, scale, cost]

## Leadership & Collaboration
[Team dynamics, mentoring, cross-functional work]

## Key Learnings
[Technical insights, what you'd do differently]
```

**Success Metric:** Ships read as professional case studies, not just technical blogs

---

## 📋 IMPLEMENTATION ROADMAP

### **Days 1-3: Critical Foundation**
- [x] Create improvement plan document (this file)
- [ ] Create OG image (1200x630px)
- [ ] Rewrite homepage bio for AI/ML leadership
- [ ] Add professional headshot
- [ ] Add DISHA project ship

### **Days 4-7: Content & Branding**
- [ ] Add skills/technologies section to homepage
- [ ] Enhance NanoFaaS with GitHub link and AI/ML context
- [ ] Update site tagline everywhere
- [ ] Fix mobile responsiveness on ships page
- [ ] Add navigation CTAs

### **Days 8-10: SEO & Discoverability**
- [ ] Add structured data (Schema.org) to base-head
- [ ] Add Twitter card meta tags
- [ ] Optimize images (WebP conversion)
- [ ] Add meta descriptions to all content

### **Days 11-14: Polish & Launch**
- [ ] Write AI/ML leadership thought piece
- [ ] Convert ships to case study format
- [ ] Final QA: test on mobile, tablet, desktop
- [ ] Validate SEO (Google Rich Results, Twitter Card Validator)
- [ ] Share updated portfolio on LinkedIn

---

## 🎯 Success Metrics

| Metric | Target | How to Measure |
|--------|--------|---------------|
| OG Image Working | 100% | Share on LinkedIn/Twitter, verify preview |
| Mobile Responsiveness | Pass | Test on 320px, 768px, 1024px viewports |
| SEO Score | 95+ | Google Lighthouse SEO audit |
| Performance Score | 90+ | Google Lighthouse Performance |
| Accessibility Score | 90+ | Google Lighthouse Accessibility |
| AI/ML Positioning | Clear | Ask 3 people: "What does Rebecca do?" |
| Leadership Indicators | 5+ mentions | Count leadership phrases across site |
| Project Case Studies | 2 (DISHA + NanoFaaS) | Review ships content |

---

## 📝 Content Inventory & Audit

### Current Content (as of March 26, 2026)

**Writings (6 articles - Good!):**
- ✅ LLMs from Scratch (5-part series)
- ✅ Agentic AI Architectures
- 📝 All well-written, good technical depth

**Thoughts (2 pieces - Needs more):**
- ✅ "AI Is Nothing New" (historical perspective)
- ✅ "Don't Ask What to Learn" (learning philosophy)
- 📝 Need: 3-5 more thought leadership pieces

**Ships (1 project - Critical gap!):**
- ✅ NanoFaaS (excellent, needs minor enhancements)
- ❌ DISHA (MISSING - your most important project!)
- ❌ Other AI/ML projects?
- 📝 Goal: 3-5 ships by end of month

**About/Whoami (1 page - Needs update):**
- ❌ Generic, doesn't position as AI/ML lead
- ✅ Has personal touch (good)
- 📝 Needs: Complete rewrite for leadership positioning

---

## 🚨 Critical Issues Summary

### Must Fix (Blocking SEO/Sharing)
1. ❌ Missing OG image (`/public/images/ogimage.png`)
2. ❌ No DISHA project showcase
3. ❌ Homepage doesn't position as AI/ML leader

### Should Fix (Branding)
4. ⚠️ No visual identity (headshot)
5. ⚠️ Generic tagline "engineer & writer"
6. ⚠️ No skills/tech section

### Nice to Have (Polish)
7. 💡 Mobile responsiveness improvements
8. 💡 Twitter card meta tags
9. 💡 Structured data for SEO
10. 💡 More thought leadership content

---

## 📚 Resources & References

### Design Tools
- **OG Image Creation:** Canva, Figma, og-image.vercel.app
- **Image Optimization:** Squoosh.app, Sharp (Node.js)
- **Icons:** Heroicons, Lucide Icons

### SEO Validation
- **Structured Data:** schema.org/Person, validator.schema.org
- **Twitter Cards:** cards-dev.twitter.com/validator
- **OpenGraph:** opengraph.xyz
- **Lighthouse:** Chrome DevTools → Lighthouse

### Content Inspiration (AI/ML Leadership)
- Engineering blogs: Netflix Tech Blog, Uber Engineering
- AI/ML leaders: Chip Huyen, Eugene Yan, Vicki Boykis
- Technical writing: Will Larson, Gergely Orosz

---

## 💡 Future Enhancements (Post-Launch)

### Phase 2 (Months 2-3)
- [ ] Add /work or /experience page with full career history
- [ ] Create email newsletter signup
- [ ] Add blog comment system (giscus or similar)
- [ ] Create downloadable resume/CV
- [ ] Add "Featured Projects" section on homepage

### Phase 3 (Months 4-6)
- [ ] Add case studies from Amex work (if permissible)
- [ ] Create video content (embedded YouTube)
- [ ] Add speaking engagements section
- [ ] Build "Resources" page (tools, books, courses you recommend)
- [ ] Add testimonials/recommendations

### Long-term Ideas
- [ ] Build interactive demos of AI/ML projects
- [ ] Create course or tutorial series
- [ ] Add "Now" page (what you're currently working on)
- [ ] Build personal AI chatbot for portfolio Q&A
- [ ] Add multilingual support (if relevant)

---

## 📧 Contact & Collaboration

**Portfolio Owner:** Rebecca Camejo
**Email:** rcamejo04@gmail.com
**Portfolio URL:** https://rebeccacamejo.com
**GitHub:** https://github.com/rebeccacamejo
**LinkedIn:** https://www.linkedin.com/in/rebeccacamejo

---

**Plan Status:** ✅ Approved
**Implementation Start:** March 26, 2026
**Target Completion:** April 9, 2026 (2 weeks)
**Last Updated:** March 26, 2026
