# Generation Engine

## Overview

The generation engine processes templates with user configurations to produce downloadable project packages.

## How It Works

### 1. File Filtering

Files with conditions are evaluated against the selected options. Files whose conditions return `false` are excluded from the output.

### 2. Placeholder Replacement

All placeholders in file contents are replaced with actual values:

```
{{projectName}} → "my-app"
{{packageManager}} → "npm"
{{styling}} → "tailwind"
```

### 3. ZIP Packaging

The generated files are packaged into a ZIP archive using JSZip and made available for download.

## API

### generateFiles(template, config)

Returns an array of generated files with placeholders replaced.

```typescript
const files = generateFiles(template, config)
// [{ path: "package.json", content: "..." }, ...]
```

### generateZip(template, config)

Generates a ZIP blob for download.

```typescript
const blob = await generateZip(template, config)
// Blob containing the ZIP file
```

### getPreviewFiles(template, config)

Returns files for preview without generating a ZIP.

```typescript
const files = getPreviewFiles(template, config)
// Same as generateFiles, used for UI preview
```

## Client-Side Generation

Generation happens entirely in the browser:
- No server round-trips required
- Works offline after initial load
- Fast and responsive user experience

## Download Flow

1. User clicks "Generate Project"
2. Engine processes template with configuration
3. JSZip creates ZIP archive in memory
4. Blob URL is created for download
5. Browser triggers file download
6. Blob URL is cleaned up
