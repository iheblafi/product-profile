import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Exhibitions from "./components/Exhibitions";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900 relative">
      {/* Subtle Dot Pattern Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex flex-col gap-12 md:gap-24">
        <Hero />
        <Brand />
        <Exhibitions />
        <CTA />
      </main>

      <footer className="py-12 mt-16 text-center text-zinc-500 dark:text-zinc-400 text-sm border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <p>© {new Date().getFullYear()} Iheb Lafi — Product Ambassador & Skincare Brand Representative.</p>
        </div>
      </footer>
    </div>
  );
}
