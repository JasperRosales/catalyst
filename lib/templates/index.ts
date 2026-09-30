import type { Template } from "../types"
import { reactTemplate } from "./react"
import { nextjsTemplate } from "./nextjs"
import { expressTemplate } from "./express"
import { flaskTemplate } from "./flask"

export const templates: Template[] = [
  reactTemplate,
  nextjsTemplate,
  expressTemplate,
  flaskTemplate,
]

export function getTemplate(id: string): Template | undefined {
  return templates.find((t) => t.id === id)
}

export function getTemplatesByCategory(category: string): Template[] {
  return templates.filter((t) => t.category === category)
}

export function getAllCategories(): string[] {
  return [...new Set(templates.map((t) => t.category))]
}
