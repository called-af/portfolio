"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, User, BookOpenText, Phone, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpeg";

const links = [
  { icon: Home, label: "Profile", link: "/" },
  { icon: User, label: "About", link: "/about" },
  { icon: BookOpenText, label: "Projects", link: "/projects" },
  { icon: Phone, label: "Contact", link: "/contact" },
];

export function Sidebar({ label }: { label?: string }) {
  const pathname = usePathname();
  const active = links.find((l) => l.link === pathname);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-15 bg-neutral-100 dark:bg-neutral-900">
        <div className="h-full flex flex-col justify-between items-center py-6 w-full">
          <ul className="flex flex-col gap-6">
            {links.map(({ icon: Icon, link }) => (
              <li key={link}>
                <Link
                  href={link}
                  className={`flex items-center justify-center w-10 h-10 rounded-md transition
                    ${
                      pathname === link
                        ? "bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white"
                        : "text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800"
                    }
                  `}
                >
                  <Icon size={20} />
                </Link>
              </li>
            ))}
          </ul>

          <div className="rotate-90 text-xs tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
            {label ?? active?.label ?? "404"}
          </div>

          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-10 h-10 rounded-md text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
          >
            {mounted ? (resolvedTheme === "dark" ? <Moon size={20} /> : <Sun size={20} />) : null}
          </button>
        </div>
      </aside>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-neutral-100 dark:bg-neutral-900 z-50">
        <ul className="flex justify-around items-center py-3">
          {links.map(({ icon: Icon, link }) => (
            <li key={link}>
              <Link
                href={link}
                className={`flex items-center justify-center w-10 h-10 rounded-md transition
                  ${
                    pathname === link
                      ? "bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white"
                      : "text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white"
                  }
                `}
              >
                <Icon size={20} />
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center w-10 h-10 rounded-md text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition"
            >
              {mounted ? (resolvedTheme === "dark" ? <Moon size={20} /> : <Sun size={20} />) : null}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
