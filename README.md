# Catalyst

A web-based project template generator for creating software projects across different programming languages, frameworks, and development environments.

## Overview

Catalyst provides a centralized interface where developers can select a technology stack, configure project options, and generate a ready-to-use project template. The UI follows a **neo-brutalism** design with a **Spring Initializr**-inspired layout.

```text
Select Technology → Configure Project → Review Configuration → Generate Project → Download Project → Start Development
```

## Design

- **Neo-Brutalism**: Bold borders, hard shadows, high contrast, raw aesthetics
- **Spring Initializr Layout**: Left sidebar with steps, main content area, right preview panel

## Features

- **Template Browser** - Browse available project templates by category
- **Project Configuration** - Configure project name, package manager, styling, testing, and more
- **Live Preview** - See the project structure before generating
- **One-Click Generation** - Generate and download a ZIP file with your project
- **Multi-Language Support** - TypeScript, Python, and more
- **Framework Support** - React, Next.js, Express, Flask, and more

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Templates

| Template | Language | Framework | Category |
|----------|----------|-----------|----------|
| React + TypeScript | TypeScript | React | Frontend |
| Next.js | TypeScript | Next.js | Full-stack |
| Express + TypeScript | TypeScript | Express | Backend |
| Python Flask | Python | Flask | Backend |

## Documentation

| Document | Description |
|----------|-------------|
| [Architecture](docs/architecture.md) | System architecture and design decisions |
| [Templates](docs/templates.md) | Template system and how to create templates |
| [Generation](docs/generation.md) | Project generation engine |
| [API](docs/api.md) | API reference for core libraries |

## Project Structure

```text
catalyst/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home - template browser
│   └── templates/[id]/    # Template configuration page
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── template-card.tsx # Template display card
│   ├── config-form.tsx   # Configuration form
│   └── preview-panel.tsx # Project preview
├── lib/                   # Core libraries
│   ├── types.ts          # TypeScript type definitions
│   ├── templates/        # Template definitions (split by framework)
│   └── generator.ts      # Generation engine
└── docs/                 # Documentation
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run typecheck` | Run TypeScript type checking |

## License

This project is licensed under the MIT License.
