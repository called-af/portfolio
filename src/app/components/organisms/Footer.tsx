import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import Badge from "@/app/components/atoms/Badge";
import Button from "@/app/components/atoms/Button";
import Title from "@/app/components/atoms/Title";
import clsx from "clsx";

type FooterProps = {
  id?: string;
  className?: string;
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/yourusername",
    icon: Instagram,
  },
];

export default function Footer({ id, className }: FooterProps) {
  return (
    <footer
      id={id}
      className={clsx(
        "relative overflow-hidden",
        "bg-(--ds-paper) text-(--ds-ink)",
        "border-t-[3px] border-(--ds-border-color)",

        "px-6 md:px-16 lg:px-30",
        "py-20",

        "md:ml-17.5",

        className
      )}
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
        "top-6 left-6 border-t-[3px] border-l-[3px]",
        "top-6 right-6 border-t-[3px] border-r-[3px]",
        "bottom-6 left-6 border-b-[3px] border-l-[3px]",
        "bottom-6 right-6 border-b-[3px] border-r-[3px]",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute w-6 h-6 border-(--ds-ink) ${pos}`}
        />
      ))}

      <div className="relative z-10 flex flex-col gap-14">
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          <div className="max-w-xl">

            <div className="relative inline-block mb-5">
              <div className="absolute top-2 left-2 w-full h-full bg-(--ds-ink) -z-10" />

              <Title
                as="h2"
                className="
                  relative
                  px-4 py-2
                  border-[3px]
                  border-(--ds-ink)
                  bg-(--ds-paper-raised)
                "
              >
                Contact Me
              </Title>
            </div>

            <p className="text-(--ds-ink)/60 leading-relaxed text-sm md:text-base max-w-lg">
              Interested in working together, building products, or just
              having a conversation about development and design? Feel free
              to reach out anytime.
            </p>

            <div className="mt-7">
              <Button
                variant="primary"
                shadow="md"
                rightIcon={<ArrowUpRight size={16} />}
              >
                Say Hello
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-5 min-w-65">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] opacity-40 mb-2">
                Email
              </p>

              <Link
                href="mailto:your@email.com"
                className="
                  inline-flex items-center gap-2
                  font-black text-lg
                  hover:opacity-70
                  transition-opacity
                "
              >
                <Mail size={18} />
                your@email.com
              </Link>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] opacity-40 mb-3">
                Socials
              </p>

              <div className="flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2
                        px-4 py-2
                        border-[3px]
                        border-(--ds-border-color)
                        bg-(--ds-paper-raised)

                        hover:bg-(--ds-ink)
                        hover:text-(--ds-paper)

                        transition-colors duration-150
                        font-bold text-sm
                      "
                    >
                      <Icon size={16} />
                      {social.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            pt-6
            border-t-[3px]
            border-dashed
            border-(--ds-border-color)/20

            flex flex-col md:flex-row
            items-center justify-between
            gap-4
          "
        >
          <p className="text-xs md:text-sm opacity-45">
            © 2026 Your Name — Crafted with Next.js & Tailwind CSS
          </p>

          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-green-500 border border-(--ds-ink)" />

            <span className="text-xs uppercase tracking-[0.2em] opacity-45">
              Available for freelance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}