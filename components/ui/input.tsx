import * as React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({
  className = "",
  label,
  type = "text",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-brutalist text-sm">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`brutalist-input flex h-11 w-full bg-background px-4 py-2 text-sm ${className}`}
        {...props}
      />
    </div>
  )
}
