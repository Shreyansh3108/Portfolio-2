// src/components/dom/Hero.tsx
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
          // Force activeIndex to -1 so models stay on the right at the top
          onViewportEnter={() => setActiveProject(-1)}
          viewport={{ once: false, amount: 0.1 }}
        >
           {/* ... Keep all your existing Hero HTML inside here ... */}
           
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-glassBorder)] bg-[var(--color-glass)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
            <span className="text-xs font-mono tracking-widest uppercase text-slate-300">
              Open to full-time software engineering roles
            </span>
          </div>

          <p className="text-[var(--color-secondary)] font-mono text-sm mb-4">
            Software Engineer · AI Systems · Backend Infrastructure
          </p>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
            {PORTFOLIO_DATA.hero.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--color-secondary)] mb-12 leading-relaxed max-w-2xl font-light">
            {PORTFOLIO_DATA.hero.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3.5 rounded-full bg-[var(--color-primary)] text-[var(--color-background)] font-medium hover:opacity-90 transition-all flex items-center gap-2">
              View selected work <span className="text-lg">↗</span>
            </button>
            <button className="px-8 py-3.5 rounded-full border border-[var(--color-glassBorder)] bg-[var(--color-glass)] text-white font-medium hover:bg-white/10 transition-all">
              Download resume
            </button>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}