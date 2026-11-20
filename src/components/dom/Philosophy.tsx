"use client";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Philosophy() {
  return (
    <section className="relative px-6 lg:px-24 py-24 z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-12">
            <span className="text-primary text-xs tracking-widest font-mono uppercase mb-4 block">Mindset</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Engineering Philosophy</h2>
            <p className="text-secondary max-w-2xl">How I approach software architecture, problem-solving, and building products that scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.philosophy.map((item, idx) => (
              <div key={idx} className="glass-card p-8 hover:bg-white/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
                {/* Subtle top glow line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="text-primary font-mono text-sm mb-4">0{idx + 1}</div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}