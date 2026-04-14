import clsx from "clsx"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "success" | "warning" | "danger" | "info" | "purple"
  dot?: boolean
  className?: string
}

export default function Badge({
  children,
  variant = "default",
  dot = false,
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-neutral-100 text-neutral-700",
    success: "bg-emerald-100 text-emerald-800",
    warning: "bg-amber-100 text-amber-800",
    danger: "bg-rose-100 text-rose-800",
    info: "bg-sky-100 text-sky-800",
    purple: "bg-purple-100 text-purple-800",
  }

  const dotVariants = {
    default: "bg-neutral-500",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-rose-500",
    info: "bg-sky-500",
    purple: "bg-purple-500",
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 px-3 py-1 w-fit text-xs font-semibold uppercase tracking-widest",
        variants[variant],
        className
      )}
    >
      {dot && (
        <span
          className={clsx(
            "w-2 h-2 animate-pulse",
            dotVariants[variant]
          )}
        />
      )}
      {children}
    </span>
  )
}