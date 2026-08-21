export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          01 — About
        </p>

        <div className="grid gap-12 lg:grid-cols-2">

          <h2 className="text-4xl font-bold sm:text-5xl">
            Turning ideas into
            <span className="text-gray-500"> working software.</span>
          </h2>

          <div className="space-y-6 text-lg leading-8 text-gray-400">
            <p>
              I am a software developer interested in building
              reliable, scalable and practical technology solutions.
            </p>

            <p>
              My work spans full-stack development, artificial
              intelligence, machine learning, mobile applications,
              APIs and database systems.
            </p>

            <p>
              I enjoy working on real-world problems where software
              and data can create meaningful impact.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}