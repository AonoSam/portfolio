import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Project Not Found
          </h1>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            <ArrowLeft size={18} />
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          <ArrowLeft size={17} />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mt-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            {project.category}
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-400">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Project Preview */}
        <div className="mt-16 flex h-96 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent">
          <span className="text-8xl font-bold text-white/10">
            {project.title.charAt(0)}
          </span>
        </div>

        {/* Overview */}
        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Overview
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            About the project
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {project.description}
          </p>
        </section>

        {/* Features */}
        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Features
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Key Features
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-3 text-cyan-400">✦</div>

                <h3 className="font-medium">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
  <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
    Screenshots
  </p>

  <h2 className="mt-4 text-3xl font-bold">
    Project in action
  </h2>

  <div className="mt-10 space-y-12">
    {project.screenshots.map((screenshot) => (
      <div key={screenshot.image}>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <img
            src={screenshot.image}
            alt={screenshot.title}
            className="w-full object-cover transition duration-500 hover:scale-[1.01]"
          />
        </div>

        <h3 className="mt-5 text-xl font-semibold">
          {screenshot.title}
        </h3>

        <p className="mt-2 text-gray-400">
          {screenshot.description}
        </p>
      </div>
    ))}
  </div>
</section>

        {/* Links */}
        <section className="mt-20 border-t border-white/10 pt-10">
          <div className="flex flex-wrap gap-4">

            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
              >
                GitHub
                <ExternalLink size={16} />
              </a>
            )}

            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
              >
                Live Demo
                <ExternalLink size={16} />
              </a>
            )}

          </div>
        </section>

      </div>
    </main>
  );
}