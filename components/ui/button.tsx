import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "accent" | "outline" | "neon-yellow" | "neon-pink" | "neon-blue" | "neon-green" | "neon-purple"
  size?: "sm" | "md" | "lg"
}

export function Button({
  className = "",
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  const variants = {
    default: "bg-primary text-primary-foreground",
    accent: "bg-accent text-accent-foreground",
    outline: "bg-background text-foreground border-foreground",
    "neon-yellow": "bg-neon-yellow text-black",
    "neon-pink": "bg-neon-pink text-black",
    "neon-blue": "bg-neon-blue text-black",
    "neon-green": "bg-neon-green text-black",
    "neon-purple": "bg-neon-purple text-white",
  }

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-11 px-5 text-sm",
    lg: "h-14 px-8 text-base",
  }

  return (
    <button
      className={`brutalist-btn inline-flex items-center justify-center uppercase tracking-wider disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
}
