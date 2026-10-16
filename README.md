# Zuki's Portfolio

The personal website of Abdallah “Zuki” El Dessouky, built with Next.js App Router.

## Pages

- `/` — Introduction and chapter directory
- `/education` — IB subjects and school activities
- `/activities` — Filterable activity descriptions
- `/research` — Research questions and approaches
- `/awards` — Awards and honours
- `/about` — Personal introduction

The shared index and header navigate between pages. Earlier bookmarks such as `/#activities` forward to the corresponding page.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

This repository is connected to Vercel. Content is maintained in `app/content.ts`. Shared navigation and interactive entries are in `app/portfolio-ui.tsx`; the decorative geometry and progressive motion are in `app/motion.tsx`. Animation respects reduced-motion preferences and can be paused from the index.
