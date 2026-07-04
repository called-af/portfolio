// utils/Tokens.ts — Minecraft.net style design tokens

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
  absolute w-full h-full
  bg-[var(--ds-shadow-color)]
  opacity-[var(--ds-shadow-opacity)]
`

export const motionBase = `
  transition-transform duration-100
  ease-[cubic-bezier(.22,.68,0,1.2)]
`

/* =========================
   VARIANTS — Minecraft palette
========================= */

export type CardVariant = "yellow" | "teal" | "coral" | "purple" | "white"

// Minecraft block-inspired card backgrounds
export const cardVariantStyles: Record<CardVariant, string> = {
  yellow:  "bg-[var(--ds-card-yellow)]",   // Gold block
  teal:    "bg-[var(--ds-card-teal)]",      // Diamond block
  coral:   "bg-[var(--ds-card-coral)]",     // Redstone block
  purple:  "bg-[var(--ds-card-purple)]",    // Amethyst
  white:   "bg-[var(--ds-card-white)]",     // Quartz
}

export type ButtonVariant = "primary" | "secondary" | "outline" | "danger"

// Minecraft button colors (grass green, stone, wood, redstone)
export const buttonVariantStyles: Record<ButtonVariant, string> = {
  primary:   "bg-[var(--ds-btn-primary)]   text-[var(--ds-btn-text)]",
  secondary: "bg-[var(--ds-btn-secondary)] text-[var(--ds-btn-text)]",
  outline:   "bg-[var(--ds-btn-outline)]   text-[var(--ds-ink)]",
  danger:    "bg-[var(--ds-btn-danger)]    text-[var(--ds-btn-text)]",
}

export type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "purple"

// Minecraft material-inspired badge colors
export const badgeVariantStyles: Record<BadgeVariant, string> = {
  default: "bg-[var(--ds-neutral-bg)] text-[var(--ds-neutral-text)]",  // Stone
  success: "bg-[var(--ds-success-bg)] text-[var(--ds-success-text)]",  // Grass/Emerald
  warning: "bg-[var(--ds-warning-bg)] text-[var(--ds-warning-text)]",  // Gold
  danger:  "bg-[var(--ds-danger-bg)]  text-[var(--ds-danger-text)]",   // Redstone
  info:    "bg-[var(--ds-info-bg)]    text-[var(--ds-info-text)]",      // Diamond/Water
  purple:  "bg-[var(--ds-purple-bg)]  text-[var(--ds-purple-text)]",   // Amethyst
}

export const badgeDotVariants: Record<BadgeVariant, string> = {
  default: "bg-[var(--ds-neutral-dot)]",
  success: "bg-[var(--ds-success-dot)]",
  warning: "bg-[var(--ds-warning-dot)]",
  danger:  "bg-[var(--ds-danger-dot)]",
  info:    "bg-[var(--ds-info-dot)]",
  purple:  "bg-[var(--ds-purple-dot)]",
}