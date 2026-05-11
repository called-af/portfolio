"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
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
import Card from "@/app/components/atoms/Card";
import Title from "@/app/components/atoms/Title";
import { type CardVariant } from "@/app/utils/Tokens";
import ImageCard from "@/app/components/atoms/ImageCard";

type AboutProps = {
  id: string;
  className?: string;
};

const skills: { name: string; image: StaticImageData }[] = [
  { name: "React", image: reactImg },
  { name: "Next.js", image: nextImg },
  { name: "Nuxt", image: nuxtImg },
  { name: "Vue", image: vueImg },
  { name: "Laravel", image: laravelImg },
  { name: "Inertia", image: inertiaImg },
  { name: "Tailwind CSS", image: tailwindImg },
  { name: "Axios", image: axiosImg },
  { name: "MySQL", image: mysqlImg },
];

const experiences: {
  title: string;
  company: string;
  period: string;
  description: string;
  cardVariant: CardVariant;
  index: string;
}[] = [
    {
      index: "01",
      title: "Freelancer",
      company: "Self-employed",
      period: "2023 – Now",
      description:
        "Working on various web development projects for clients, from company profile websites, landing pages, to fullstack web applications. Responsible from requirement gathering, design, development, to deployment.",
      cardVariant: "yellow",
    },
    {
      index: "02",
      title: "IT Intern",
      company: "BPR Cahaya Fajar",
      period: "2022",
      description:
        "Learning and developing web applications using Vue.js as frontend framework and Laravel as backend. Understanding RESTful API concepts, database integration, and development workflow in banking environment.",
      cardVariant: "teal",
    },
    {
      index: "03",
      title: "IT Intern",
      company: "Master Media",
      period: "2021",
      description:
        "Learning computer hardware troubleshooting, Windows and Linux OS installation and configuration, and PC, laptop, and monitor component assembly.",
      cardVariant: "coral",
    },
  ];

export default function About({ id, className }: AboutProps) {
  const [showYeah, setShowYeah] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);

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
      className={`min-h-screen px-6 md:px-16 lg:px-30 py-16 pb-24 md:pb-16 ${className || ""}`}
      id={id}
    >
      <Image
        src={yeahRightImg}
        alt="Yeah Right"
        className={`fixed top-1/2 -translate-y-1/2 left-0 w-96 transition-transform duration-500 z-50 ${showYeah ? "translate-x-0" : "-translate-x-full"
          }`}
      />

      <div className="mb-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">

        <div className="flex-1">
          <div className="relative inline-block mb-6">
            <div className="absolute top-2 left-2 w-full h-full bg-(--ds-ink) rounded-sm -z-10" />
            <Title
              as="h2"
              className="relative px-3 py-1 bg-(--ds-paper-raised) border-2 border-(--ds-ink)"
            >
              About Me
            </Title>
          </div>

          <div className="dark:text-neutral-400 text-neutral-600 text-base md:text-lg max-w-2xl leading-relaxed text-justify space-y-4">
            <p>
              I&apos;m a web developer who enjoys creating modern, responsive, and
              user-friendly digital experiences. I focus on building clean interfaces,
              writing maintainable code, and developing applications that balance both
              functionality and visual design. For me, every project is an opportunity
              to create something meaningful while continuously improving my skills and
              creativity.
            </p>

            <p>
              My journey in development started from curiosity and slowly grew into a
              strong passion for problem solving and product building. I enjoy learning
              new things, exploring better workflows, and turning ideas into real
              experiences that people can interact with. Beyond writing code, I value
              consistency, adaptability, and the process of creating products that feel
              simple, useful, and impactful.
            </p>
          </div>
        </div>

        <div className="relative shrink-0 flex justify-center w-full md:w-auto">
          <ImageCard
            imagedatas={dataImage}
            shadow="lg"
            className="relative z-10 -rotate-1 w-72 md:w-80 lg:w-96 mx-auto"
          />
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Title as="h4">Experience</Title>
            <Badge variant="warning" dot>
              {experiences.length} roles
            </Badge>
          </div>

          <div className="space-y-5">
            {experiences.map((exp) => (
              <Card key={exp.company} variant={exp.cardVariant} shadow="md" className="w-full">
                <div className="flex gap-4">
                  <span className="text-5xl font-black leading-none text-(--ds-ink) opacity-15 select-none shrink-0 -mt-1">
                    {exp.index}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="font-black text-base text-(--ds-ink)">
                          {exp.title}
                        </h3>
                        <p className="text-xs font-bold text-(--ds-ink) opacity-50 uppercase tracking-wider">
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="default">{exp.period}</Badge>
                    </div>
                    <p className="text-sm text-(--ds-ink) opacity-75 leading-relaxed mt-2">
                      {exp.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCheck(exp.company)}
                    aria-label={`Mark ${exp.title} as done`}
                    title="Mark as done"
                    className={`mt-1 w-5 h-5 border-2 border-(--ds-ink) rounded-sm shrink-0 transition-colors duration-150 ${checked.includes(exp.company)
                      ? "bg-(--ds-ink)"
                      : "bg-transparent hover:bg-(--ds-ink)/20"
                      }`}
                  />
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Button variant="primary" shadow="md" rightIcon={<span>↗</span>}>
              Download CV
            </Button>
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <div className="flex items-center gap-3 mb-6">
            <Title as="h4">Skills</Title>
            <Badge variant="purple">×{skills.length}</Badge>
          </div>

          <Card variant="purple" shadow="lg" className="w-full lg:w-64">
            <ul className="space-y-1">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-3 py-2 border-b border-(--ds-ink)/10 last:border-0"
                >
                  <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                    <Image src={skill.image} alt={skill.name} width={18} height={18} />
                  </div>
                  <span className="text-sm font-semibold text-(--ds-ink)">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

      </div>
    </section>
  );
}