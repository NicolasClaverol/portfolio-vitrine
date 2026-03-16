# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Stack

- **Next.js 16** with App Router (`src/app/`)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (configured via `postcss.config.mjs`, no `tailwind.config` file)
- **Geist** font family (Sans + Mono) loaded via `next/font/google`

## Architecture

This is a fresh Next.js App Router project intended to become a portfolio/showcase site. The entry point is `src/app/page.tsx` and the root layout is `src/app/layout.tsx`.

- All routes live under `src/app/` using the file-system router
- Global styles in `src/app/globals.css`
- Static assets in `public/`
- No test framework is configured yet
