import Link from "next/link"
import type { Template } from "@/lib/types"

interface TemplateCardProps {
  template: Template
}

const colorMap: Record<string, string> = {
  Frontend: "bg-neon-yellow",
  "Full-stack": "bg-neon-blue",
  Backend: "bg-neon-green",
}

export function TemplateCard({ template }: TemplateCardProps) {
  const colorClass = colorMap[template.category] || "bg-neon-purple"

  return (
    <Link
      href={`/templates/${template.id}`}
      className="brutalist-card group block bg-card p-0 overflow-hidden"
    >
      <div className={`${colorClass} border-b-[3px] border-border p-4`}>
        <h3 className="text-brutalist text-lg text-black">
          {template.name}
        </h3>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-4 min-h-[3rem]">
          {template.description}
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="border-2 border-border bg-secondary px-2 py-1 text-xs font-bold uppercase">
            {template.language}
          </span>
          <span className="border-2 border-border bg-secondary px-2 py-1 text-xs font-bold uppercase">
            {template.framework}
          </span>
          <span className="border-2 border-border bg-neon-pink px-2 py-1 text-xs font-bold uppercase text-black">
            v{template.version}
          </span>
        </div>
      </div>
    </Link>
  )
}
