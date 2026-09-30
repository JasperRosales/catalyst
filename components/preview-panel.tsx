"use client"

import * as React from "react"
import type { Template, ProjectConfig, GeneratedFile } from "@/lib/types"
import { getPreviewFiles } from "@/lib/generator"

interface PreviewPanelProps {
  template: Template
  config: ProjectConfig
}

export function PreviewPanel({ template, config }: PreviewPanelProps) {
  const files = getPreviewFiles(template, config)

  return (
    <div className="brutalist-card bg-card">
      <div className="border-b-[3px] border-border bg-neon-blue p-4">
        <h3 className="text-brutalist text-lg text-black">
          Project Structure
        </h3>
        <p className="text-sm text-black/70 font-bold">
          {files.length} files will be generated
        </p>
      </div>
      <div className="p-4">
        <div className="font-mono text-sm">
          <div className="font-bold text-accent text-base mb-2">
            {config.projectName}/
          </div>
          <div className="ml-4 flex flex-col gap-1">
            {files.map((file) => (
              <FileItem key={file.path} file={file} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FileItem({ file }: { file: GeneratedFile }) {
  const parts = file.path.split("/")
  const name = parts.pop()
  const path = parts.join("/")

  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <span className="text-xs font-bold text-neon-purple">[FILE]</span>
      {path && <span className="text-xs text-muted-foreground">{path}/</span>}
      <span className="font-bold">{name}</span>
    </div>
  )
}
