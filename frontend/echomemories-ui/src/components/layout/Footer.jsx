const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Left: Brand */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Echo<span className="text-indigo-500">Memories</span>
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Preserving stories. Honoring memories.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
              About
            </a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
              Contact
            </a>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-8 text-xs text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} EchoMemories. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
