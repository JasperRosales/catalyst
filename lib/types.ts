export interface TemplateOption {
  id: string
  label: string
  description?: string
  type: "select" | "checkbox" | "text"
  choices?: string[]
  default: string | boolean
}

export interface TemplateFile {
  path: string
  content: string
  condition?: (options: Record<string, string | boolean>) => boolean
}

export interface Template {
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

export interface ProjectConfig {
  templateId: string
  projectName: string
  options: Record<string, string | boolean>
}

export interface GeneratedFile {
  path: string
  content: string
}
