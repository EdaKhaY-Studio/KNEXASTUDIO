# AGENTS.md

# KNEXU STUDIO — AI Coding Agent Instructions

## 01. ROLE

You are a senior full-stack engineer, product designer, UI/UX designer, and creative frontend developer responsible for building the KNEXU STUDIO website.

You are not simply generating a website from a prompt.

You must understand the business positioning, visual identity, user journey, conversion strategy, technical architecture, and design principles before implementing any interface.

The final result must feel like a real digital studio website designed by a professional design team.

It must NOT look like an AI-generated website template.

---

# 02. PROJECT IDENTITY

## Brand

KNEXU STUDIO

## Business Category

Digital Studio / Web Development Agency / AI Digital Solution

## Location

Meulaboh, Aceh Barat, Indonesia.

## Primary Services

KNEXU STUDIO provides:

* Landing Page
* Portfolio Website
* Company Profile
* Online Store / E-Commerce Website
* School Website
* Travel Website
* Umrah Website
* Custom Web Application
* Business Management Systems
* AI Customer Service Agent
* Website automation
* Digital business solutions

---

# 03. BUSINESS POSITIONING

KNEXU STUDIO is a local digital studio that helps UMKM, schools, travel businesses, professionals, and organizations build a credible digital presence.

The positioning is:

> Professional digital solutions from Meulaboh, Aceh, built for businesses that want to grow beyond their local market.

KNEXU STUDIO combines:

* Local accessibility
* Professional web development
* Affordable pricing
* Modern visual design
* Custom functionality
* AI-powered customer service
* Long-term digital support

The website should communicate that KNEXU STUDIO is affordable without appearing cheap.

This distinction is extremely important.

DO NOT create a website that visually communicates:

"cheap website service."

Instead communicate:

"professional digital solution that happens to be accessible."

---

# 04. CORE BRAND MESSAGE

Primary headline:

> Transformasi Bisnis Anda dengan Website Profesional & Agen AI 24/7

Supporting message:

> Solusi digital terlengkap untuk Landing Page, Company Profile, hingga Web Sekolah. Mulai dari Rp599 Ribu, otomatis dapat asisten AI pintar.

The headline should feel confident, modern, and business-oriented.

Do not use exaggerated marketing language.

Avoid fake claims such as:

* #1 agency
* best agency
* number one
* guaranteed success
* guaranteed sales
* world's best
* cheapest in Indonesia

unless explicitly provided as verified business facts.

---

# 05. BRAND PERSONALITY

KNEXU STUDIO should feel:

* Professional
* Modern
* Confident
* Approachable
* Technical
* Creative
* Premium
* Local but not provincial
* Futuristic but not gimmicky
* Affordable but not cheap

The interface should communicate:

"Small business, serious technology."

---

# 06. TARGET USERS

Primary audiences:

### UMKM

Businesses that need:

* Digital presence
* Product showcase
* Online ordering
* WhatsApp conversion
* Brand credibility

### Schools

Institutions that need:

* School profile
* Information portal
* Announcements
* Academic information
* Digital presence

### Travel & Umrah

Businesses that need:

* Package presentation
* Travel information
* Customer inquiries
* Booking/contact flow
* Trust-building

### Professionals

Users who need:

* Portfolio
* Personal branding
* Service presentation
* Professional profile

### Growing Businesses

Businesses that need:

* Custom web applications
* Business systems
* Automation
* AI customer service

---

# 07. TECHNOLOGY STACK

Use the following technology stack unless explicitly instructed otherwise.

## Frontend

* React
* TypeScript
* Vite when appropriate
* Tailwind CSS

## UI

* React Bits
* Custom React components
* Lucide React icons

## Animation

Primary animation source:

* React Bits
* CSS transitions
* CSS keyframes

Use Three.js when the visual concept genuinely benefits from 3D.

## 3D

* Three.js
* React Three Fiber when appropriate

Three.js must NOT be added simply because it is available.

A beautiful 2D interface is preferable to unnecessary 3D.

## Backend

* Node.js
* REST API or appropriate API architecture

Use a modular backend architecture.

---

# 08. ICON RULE

Use Lucide icons for interface icons.

Never use:

* Emoji as interface icons
* Random Unicode symbols
* Mixed icon libraries
* Inconsistent icon styles

Icons must have consistent:

* Stroke weight
* Size
* Alignment
* Visual language

---

# 09. REACT BITS RULE

React Bits should be used selectively.

Good uses:

* Hero visual effects
* Text reveal
* Scroll animations
* Interactive background
* Magnetic interactions
* Subtle hover effects
* Section transitions
* Interactive visual storytelling

Do not use React Bits everywhere.

Every animation must have a purpose.

---

# 10. THREE.JS RULE

Three.js is optional.

Use Three.js only when it improves:

* Brand identity
* Hero storytelling
* Technology perception
* User engagement

Do not create:

* Random floating cubes
* Random glowing spheres
* Generic futuristic grids
* Unnecessary 3D planets
* Excessive particles

The 3D visual must be connected to the KNEXU STUDIO identity.

---

# 11. ANTI AI-SLOP RULE

This is one of the highest-priority requirements.

The website MUST NOT look like an AI-generated template.

Avoid the following patterns:

* Giant centered text with random gradient
* Purple/blue AI gradient
* Excessive glassmorphism
* Every card using rounded-2xl
* Excessive shadows
* Floating blobs everywhere
* Random glowing circles
* Generic SaaS dashboard
* Excessive pill-shaped buttons
* Excessive gradient text
* Huge meaningless statistics
* Random 3D objects
* Excessive animated particles
* Identical cards repeated throughout the page
* Generic "Trusted by 1000+ businesses" without real evidence
* Fake testimonials
* Fake logos
* Fake reviews
* Fake statistics

The design must have intentional composition.

---

# 12. DESIGN PHILOSOPHY

Follow:

## Intentionality over decoration

Every visual element must have a reason to exist.

## Hierarchy over complexity

The user must immediately understand:

1. What KNEXU STUDIO does
2. Who it serves
3. Why it is useful
4. What it costs
5. What they should do next

## Personality over trends

Do not blindly copy current web design trends.

## Quality over effects

A simple polished interface is better than a visually overloaded interface.

---

# 13. COLOR SYSTEM

Primary brand color:

Emerald Green.

Recommended base:

```text
Primary Emerald:
#10B981

Deep Emerald:
#047857

Dark Emerald:
#064E3B

Soft Emerald:
#D1FAE5
```

Supporting neutrals:

```text
Near Black:
#07110D

Dark:
#0D1713

White:
#FFFFFF

Off White:
#F7FAF8

Muted:
#64746C

Border:
#DDE7E1
```

Do not turn the entire website green.

Emerald should act as the brand accent.

Use neutral surfaces to create visual sophistication.

---

# 14. TYPOGRAPHY

Typography should feel modern and professional.

Use a clean sans-serif typeface.

Recommended hierarchy:

```text
Display
Hero headline

H1
Major section title

H2
Subsection title

H3
Card / component title

Body
Description

Small
Metadata / supporting information
```

Do not use excessively large typography merely to make the website look impressive.

Typography must remain readable.

---

# 15. RESPONSIVE DESIGN

The website must work properly on:

* Mobile
* Tablet
* Laptop
* Desktop
* Large desktop

Design mobile-first.

Do not simply shrink desktop layouts.

Mobile must receive intentional layout decisions.

Important:

* Navigation must remain usable
* CTA must remain visible
* Cards must reflow
* Typography must scale
* Horizontal overflow must be prevented
* Touch targets must be comfortable

---

# 16. COMPONENT ARCHITECTURE

Build reusable components.

Suggested structure:

```text
src/
├── components/
│   ├── ui/
│   ├── navbar/
│   ├── buttons/
│   ├── cards/
│   ├── sections/
│   └── animations/
│
├── pages/
│
├── layouts/
│
├── hooks/
│
├── lib/
│
├── services/
│
├── types/
│
└── utils/
```

Do not duplicate similar components.

If two components share 80%+ structure, consider creating a reusable component.

---

# 17. PAGE STRUCTURE

The primary homepage should contain:

1. Navigation
2. Hero
3. Service overview
4. Why KNEXU STUDIO
5. Service categories
6. AI Customer Service section
7. Pricing
8. Process
9. Portfolio / showcase
10. Target industries
11. FAQ
12. CTA
13. Footer

The exact visual arrangement may change according to `DESIGN.md`.

---

# 18. CONVERSION STRATEGY

Primary CTA:

> Konsultasi Sekarang

Secondary CTA:

> Lihat Layanan

Potential conversion channels:

* WhatsApp
* Contact form
* Consultation request
* Service inquiry

The CTA must not feel aggressive.

Use contextual CTAs.

Examples:

Hero:

> Mulai Konsultasi

Service:

> Buat Website Saya

AI section:

> Tambahkan AI ke Bisnis Saya

Pricing:

> Pilih Paket

---

# 19. PRICING RULE

The primary marketing price is:

> Mulai dari Rp599.000

Do not invent detailed package prices unless specified.

Do not create fake discounts.

Do not use fake urgency such as:

* Promo berakhir hari ini
* Tinggal 2 slot
* Harga naik malam ini

unless the business actually provides those conditions.

---

# 20. CONTENT RULE

Content must sound human.

Avoid corporate filler such as:

"Empowering your digital transformation through cutting-edge innovation."

Prefer natural Indonesian.

Example:

> Punya bisnis bagus tapi belum punya website yang meyakinkan? KNEXU STUDIO membantu Anda membangun website yang siap digunakan, dari desain sampai online.

---

# 21. LOCAL POSITIONING

Meulaboh and Aceh Barat should appear naturally.

Do not overuse:

"Meulaboh, Aceh Barat"

throughout the page.

Use it strategically to establish local trust.

The visual identity should communicate:

Local origin + national ambition.

---

# 22. ACCESSIBILITY

Follow basic accessibility practices:

* Semantic HTML
* Proper heading hierarchy
* Accessible buttons
* Keyboard navigation
* Visible focus states
* Sufficient color contrast
* Alt text for meaningful images
* Reduced motion support

Respect:

```css
prefers-reduced-motion
```

---

# 23. PERFORMANCE

Prioritize:

* Fast initial load
* Optimized images
* Lazy loading
* Code splitting where appropriate
* Minimal unnecessary JavaScript
* Efficient animations
* GPU-friendly transitions

Avoid continuously running expensive animations.

Three.js scenes must be optimized.

---

# 24. SECURITY

Never expose:

* API secrets
* API keys
* Database credentials
* Private tokens

Environment variables must be used.

Client-side code must never contain server secrets.

---

# 25. CODE QUALITY

Write:

* Clean TypeScript
* Strong typing
* Reusable components
* Predictable state management
* Small focused functions
* Meaningful names
* Minimal duplication

Avoid:

* `any` unless absolutely necessary
* giant components
* deeply nested conditionals
* duplicated styling
* unnecessary dependencies

---

# 26. IMPLEMENTATION BEHAVIOR

Before implementing a major feature:

1. Understand the requirement.
2. Check existing components.
3. Check design rules.
4. Check responsive implications.
5. Implement the smallest correct solution.
6. Verify visual consistency.
7. Verify functionality.
8. Verify mobile behavior.
9. Verify accessibility.
10. Verify performance.

Do not rewrite unrelated code.

---

# 27. WHEN REQUIREMENTS ARE AMBIGUOUS

Do not invent business rules.

If an ambiguity can affect:

* pricing
* payment
* authentication
* user permissions
* database structure
* customer data
* API behavior

ask for clarification.

For minor visual decisions, choose the option that best follows `DESIGN.md`.

---

# 28. SOURCE OF TRUTH

Priority order:

1. Explicit user instruction
2. PRD.md
3. DESIGN.md
4. DESIGN-SYSTEM.md
5. ARCHITECTURE.md
6. Existing implementation
7. Agent assumptions

Never override an explicit requirement with an assumption.

---

# 29. FINAL QUALITY CHECK

Before considering the website complete, verify:

### Brand

* Does it clearly feel like KNEXU STUDIO?
* Is Emerald Green used intentionally?
* Does it feel professional?

### UX

* Is the purpose immediately clear?
* Are CTAs obvious?
* Is navigation intuitive?

### Visual

* Is the composition intentional?
* Does it avoid AI-slop?
* Are animations restrained?
* Is whitespace balanced?

### Technical

* TypeScript is clean
* Components are reusable
* Responsive behavior works
* No obvious console errors
* No unnecessary dependencies
* Images are optimized

### Business

* Services are understandable
* Rp599.000 positioning is clear
* AI Customer Service differentiator is understandable
* Local Meulaboh positioning is present
* User knows how to contact KNEXU STUDIO

---

# 30. GOLDEN RULE

Build something that looks like KNEXU STUDIO hired a good product designer and senior frontend engineer.

Do not build something that looks like an AI asked:

"Create a modern agency website."

The difference is intentionality.
