# PARDUS

The website for PARDUS, a fictional natural-wine estate on an Aegean island.

**Live demo:** https://pardus-lemon.vercel.app

A single long page that tells the story of one vineyard: the estate, the land, four wines, how they're made, and how to visit. It's a type-led editorial site — no shop, no pop-ups, nothing to click through. Just scroll.

## Features

- A slow, section-by-section walkthrough of the estate
- Four wines with varietal, vintage, and tasting notes
- Key facts: 612 m altitude, 3.2 hectares, 3,120 bottles a year
- A quiet map of the island and its coordinates
- A visit section with contact details
- A mobile menu and anchor navigation that highlights where you are
- Respects reduced-motion settings

## Run it locally

You'll need [Bun](https://bun.sh) and Node 22.23.4 or newer.

```bash
bun install
bun run dev       # http://localhost:4321
```

To build the static site:

```bash
bun run build     # output in dist/
```

## Good to know

- PARDUS is a fictional estate. Any resemblance to an actual winery is coincidental.
- Copy, wines, and visit details all come from `src/data/site.ts` — the easiest place to make changes.
- Photography is from Unsplash, cropped and graded for this project.
- The output is fully static, so it can be hosted anywhere.

## Built with

Astro, plain CSS, and self-hosted variable fonts.

## License

MIT
