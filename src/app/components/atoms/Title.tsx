import { HTMLAttributes } from "react"
import clsx from "clsx"

type TitleVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: TitleVariant
}

const styles: Record<TitleVariant, string> = {
  h1: "text-8xl font-bold tracking-tight",
  h2: "text-6xl font-semibold tracking-tight",
  h3: "text-4xl font-semibold",
  h4: "text-2xl font-medium",
  h5: "text-xl font-medium",
  h6: "text-lg font-medium",
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
      className={clsx(styles[as], 
        "font-black tracking-tight",
        "text-(--ds-ink)",
        "font-(--font-orbitron)", className)}
      {...props}
    >
      {children}
    </Component>
  )
}
