import { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx"
import {
  type ButtonVariant,
  type Shadow,
  buttonVariantStyles,
  shadowOffset,
  hoverTranslate,
  shadowLayer,
  baseBorder,
  motionBase,
} from "@/app/utils/Tokens"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  shadow?: Shadow
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export default function Button({
  children,
  variant = "primary",
  shadow = "sm",
  isLoading = false,
  disabled,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <div className="relative inline-block">
      <div className={clsx(shadowLayer, shadowOffset[shadow])} />

      <button
        disabled={isDisabled}
        className={clsx(
          "relative inline-flex items-center gap-2 px-4 py-2 border-(length:--ds-border-width) rounded-sm font-medium",
          baseBorder,
          motionBase,
          !isDisabled && hoverTranslate[shadow],
          buttonVariantStyles[variant],
          isDisabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {isLoading ? "Loading..." : (
          <>
            {leftIcon && <span>{leftIcon}</span>}
            {children}
            {rightIcon && <span>{rightIcon}</span>}
          </>
        )}
      </button>
    </div>
  )
}