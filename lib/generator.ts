import JSZip from "jszip"
import type { Template, ProjectConfig, GeneratedFile } from "./types"

export function generateFiles(
  template: Template,
  config: ProjectConfig
): GeneratedFile[] {
  const files: GeneratedFile[] = []

  for (const file of template.files) {
    if (file.condition && !file.condition(config.options)) {
      continue
    }

    const content = replacePlaceholders(file.content, config)
    files.push({ path: file.path, content })
  }

  return files
}

function replacePlaceholders(
  content: string,
  config: ProjectConfig
): string {
  let result = content
  result = result.replace(/\{\{projectName\}\}/g, config.projectName)
  result = result.replace(/\{\{templateId\}\}/g, config.templateId)

  for (const [key, value] of Object.entries(config.options)) {
    result = result.replace(
      new RegExp(`\\{\\{${key}\\}\\}`, "g"),
      String(value)
    )
  }

  return result
}

export async function generateZip(
  template: Template,
  config: ProjectConfig
): Promise<Blob> {
  const zip = new JSZip()
  const files = generateFiles(template, config)

  for (const file of files) {
    zip.file(file.path, file.content)
  }

  return zip.generateAsync({ type: "blob" })
}

export function getPreviewFiles(
  template: Template,
  config: ProjectConfig
): GeneratedFile[] {
  return generateFiles(template, config)
}
