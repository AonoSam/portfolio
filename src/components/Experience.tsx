import {
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Smartphone,
  Server,
} from "lucide-react";

const experiences = [
  {
    year: "2026",
    title: "Software Developer & AI/ML Developer",
    organization: "Independent / Project-Based Development",
    description:
      "Building practical digital solutions across full-stack web development, mobile applications, artificial intelligence, machine learning, and data science.",
    technologies: [
      "React",
      "Django",
      "Python",
      "FastAPI",
      "TypeScript",
    ],
  },
  {
    year: "2025 — 2026",
    title: "Full-Stack Application Development",
    organization: "Software Development Projects",
    description:
      "Designed and developed systems for different real-world use cases, including veterinary management, fleet operations, rental management, and retail management.",
    technologies: [
      "React",
      "Django",
      "Java",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    year: "2025 — 2026",
    title: "Artificial Intelligence & Machine Learning",
    organization: "AI / Data Science Projects",
    description:
      "Worked on machine learning and computer vision solutions involving clinical prediction, image analysis, model development, and API integration.",
    technologies: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "FastAPI",
      "Pandas",
    ],
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building complete web applications from frontend interfaces to backend APIs and databases.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Developing practical machine learning and AI-powered solutions for real-world problems.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Designing APIs, authentication systems, business logic and backend architectures.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Building mobile applications and experiences using modern development frameworks.",
  },
  {
    icon: Database,
    title: "Data & Databases",
    description:
      "Working with relational databases, data processing, analysis and application data management.",
  },
  {
    icon: Layers3,
    title: "System Development",
    description:
      "Turning business requirements into practical, maintainable software systems.",
  },
];

export default function Experience() {
  return (
    <section className="min-h-screen px-6 py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            04 — Experience
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Building, learning
            <br />
            <span className="text-gray-500">
              and solving real problems.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">
            My development journey has focused on building practical
            software systems, exploring artificial intelligence,
            and turning ideas into working digital products.
          </p>
        </div>

        {/* ========================= */}
        {/* EXPERIENCE TIMELINE */}
        {/* ========================= */}

        <div className="mt-24">

          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
              Development Journey
            </p>
          </div>

          <div className="relative">

            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 hidden h-[calc(100%-10px)] w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent md:block" />

            <div className="space-y-16">

              {experiences.map((experience) => (
                <article
                  key={`${experience.year}-${experience.title}`}
                  className="relative md:pl-14"
                >

                  {/* Timeline point */}
                  <div className="absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border-2 border-cyan-400 bg-[#050505] shadow-[0_0_15px_rgba(34,211,238,0.35)] md:block" />

                  <div className="grid gap-8 lg:grid-cols-[180px_1fr]">

                    {/* Year */}
                    <div>
                      <p className="text-sm font-medium tracking-wider text-cyan-400">
                        {experience.year}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-9">

                      <h2 className="text-2xl font-semibold">
                        {experience.title}
                      </h2>

                      <p className="mt-2 text-sm text-gray-500">
                        {experience.organization}
                      </p>

                      <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400">
                        {experience.description}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>
                </article>
              ))}

            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* CAPABILITIES */}
        {/* ========================= */}

        <div className="mt-32">

          <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
            Core Capabilities
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            What I work with
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  key={capability.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {capability.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

        {/* ========================= */}
        {/* CLOSING STATEMENT */}
        {/* ========================= */}

        <div className="mt-32 border-t border-white/10 pt-10">

          <p className="max-w-3xl text-xl leading-9 text-gray-400">
            I'm continuously expanding my technical skills by
            building real systems, experimenting with new technologies,
            and learning through practical development.
          </p>

        </div>

      </div>
    </section>
  );
}