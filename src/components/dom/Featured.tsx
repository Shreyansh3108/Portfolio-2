// src/components/dom/Featured.tsx
"use client";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { useStore } from "@/store/useStore";

export default function Featured() {
  const setActiveProject = useStore((state) => state.setActiveProject);

  return (
    // Note: We changed z-10 to z-0 here so the canvas can overlay it
    <section className="relative px-6 lg:px-24 py-24 z-0 w-full" id="featured">
      <div className="max-w-7xl mx-auto flex flex-col gap-40">
        {PORTFOLIO_DATA.projects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div 
              key={project.id}
              onViewportEnter={() => setActiveProject(index)}
              viewport={{ amount: 0.3 }} 
              className={`w-full max-w-3xl relative group cursor-default ${
                isEven ? "self-start" : "self-end"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-secondary text-xs tracking-widest font-mono uppercase">
                  {project.id} / {project.category}
                </span>
                <div className="h-px bg-glassBorder flex-grow"></div>
              </div>

              {/* Card with dynamic inline style for the background color */}
              <div 
                className="glass-card p-8 md:p-12 relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                style={{ 
                  backgroundColor: project.color,
                  // Use the project color for the border on hover (requires css variables or inline styles)
                  borderColor: 'var(--color-glassBorder)'
                }}
              >
                {/* We use a pseudo-element trick for the hover border glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl border-2 pointer-events-none"
                  style={{ borderColor: project.color.replace('0.15', '0.5') }} // Make border more opaque than bg
                />

                <span className="absolute -top-10 -right-4 text-[180px] font-bold text-white/5 select-none pointer-events-none">
                  {project.id}
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight relative z-10">
                  {project.title}
                </h2>
                
                <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed relative z-10">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-12 relative z-10">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-4 py-1.5 rounded-full border border-glassBorder bg-background/80 text-xs font-mono text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                  {project.bullets.map((bullet, i) => (
                    <div key={i} className="flex gap-4">
                      {/* Make the bullet point dot match the card theme */}
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: project.color.replace('0.15', '1') }}></div>
                      <p className="text-sm text-slate-300 leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}