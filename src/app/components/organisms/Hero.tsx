import ImageCard from "@/app/components/atoms/ImageCard"
import Button from "@/app/components/atoms/Button"
import Badge from "@/app/components/atoms/Badge"
import Card from "@/app/components/atoms/Card"
import Title from "@/app/components/atoms/Title"
import profile from "@/app/assets/profile.jpeg"

export default function Home() {
  const dataImage = {
    src: profile,
    alt: "Profile",
    height: 500,
    width: 500,
  }

  return (
    <section
      id="profile"
      className="
        min-h-screen
        flex items-center justify-center
        bg-(--ds-paper)
        text-(--ds-ink)
        px-6 md:px-12 lg:px-20
        w-full
      "
    >
      <div
        className="
          w-full max-w-6xl mx-auto
          flex flex-col lg:flex-row
          items-center
          justify-center lg:justify-between
          gap-20
        "
      >
        <div className="w-full flex justify-center lg:justify-end">
          <ImageCard
            imagedatas={dataImage}
            className="-rotate-2"
          />
        </div>

        <div className="w-full max-w-xl space-y-6 text-center lg:text-left">

          <Title as="h1" className="leading-[0.9]">
            Arkadani Fathir Fahrezi
          </Title>

          <div className="flex justify-center lg:justify-start">
            <Card variant="white" className="max-w-md rotate-1">
              <p className="text-sm md:text-base leading-relaxed text-(--ds-ink-muted)">
                A passionate web developer who believes that great things come
                from dedication and continuous learning. I transform ideas into
                clean, functional code and enjoy solving complex problems one
                line at a time.
              </p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-2">
            <Button variant="primary">
              Contact Me
            </Button>

            <Button variant="outline">
              Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}