# Banking Tech Portfolio - Design Guidelines

## Design Approach
**Reference Strategy**: Blend Stripe's fintech credibility + Linear's professional polish + Apple's minimalism. Banking tech demands trust through precision, clarity, and sophisticated restraint.

**Core Principles**:
- Financial-grade precision in spacing and alignment
- Enterprise credibility through typography hierarchy
- Progressive disclosure of technical depth
- Trust-building through visual consistency

## Typography System

**Font Stack**: Inter (primary) + JetBrains Mono (code/technical)

**Hierarchy**:
- Display: 4xl-6xl, font-bold, tight tracking (-0.02em)
- Section Headings: 3xl-4xl, font-semibold
- Subsections: xl-2xl, font-medium
- Body: base-lg, font-normal, relaxed leading (1.7)
- Technical Labels: sm, font-medium, uppercase, wide tracking (0.05em)
- Code Snippets: JetBrains Mono, sm-base

## Layout System

**Spacing Primitives**: Tailwind units 4, 6, 8, 12, 16, 24
- Component padding: p-6 to p-8
- Section vertical: py-16 to py-24
- Element gaps: gap-4, gap-6, gap-8

**Grid Strategy**:
- Max container: max-w-7xl
- Content areas: max-w-4xl
- Project cards: 2-column on md, 3-column on lg
- Mobile: Always single column with p-4

## Core Components

**Navigation**: 
Fixed top bar with blur backdrop, logo left, menu items right, CTA button (gradient treatment), mobile hamburger

**Hero Section**: 
Full-viewport (90vh) with large background image (abstract banking tech/fintech visualization), centered content with name/title, 2-line value proposition, dual CTAs (primary "View Projects" + secondary "Download Resume"), scroll indicator

**Project Showcase**:
Card grid with hover elevation, project thumbnail, title + category tag, 2-line description, tech stack chips, view details link

**Experience Timeline**:
Left-aligned vertical timeline with company logos, role + duration, 3-4 achievement bullets, tech stack used

**Skills Matrix**:
Grouped categories (Frontend, Backend, Cloud, Tools), pill-style tags with proficiency indication

**Testimonials**:
2-column cards with client photo, quote, name + company, project context

**Contact Section**:
2-column split: left (contact form with name, email, message), right (professional headshot, email/LinkedIn links, availability status)

**Footer**:
Minimal with social links, copyright, "Built with [tech stack]" badge

## Component Specifications

**Cards**: Rounded corners (rounded-lg), subtle border, padding p-6, hover state with shadow elevation

**Buttons**: 
- Primary: Gradient background, white text, px-6 py-3
- Secondary: Outline variant, px-6 py-3
- Hero overlay buttons: Backdrop blur (backdrop-blur-md), semi-transparent background

**Form Inputs**: Full-width, rounded-md, border, py-3 px-4, focus ring

**Tech Tags**: Inline pills with small padding (px-3 py-1), rounded-full, subtle background

## Images Section

**Hero Image**: Large background - Abstract fintech visualization (digital banking interface, secure transactions, or data flow visualization). Implement dark overlay (30% opacity) for text readability.

**Project Thumbnails**: 6-8 project cards with 16:9 ratio images showing application interfaces, dashboards, or technical architectures

**Professional Headshot**: Contact section - High-quality portrait with professional background

**Company Logos**: Experience timeline - Grayscale logos of previous employers

**Certification Badges**: Optional sidebar or footer section with AWS, Azure, or fintech certifications

## Dark Mode Strategy

Toggle in navigation. Implement semantic color variables that swap cleanly:
- Backgrounds shift from white to dark navy/charcoal
- Text from dark to light with adjusted contrast ratios
- Borders from subtle gray to lighter borders
- Blue accents remain consistent but adjust saturation
- Images maintain visibility with reduced overlay opacity
- Ensure WCAG AA compliance in both modes

## Animations

Minimal and purposeful only:
- Smooth scroll behavior
- Card hover elevations (transform + shadow)
- Page transitions (fade in on load)
- Form field focus states
- Avoid scroll-triggered animations