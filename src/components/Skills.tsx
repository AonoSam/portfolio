import { Code2, Database, Brain, Server, Wrench, Smartphone } from "lucide-react";
import { skillCategories } from "../data/skills";

const icons = [
  Code2,
  Smartphone,
  Server,
  Brain,
  Database,
  Wrench,
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            02 — Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            A collection of technologies and tools I use to design,
            develop and deploy software applications and AI-powered
            solutions.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = icons[index];

            return (
              <div
                key={category.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold">
                  {category.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}