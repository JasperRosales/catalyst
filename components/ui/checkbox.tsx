import * as React from "react"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Checkbox({
  className = "",
  label,
  ...props
}: CheckboxProps) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        className={`brutalist-checkbox ${className}`}
        {...props}
      />
      {label && (
        <label className="text-brutalist text-sm cursor-pointer">
          {label}
        </label>
      )}
    </div>
  )
}
