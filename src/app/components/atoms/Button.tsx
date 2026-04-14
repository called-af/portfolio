import { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx"

type ButtonVariant = "primary" | "secondary" | "outline" | "danger"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  widthFull?: boolean
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export default function Button({
  children,
  widthFull = false,
  variant = "primary",
  isLoading = false,
  disabled,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={clsx(
        "inline-flex items-center justify-center gap-2 font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 py-2",
        widthFull ? "w-full px-4" : "px-4",
        {
          "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500":
            variant === "primary",
          "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500":
            variant === "secondary",
          "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400":
            variant === "outline",
          "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500":
            variant === "danger",
          "opacity-50 cursor-not-allowed": disabled || isLoading,
        },
        className
      )}
      {...props}
    >
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </>
      )}
    </button>
  )
}