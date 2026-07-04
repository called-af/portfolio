import { ReactNode } from "react"
import clsx from "clsx"
import {
  type BadgeVariant,
  badgeVariantStyles,
  badgeDotVariants,
} from "@/app/utils/Tokens"

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  dot?: boolean
  className?: string
}

export default function Badge({
  children,
  variant = "default",
  dot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5",
        "text-[10px] font-bold uppercase tracking-wider",
        "border-2 border-(--ds-border-color)",
        badgeVariantStyles[variant],
        className
      )}
      style={{
        fontFamily: "var(--font-body, sans-serif)",
        imageRendering: "pixelated",
        boxShadow: "2px 2px 0 var(--ds-shadow-color)",
      }}
    >
      {dot && (
        <span
          className={clsx(
            "w-1.5 h-1.5 rounded-none border border-black/20",
            badgeDotVariants[variant]
          )}
        />
      )}
      {children}
    </span>
  )
}