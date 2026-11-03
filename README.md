# PARDUS

Natural wine from the western slopes of a small Aegean island.

**Live demo:** https://pardus-lemon.vercel.app

One page, seven sections, four wines. It opens on the estate, moves through the land and the manifesto, introduces the bottles, explains the cellar work, and ends with how to visit. No shop, no newsletter pop-up, no cookie banner — just a long scroll with photographs and type.

```bash
bun install
bun run dev       # http://localhost:4321
```

Node 22.23.4 or newer, plus Bun. `bun run build` writes a fully static `dist/` you can host anywhere.

Nearly everything — identity, navigation, facts, wines, process, visit details — comes from `src/data/site.ts`. Section prose lives beside its component in `src/components/`, so edits stay local.

PARDUS is a fictional estate; any resemblance to a real winery is a coincidence. Photography is from Unsplash, cropped and graded warm for this project. Type is Fraunces, Instrument Sans and JetBrains Mono, self-hosted.

Astro, hand-written CSS, no client-side framework. MIT.
