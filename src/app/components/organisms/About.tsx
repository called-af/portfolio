"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Gem, Sword, Check, Download, ChevronRight } from "lucide-react";
import reactImg from "@/app/assets/logo_fm/react.svg";
import nextImg from "@/app/assets/logo_fm/faviconNext.ico";
import nuxtImg from "@/app/assets/logo_fm/faviconNuxt.ico";
import vueImg from "@/app/assets/logo_fm/faviconVuue.ico";
import laravelImg from "@/app/assets/logo_fm/faviconLaravel.ico";
import inertiaImg from "@/app/assets/logo_fm/faviconInertia.ico";
import tailwindImg from "@/app/assets/logo_fm/faviconTailwind.ico";
import axiosImg from "@/app/assets/logo_fm/faviconAxios.ico";
import mysqlImg from "@/app/assets/logo_fm/faviconMysql.png";
import yeahRightImg from "@/app/assets/yeah-right.png";
import profile from "@/app/assets/profile.jpeg";

import Badge from "@/app/components/atoms/Badge";
import Button from "@/app/components/atoms/Button";
import Title from "@/app/components/atoms/Title";
import ImageCard from "@/app/components/atoms/ImageCard";

type AboutProps = {
  id: string;
  className?: string;
};

const skills: { name: string; image: StaticImageData }[] = [
  { name: "React",        image: reactImg },
  { name: "Next.js",      image: nextImg },
  { name: "Nuxt",         image: nuxtImg },
  { name: "Vue",          image: vueImg },
  { name: "Laravel",      image: laravelImg },
  { name: "Inertia",      image: inertiaImg },
  { name: "Tailwind CSS", image: tailwindImg },
  { name: "Axios",        image: axiosImg },
  { name: "MySQL",        image: mysqlImg },
];

const experiences: {
  index: string;
  title: string;
  company: string;
  period: string;
  description: string;
}[] = [
  {
    index: "01",
    title: "Freelancer",
    company: "Self-employed",
    period: "2023 – Now",
    description:
      "Working on various web development projects for clients, from company profile websites, landing pages, to fullstack web applications. Responsible from requirement gathering, design, development, to deployment.",
  },
  {
    index: "02",
    title: "IT Intern",
    company: "BPR Cahaya Fajar",
    period: "2022",
    description:
      "Learning and developing web applications using Vue.js as frontend framework and Laravel as backend. Understanding RESTful API concepts, database integration, and development workflow in banking environment.",
  },
  {
    index: "03",
    title: "IT Intern",
    company: "Master Media",
    period: "2021",
    description:
      "Learning computer hardware troubleshooting, Windows and Linux OS installation and configuration, and PC, laptop, and monitor component assembly.",
  },
];

export default function About({ id, className }: AboutProps) {
  const [showYeah, setShowYeah] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string | null>("01");

  const dataImage = {
    src: profile,
    alt: "Profile",
    height: 700,
    width: 700,
  };

  const handleCheck = (company: string) => {
    setChecked((prev) =>
      prev.includes(company) ? prev.filter((c) => c !== company) : [...prev, company]
    );
    setShowYeah(true);
    setTimeout(() => setShowYeah(false), 1500);
  };

  return (
    <section
      className={`min-h-screen px-6 md:px-16 lg:px-30 py-16 pb-24 md:pb-16 md:ml-17 ${className || ""}`}
      id={id}
      style={{ background: "var(--ds-paper)" }}
    >
      {/* Yeah Right animation */}
      <Image
        src={yeahRightImg}
        alt="Yeah Right"
        className={`fixed top-1/2 -translate-y-1/2 left-0 w-96 transition-transform duration-500 z-50 ${
          showYeah ? "translate-x-0" : "-translate-x-full"
        }`}
      />

      {/* ======= Section Header ======= */}
      <div className="mb-12">
        <Title as="h2">How Did I Get Here</Title>
        <div className="flex gap-[3px] mt-3">
          <div className="h-[4px] w-16" style={{ background: "var(--mc-grass-top)" }} />
          <div className="h-[4px] w-8"  style={{ background: "var(--mc-stone)" }} />
          <div className="h-[4px] w-4"  style={{ background: "var(--mc-cobble)" }} />
        </div>
      </div>

      {/* ======= Story + Photo ======= */}
      <div className="mb-16 flex flex-col md:flex-row items-start gap-10 md:gap-16">

        {/* Photo */}
        <div className="relative shrink-0 flex justify-center w-full md:w-auto">
          <ImageCard
            imagedatas={dataImage}
            className="relative z-10 -rotate-1 w-64 md:w-72 lg:w-80 mx-auto"
          />
        </div>

        {/* Story — longer narrative */}
        <div className="flex-1 flex flex-col justify-center gap-5">

          <div className="border-l-[4px] pl-5" style={{ borderColor: "var(--mc-green-mid)" }}>
            <p className="text-base md:text-lg leading-relaxed text-justify mb-4 text-(--ds-ink-muted)">
              It all started with curiosity — I was around 15 when I first opened a browser
              inspector, saw the HTML behind a website, and thought: <em>&ldquo;wait, I can change this?&rdquo;</em>
              That small moment of realisation changed everything. I started tweaking things,
              breaking things, and slowly figuring out how it all worked.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-justify mb-4 text-(--ds-ink-muted)">
              From there I moved into building things properly — learning HTML, CSS, then
              JavaScript. Every project taught me something new. I failed a lot, Googled
              even more, and kept going. The more I built, the more I wanted to build.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-justify text-(--ds-ink-muted)">
              These days I work across the full stack — designing UIs, writing APIs, hooking
              up databases, and shipping things that actually work. I care about clean code,
              good user experience, and making products that people genuinely enjoy using.
              Not just things that look good in screenshots.
            </p>
          </div>

          <div className="border-l-[4px] pl-5" style={{ borderColor: "var(--mc-stone)" }}>
            <p className="text-sm md:text-base leading-relaxed text-justify text-(--ds-ink-muted)">
              Outside of work, I spend time exploring new frameworks, tinkering with side
              projects, and occasionally going down rabbit holes about system design or
              security topics. I&apos;m always learning — it&apos;s kind of the whole point.
              If there&apos;s a problem to solve or something new to understand, I&apos;m in.
            </p>
          </div>

          {/* Skills strip */}
          <div className="mt-1">
            <div className="flex items-center gap-2 mb-3">
              <Gem size={16} className="text-(--ds-ink)" />
              <span
                className="text-xs font-bold uppercase tracking-widest text-(--ds-ink-muted)"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                Stack
              </span>
              <span
                className="text-xs font-bold ml-1"
                style={{ fontFamily: "var(--font-body, sans-serif)", color: "var(--mc-green-mid)" }}
              >
                ×{skills.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill) => (
                <div key={skill.name} className="group relative" title={skill.name}>
                  <div
                    className="w-11 h-11 flex items-center justify-center cursor-pointer bg-(--ds-neutral-bg) hover:bg-(--ds-ink)/10 transition-colors duration-75"
                    style={{ imageRendering: "pixelated" }}
                  >
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={22}
                      height={22}
                      style={{ imageRendering: "pixelated" }}
                    />
                  </div>
                  <div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 text-[10px] font-bold whitespace-nowrap pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-75 bg-(--ds-ink) text-(--ds-paper) border border-(--ds-border-color)"
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      boxShadow: "2px 2px 0 var(--ds-shadow-color)",
                    }}
                  >
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ======= Experience ======= */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <Sword size={18} className="text-(--ds-ink)" />
          <Title as="h4">Experience</Title>
          <Badge variant="success" dot>{experiences.length} roles</Badge>
        </div>
        <div className="h-[3px] w-24 mb-6" style={{ background: "var(--mc-green-mid)" }} />

        <div className="divide-y-2 divide-(--ds-border-color)/20 border-t-2 border-(--ds-border-color)/20">
          {experiences.map((exp) => {
            const isOpen = expanded === exp.index;
            const isDone = checked.includes(exp.company);

            return (
              <div key={exp.company}>
                <button
                  onClick={() => setExpanded(isOpen ? null : exp.index)}
                  className="w-full flex items-center gap-4 py-4 text-left group hover:bg-(--ds-ink)/5 transition-colors px-2 -mx-2"
                >
                  <span
                    className="text-2xl font-black text-(--ds-ink) opacity-15 select-none shrink-0 w-10 leading-none"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    {exp.index}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-black text-base text-(--ds-ink) leading-tight"
                      style={{ fontFamily: "var(--font-body, sans-serif)" }}
                    >
                      {exp.title}
                    </h3>
                    <p className="text-xs text-(--ds-ink-muted) uppercase tracking-wider mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className="text-xs font-bold text-(--ds-ink-muted) shrink-0"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    {exp.period}
                  </span>
                  <ChevronRight
                    size={16}
                    className={`text-(--ds-ink-muted) shrink-0 transition-transform duration-150 ${isOpen ? "rotate-90" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-4 px-2 flex items-start gap-4">
                    <div
                      className="w-[3px] self-stretch shrink-0 ml-10"
                      style={{ background: "var(--mc-green-mid)" }}
                    />
                    <p className="text-sm text-(--ds-ink-muted) leading-relaxed flex-1">
                      {exp.description}
                    </p>
                    <button
                      onClick={() => handleCheck(exp.company)}
                      aria-label={`Mark ${exp.title} as done`}
                      className={`mt-0.5 w-5 h-5 border-2 border-(--ds-ink) shrink-0 transition-colors duration-100 flex items-center justify-center ${
                        isDone ? "bg-[var(--mc-green-mid)]" : "bg-transparent hover:bg-(--ds-ink)/10"
                      }`}
                    >
                      {isDone && <Check size={11} className="text-white" strokeWidth={3} />}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <Button variant="primary" rightIcon={<Download size={14} />}>
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}
