import { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger"
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export default function Button({
  children,
  variant = "primary",
  isLoading = false,
  disabled,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <button
      disabled={isDisabled}
      className={clsx(
        "mc-button-clean",
        `mc-button-clean-${variant}`,
        isDisabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={{ fontFamily: "var(--font-body, sans-serif)" }}
      {...props}
    >
      {isLoading ? "Loading..." : (
        <>
          {leftIcon && <span className="flex items-center shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="flex items-center shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  )
}