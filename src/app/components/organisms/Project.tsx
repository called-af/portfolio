"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Title from "@/app/components/atoms/Title";
import Badge from "@/app/components/atoms/Badge";
import Button from "@/app/components/atoms/Button";
import { projects, type ProjectType } from "@/app/data/project";
import { ExternalLink, Github, FolderOpen, ArrowRight } from "lucide-react";

type ProjectProps = {
  id: string;
  className?: string;
};

const linkIcons: Record<string, React.ReactNode> = {
  Demo:   <ExternalLink size={11} />,
  GitHub: <Github size={11} />,
  Docs:   <ExternalLink size={11} />,
};

function ProjectRow({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) {
  return (
    <div className="group flex flex-col sm:flex-row gap-0 border-t-2 border-(--ds-border-color)/20 hover:bg-(--ds-ink)/[0.03] transition-colors duration-100 py-5 px-2 -mx-2">

      {/* Index */}
      <span
        className="text-5xl font-black text-(--ds-ink) opacity-10 select-none shrink-0 w-14 leading-none -mt-1"
        style={{ fontFamily: "var(--font-body, sans-serif)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Thumbnail */}
      <div
        className="relative shrink-0 w-full sm:w-72 h-48 overflow-hidden border-2 border-(--ds-border-color)/30 mr-6 mb-3 sm:mb-0"
        style={{ imageRendering: "pixelated" }}
      >
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover"
          sizes="288px"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0 flex flex-col justify-between gap-2">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3
            className="font-black text-lg text-(--ds-ink) leading-tight"
            style={{ fontFamily: "var(--font-body, sans-serif)" }}
          >
            {project.title}
          </h3>
          <Badge variant="default">{project.category}</Badge>
        </div>

        <p className="text-sm text-(--ds-ink-muted) leading-relaxed line-clamp-3">
          {project.desc}
        </p>

        <div className="flex gap-2 flex-wrap">
          {project.links.map((link) => (
            <Link
              key={link.label}
              href={link.url}
              className="mc-button-clean mc-button-clean-outline !py-0.5 !px-2.5 !text-[10px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkIcons[link.label] ?? <ExternalLink size={11} />}
              <span className="ml-1">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Green accent bar on hover */}
      <div
        className="hidden sm:block w-[3px] self-stretch ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-100 shrink-0"
        style={{ background: "var(--mc-green-mid)" }}
      />
    </div>
  );
}

export default function Projects({ id, className }: ProjectProps) {
  return (
    <section
      id={id}
      className={clsx(
        "min-h-screen md:ml-17",
        "px-6 md:px-16 lg:px-30",
        "py-16 pb-24 md:pb-16",
        className
      )}
      style={{ background: "var(--ds-paper)" }}
    >
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <FolderOpen size={20} className="text-(--ds-ink)" />
          <Title as="h2">What I&apos;ve Been Working On</Title>
        </div>
        <div className="flex gap-[3px] mb-4">
          <div className="h-[4px] w-16" style={{ background: "var(--mc-grass-top)" }} />
          <div className="h-[4px] w-8"  style={{ background: "var(--mc-stone)" }} />
          <div className="h-[4px] w-4"  style={{ background: "var(--mc-cobble)" }} />
        </div>
        <p
          className="text-(--ds-ink-muted) text-base max-w-xl"
          style={{ fontFamily: "var(--font-body, sans-serif)" }}
        >
          A collection of projects I&apos;ve built — from web apps to security tools.
        </p>
      </div>

      {/* All projects — uniform list rows */}
      <div className="border-b-2 border-(--ds-border-color)/20">
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-start">
        <Button variant="outline" rightIcon={<ArrowRight size={14} />}>
          View All Projects
        </Button>
      </div>
    </section>
  );
}
