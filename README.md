# PARDUS — Natural Wine Project

A cinematic, editorial landing page for a fictional avant-garde natural wine project on a Cycladic island. Built with Astro 5, Tailwind 4, GSAP, and Lenis.

## Concept

PARDUS is not a traditional "elegant vineyard estate" page. It is a *manifesto* in the form of a website — a brutalist editorial take on natural wine, set on the western slopes of a forgotten Aegean island.

- **Aesthetic:** Bone white, midnight ink, deep terracotta-clay
- **Typography:** Fraunces (display) + Inter (sans) + JetBrains Mono (technical)
- **Motion:** Custom cursor, line-by-line scroll reveals, marquee, smooth-scroll via Lenis, GSAP ScrollTrigger
- **Voice:** Anti-pretentious, anti-precious, deeply rooted

## Stack

- [Astro 5](https://astro.build) — static site generation
- [Tailwind CSS 4](https://tailwindcss.com) — utility styling
- [GSAP 3.13](https://gsap.com) + [ScrollTrigger](https://gsap.com/scrolltrigger) — scroll-driven animation
- [Lenis](https://lenis.darkroom.engineering) — smooth scroll
- TypeScript 5.7 — strict mode

## Sections

1. **Hero** — Oversized editorial type, vertical coordinates, key stats, parchment-grid backdrop
2. **Marquee** — Ticker of process keywords
3. **Manifesto** — First-person text reveal, magazine-column layout, signed by the winemaker
4. **The Land** — Asymmetric image grid, soil/aspect/vines/terroir facts
5. **The Wines** — Four cuvées, alternating left/right, with tasting notes and allocation pricing
6. **The Process** — Five-act timeline of harvest → bottle
7. **Visit** — Tasting details, hours, address, request form
8. **Footer** — Newsletter signup, wordmark, geocoordinates

## Develop

```bash
bun install
bun run dev
```

Then open http://localhost:4321

## Build

```bash
bun run build
bun run preview
```

## Design notes

- **Cursor:** Custom 18px dot with hover-grow, blend-mode difference. Disabled below 1024px.
- **Reveals:** Line-by-line text reveal driven by `overflow: hidden` containers and `translateY`. Each section uses `ScrollTrigger.batch` to trigger on enter.
- **Type:** `clamp()` fluid scale for all display sizes — single declaration handles mobile to ultrawide.
- **Performance:** `prefers-reduced-motion` honored throughout; no images over ~150kb from Unsplash; lazy loading on all non-hero images.

## Credits

- Concept & build: [@dacrab](https://github.com/dacrab)
- Imagery: [Unsplash](https://unsplash.com) (placeholder — replace before launch)
- Type: [Fraunces](https://fonts.google.com/specimen/Fraunces) by Phaedra Charles, Flavia Zimbardi, Lasse Fister (OFL)

## License

MIT
