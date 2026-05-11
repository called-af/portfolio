import { ReactNode } from "react"
import clsx from "clsx"
import {
  type BadgeVariant,
  badgeVariantStyles,
  badgeDotVariants,
  shadowLayer,
  baseBorder,
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
}: BadgeProps) {
  return (
    <div className="relative inline-block">
      <div className={clsx(shadowLayer, "top-0.5 left-0.5")} />

      <span
        className={clsx(
          "relative flex items-center gap-2 px-3 py-1 text-sm font-bold border-(length:--ds-border-width) rounded-sm",
          baseBorder,
          badgeVariantStyles[variant]
        )}
      >
        {dot && (
          <span className={clsx("w-2 h-2 rounded-full", badgeDotVariants[variant])} />
        )}
        {children}
      </span>
    </div>
  )
}