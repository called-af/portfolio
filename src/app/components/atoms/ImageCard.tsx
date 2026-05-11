import Image, { StaticImageData } from "next/image"
import clsx from "clsx"
import {
  type Shadow,
  shadowLayer,
  shadowOffset,
  hoverTranslate,
  baseBorder,
  motionBase,
} from "@/app/utils/Tokens"

type ImageItem = {
  src: string | StaticImageData
  alt: string
  width: number
  height: number
}

interface ImageCardProps {
  imagedatas: ImageItem
  shadow?: Shadow
  className?: string
}

export default function ImageCard({
  imagedatas,
  shadow = "md",
  className,
}: ImageCardProps) {
  return (
    <div className={clsx("relative inline-block", className)}>
      <div className={clsx(shadowLayer, shadowOffset[shadow])} />

      <div
        className={clsx(
          "relative overflow-hidden rounded-md",
          baseBorder,
          motionBase,
          hoverTranslate[shadow],
          "bg-(--ds-paper-raised)"
        )}
      >
        <Image {...imagedatas} />
      </div>
    </div>
  )
}