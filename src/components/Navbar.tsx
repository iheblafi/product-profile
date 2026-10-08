import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Dr. Anne", href: "#brand" },
    { name: "Exhibitions", href: "#exhibitions" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f4f4f0]/85 dark:bg-[#0a0a0a]/85 backdrop-blur-md transition-colors border-b border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <a href="#about" className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 hover:opacity-80 transition-opacity">
          Iheb Lafi.
        </a>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleDarkMode}
          className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors rounded-lg"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>
      </div>
    </header>
  );
}
