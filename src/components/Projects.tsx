import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            03 — Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Things I've built
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            A selection of software and AI projects focused on
            solving practical problems through technology.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}