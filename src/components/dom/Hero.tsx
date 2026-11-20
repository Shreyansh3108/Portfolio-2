"use client";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { useStore } from "@/store/useStore";

export default function Hero() {
  const setActiveProject = useStore((state) => state.setActiveProject);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 z-10 pt-20">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onViewportEnter={() => setActiveProject(-1)}
          viewport={{ amount: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-glassBorder)] bg-[var(--color-glass)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            <span className="text-xs font-mono tracking-widest uppercase text-slate-300">
              Open to full-time software engineering roles
            </span>
          </div>

          <p className="text-[var(--color-secondary)] font-mono text-sm mb-4">
            {PORTFOLIO_DATA.hero.title}
          </p>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
            {PORTFOLIO_DATA.hero.name}
          </h1>

          <p className="text-xl md:text-2xl text-[var(--color-secondary)] mb-12 leading-relaxed max-w-2xl font-light">
            {PORTFOLIO_DATA.hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6 relative z-20">
            <a
              href="#featured"
              className="px-8 py-3.5 rounded-full bg-[var(--color-primary)] text-[var(--color-background)] font-medium hover:opacity-90 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>View selected work</span>
            </a>

            <a
              href={PORTFOLIO_DATA.hero.resumeDownload}
              download="Shreyansh_Dwivedi_Resume.pdf"
              className="px-8 py-3.5 rounded-full border border-[var(--color-glassBorder)] bg-[var(--color-glass)] text-white font-medium hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer"
            >
              Download resume
            </a>
          </div>

          <div className="flex items-center gap-3 relative z-20">
            <a
              href={PORTFOLIO_DATA.hero.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="w-11 h-11 rounded-full border border-[var(--color-glassBorder)] bg-[var(--color-glass)] hover:bg-white/10 hover:border-[var(--color-primary)] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            <a
              href={PORTFOLIO_DATA.hero.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-11 h-11 rounded-full border border-[var(--color-glassBorder)] bg-[var(--color-glass)] hover:bg-white/10 hover:border-[var(--color-primary)] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.hero.email}`}
              aria-label="Email"
              title="Send Email"
              className="w-11 h-11 rounded-full border border-[var(--color-glassBorder)] bg-[var(--color-glass)] hover:bg-white/10 hover:border-[var(--color-primary)] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <svg
                className="w-4 h-4 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>

            <a
              href={PORTFOLIO_DATA.hero.resumeDrive}
              target="_blank"
              rel="noreferrer"
              aria-label="View Resume on Google Drive"
              title="View Resume"
              className="w-11 h-11 rounded-full border border-[var(--color-glassBorder)] bg-[var(--color-glass)] hover:bg-white/10 hover:border-[var(--color-primary)] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <svg
                className="w-4 h-4 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}