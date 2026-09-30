"use client"

import * as React from "react"
import { useParams, useRouter } from "next/navigation"
import { getTemplate } from "@/lib/templates"
import { generateZip } from "@/lib/generator"
import type { ProjectConfig } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ConfigForm } from "@/components/config-form"
import { PreviewPanel } from "@/components/preview-panel"

export default function TemplatePage() {
  const params = useParams()
  const router = useRouter()
  const template = getTemplate(params.id as string)

  const [config, setConfig] = React.useState<ProjectConfig>({
    templateId: params.id as string,
    projectName: "my-project",
    options: {},
  })
  const [isGenerating, setIsGenerating] = React.useState(false)

  React.useEffect(() => {
    if (template) {
      const defaultOptions: Record<string, string | boolean> = {}
      for (const opt of template.options) {
        defaultOptions[opt.id] = opt.default
      }
      setConfig((prev) => ({ ...prev, options: defaultOptions }))
    }
  }, [template])

  if (!template) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="brutalist-card bg-card p-8 text-center max-w-md">
          <h1 className="text-brutalist text-3xl mb-4">TEMPLATE NOT FOUND</h1>
          <p className="text-muted-foreground mb-6 font-bold">
            The requested template does not exist.
          </p>
          <Button onClick={() => router.push("/")} variant="accent" size="lg">
            BACK TO TEMPLATES
          </Button>
        </div>
      </div>
    )
  }

  async function handleGenerate() {
    if (!template) return
    setIsGenerating(true)
    try {
      const blob = await generateZip(template, config)
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${config.projectName}.zip`
      a.click()
      URL.revokeObjectURL(url)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-[3px] border-border bg-neon-yellow">
        <div className="mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              size="sm"
              onClick={() => router.push("/")}
            >
              ← BACK
            </Button>
            <div className="h-8 w-[3px] bg-border" />
            <h1 className="text-brutalist text-xl text-black">
              {template.name.toUpperCase()}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="border-2 border-border bg-neon-pink px-3 py-1 text-xs font-bold uppercase text-black">
              {template.language}
            </span>
            <span className="border-2 border-border bg-neon-blue px-3 py-1 text-xs font-bold uppercase text-black">
              {template.framework}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content - Spring Initializr Style */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Steps */}
          <aside className="lg:col-span-3">
            <div className="brutalist-card bg-card sticky top-6">
              <div className="border-b-[3px] border-border bg-neon-green p-4">
                <h3 className="text-brutalist text-lg text-black">
                  STEPS
                </h3>
              </div>
              <div className="p-4">
                <nav className="flex flex-col gap-2">
                  <div className="brutalist-shadow-sm border-[3px] border-border bg-neon-yellow px-4 py-3 text-brutalist text-sm">
                    <span className="text-accent mr-2">01</span>
                    Project Details
                  </div>
                  <div className="brutalist-shadow-sm border-[3px] border-border bg-secondary px-4 py-3 text-brutalist text-sm">
                    <span className="text-accent mr-2">02</span>
                    Configuration
                  </div>
                  <div className="brutalist-shadow-sm border-[3px] border-border bg-secondary px-4 py-3 text-brutalist text-sm">
                    <span className="text-accent mr-2">03</span>
                    Review & Generate
                  </div>
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content - Configuration */}
          <div className="lg:col-span-6">
            <div className="brutalist-card bg-card">
              <div className="border-b-[3px] border-border bg-neon-pink p-4">
                <h2 className="text-brutalist text-xl text-black">
                  CONFIGURE YOUR PROJECT
                </h2>
              </div>
              <div className="p-6">
                <ConfigForm template={template} config={config} onChange={setConfig} />
              </div>
            </div>
          </div>

          {/* Right Sidebar - Preview */}
          <aside className="lg:col-span-3">
            <div className="sticky top-6 flex flex-col gap-6">
              <PreviewPanel template={template} config={config} />
              <Button
                variant="accent"
                size="lg"
                className="w-full"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? "GENERATING..." : "GENERATE PROJECT"}
              </Button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
