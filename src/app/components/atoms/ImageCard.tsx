
import Image, { StaticImageData } from 'next/image'

type ImageItem = {
  img: string | StaticImageData
  alt: string
  width: number
  height: number
}

type Props = {
  imagedatas: ImageItem | ImageItem[]
}

export default function ImageCard({ imagedatas }: Props) {
  const images = Array.isArray(imagedatas) ? imagedatas : [imagedatas]

  return (
    <div className="border border-neutral-900 dark:border-neutral-700 p-1">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.img}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      ))}
    </div>
  )
}
