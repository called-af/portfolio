import Button from "@/app/components/atoms/Button";
import Badge from "@/app/components/atoms/Badge";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";

type HeroProps = {
  id: string;
  className?: string;
};

export default function Hero({ id, className }: HeroProps) {
  return (
    <section
      id={id}
      className={`
        relative min-h-screen
        flex flex-col items-center justify-center
        bg-(--ds-paper) text-(--ds-ink)
        overflow-hidden
        px-6 py-24
        md:ml-17
        ${className || ""}
      `}
    >
      {/* Light mode: pixel grid fades out toward bottom */}
      <div
        className="absolute inset-0 z-0 dark:hidden pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 25%, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 25%, transparent 80%)",
        }}
      />

      {/* Dark mode: deep night */}
      <div
        className="absolute inset-0 z-0 hidden dark:block pointer-events-none"
        style={{ background: "#111111" }}
      />

      {/* Dark mode: green top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-64 z-0 hidden dark:block pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(61,178,19,0.12) 0%, transparent 80%)",
        }}
      />

      {/* Stars — dark mode only */}
      <div className="absolute inset-0 z-0 hidden dark:block pointer-events-none">
        {[
          { t: 5, l: 12 },
          { t: 8, l: 35 },
          { t: 3, l: 58 },
          { t: 12, l: 80 },
          { t: 6, l: 93 },
          { t: 15, l: 22 },
          { t: 18, l: 47 },
          { t: 10, l: 68 },
          { t: 20, l: 5 },
          { t: 22, l: 90 },
          { t: 25, l: 38 },
          { t: 7, l: 75 },
          { t: 30, l: 15 },
          { t: 14, l: 55 },
          { t: 28, l: 65 },
          { t: 4, l: 42 },
          { t: 16, l: 8 },
          { t: 9, l: 85 },
          { t: 32, l: 50 },
          { t: 2, l: 28 },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/50"
            style={{ top: `${s.t}%`, left: `${s.l}%` }}
          />
        ))}
      </div>

      {/* ======= CONTENT ======= */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full gap-6">
        {/* Status */}
        <Badge variant="success" dot>
          Open to opportunities
        </Badge>

        {/* Greeting */}
        <div className="flex flex-col items-center gap-2">
          <p
            className="text-(--ds-ink-muted) text-sm uppercase tracking-[0.2em] font-bold"
            style={{ fontFamily: "var(--font-body, sans-serif)" }}
          >
            Hi, I&apos;m
          </p>

          <h1
            className="text-(--ds-ink) uppercase leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-display, monospace)",
              fontSize: "clamp(2.2rem, 8vw, 5rem)",
              textShadow: "4px 4px 0 rgba(0,0,0,0.12)",
            }}
          >
            Arkadani Fathir Fahrezi
          </h1>

          {/* Role — with green accent lines */}
          <div className="flex items-center gap-3 mt-1">
            <div
              className="h-[3px] w-10"
              style={{ background: "var(--mc-green-mid)" }}
            />
            <p
              className="uppercase font-bold tracking-widest"
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: "clamp(0.75rem, 1.8vw, 0.95rem)",
                color: "var(--mc-green-mid)",
                letterSpacing: "0.12em",
              }}
            >
              Full-Stack Web Developer
            </p>
            <div
              className="h-[3px] w-10"
              style={{ background: "var(--mc-green-mid)" }}
            />
          </div>
        </div>

        {/* Bio */}
        <p
          className="text-(--ds-ink-muted) text-sm md:text-base leading-relaxed max-w-lg"
          style={{ fontFamily: "var(--font-body, sans-serif)" }}
        >
          I build clean, responsive web experiences — from pixel-perfect UIs to
          robust back-ends. I care about the details: good code structure,
          thoughtful design, and products that actually feel good to use.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-2">
          <Link href="#contact" className="w-full md:w-auto">
            <Button variant="primary" rightIcon={<ArrowRight size={16} />}>
              Contact Me
            </Button>
          </Link>
          <Link href="#project" className="w-full md:w-auto">
            <Button variant="outline" rightIcon={<ArrowDown size={16} />}>
              See My Work
            </Button>
          </Link>
        </div>

        {/* Divider + quick facts */}
        <div
          className="w-full border-t-2 border-(--ds-border-color)/20 pt-6 mt-2
                     flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            { label: "Based in", value: "Indonesia" },
            { label: "Focus", value: "Web Dev" },
            { label: "Experience", value: "2+ Years" },
            { label: "Status", value: "Freelance" },
          ].map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-0.5">
              <span
                className="text-[10px] uppercase tracking-widest text-(--ds-ink-muted)"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                {f.label}
              </span>
              <span
                className="text-sm font-black text-(--ds-ink)"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                {f.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
