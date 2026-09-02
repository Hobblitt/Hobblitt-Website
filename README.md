# Hobblitt

Hobblitt is a technology-first creative agency website and application monorepo.

The repository contains the public Next.js website, an Express API for lead capture, and a shared Prisma/Neon database package.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Express 5
- Prisma 7
- Neon PostgreSQL
- pnpm
- Turborepo
- Tailwind CSS v4
- shadcn/ui
- Lucide React
- GitHub Actions

## Repository Structure

```text
Hobblitt-Website/
│
├── apps/
│   ├── web/                       # Next.js frontend
│   │   ├── app/                   # Routes and pages
│   │   ├── components/            # Hobblitt-specific UI
│   │   ├── api/                   # Frontend API clients
│   │   └── lib/                   # Frontend configuration and content
│   │
│   └── api/                       # Express + TypeScript backend
│       └── src/
│           ├── config/            # Environment configuration
│           ├── controllers/       # HTTP request/response handling
│           ├── middleware/        # Error handling, rate limiting, etc.
│           ├── routes/            # API routes
│           ├── services/          # Business/database operations
│           ├── app.ts             # Express application
│           └── server.ts          # HTTP server entrypoint
│
├── packages/
│   ├── database/                  # Prisma 7 + Neon database package
│   │   ├── prisma/
│   │   │   ├── migrations/
│   │   │   └── schema.prisma
│   │   ├── src/
│   │   └── prisma.config.ts
│   │
│   └── ui/                        # Shared UI components
│
├── .github/
│   └── workflows/
│       └── ci.yml                 # GitHub Actions quality pipeline
│
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
└── turbo.json

