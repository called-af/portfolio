"use client";

import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ArrowUpRight,
  MessageSquare,
  Globe,
  Circle,
} from "lucide-react";

import Button from "@/app/components/atoms/Button";
import Title from "@/app/components/atoms/Title";
import clsx from "clsx";

type FooterProps = {
  id?: string;
  className?: string;
};

const socials = [
  { label: "GitHub", href: "https://github.com/called-af", icon: Github },
  // { label: "LinkedIn",  href: "https://linkedin.com/in/yourusername", icon: Linkedin },
  {
    label: "Instagram",
    href: "https://instagram.com/called_af",
    icon: Instagram,
  },
];

export default function Footer({ id, className }: FooterProps) {
  return (
    <footer
      id={id}
      className={clsx(
        "relative overflow-hidden md:ml-17",
        "bg-(--ds-paper-raised) text-(--ds-ink)",
        "px-6 md:px-16 lg:px-30",
        "pt-16 pb-32 md:pb-16",
        className,
      )}
    >
      <div className="relative z-10 flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          {/* Left: Contact CTA */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare size={22} className="text-(--ds-ink)" />
              <Title as="h2">Contact Me</Title>
            </div>

            <div
              className="border-l-[4px] pl-5 mb-6"
              style={{ borderColor: "var(--mc-green-mid)" }}
            >
              <p className="leading-relaxed text-sm md:text-base text-(--ds-ink-muted)">
                Interested in working together, building products, or just
                having a conversation about development and design? Feel free to
                reach out anytime — I&apos;m always open to new opportunities
                and collaborations.
              </p>
            </div>
            <Link href="mailto:arkadanisaysstuff@email.com">
              <Button variant="primary" rightIcon={<ArrowUpRight size={16} />}>
                Say Hello
              </Button>
            </Link>
          </div>

          {/* Right: Email + Socials */}
          <div className="flex flex-col gap-8 min-w-[260px]">
            {/* Email */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-(--ds-ink-muted) uppercase tracking-widest text-xs">
                <Mail size={12} />
                <span style={{ fontFamily: "var(--font-body, sans-serif)" }}>
                  Email
                </span>
              </div>
              <Link
                href="mailto:arkadanisaysstuff@email.com"
                className="font-bold text-lg hover:underline text-(--ds-ink) transition-all"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                arkadanisaysstuff@email.com
              </Link>
            </div>

            {/* Socials */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-(--ds-ink-muted) uppercase tracking-widest text-xs">
                <Globe size={12} />
                <span style={{ fontFamily: "var(--font-body, sans-serif)" }}>
                  Socials
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mc-button-clean mc-button-clean-outline !py-1.5 !px-3.5 !text-xs"
                    >
                      <Icon size={14} className="mr-1.5 inline" />
                      {social.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-(--ds-border-color)/10">
          {/* XP progress bar */}
          <div className="w-full h-2 mb-6 bg-(--ds-paper)">
            <div
              className="h-full"
              style={{
                width: "72%",
                background:
                  "linear-gradient(90deg, var(--mc-green-dark), var(--mc-green-mid))",
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-xs text-(--ds-ink-muted)"
              style={{ fontFamily: "var(--font-body, sans-serif)" }}
            >
              © 2026 Arkadani Fathir Fahrezi — Built with Next.js
            </p>

            <div className="flex items-center gap-2">
              <Circle
                size={8}
                className="mc-pulse"
                style={{
                  fill: "var(--mc-emerald)",
                  color: "var(--mc-emerald)",
                }}
              />
              <span
                className="text-xs uppercase tracking-widest text-(--ds-ink-muted)"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                Available for freelance
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
