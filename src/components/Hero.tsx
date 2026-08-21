import { ArrowRight, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden  px-6 text-white">

      {/* ========================= */}
      {/* BACKGROUND GRID */}
      {/* ========================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ========================= */}
      {/* BACKGROUND GLOW */}
      {/* ========================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

      </div>

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center py-24 lg:py-20">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* ========================= */}
          {/* PROFILE IMAGE */}
          {/* ========================= */}

          <div className="relative mx-auto w-full max-w-md lg:mx-0">

            {/* Outer frame */}
            <div className="absolute -inset-4 rounded-[2rem] border border-cyan-400/10" />

            {/* Decorative circle */}
            <div className="absolute -left-8 top-12 h-24 w-24 rounded-full border border-cyan-400/20" />

            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full border border-white/10" />

            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent shadow-2xl">

              <img
                src="/profile.jpeg"
                alt="Aono Samson - Software Engineer"
                className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.02]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-gray-300 backdrop-blur-md">
                Software Engineer
              </div>

            </div>

            {/* Status card */}
            <div className="absolute -bottom-5 -right-5 rounded-2xl border border-white/10 bg-[#0b0b0b]/90 px-5 py-4 shadow-xl backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

                <div>
                  <p className="text-xs text-gray-500">
                    Currently
                  </p>

                  <p className="text-sm font-medium text-white">
                    Building & Learning
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* ========================= */}
          {/* INTRODUCTION */}
          {/* ========================= */}

          <div className="relative">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
              Software Engineer • AI/ML Enthusiast
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Hi, I'm{" "}
              <span className="text-cyan-400">
                Aono Samson.
              </span>
            </h1>

            <h2 className="mt-5 text-3xl font-semibold leading-tight text-white/90 sm:text-4xl lg:text-5xl">
              A Software Engineer
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              I am passionate about building
              practical digital solutions across full-stack web
              development, mobile applications, and artificial
              intelligence.
            </p>

            {/* ========================= */}
            {/* ACTION BUTTONS */}
            {/* ========================= */}

            <div className="mt-9 flex flex-wrap gap-4">

              {/* CV */}
              <a
                href="/cv.pdf"
                download
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-medium text-black transition duration-300 hover:bg-cyan-400"
              >
                Download CV

                <Download
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>

              {/* Projects */}
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 font-medium text-white transition duration-300 hover:border-cyan-400/40 hover:bg-white/5"
              >
                Explore My Work

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

            {/* ========================= */}
            {/* SOCIAL LINKS */}
            {/* ========================= */}

            <div className="mt-10 flex flex-wrap items-center gap-6">

              <a
                href="https://github.com/AonoSam"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-500 transition hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/aono-sam-03134840a/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-500 transition hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="mailto:aonosammy@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
              >
                <Mail size={17} />
                Email
              </a>

            </div>

            {/* ========================= */}
            {/* FOCUS AREAS */}
            {/* ========================= */}

            <div className="mt-12 border-t border-white/10 pt-7">

              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gray-600">
                Focus Areas
              </p>

              <div className="flex flex-wrap gap-2.5">

                {[
                  "Full-Stack Development",
                  "AI / Machine Learning",
                  "Data Science",
                  "Backend Development",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Decorative right line */}
      <div className="pointer-events-none absolute right-8 top-1/2 hidden h-32 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent xl:block" />

    </section>
  );
}