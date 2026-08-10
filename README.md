# Hobblitt

Hobblitt is a monorepo containing the Hobblitt web application and backend services.

## Tech Stack

- Next.js
- TypeScript
- Express.js
- pnpm
- Turborepo
- Tailwind CSS
- shadcn/ui

## Repository Structure

```text
Hobblitt-Website/
│
├── apps/
│   ├── web/                  # Next.js frontend
│   │   ├── app/              # Routes and pages
│   │   ├── components/       # Hobblitt-specific components
│   │   └── ...
│   │
│   └── api/                  # Express + TypeScript backend
│       └── src/
│
├── packages/
│   ├── ui/                   # Shared UI components / shadcn
│   ├── types/                # Shared TypeScript types
│   └── config/               # Shared configuration
│
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── pnpm-lock.yaml

---

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

Clone the repository and install dependencies from the root:

```bash
git clone <repository-url>
cd Hobblitt-Website
pnpm install

---

## Development

pnpm turbo dev

---

## Workspace Commands

pnpm install        # Install dependencies
pnpm turbo dev     # Start development servers
pnpm turbo build   # Build all applications
pnpm turbo lint    # Lint all applications
pnpm turbo typecheck # Type-check all applications

---

## Development Rules

- Run pnpm commands from the repository root unless working specifically inside an app/package.
- Do not create additional nested pnpm workspaces.
- Do not commit `node_modules`, `.env` files, or build output.
- Keep application-specific code inside `apps/`.
- Keep genuinely shared code inside `packages/`.
- Do not create a package unless there is a real need for code sharing.
- Do not push directly to `main` for feature work.
- Create a feature branch and open a Pull Request for changes.