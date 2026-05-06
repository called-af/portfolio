// utils/Tokens.ts

export type Shadow = "sm" | "md" | "lg"

/* =========================
   SHADOW
========================= */

export const shadowOffset: Record<Shadow, string> = {
  sm: "top-[3px] left-[3px]",
  md: "top-[4px] left-[4px]",
  lg: "top-[6px] left-[6px]",
}

export const hoverTranslate: Record<Shadow, string> = {
  sm: "hover:-translate-x-[3px] hover:-translate-y-[3px]",
  md: "hover:-translate-x-1 hover:-translate-y-1",
  lg: "hover:-translate-x-[6px] hover:-translate-y-[6px]",
}

/* =========================
   BASE UTILITIES
========================= */

export const baseBorder = `
  border-[var(--ds-border-width)]
  border-[var(--ds-border-color)]
`

export const shadowLayer = `
  absolute w-full h-full rounded-md
  bg-[var(--ds-shadow-color)]
  opacity-[var(--ds-shadow-opacity)]
`

export const motionBase = `
  transition-transform duration-150
  ease-[cubic-bezier(.22,.68,0,1.2)]
`

/* =========================
   VARIANTS
========================= */

export type CardVariant = "yellow" | "teal" | "coral" | "purple" | "white"

export const cardVariantStyles: Record<CardVariant, string> = {
  yellow: "bg-[var(--ds-card-yellow)]",
  teal: "bg-[var(--ds-card-teal)]",
  coral: "bg-[var(--ds-card-coral)]",
  purple: "bg-[var(--ds-card-purple)]",
  white: "bg-[var(--ds-card-white)]",
}

export type ButtonVariant = "primary" | "secondary" | "outline" | "danger"

export const buttonVariantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[var(--ds-btn-primary)] text-[var(--ds-btn-text)]",
  secondary: "bg-[var(--ds-btn-secondary)] text-[var(--ds-btn-text)]",
  outline: "bg-[var(--ds-btn-outline)] text-[var(--ds-ink)]",
  danger: "bg-[var(--ds-btn-danger)] text-[var(--ds-btn-text)]",
}

export type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "purple"

export const badgeVariantStyles: Record<BadgeVariant, string> = {
  default: "bg-[var(--ds-neutral-bg)] text-[var(--ds-neutral-text)]",
  success: "bg-[var(--ds-success-bg)] text-[var(--ds-success-text)]",
  warning: "bg-[var(--ds-warning-bg)] text-[var(--ds-warning-text)]",
  danger: "bg-[var(--ds-danger-bg)] text-[var(--ds-danger-text)]",
  info: "bg-[var(--ds-info-bg)] text-[var(--ds-info-text)]",
  purple: "bg-[var(--ds-purple-bg)] text-[var(--ds-purple-text)]",
}

export const badgeDotVariants: Record<BadgeVariant, string> = {
  default: "bg-[var(--ds-neutral-dot)]",
  success: "bg-[var(--ds-success-dot)]",
  warning: "bg-[var(--ds-warning-dot)]",
  danger: "bg-[var(--ds-danger-dot)]",
  info: "bg-[var(--ds-info-dot)]",
  purple: "bg-[var(--ds-purple-dot)]",
}