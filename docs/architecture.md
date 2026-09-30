# Architecture

## Overview

Catalyst is a web-based project template generator built with Next.js, React, and TypeScript. It follows a template-driven architecture where project definitions are separate from the generation engine.

## System Design

```
┌─────────────────────────────────────────────────────┐
│                   Web Application                    │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────┐ │
│  │   Home Page │  │ Template Page│  │  Preview   │ │
│  │  (Browser)  │  │  (Config)    │  │  Panel     │ │
│  └──────┬──────┘  └──────┬───────┘  └─────┬──────┘ │
│         │                │                │        │
│         └────────────────┼────────────────┘        │
│                          │                          │
│                   ┌──────┴──────┐                   │
│                   │  Generator  │                   │
│                   │   Engine    │                   │
│                   └──────┬──────┘                   │
│                          │                          │
│                   ┌──────┴──────┐                   │
│                   │  Template   │                   │
│                   │  Registry   │                   │
│                   └─────────────┘                   │
└─────────────────────────────────────────────────────┘
```

## Components

### Web Application

The frontend is built with Next.js App Router and provides:
- Template browsing and search
- Project configuration interface
- Real-time project preview
- ZIP download functionality

### Template System

Templates are defined as TypeScript objects containing:
- Metadata (name, description, category, language, framework)
- Configuration options (select, checkbox, text inputs)
- File definitions with placeholder support

### Generation Engine

The generation engine:
1. Takes a template and user configuration
2. Filters files based on conditions
3. Replaces placeholders in file contents
4. Packages files into a downloadable ZIP

## Data Flow

1. User selects a template from the home page
2. Application loads template configuration
3. User configures project options
4. Preview updates in real-time
5. User clicks "Generate Project"
6. Engine processes template with configuration
7. ZIP file is generated and downloaded

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS 4
- **Language**: TypeScript
- **ZIP Generation**: JSZip
- **Styling**: Tailwind CSS 4
- **Theme**: next-themes with dark mode support
