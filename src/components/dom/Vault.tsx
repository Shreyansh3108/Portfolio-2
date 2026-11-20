"use client";
import { useRef, useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/data";
import ProjectLinks from "./ProjectLinks";

export default function Vault() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 712;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDownRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const stopDragging = () => {
    isDownRef.current = false;
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDownRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <section className="relative py-24 z-10 w-full border-t border-glassBorder bg-background/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-secondary text-xs tracking-widest font-mono uppercase mb-3 block">
            Archive
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            The Vault
          </h2>
          <p className="text-secondary max-w-xl">
            Deep technical experiments, architectural sprints, and optimizations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="w-11 h-11 rounded-full border border-glassBorder bg-white/5 hover:bg-white/15 hover:border-primary/50 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="w-11 h-11 rounded-full border border-glassBorder bg-white/5 hover:bg-white/15 hover:border-primary/50 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      <div className="w-full pl-6 lg:pl-24">
        <style>{`
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={handleMouseMove}
          className={`flex overflow-x-auto items-stretch gap-8 pb-6 pr-6 lg:pr-24 hide-scroll select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {PORTFOLIO_DATA.archive.map((project, idx) => (
            <div
              key={idx}
              className="w-[88vw] md:w-[680px] shrink-0 relative flex"
            >
              <div
                className="glass-card p-7 md:p-9 relative overflow-hidden transition-all duration-300 hover:border-white/25 group flex flex-col w-full"
                style={{
                  background: `linear-gradient(135deg, ${project.color?.replace("0.15", "0.28")} 0%, rgba(15, 23, 42, 0.45) 100%)`,
                  border: `1px solid ${project.color?.replace("0.15", "0.35")}`,
                  boxShadow: `0 10px 40px -10px ${project.color?.replace("0.15", "0.2")}`,
                }}
              >
                <span className="absolute -top-8 -right-2 text-[150px] font-bold text-white/5 select-none pointer-events-none leading-none">
                  {project.id}
                </span>

                <div className="flex justify-between items-center mb-3 relative z-10">
                  <span className="text-primary font-mono text-xs tracking-widest uppercase">
                    {project.year} · {project.type}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-1 relative z-10 tracking-tight">
                  {project.title}
                </h3>
                <h4 className="text-sm font-medium text-primary/90 mb-4 relative z-10">
                  {project.subtitle}
                </h4>

                <p className="text-sm text-slate-300 mb-5 leading-relaxed relative z-10 max-w-xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border bg-background/80 text-[11px] font-mono text-slate-200"
                      style={{
                        borderColor: project.color?.replace("0.15", "0.4"),
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 pt-5 mt-auto border-t"
                  style={{
                    borderColor: project.color?.replace("0.15", "0.25"),
                  }}
                >
                  {project.bullets.map((bullet, i) => (
                    <div key={i} className="flex gap-2.5 items-start">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{
                          backgroundColor:
                            project.color?.replace("0.15", "1") || "#38BDF8",
                        }}
                      />
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                <ProjectLinks
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}