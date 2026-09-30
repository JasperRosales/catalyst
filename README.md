# Catalyst

Catalyst is a web-based project template generator for creating software projects across different programming languages, frameworks, and development environments.

It provides a centralized workflow for selecting a technology stack, configuring project options, previewing the generated structure, and downloading a ready-to-use project template.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Workflow](#workflow)
- [Quick Start](#quick-start)
- [Available Templates](#available-templates)
- [Documentation](#documentation)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Design](#design)
- [License](#license)

## Overview

Catalyst is designed to make project setup faster and more consistent. Instead of manually assembling a project structure and configuring common tools, users can choose a template and customize the options they need through a guided interface.

The interface follows a neo-brutalist visual style and uses a step-based layout inspired by Spring Initializr:

- A left sidebar guides users through the setup steps.
- The main content area contains configuration controls.
- A preview panel shows the resulting project structure before generation.

## Features

- **Template Browser** — Browse available project templates by category.
- **Project Configuration** — Configure project names, package managers, styling, testing, and other options.
- **Live Preview** — Inspect the generated project structure before downloading it.
- **One-Click Generation** — Generate and download a ZIP archive of the configured project.
- **Multi-Language Support** — Support for TypeScript, Python, and additional languages.
- **Framework Support** — Support for React, Next.js, Express, Flask, and additional frameworks.

## Workflow

```text
Select Technology → Configure Project → Review Configuration → Generate Project → Download Project → Start Development
```

## Quick Start

Install the project dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Templates

| Template | Language | Framework | Category |
|----------|----------|-----------|----------|
| React + TypeScript | TypeScript | React | Frontend |
| Next.js | TypeScript | Next.js | Full-stack |
| Express + TypeScript | TypeScript | Express | Backend |
| Python Flask | Python | Flask | Backend |

## Documentation

The detailed documentation is organized in the [`docs/`](docs/README.md) directory. The links below mirror the documentation index in [`docs/README.md`](docs/README.md):

- [Architecture](docs/architecture.md) — System architecture and design decisions
- [Templates](docs/templates.md) — Template system and how to create templates
- [Generation](docs/generation.md) — Project generation engine
- [API](docs/api.md) — API reference for core libraries

See the [documentation index](docs/README.md) for the complete documentation table of contents and project-specific quick start information.

## Project Structure

```text
catalyst/
├── app/                    # Next.js app router pages
│   ├── page.tsx            # Home - template browser
│   └── templates/[id]/     # Template configuration page
├── components/             # React components
│   ├── ui/                 # Base UI components
│   ├── template-card.tsx   # Template display card
│   ├── config-form.tsx     # Configuration form
│   └── preview-panel.tsx   # Project preview
├── lib/                    # Core libraries
│   ├── types.ts            # TypeScript type definitions
│   ├── templates/          # Template definitions
│   └── generator.ts        # Generation engine
└── docs/                   # Documentation
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run typecheck` | Run TypeScript type checking |

## Design

- **Neo-Brutalism** — Bold borders, hard shadows, high contrast, and raw visual aesthetics.
- **Spring Initializr Layout** — A left step navigation area, central configuration workspace, and right-side preview panel.

## License

This project is licensed under the MIT License.
