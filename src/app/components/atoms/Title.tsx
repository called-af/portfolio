import { HTMLAttributes } from "react"
import clsx from "clsx"

type TitleVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: TitleVariant
  pixelStyle?: boolean
}

const styles: Record<TitleVariant, string> = {
  h1: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
  h2: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
  h3: "text-2xl sm:text-3xl lg:text-3xl font-bold",
  h4: "text-xl sm:text-2xl lg:text-xl font-bold",
  h5: "text-lg sm:text-xl lg:text-lg font-bold",
  h6: "text-base sm:text-lg lg:text-base font-bold",
}

export default function Title({
  as = "h1",
  className,
  children,
  pixelStyle = false,
  ...props
}: TitleProps) {
  const Component = as

  return (
    <Component
      className={clsx(
        styles[as],
        "font-black tracking-tight",
        "text-(--ds-ink)",
        // Minecraft text shadow for depth
        "drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]",
        className
      )}
      style={{
        fontFamily: pixelStyle
          ? "var(--font-display, monospace)"
          : "var(--font-body, sans-serif)",
        imageRendering: "pixelated",
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
