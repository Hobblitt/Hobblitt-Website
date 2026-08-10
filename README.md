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

## UI Architecture

Shared UI components are maintained in:

```text
packages/ui
```

The package is available through:

```text
@hobblitt/ui
```

### Shared UI Components

Generic and reusable UI components belong in:

```text
packages/ui/src/components/
```

Examples:

- Button
- Card
- Dialog
- Input
- Badge
- Dropdown Menu

These components are managed using shadcn/ui.

### Web-Specific Components

Components specific to the Hobblitt website belong in:

```text
apps/web/components/
```

Examples:

- Navbar
- Hero
- MemberCard
- EventCard
- Footer
- Hobblitt-specific sections

### Component Rule

> Generic/reusable → `packages/ui`
>
> Hobblitt-specific → `apps/web/components`

---

## shadcn/ui

Hobblitt uses shadcn/ui with:

- Base UI
- Nova preset
- Lucide icons
- Tailwind CSS v4

There are two `components.json` files:

```text
apps/web/components.json
packages/ui/components.json
```

The `apps/web` configuration is used when running the shadcn CLI, while `packages/ui` contains the shared component configuration.

### Adding Shared UI Components

Run shadcn commands from the web workspace:

```bash
cd apps/web
pnpm dlx shadcn@latest add <component>
```

For example:

```bash
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add dropdown-menu
```

Shared components should be created inside:

```text
packages/ui/src/components/
```

### From the Repository Root

If you are already at the repository root, specify the web workspace:

```bash
pnpm dlx shadcn@latest add card -c apps/web
```

Do not run `shadcn add` from the monorepo root without specifying a workspace.

---

## Dependencies

Dependencies should be installed in the workspace that actually uses them.

### Web

Frontend-specific dependencies belong in:

```text
apps/web/package.json
```

Examples:

- Next.js
- React
- Next.js-specific libraries

### API

Backend-specific dependencies belong in:

```text
apps/api/package.json
```

Examples:

- Express
- CORS
- dotenv

### Shared UI

Dependencies required by shared UI components belong in:

```text
packages/ui/package.json
```

Examples:

- Base UI
- Lucide
- class-variance-authority
- clsx
- tailwind-merge
- tw-animate-css

> Do not install every dependency into `packages/`. A dependency belongs to the workspace that actually uses it.

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