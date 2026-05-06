import { ReactNode } from "react"
import clsx from "clsx"
import {
  type CardVariant,
  type Shadow,
  cardVariantStyles,
  shadowOffset,
  hoverTranslate,
  shadowLayer,
  baseBorder,
  motionBase,
} from "@/app/utils/Tokens"

interface CardProps {
  children: ReactNode
  className?: string
  variant?: CardVariant
  shadow?: Shadow
}

export default function Card({
  children,
  className,
  variant = "yellow",
  shadow = "md",
}: CardProps) {
  return (
    <div className={clsx("relative inline-block", className)}>
      <div className={clsx(shadowLayer, shadowOffset[shadow])} />

      <div
        className={clsx(
          "relative border-2 rounded-md p-4",
          baseBorder,
          motionBase,
          hoverTranslate[shadow],
          cardVariantStyles[variant]
        )}
      >
        {children}
      </div>
    </div>
  )
}