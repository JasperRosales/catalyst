"use client"

import * as React from "react"
import type { Template, ProjectConfig } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface ConfigFormProps {
  template: Template
  config: ProjectConfig
  onChange: (config: ProjectConfig) => void
}

export function ConfigForm({ template, config, onChange }: ConfigFormProps) {
  function handleProjectNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange({ ...config, projectName: e.target.value })
  }

  function handleOptionChange(id: string, value: string | boolean) {
    onChange({
      ...config,
      options: { ...config.options, [id]: value },
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-brutalist text-xl mb-4">Project Details</h3>
        <Input
          label="Project Name"
          value={config.projectName}
          onChange={handleProjectNameChange}
          placeholder="my-project"
        />
      </div>

      <div className="border-t-[3px] border-border pt-6">
        <h3 className="text-brutalist text-xl mb-4">Configuration</h3>
        <div className="flex flex-col gap-5">
          {template.options.map((option) => {
            if (option.type === "select") {
              return (
                <Select
                  key={option.id}
                  label={option.label}
                  value={String(config.options[option.id] ?? option.default)}
                  onChange={(e) => handleOptionChange(option.id, e.target.value)}
                >
                  {option.choices?.map((choice) => (
                    <option key={choice} value={choice}>
                      {choice}
                    </option>
                  ))}
                </Select>
              )
            }

            if (option.type === "checkbox") {
              return (
                <Checkbox
                  key={option.id}
                  label={option.label}
                  checked={Boolean(config.options[option.id] ?? option.default)}
                  onChange={(e) => handleOptionChange(option.id, e.target.checked)}
                />
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
