"use client";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Skills() {
  return (
    <section className="relative px-6 lg:px-24 py-24 z-10 w-full bg-background/50 border-t border-glassBorder">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
            <p className="text-secondary">A practical toolkit chosen per problem—web, backend, AI, and systems delivery.</p>
          </div>

          {/* Updated grid layout to handle 5 items cleanly (3 top, 2 bottom on large screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.skills.map((category, idx) => (
              <div key={idx} className="glass-card p-6">
                <h3 className="text-lg font-bold text-white mb-6 border-b border-glassBorder pb-4">
                  {category.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                      <span className="text-slate-300 text-sm font-mono">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}