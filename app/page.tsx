import { templates, getAllCategories } from "@/lib/templates"
import { TemplateCard } from "@/components/template-card"

export default function Home() {
  const categories = getAllCategories()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-[3px] border-border bg-neon-yellow">
        <div className="mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border-[3px] border-border bg-accent">
              <span className="text-brutalist text-lg text-white">C</span>
            </div>
            <h1 className="text-brutalist text-2xl text-black">
              CATALYST
            </h1>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#templates" className="text-brutalist text-sm text-black hover:underline">
              TEMPLATES
            </a>
            <a href="https://github.com" className="text-brutalist text-sm text-black hover:underline">
              GITHUB
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-[3px] border-border bg-neon-pink py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-brutalist text-5xl text-black mb-4">
            PROJECT TEMPLATE GENERATOR
          </h2>
          <p className="text-lg text-black/80 font-bold max-w-2xl mx-auto">
            Select a technology stack, configure your project, and generate a ready-to-use template. Fast, simple, and developer-friendly.
          </p>
        </div>
      </section>

      {/* Main Content - Spring Initializr Style */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Categories */}
          <aside className="lg:col-span-3">
            <div className="brutalist-card bg-card sticky top-6">
              <div className="border-b-[3px] border-border bg-neon-green p-4">
                <h3 className="text-brutalist text-lg text-black">
                  CATEGORIES
                </h3>
              </div>
              <div className="p-4">
                <nav className="flex flex-col gap-2">
                  {categories.map((category, index) => (
                    <a
                      key={category}
                      href={`#${category.toLowerCase().replace("-", "")}`}
                      className="brutalist-shadow-sm border-[3px] border-border bg-secondary px-4 py-3 text-brutalist text-sm hover:bg-neon-yellow transition-colors"
                    >
                      <span className="text-accent mr-2">{String(index + 1).padStart(2, "0")}</span>
                      {category}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content - Templates */}
          <div className="lg:col-span-9">
            {categories.map((category) => (
              <section
                key={category}
                id={category.toLowerCase().replace("-", "")}
                className="mb-12"
              >
                <div className="brutalist-shadow-sm border-[3px] border-border bg-neon-purple p-4 mb-6">
                  <h3 className="text-brutalist text-2xl text-white">
                    {category}
                  </h3>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {templates
                    .filter((t) => t.category === category)
                    .map((template) => (
                      <TemplateCard key={template.id} template={template} />
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-[3px] border-border bg-neon-blue py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-brutalist text-sm text-black">
            CATALYST — PROJECT TEMPLATE GENERATOR
          </p>
          <p className="text-xs text-black/70 mt-2 font-bold">
            Built with Next.js, React, and TypeScript
          </p>
        </div>
      </footer>
    </div>
  )
}
