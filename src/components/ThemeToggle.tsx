import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  moonTheme: boolean;
  setMoonTheme: (value: boolean) => void;
}

export default function ThemeToggle({
  moonTheme,
  setMoonTheme,
}: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={() => setMoonTheme(!moonTheme)}
      aria-label="Toggle moon theme"
      className="
        fixed right-6 top-6 z-[60]
        flex h-11 w-11 items-center justify-center
        rounded-full
        border border-white/10
        bg-black/50
        text-gray-300
        shadow-xl
        backdrop-blur-xl
        transition-all duration-500
        hover:scale-110
        hover:border-cyan-400/30
        hover:text-cyan-400
      "
    >
      {moonTheme ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}