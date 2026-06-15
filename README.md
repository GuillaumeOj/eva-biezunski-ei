# Eva Biezunski — Avocate

Marketing website for **Eva Biezunski**, a business-law attorney (avocate au Barreau de Lyon)
specialising in supporting self-employed healthcare professionals (médecins, dentistes,
kinésithérapeutes…).

The site is a single-page presentation covering her practice areas — company formation,
patientèle transfers, professional contracts, legal advice, litigation and compliance — along
with a digital business card (`/carte`) that exposes a downloadable vCard.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) with React 19
- [Tailwind CSS 4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) icons
- [Biome](https://biomejs.dev/) for linting and formatting
- [Vitest](https://vitest.dev/) + Testing Library for tests
- [Bun](https://bun.com/) as the package manager and task runner

## Getting started

Requires [Bun](https://bun.com/) (CI pins `1.3.14`).

```sh
bun install
bun run dev
```

The dev server runs with Turbopack at http://localhost:3000.

## Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `bun run dev`       | Start the dev server (Turbopack)             |
| `bun run build`     | Production build                             |
| `bun run start`     | Serve the production build                   |
| `bun run test`      | Run the test suite once                      |
| `bun run test:watch`| Run tests in watch mode                      |
| `bun run typecheck` | Type-check with `tsc --noEmit`               |
| `bun run lint`      | Lint and format check with Biome             |
| `bun run format`    | Format the codebase with Biome               |

## Project structure

```
src/
├── app/              # App Router routes and layout
│   ├── page.tsx      # Home page (assembles the section components)
│   ├── layout.tsx    # Root layout, metadata and JSON-LD
│   └── carte/        # Digital business card + vCard route
├── components/       # Page sections (Hero, About, Services, …) and UI primitives
├── hooks/            # useIntersectionObserver, useScrollSpy
├── lib/              # constants (site content) and vCard generation
└── __tests__/        # Vitest + Testing Library tests
public/
├── fonts/            # Museo font family
└── images/           # Logos, favicon, portrait
```

Site content (text, services, contact details, testimonials) lives in
[`src/lib/constants.ts`](src/lib/constants.ts) and is fully in French.

## Continuous integration

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on every push to `main` and on pull
requests, executing lint/format, type-check and tests with Bun.
