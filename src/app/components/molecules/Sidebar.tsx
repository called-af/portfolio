"use client";

import Link from "next/link";
import { Home, User, BookOpenText, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";

const links = [
  { icon: Home, label: "Profile", link: "#profile" },
  { icon: User, label: "About", link: "#about" },
  { icon: BookOpenText, label: "Projects", link: "#project" },
  { icon: Phone, label: "Contact", link: "#contact" },
];

export function Sidebar({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState("profile");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.link))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    const handleScroll = () => {
      let current = "profile";

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.4) {
          current = sec.id;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const colorMap = {
    "#profile": "bg-(--ds-info-bg) text-(--ds-info-text)",
    "#about": "bg-(--ds-purple-bg) text-(--ds-purple-text)",
    "#project": "bg-(--ds-warning-bg) text-(--ds-warning-text)",
    "#contact": "bg-(--ds-danger-bg) text-(--ds-danger-text)",
  };

  const navLink = (link: string) =>
    clsx(
      `
      w-11 h-11 flex items-center justify-center
      border-[length:var(--ds-border-width)]
      border-[color:var(--ds-border-color)]
      transition-all duration-150
      `,
      activeId === link.replace("#", "")
        ? `
          ${colorMap[link as keyof typeof colorMap]}
          -translate-x-[2px] -translate-y-[2px]
          shadow-[5px_5px_0_var(--ds-shadow-color)]
        `
        : `
          bg-(--ds-paper) text-(--ds-ink)
          shadow-[3px_3px_0_var(--ds-shadow-color)]
          hover:-translate-x-[2px] hover:-translate-y-[2px]
          hover:shadow-[5px_5px_0_var(--ds-shadow-color)]
        `
    );

  const activeLabel =
    links.find((l) => l.link === `#${activeId}`)?.label;

  return (
    <>
      <aside
        className={clsx(
          `
          hidden md:flex fixed left-0 top-0 h-screen w-17.5
          bg-(--ds-paper)
          border-r-(length:--ds-border-width)
          border-r-(--ds-border-color)
          `,
          className
        )}
      >
        <div className="h-full flex flex-col justify-between items-center py-6 w-full">
          <ul className="flex flex-col gap-6">
            {links.map(({ icon: Icon, link }) => (
              <li key={link}>
                <Link href={link} className={navLink(link)}>
                  <Icon size={20} />
                </Link>
              </li>
            ))}
          </ul>

          <div className="rotate-90 text-xs font-bold tracking-widest uppercase text-(--ds-ink-muted)">
            {label ?? activeLabel ?? "404"}
          </div>

          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="
              w-11 h-11 flex items-center justify-center
              border-(length:--ds-border-width)
              border-(--ds-border-color)
              bg-(--ds-paper)
              shadow-[3px_3px_0_var(--ds-shadow-color)]
              hover:-translate-x-0.5 hover:-translate-y-0.5
              hover:shadow-[5px_5px_0_var(--ds-shadow-color)]
              transition-all
            "
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <Moon size={20} />
              ) : (
                <Sun size={20} />
              )
            ) : null}
          </button>
        </div>
      </aside>

      <nav
        className={clsx(
          `
          md:hidden fixed bottom-0 left-0 right-0 z-50
          bg-(--ds-paper)
          border-t-(length:--ds-border-width)
          border-t-(--ds-border-color)
          `,
          className
        )}
      >
        <ul className="flex justify-around items-center py-3">
          {links.map(({ icon: Icon, link }) => (
            <li key={link}>
              <Link href={link} className={navLink(link)}>
                <Icon size={20} />
              </Link>
            </li>
          ))}

          <li>
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="
                w-11 h-11 flex items-center justify-center
                border-(length:--ds-border-width)
                border-(--ds-border-color)
                bg-(--ds-paper)
                shadow-[3px_3px_0_var(--ds-shadow-color)]
              "
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Moon size={20} />
                ) : (
                  <Sun size={20} />
                )
              ) : null}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}