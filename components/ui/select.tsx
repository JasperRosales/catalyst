import * as React from "react"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
}

export function Select({
  className = "",
  label,
  children,
  ...props
}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-brutalist text-sm">
          {label}
        </label>
      )}
      <select
        className={`brutalist-select flex h-11 w-full bg-background px-4 py-2 text-sm ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  )
}
