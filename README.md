# Nikita Singh — Portfolio

Smooth animated personal portfolio for [dev-nikita-singh](https://github.com/dev-nikita-singh), built to live on GitHub Pages at [dev-nikita-singh.github.io](https://dev-nikita-singh.github.io).

## Features

- Soft soul cursor (difference invert) with a real fixed pointer tip
- About assemble / disperse on scroll (bidirectional)
- Sticky Interests / Projects panels; continuous Experience timeline
- Instagram-style 2D tilt on cards
- Blog essays with categories, tags, related links, and detail pages
- Hero socials (GitHub, LinkedIn, X, Instagram) + jump to blogs

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Canvas 2D soul cursor

## Run locally

```bash
npm install
npm run dev -- --port 4321
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

## Content

Edit everything in `lib/data.ts`:

- `profile` — name, bio, company
- `socials` — GitHub / LinkedIn / X / Instagram URLs
- `projects`, `interests`, `experiences`
- `blogPosts` (exported sorted as `blogs`) — essays

### Adding a blog

Append an object to `blogPosts` in `lib/data.ts`:

```ts
{
  slug: "my-new-essay",
  title: "My new essay",
  excerpt: "One-line summary.",
  date: "2026-10-01",          // YYYY-MM-DD — newest sorts first
  category: "Systems",         // filter chip on the blogs section
  tags: ["agents", "shipping"],
  links: [
    { label: "Repo", href: "https://github.com/...", kind: "github" },
  ],
  readMinutes: 6,
  image: "/images/ai-systems.jpg",
  content: [
    "Paragraph one…",
    "Paragraph two…",
  ],
}
```

Detail pages are generated at `/blog/[slug]`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
