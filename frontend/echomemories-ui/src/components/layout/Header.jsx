import { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      console.log("Dark mode ON");
    } else {
      root.classList.remove("dark");
      console.log("Dark mode OFF");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            Echo<span className="text-indigo-500">Memories</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {["Home", "Explore", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">

            {/* Dark toggle */}
            <button
              onClick={() => setDarkMode((p) => !p)}
              className="rounded-lg border border-slate-300 dark:border-slate-700 p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* CTA */}
            <button className="hidden sm:inline-flex rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500">
              Get Started
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <nav className="flex flex-col gap-4 px-4 py-6">
            {["Home", "Explore", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                {item}
              </a>
            ))}
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
