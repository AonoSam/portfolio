import {
  Briefcase,
  Code2,
  FolderOpen,
  Home,
  Mail,
  User,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About",
    href: "/about",
    icon: User,
  },
  {
    name: "Skills",
    href: "/skills",
    icon: Code2,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderOpen,
  },
  {
    name: "Experience",
    href: "/experience",
    icon: Briefcase,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      {/* Desktop Navigation */}
      <aside className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
        <div className="flex flex-col items-center gap-3 rounded-full border border-white/10 bg-black/50 p-3 shadow-2xl backdrop-blur-xl">

          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              location.pathname === item.href ||
              (item.href === "/projects" &&
                location.pathname.startsWith("/projects/"));

            return (
              <Link
                key={item.name}
                to={item.href}
                aria-label={item.name}
                className="group relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300"
              >
                {/* Active background */}
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-400"
                      : "bg-transparent group-hover:bg-white/10"
                  }`}
                />

                {/* Icon */}
                <Icon
                  size={18}
                  className={`relative z-10 transition-all duration-300 ${
                    isActive
                      ? "text-black"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                />

                {/* Tooltip */}
                <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg border border-white/10 bg-black/90 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-xl transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Mobile Navigation */}
      <MobileNavigation />
    </>
  );
}

function MobileNavigation() {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-black/70 p-2 shadow-2xl backdrop-blur-xl lg:hidden">

      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            to={item.href}
            aria-label={item.name}
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition hover:bg-white/10 hover:text-white"
          >
            <Icon size={17} />
          </Link>
        );
      })}
    </div>
  );
}