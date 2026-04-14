import { HTMLAttributes } from "react"
import clsx from "clsx"

type TitleVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: TitleVariant
}

const styles: Record<TitleVariant, string> = {
  h1: "text-6xl font-bold tracking-tight",
  h2: "text-4xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
}

export default function Title({
  as = "h1",
  className,
  children,
  ...props
}: TitleProps) {
  const Component = as

  return (
    <Component
      className={clsx(styles[as], "text-gray-900", className)}
      {...props}
    >
      {children}
    </Component>
  )
}
