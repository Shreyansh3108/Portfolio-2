"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.hero.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PORTFOLIO_DATA.hero.email}`;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      const subject = encodeURIComponent(`Portfolio Note from ${name}`);
      const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
      window.location.href = `mailto:${PORTFOLIO_DATA.hero.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Portfolio Note from ${name}`,
          from_name: name,
          email,
          message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer
      id="contact"
      className="relative px-6 lg:px-24 pt-24 pb-12 z-10 w-full border-t border-glassBorder bg-background/70"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-secondary text-xs tracking-widest font-mono uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Send a Note
            </h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed max-w-md mb-10">
              Hiring for SDE, Backend, or Full-Stack roles—or want to talk shop on AI systems and distributed architecture? Drop a message directly.
            </p>

            <div className="space-y-4 max-w-md">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border border-glassBorder bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all text-left cursor-pointer group"
              >
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-secondary mb-1">
                    Direct Email
                  </span>
                  <span className="text-sm md:text-base font-mono text-white group-hover:text-primary transition-colors">
                    {PORTFOLIO_DATA.hero.email}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full border border-glassBorder bg-background/80 text-xs font-mono text-primary shrink-0">
                  {copied ? "Copied ✓" : "Copy"}
                </span>
              </button>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={PORTFOLIO_DATA.hero.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-glassBorder bg-background/80 hover:bg-white/10 hover:border-white/30 text-slate-200 hover:text-white text-sm font-mono tracking-wide transition-all duration-200 cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 fill-current shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.hero.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 bg-primary/10 hover:bg-primary/20 hover:border-primary/70 text-primary text-sm font-mono tracking-wide transition-all duration-200 cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 fill-current shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>LinkedIn</span>
                  <span className="text-xs leading-none">↗</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl border border-glassBorder bg-background/80 overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-glassBorder bg-white/[0.03]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <span className="text-xs font-mono text-secondary">
                ~/shreyansh/send-note.sh
              </span>
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest">
                READY
              </span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono text-primary mb-2"
                >
                   name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Recruiter / Engineer name"
                  className="w-full px-4 py-3 rounded-xl border border-glassBorder bg-white/[0.03] text-white placeholder:text-slate-500 text-sm font-mono focus:outline-none focus:border-primary/70 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono text-primary mb-2"
                >
                   email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-glassBorder bg-white/[0.03] text-white placeholder:text-slate-500 text-sm font-mono focus:outline-none focus:border-primary/70 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-primary mb-2"
                >
                   message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Role details, project idea, or just say hi..."
                  className="w-full px-4 py-3 rounded-xl border border-glassBorder bg-white/[0.03] text-white placeholder:text-slate-500 text-sm font-mono focus:outline-none focus:border-primary/70 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-7 py-3 rounded-full bg-primary text-background font-mono font-semibold text-sm hover:opacity-90 disabled:opacity-50 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>
                    {status === "sending" ? "Transmitting..." : "Transmit Note"}
                  </span>
                  <span>→</span>
                </button>

                {status === "sent" && (
                  <span className="text-xs font-mono text-emerald-400">
                    &gt; 200 OK · Note dispatched
                  </span>
                )}
                {status === "error" && (
                  <span className="text-xs font-mono text-red-400">
                    &gt; ERR · Use direct email instead
                  </span>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-glassBorder/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-secondary">
          <span>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.hero.name} · IIIT Bhopal
          </span>
          <a
            href="#"
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}