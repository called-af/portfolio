"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Title from "@/app/components/atoms/Title";
import Badge from "@/app/components/atoms/Badge";
import Button from "@/app/components/atoms/Button";
import { projects, type ProjectType } from "@/app/data/project";
import {
  type CardVariant,
  shadowLayer,
  shadowOffset,
  motionBase,
  hoverTranslate,
  cardVariantStyles,
} from "@/app/utils/Tokens";
import { ExternalLink, Github } from "lucide-react";

type ProjectProps = {
  id: string;
  className?: string;
};

const cardColors: CardVariant[] = ["yellow", "teal", "coral", "purple"];

const linkIcons: Record<string, React.ReactNode> = {
  Demo: <ExternalLink size={14} />,
  GitHub: <Github size={14} />,
  Docs: <ExternalLink size={14} />,
};

function ProjectCard({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) {
  const variant = cardColors[index % cardColors.length];
  const isLarge = index === 0 || index === 3;

  return (
    <div
      className={clsx(
        "relative group",
        isLarge && "md:col-span-2 md:row-span-2"
      )}
    >
      {/* Neo-brutal shadow layer */}
      <div className={clsx(shadowLayer, shadowOffset.md)} />

      <div
        className={clsx(
          "relative flex flex-col h-full overflow-hidden rounded-md",
          "border-(length:--ds-border-width)",
          "border-(--ds-border-color)",
          motionBase,
          hoverTranslate.md,
          cardVariantStyles[variant]
        )}
      >
        {/* Image */}
        <div
          className={clsx(
            "relative w-full flex-1 min-h-40",
            "border-b-(length:--ds-border-width)",
            "border-b-(--ds-border-color)"
          )}
        >
          <Image
            src={project.img}
            alt={project.title}
            fill
            className={clsx(
              "object-cover",
              motionBase,
              "group-hover:scale-[1.03]"
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Category badge overlay */}
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="default">{project.category}</Badge>
          </div>
        </div>

        {/* Content */}
        <div
          className={clsx(
            "p-4",
            "bg-(--ds-paper-raised)"
          )}
        >
          <h3
            className="font-black text-lg text-(--ds-ink) leading-tight"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {project.title}
          </h3>

          <p
            className={clsx(
              "text-sm text-(--ds-ink) opacity-60 leading-relaxed mt-1",
              isLarge ? "line-clamp-3" : "line-clamp-2"
            )}
          >
            {project.desc}
          </p>

          {/* Links */}
          <div className="flex gap-2 mt-3 flex-wrap">
            {project.links.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className={clsx(
                  "inline-flex items-center gap-1.5",
                  "px-2.5 py-1 text-xs font-bold",
                  "border-(length:--ds-border-width)",
                  "border-(--ds-border-color)",
                  "bg-(--ds-paper-raised) text-(--ds-ink)",
                  "hover:bg-(--ds-ink) hover:text-(--ds-paper)",
                  "transition-colors duration-150"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkIcons[link.label] ?? <ExternalLink size={14} />}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ id, className }: ProjectProps) {
  return (
    <section
      id={id}
      className={clsx(
        " min-h-screen",
        "px-6 md:px-16 lg:px-30",
        "py-10 pb-20 md:pb-10",
        className
      )}
    >
      <div className="max-w-3xl mb-10">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="relative inline-block">
            <div className="absolute top-2 left-2 w-full h-full bg-(--ds-ink) rounded-sm -z-10" />
            <Title
              as="h2"
              className={clsx(
                "relative px-3 py-1",
                "bg-(--ds-paper-raised)",
                "border-2 border-(--ds-ink)"
              )}
            >
              Project
            </Title>
          </div>
        </div>

        <p className="text-(--ds-ink) opacity-50 text-base md:text-lg leading-relaxed max-w-xl">
          A collection of projects I&apos;ve built — from web apps to security
          tools.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[260px] gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <Button variant="outline" shadow="md" rightIcon={<span>→</span>}>
          View All Projects
        </Button>
      </div>
    </section>
  );
}