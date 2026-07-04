import Image, { StaticImageData } from "next/image"
import clsx from "clsx"

type ImageItem = {
  src: string | StaticImageData
  alt: string
  width: number
  height: number
}

interface ImageCardProps {
  imagedatas: ImageItem
  className?: string
}

export default function ImageCard({
  imagedatas,
  className,
}: ImageCardProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden",
        "bg-(--ds-paper-raised)",
        className
      )}
      style={{
        imageRendering: "pixelated",
      }}
    >
      <Image {...imagedatas} className="w-full h-auto object-cover" />
    </div>
  )
}