import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/project";

export default function Projects() {
  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-30 py-10 pb-20 md:pb-10">
      <section className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Projects</h1>
        <p className="dark:text-neutral-400 text-neutral-600 text-base md:text-lg mb-8">
          Here are some of my recent projects.
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col md:flex-row gap-4">
              <Image
                src={project.img}
                alt={project.title}
                className="border border-neutral-900 dark:border-neutral-700 p-1 w-full md:w-80 h-48 object-cover rounded-md"
              />
              <div className="p-4 flex flex-col justify-center">
                <span className="text-xs px-2 py-1 dark:bg-neutral-800 bg-neutral-200 rounded-md w-fit">
                  {project.category}
                </span>
                <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
                <p className="dark:text-neutral-400 text-neutral-600 text-sm mt-1">
                  {project.desc}
                </p>
                <div className="flex gap-3 mt-3">
                  {project.links.slice(0, 3).map((link) => (
                    <Link
                      key={link.label}
                      href={link.url}
                      className="text-sm dark:text-neutral-300 text-neutral-700 hover:underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
