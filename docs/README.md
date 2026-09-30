# Catalyst Documentation

Welcome to the Catalyst documentation. This directory contains detailed documentation for each module and feature.

## Table of Contents

- [Architecture](./architecture.md) - System architecture and design decisions
- [Templates](./templates.md) - Template system and how to create templates
- [Generation](./generation.md) - Project generation engine
- [API](./api.md) - API reference for core libraries

## Quick Start

1. Browse available templates on the home page
2. Select a template to configure
3. Review the project preview
4. Generate and download your project

## Project Structure

```
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
│   ├── templates.ts      # Template registry
│   └── generator.ts      # Generation engine
└── docs/                 # Documentation
```
