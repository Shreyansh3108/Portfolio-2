"use client";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="relative px-6 lg:px-24 py-24 z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-12">
            <span className="text-primary text-xs tracking-widest font-mono uppercase mb-4 block">Highlights</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements</h2>
            <p className="text-secondary">Milestones from competitive coding and algorithmic sprints.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.achievements.map((item, idx) => (
              <div key={idx} className="glass-card p-8 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                <span className="text-sm font-mono text-secondary mb-4">{item.title}</span>
                <span className="text-5xl font-bold text-white mb-4">{item.metric}</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest">{item.subtitle}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}