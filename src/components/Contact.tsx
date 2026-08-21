import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "1901ef1a-a22e-41a1-8008-314a4c57443a"
    );

    formData.append(
      "subject",
      "New Portfolio Contact Message"
    );

    formData.append(
      "from_name",
      "Portfolio Contact Form"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="min-h-screen px-6 py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            05 — Contact
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Let's build
            <br />
            <span className="text-gray-500">
              something together.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            Have a project, opportunity, or idea you'd like
            to discuss? Send me a message and I'll get back
            to you.
          </p>
        </div>

        {/* ========================= */}
        {/* CONTACT CONTENT */}
        {/* ========================= */}

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">

          {/* ========================= */}
          {/* FORM */}
          {/* ========================= */}

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10"
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-3 block text-sm font-medium text-gray-300"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Aono Sammy"
                className="
                  w-full rounded-xl
                  border border-white/10
                  bg-black/20
                  px-4 py-3.5
                  text-white
                  outline-none
                  transition
                  placeholder:text-gray-600
                  focus:border-cyan-400/50
                  focus:ring-1
                  focus:ring-cyan-400/30
                "
              />
            </div>

            {/* Email */}
            <div className="mt-6">
              <label
                htmlFor="email"
                className="mb-3 block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="madora@example.com"
                className="
                  w-full rounded-xl
                  border border-white/10
                  bg-black/20
                  px-4 py-3.5
                  text-white
                  outline-none
                  transition
                  placeholder:text-gray-600
                  focus:border-cyan-400/50
                  focus:ring-1
                  focus:ring-cyan-400/30
                "
              />
            </div>

            {/* Subject */}
            <div className="mt-6">
              <label
                htmlFor="subject"
                className="mb-3 block text-sm font-medium text-gray-300"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Project opportunity"
                className="
                  w-full rounded-xl
                  border border-white/10
                  bg-black/20
                  px-4 py-3.5
                  text-white
                  outline-none
                  transition
                  placeholder:text-gray-600
                  focus:border-cyan-400/50
                  focus:ring-1
                  focus:ring-cyan-400/30
                "
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-3 block text-sm font-medium text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder="Tell me about your project, opportunity, or idea..."
                className="
                  w-full resize-none rounded-xl
                  border border-white/10
                  bg-black/20
                  px-4 py-3.5
                  text-white
                  outline-none
                  transition
                  placeholder:text-gray-600
                  focus:border-cyan-400/50
                  focus:ring-1
                  focus:ring-cyan-400/30
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="
                group mt-7
                inline-flex items-center gap-3
                rounded-full
                bg-white
                px-7 py-3.5
                font-medium
                text-black
                transition
                hover:bg-cyan-400
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message"}

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            {/* Status */}
            {status === "success" && (
              <p className="mt-5 text-sm text-cyan-400">
                ✓ Message sent successfully. I'll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="mt-5 text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}

          </form>

          {/* ========================= */}
          {/* CONTACT DETAILS */}
          {/* ========================= */}

          <div className="space-y-10">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                Get in touch
              </p>

              <h2 className="mt-4 text-2xl font-semibold">
                Let's connect.
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                Whether you're looking for a developer,
                have an interesting project, or simply
                want to connect, feel free to reach out.
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:aonosammy@gmail.com"
              className="group flex items-center gap-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-400">
                <Mail size={19} />
              </div>

              <div>
                <p className="text-xs text-gray-600">
                  Email
                </p>

                <p className="mt-1 text-sm text-gray-300 transition group-hover:text-cyan-400">
                  aonosammy@gmail.com
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AonoSam"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xs font-semibold text-gray-300">
                GH
              </div>

              <div>
                <p className="text-xs text-gray-600">
                  GitHub
                </p>

                <p className="mt-1 text-sm text-gray-300 transition group-hover:text-cyan-400">
                  github.com/AonoSam
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aono-sam-03134840a/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xs font-semibold text-gray-300">
                in
              </div>

              <div>
                <p className="text-xs text-gray-600">
                  LinkedIn
                </p>

                <p className="mt-1 text-sm text-gray-300 transition group-hover:text-cyan-400">
                  LinkedIn Profile
                </p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}