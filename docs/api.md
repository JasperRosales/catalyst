# API Reference

## lib/types.ts

### Template

```typescript
interface Template {
  id: string
  name: string
  description: string
  category: string
  language: string
  framework: string
  version: string
  options: TemplateOption[]
  files: TemplateFile[]
}
```

### TemplateOption

```typescript
interface TemplateOption {
  id: string
  label: string
  description?: string
  type: "select" | "checkbox" | "text"
  choices?: string[]
  default: string | boolean
}
```

### TemplateFile

```typescript
interface TemplateFile {
  path: string
  content: string
  condition?: (options: Record<string, string | boolean>) => boolean
}
```

### ProjectConfig

```typescript
interface ProjectConfig {
  templateId: string
  projectName: string
  options: Record<string, string | boolean>
}
```

### GeneratedFile

```typescript
interface GeneratedFile {
  path: string
  content: string
}
```

## lib/templates.ts

### getTemplate(id: string): Template | undefined

Returns a template by its ID.

### getTemplatesByCategory(category: string): Template[]

Returns all templates in a category.

### getAllCategories(): string[]

Returns all unique category names.

## lib/generator.ts

### generateFiles(template: Template, config: ProjectConfig): GeneratedFile[]

Generates the list of files with placeholders replaced.

### generateZip(template: Template, config: ProjectConfig): Promise<Blob>

Generates a ZIP blob for download.

### getPreviewFiles(template: Template, config: ProjectConfig): GeneratedFile[]

Returns files for preview (alias for generateFiles).

## Components

### TemplateCard

Displays a template in the browser grid.

```tsx
<TemplateCard template={template} />
```

### ConfigForm

Renders configuration options for a template.

```tsx
<ConfigForm template={template} config={config} onChange={setConfig} />
```

### PreviewPanel

Shows a preview of generated files.

```tsx
<PreviewPanel template={template} config={config} />
```

### UI Components

- `Button` - Button with variants (default, outline, ghost)
- `Input` - Text input with label
- `Select` - Dropdown select with label
- `Checkbox` - Checkbox with label
