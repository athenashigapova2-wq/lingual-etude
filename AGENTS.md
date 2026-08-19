# Repository guidelines

## Project context

Lingual Étude is the React application for Ami Studio. It contains the public landing page, authentication, the student dashboard and an admin area. Supabase provides authentication, database access and file storage.

Start with `README.md` for setup, environment variables and deployment details.

## Key files

- `src/api/appApi.js`: Supabase client and application data operations.
- `src/pages/`: public and authentication pages.
- `src/pages/dashboard/`: authenticated student and admin pages.
- `src/components/landing/`: public landing-page sections.
- `.github/workflows/deploy.yml`: GitHub Pages deployment.

## Working conventions

- Keep secrets out of git; use `.env.local` during development.
- Preserve the `@` alias for imports from `src/`.
- Reuse the existing UI components and Tailwind tokens before adding new patterns.
- Keep Russian and English copy in sync in bilingual components.
- Treat Supabase Row Level Security as the authorization boundary.
- Run `npm run lint`, `npm run typecheck` and `npm run build` before finishing changes.
