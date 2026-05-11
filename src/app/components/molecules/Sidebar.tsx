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

const colorMap: Record<string, string> = {
  profile: "bg-(--ds-info-bg) text-(--ds-info-text)",
  about: "bg-(--ds-purple-bg) text-(--ds-purple-text)",
  project: "bg-(--ds-warning-bg) text-(--ds-warning-text)",
  contact: "bg-(--ds-danger-bg) text-(--ds-danger-text)",
};

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
    const hash = window.location.hash.replace("#", "");
    const ids = links.map((l) => l.link.replace("#", ""));
    if (hash && ids.includes(hash)) {
      setActiveId(hash);
    }
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.link))
      .filter(Boolean) as HTMLElement[];

    const getActiveSection = () => {
      const viewportMid = window.innerHeight * 0.4;
      let closest = sections[0];
      let closestDist = Infinity;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const dist = Math.abs(rect.top - viewportMid);
        if (rect.top <= viewportMid + 20 && rect.bottom > 0 && dist < closestDist) {
          closestDist = dist;
          closest = sec;
        }
      });

      return closest?.id ?? "profile";
    };

    setActiveId(getActiveSection());

    const handleScroll = () => {
      setActiveId(getActiveSection());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLink = (link: string) => {
    const id = link.replace("#", "");
    const isActive = activeId === id;

    return clsx(
      `w-11 h-11 flex items-center justify-center
       border-[length:var(--ds-border-width)]
       border-[color:var(--ds-border-color)]
       transition-all duration-150`,
      isActive
        ? `${colorMap[id] ?? ""}
           -translate-x-[2px] -translate-y-[2px]
           shadow-[5px_5px_0_var(--ds-shadow-color)]`
        : `bg-(--ds-paper) text-(--ds-ink)
           shadow-[3px_3px_0_var(--ds-shadow-color)]
           hover:-translate-x-[2px] hover:-translate-y-[2px]
           hover:shadow-[5px_5px_0_var(--ds-shadow-color)]`
    );
  };

  const activeLabel = links.find((l) => l.link === `#${activeId}`)?.label;

  const ThemeButton = ({ className: btnClass }: { className?: string }) => (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={clsx(
        `w-11 h-11 flex items-center justify-center z-10
         border-(length:--ds-border-width)
         border-(--ds-border-color)
         bg-(--ds-paper)
         shadow-[3px_3px_0_var(--ds-shadow-color)]
         hover:-translate-x-0.5 hover:-translate-y-0.5
         hover:shadow-[5px_5px_0_var(--ds-shadow-color)]
         transition-all`,
        btnClass
      )}
      aria-label="Toggle theme"
    >
      {mounted ? (
        resolvedTheme === "dark" ? <Moon size={20} /> : <Sun size={20} />
      ) : null}
    </button>
  );

  return (
    <>
      <aside
        className={clsx(
          `hidden md:flex fixed left-0 top-0 h-screen w-17.5
           bg-(--ds-paper)
           border-r-(length:--ds-border-width)
           border-r-(--ds-border-color)`,
          className
        )}
      >
        <div className="h-full flex flex-col justify-between items-center py-6 w-full">
          <ul className="flex flex-col gap-6">
            {links.map(({ icon: Icon, link }) => (
              <li key={link}>
                <Link href={link} className={navLink(link)} aria-label={link.replace("#", "")}>
                  <Icon size={20} />
                </Link>
              </li>
            ))}
          </ul>

          <div className="rotate-90 text-xs font-bold tracking-widest uppercase text-(--ds-ink-muted)">
            {label ?? activeLabel ?? "404"}
          </div>

          <ThemeButton />
        </div>
      </aside>

      <nav
        className={clsx(
          `md:hidden fixed bottom-0 left-0 right-0 z-50
           bg-(--ds-paper)
           border-t-(length:--ds-border-width)
           border-t-(--ds-border-color)`,
          className
        )}
      >
        <ul className="flex justify-around items-center py-3">
          {links.map(({ icon: Icon, link }) => (
            <li key={link}>
              <Link href={link} className={navLink(link)} aria-label={link.replace("#", "")}>
                <Icon size={20} />
              </Link>
            </li>
          ))}
          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </>
  );
}