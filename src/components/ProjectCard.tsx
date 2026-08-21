import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <article
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
    >
      {/* Project Preview */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent">
        
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />

        {/* Project number */}
        <span className="absolute left-6 top-6 text-sm font-medium text-gray-500">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute right-6 top-6 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
            Featured
          </span>
        )}

        {/* Project initial */}
        <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-5xl font-bold text-white/10 backdrop-blur transition duration-500 group-hover:scale-110 group-hover:text-cyan-400/30">
          {project.title.charAt(0)}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">

        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
          {project.category}
        </p>

        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold tracking-tight">
            {project.title}
          </h3>

          <span className="text-sm text-gray-600">
            {project.year}
          </span>
        </div>

        <p className="mt-4 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Key features */}
        <div className="mt-7">
          <p className="text-sm font-semibold text-white">
            Key Features
          </p>

          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.slice(0, 4).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-gray-400"
              >
                <span className="mt-1 text-cyan-400">→</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan-400"
          >
            View Case Study
            <ArrowUpRight size={17} />
          </Link>

          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
            >
              GitHub
              <ExternalLink size={15} />
            </a>
          )}

        </div>
      </div>
    </article>
  );
}