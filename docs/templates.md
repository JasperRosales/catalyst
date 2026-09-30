# Template System

## Overview

Templates define the structure and configuration options for generated projects. Each template is a self-contained definition that includes metadata, configurable options, and file templates.

## Template Definition

```typescript
interface Template {
  id: string                    // Unique identifier
  name: string                  // Display name
  description: string           // Short description
  category: string              // Category (Frontend, Backend, etc.)
  language: string              // Programming language
  framework: string             // Framework name
  version: string               // Template version
  options: TemplateOption[]     // Configuration options
  files: TemplateFile[]         // File definitions
}
```

## Configuration Options

Options define what users can configure:

```typescript
interface TemplateOption {
  id: string                    // Option identifier
  label: string                 // Display label
  description?: string          // Help text
  type: "select" | "checkbox" | "text"
  choices?: string[]            // For select type
  default: string | boolean     // Default value
}
```

### Option Types

- **select**: Dropdown with predefined choices
- **checkbox**: Boolean toggle
- **text**: Free-form text input

## File Definitions

Files define the project structure:

```typescript
interface TemplateFile {
  path: string                  // File path in project
  content: string               // File content with placeholders
  condition?: (options) => boolean  // Optional condition
}
```

## Placeholders

Files support placeholders that are replaced during generation:

- `{{projectName}}` - The user-specified project name
- `{{templateId}}` - The template identifier
- `{{optionId}}` - Any option value (e.g., `{{packageManager}}`)

## Conditional Files

Files can be conditionally included based on options:

```typescript
{
  path: "vitest.config.ts",
  content: "...",
  condition: (options) => options.testing === true
}
```

## Creating a Template

1. Add a new template object to `lib/templates.ts`
2. Define metadata (name, description, category, etc.)
3. Add configuration options
4. Define files with placeholders
5. The template automatically appears in the UI

## Best Practices

- Use descriptive option IDs
- Provide sensible defaults
- Keep file content concise
- Use placeholders for all user-configurable values
- Test templates with different option combinations
