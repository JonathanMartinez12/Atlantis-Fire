# GitHub Copilot Instructions for Atlantis-Fire ✅

Purpose
- Short: A small, TypeScript Next.js (app-router) marketing site for a holding company using Tailwind CSS and simple component composition.

Quick start (commands you can run locally)
- Install: `npm install`
- Dev: `npm run dev` (Next.js dev server on :3000)
- Build: `npm run build` → `npm start` (production)
- Lint: `npm run lint`
- Deploy: configured for Vercel via `vercel.json` (uses `npm run build`)

High-level overview (big picture)
- App uses Next.js app directory (server components by default). See `app/layout.tsx` for site layout and metadata.
- Content and authoritative copy live in `lib/data/*` (e.g., `siteContent.ts`, `companies.ts`). Update these files to change copy.
- UI is componentized under `components/` with a 3‑tier split:
  - `components/layout/` - page wrappers like `Header`, `Footer`, `Container`
  - `components/sections/` - page-specific sections (e.g., `Hero`, `Portfolio`)
  - `components/ui/` - small primitives (`Button`, `Input`, `Textarea`)
- Styling: Tailwind + a small set of custom utilities in `app/globals.css` (look for `.section-padding`, `.heading-2`, `.animate-*`).

Project-specific patterns & rules
- Path alias: `@/` maps to project root (see `tsconfig.json`). Use imports like `import X from '@/components/...'`.
- Client vs Server components: components that handle state/events use `'use client'` at the top (e.g., `ContactForm.tsx`, `Button.tsx`). By default, pages and layout are server components.
- Content-first approach: textual changes should be done in `lib/data/siteContent.ts`. Example: change homepage hero by editing `homeContent.hero`.
- Adding a company: update `lib/data/companies.ts` and add the logo to `public/images/`.
- Images: served from `public/` and referenced as `/images/<name>`.
- Tailwind content list must include any new folders with JSX/TSX; update `tailwind.config.ts` if you add UI outside current globs.

Examples (copy-edit & small UI changes)
- Change site title/meta: edit `siteConfig` in `lib/data/siteContent.ts` and `app/layout.tsx` uses it for metadata.
- Add a new homepage section: create `components/sections/NewSection.tsx`, export props, import & include in `app/page.tsx`, and add content to `lib/data/siteContent.ts`.

Behavioral notes & gotchas ⚠️
- Contact form is client-only and currently simulates submission (no API/back-end configured). If you wire it to an endpoint, add an `app/api` route or external integration and add tests.
- No test harness present. Prefer small incremental PRs and add tests if you introduce logic.
- No special CI configured beyond Vercel; PRs will not auto-run tests unless you add a pipeline.

Where to look first (important files)
- `app/layout.tsx` — global layout, metadata, and JSON-LD
- `app/page.tsx`, `app/about/page.tsx`, `app/companies/page.tsx` — main routes
- `components/sections/ContactForm.tsx` — client form and validation example
- `components/ui/Button.tsx`, `Input.tsx` — UI primitives
- `lib/data/siteContent.ts`, `lib/data/companies.ts` — primary content source
- `tailwind.config.ts` + `app/globals.css` — theme variables and utilities
- `vercel.json` / `package.json` — build & deploy behavior

When making changes, follow these conventions
- Keep components small and focused; prefer adding new `sections/` components instead of large monolithic pages.
- For copy changes, update `lib/data/*` first; layout and sections consume this content.
- Use existing Tailwind utility classes and global styles instead of adding ad-hoc CSS. Add tokens (colors, fonts) in `tailwind.config.ts` only when needed.

If you need to add back-end behavior (forms, CRM, email)
- Ask for the preferred provider (SendGrid, Netlify Forms, serverless function, etc.) and credentials before implementing.
- Prefer `app/api` route server handlers (Next.js API) or external service calls from server components.

PR checklist (use this while authoring):
- Run `npm run dev` and verify the change locally
- Text changes updated in `lib/data/*` where applicable
- New UI code has `use client` only when it uses hooks or browser-only APIs
- Add images to `public/images/` and reference via `/images/` path
- Update `tailwind.config.ts` only if adding theme tokens or new content globs

Questions for maintainers
- Is there an external service to use for the contact form (email/CRM)?
- Any preferred code formatting/lint rules beyond `next lint`?

---
If anything above is unclear or you want the instructions to include additional conventions (tests, CI, API integrations), tell me which areas to expand and I will iterate. 💬