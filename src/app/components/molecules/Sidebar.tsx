"use client";

import Link from "next/link";
import { Home, User, BookOpenText, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";

const links = [
  { icon: Home,         label: "Home",     link: "#profile" },
  { icon: BookOpenText, label: "Projects", link: "#project" },
  { icon: User,         label: "About",    link: "#about"   },
  { icon: Phone,        label: "Contact",  link: "#contact" },
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
    const hash = window.location.hash.replace("#", "");
    const ids = links.map((l) => l.link.replace("#", ""));
    if (hash && ids.includes(hash)) setActiveId(hash);
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
    const handleScroll = () => setActiveId(getActiveSection());
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeLabel = links.find((l) => l.link === `#${activeId}`)?.label;

  /* Nav link — uses mc-button-clean exactly like atoms/Button */
  const NavLink = ({ icon: Icon, link }: { icon: React.ElementType; link: string }) => {
    const id = link.replace("#", "");
    const isActive = activeId === id;

    return (
      <Link
        href={link}
        aria-label={id}
        className={clsx(
          "mc-button-clean",
          "w-11 h-11 !p-0",          // square, override padding
          isActive
            ? "mc-button-clean-primary"
            : "mc-button-clean-outline"
        )}
      >
        <Icon size={18} />
      </Link>
    );
  };

  /* Theme toggle — same mc-button-clean style */
  const ThemeButton = ({ className: btnClass }: { className?: string }) => (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={clsx(
        "mc-button-clean mc-button-clean-outline",
        "w-11 h-11 !p-0",
        btnClass
      )}
    >
      {mounted
        ? resolvedTheme === "dark"
          ? <Moon size={18} />
          : <Sun size={18} />
        : null}
    </button>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={clsx(
          "hidden md:flex fixed left-0 top-0 h-screen w-17",
          "bg-(--ds-paper-raised)",
          "transition-colors duration-200",
          className
        )}
      >
        <div className="h-full flex flex-col justify-between items-center py-6 w-full">

          {/* Nav links */}
          <ul className="flex flex-col gap-4">
            {links.map(({ icon, link }) => (
              <li key={link}>
                <NavLink icon={icon} link={link} />
              </li>
            ))}
          </ul>

          {/* Active label — rotated */}
          <div
            className="rotate-90 whitespace-nowrap text-xs font-bold tracking-widest uppercase text-(--ds-ink-muted)"
            style={{ fontFamily: "var(--font-body, sans-serif)" }}
          >
            {label ?? activeLabel ?? "—"}
          </div>

          {/* Theme toggle */}
          <ThemeButton />
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav
        className={clsx(
          "md:hidden fixed bottom-0 left-0 right-0 z-50",
          "bg-(--ds-paper-raised)",
          "transition-colors duration-200",
          className
        )}
      >
        <ul className="flex justify-around items-center py-3">
          {links.map(({ icon, link }) => (
            <li key={link}>
              <NavLink icon={icon} link={link} />
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
