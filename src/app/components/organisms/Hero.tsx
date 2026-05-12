import Button from "@/app/components/atoms/Button"
import Badge from "@/app/components/atoms/Badge"

type HeroProps = {
  id: string;
  className?: string;
};

export default function Hero({ id, className }: HeroProps) {
  return (
    <section
      id={id}
      className={`
    relative h-screen
    flex flex-col items-center justify-center
    bg-(--ds-paper) text-(--ds-ink)
    border-b-[3px] border-(--ds-border-color)
    overflow-hidden

    px-6 py-24
    md:ml-17.5

    ${className || ""}
  `}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(var(--ds-ink) 1px, transparent 1px),
            linear-gradient(90deg, var(--ds-ink) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {[
        "top-7 left-7 border-t-[3px] border-l-[3px]",
        "top-7 right-7 border-t-[3px] border-r-[3px]",
        "bottom-7 left-7 border-b-[3px] border-l-[3px]",
        "bottom-7 right-7 border-b-[3px] border-r-[3px]",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute w-7 h-7 border-(--ds-ink) ${pos}`}
        />
      ))}


      <div className="relative flex flex-col items-center text-center max-w-2xl w-full">

        <Badge variant="success" dot className="mb-5">
          Open to opportunities
        </Badge>

        <div className="relative px-10 py-7 mb-2 w-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-(--ds-ink)/10" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-(--ds-ink)/10" />

          <h1
            className="font-black uppercase leading-[0.88] tracking-tight"
            style={{
              fontFamily: "var(--font-display, 'Orbitron', sans-serif)",
              fontSize: "clamp(2.8rem, 8vw, 5.6rem)",
            }}
          >
            <span className="block">Crafting</span>
            <span
              className="block opacity-40"
              style={{
                WebkitTextStroke: "2px var(--ds-ink)",
                color: "transparent",
                fontSize: "0.9em",
              }}
            >
              The Web,
            </span>
            <span className="block">
              One{" "}
              <span className="relative inline-block">
                Pixel
                <span className="absolute -bottom-1 left-0 right-0 h-1.25 bg-(--ds-ink)" />
              </span>
            </span>
          </h1>
        </div>

        <p className="text-sm text-(--ds-ink)/45 max-w-xs leading-relaxed font-light mb-7">
          Clean code, thoughtful design, and seamless experiences —
          from first sketch to final deployment.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-9">
          <Button variant="primary" shadow="md" rightIcon={<span>→</span>}>
            Contact Me
          </Button>
          <Button variant="secondary" shadow="sm">
            View Portfolio
          </Button>
        </div>

        <div className="grid grid-cols-3 w-full max-w-sm border-2 border-(--ds-ink)/14">
          {[
            { v: "2+", l: "Years" },
            { v: "10+", l: "Projects" },
            { v: "3+", l: "Clients" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`flex flex-col items-center py-4 px-3 ${i < 2 ? "border-r-2 border-(--ds-ink)/14" : ""}`}
            >
              <p
                className="text-[26px] font-black leading-tight"
                style={{ fontFamily: "var(--font-display, 'Orbitron', sans-serif)" }}
              >
                {s.v}
              </p>
              <p
                className="text-[9px] uppercase tracking-[0.2em] text-(--ds-ink)/28 mt-1 font-medium"
                style={{ fontFamily: "var(--font-mono, 'Share Tech Mono', monospace)" }}
              >
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}