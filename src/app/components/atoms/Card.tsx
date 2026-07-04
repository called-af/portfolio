import { ReactNode } from "react"
import clsx from "clsx"
import { type CardVariant, cardVariantStyles } from "@/app/utils/Tokens"

interface CardProps {
  children: ReactNode
  className?: string
  variant?: CardVariant
}

export default function Card({
  children,
  className,
  variant = "yellow",
}: CardProps) {
  return (
    <div
      className={clsx(
        "relative border-[3px] border-(--ds-border-color) p-5 bg-(--ds-paper-raised)",
        cardVariantStyles[variant],
        className
      )}
      style={{
        boxShadow: "4px 4px 0 var(--ds-shadow-color)",
        imageRendering: "pixelated",
      }}
    >
      {children}
    </div>
  )
}