# PARDUS

The website for PARDUS, a fictional natural-wine project on the western slopes of an Aegean island. Built as a type-led editorial site: one vineyard, four wines, and no unnecessary machinery.

## Stack

- [Astro 7](https://astro.build) with static output
- Semantic CSS and custom properties — no utility framework
- Self-hosted variable fonts via [Fontsource](https://fontsource.org) — only the Latin subset of each face is bundled
- Native `<dialog>`, CSS scroll behaviour, and `IntersectionObserver`
- Local WebP imagery processed through Astro's image pipeline
- Canonical URLs, Open Graph metadata, and `Winery` structured data

There is no client-side framework, animation library, smooth-scroll hijack, or custom cursor.

## Getting started

Requires Node 22.23.4 or newer and [Bun](https://bun.sh).

```sh
bun install
bun run dev       # http://localhost:4321
```

| Script                 | Purpose                                 |
| ---------------------- | --------------------------------------- |
| `bun run dev`          | Start the development server            |
| `bun run build`        | Build the static site into `dist/`      |
| `bun run preview`      | Preview the production build            |
| `bun run check`        | Run Astro and TypeScript diagnostics    |
| `bun run format`       | Format the repository with Prettier     |
| `bun run format:check` | Verify formatting without writing files |

## Structure

```text
src/
  assets/            Local WebP photography, imported through astro:assets
  components/        Page sections and shared UI primitives (see below)
  data/site.ts       Single source of truth: identity, nav, facts, wines, process, visit
  layouts/           Document shell, metadata, structured data, reveal script
  pages/             index.astro and 404.astro
  styles/global.css  Tokens, type roles, layout, components, responsive rules, motion
public/
  favicon.svg
  apple-touch-icon.png
  og.png             1200 × 630 social card
  robots.txt
```

Content changes should start in `src/data/site.ts`. Wine entries, navigation, facts, visit details, and the JSON-LD address/geo all derive from that file. Section prose lives in the matching component under `src/components/`.

Shared primitives keep the section components thin:

| Component             | Responsibility                                                                |
| --------------------- | ----------------------------------------------------------------------------- |
| Section components    | `Hero`, `Estate`, `Manifesto`, `Land`, `Wines`, `Process`, `Visit` — one each |
| `SectionHeader.astro` | Section label plus `h2`/lede slot                                             |
| `Figure.astro`        | Responsive image, ratio presets, optional caption and overlay                 |
| `Facts.astro`         | Definition list in `grid` or `rows` layout, 2–4 columns                       |
| `Brand.astro`         | Dot and wordmark, rendered as link when `href` is passed                      |
| `ArrowLink.astro`     | Underlined call to action; the arrow is drawn by CSS                          |
| `Header.astro`        | Fixed header, desktop nav, `<dialog>` menu, scroll-spy                        |
| `Footer.astro`        | Letter sign-up, link columns, legal row, SVG wordmark                         |

## Design notes

The visual system uses three materials rather than a conventional brand palette:

- **Bone** `#f2ecdf` and **paper** `#faf7f0` for the page
- **Ink** `#17130f` for type and dark sections
- **Clay** `#a8482a` for accents, with olive `#34382a` for the process section

Fraunces carries the display voice; Instrument Sans handles reading text; JetBrains Mono is reserved for labels and metadata through a single `.meta` class. Type has four roles — display, `.h2`, `.lede`, and `.meta` — and no others. Motion is limited to a short entrance reveal, link underlines, and image scale on hover. All of it is disabled under `prefers-reduced-motion`.

The stylesheet is mobile-first with exactly three breakpoints: `48rem` (tablet: nav appears, facts gain columns), `64rem` (desktop: split layouts, sticky figures), and `80rem` (wide: footer columns). Below `48rem` the navigation is a modal `<dialog>` so focus management, Escape handling, and the backdrop come from the platform.

## Metadata and deployment

Set the production origin in `astro.config.mjs` (`site`). Canonical URLs, Open Graph tags, and the JSON-LD record are generated in `src/layouts/BaseLayout.astro`.

The output is fully static. Deploy `dist/` to any static host.

## Credits

- Photography via [Unsplash](https://unsplash.com), cropped and graded to a warm monochrome for this project.
- Typefaces: [Fraunces](https://fonts.google.com/specimen/Fraunces), [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans), and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono), all licensed under the SIL Open Font License.
- Concept and build by [@dacrab](https://github.com/dacrab).

PARDUS is a fictional estate. Any resemblance to an actual winery is coincidental.

## License

MIT
