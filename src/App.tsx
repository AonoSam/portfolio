import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ThemeToggle from "./components/ThemeToggle";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}

function AboutPage() {
  return (
    <main className="pt-20">
      <About />
    </main>
  );
}

function SkillsPage() {
  return (
    <main className="pt-20">
      <Skills />
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="pt-20">
      <Projects />
    </main>
  );
}

function ExperiencePage() {
  return (
    <main className="pt-20">
      <Experience />
    </main>
  );
}

function ContactPage() {
  return (
    <main className="pt-20">
      <Contact />
    </main>
  );
}

function App() {
  const [moonTheme, setMoonTheme] = useState(false);

  return (
    <div
      className={`
        min-h-screen
        text-white
        transition-colors
        duration-700
        ${
          moonTheme
            ? "bg-[#101827]"
            : "bg-[#050505]"
        }
      `}
    >
      {/* Global navigation */}
      <Navbar />

      {/* Global theme toggle */}
      <ThemeToggle
        moonTheme={moonTheme}
        setMoonTheme={setMoonTheme}
      />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* Skills */}
        <Route
          path="/skills"
          element={<SkillsPage />}
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={<ProjectsPage />}
        />

        {/* Experience */}
        <Route
          path="/experience"
          element={<ExperiencePage />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<ContactPage />}
        />

        {/* Project case studies */}
        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

      </Routes>
    </div>
  );
}

export default App;