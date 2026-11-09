// src/lib/data.ts

export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  techStack: string[];
  bullets: string[];
  color: string;
  liveLink?: string;
  githubLink?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  metric: string;
  subtitle: string;
}

export const PORTFOLIO_DATA = {
  hero: {
    name: "Shreyansh Dwivedi",
    title: "Software Engineer · AI Systems · Backend Infrastructure",
    subtitle: "Product-minded engineer building AI systems, event-driven platforms, and robust backend architectures where complexity feels effortless.",
    graduation: "2026",
    university: "IIIT Bhopal",
    phone: "+91 8318946679",
    email: "nikkudwivedi4942@gmail.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  },

  projects: [
    {
      id: "01",
      category: "EVENT-DRIVEN PLATFORM",
      title: "Agentwire",
      description: "An autonomous AI agent using Next.js edge functions and Upstash QStash to process real-time events.",
      techStack: ["Next.js", "TypeScript", "Gemini AI", "Upstash QStash", "Zod", "PostgreSQL", "Prisma"],
      bullets: [
        "Captures live webhooks in under 30ms, asynchronously reasoning with Gemini to transform unstructured input.",
        "Self-healing agent loop using Zod schema validation that auto-corrects reasoning and formatting errors before persisting to PostgreSQL."
      ],
      color: "rgba(185, 28, 28, 0.15)",
    },
    {
      id: "02",
      category: "B2B INFRASTRUCTURE",
      title: "Resolvr",
      description: "An autonomous B2B support infrastructure platform designed for high-accuracy semantic retrieval.",
      techStack: ["Next.js", "Node.js", "Express", "Qdrant", "Cohere", "Gemini API", "Prisma"],
      bullets: [
        "Architected a vector-search backend using Qdrant and Cohere embeddings for precise context retrieval.",
        "Integrated Clerk auth and Prisma ORM for secure, scalable tenant management."
      ],
      color: "rgba(4, 120, 87, 0.15)",
    },
    {
      id: "03",
      category: "BRAND ANALYTICS",
      title: "Rankcheck AI",
      description: "A live brand analytics platform tracking generative AI search positioning and competitive intelligence.",
      techStack: ["Next.js", "Node.js", "TypeScript", "MongoDB", "Gemini AI", "Llama"],
      bullets: [
        "Implemented an asynchronous parallel querying engine across Gemini and Llama models.",
        "Designed a custom secondary reasoning pass algorithm to parse, score, and rank brand visibility from raw LLM outputs."
      ],
      color: "rgba(30, 58, 138, 0.15)",
    },
    {
      id: "04",
      category: "AUTOMATED SAAS",
      title: "Git Audit AI",
      description: "An AI-powered SaaS automating GitHub security audits with monetized credit billing.",
      techStack: ["Next.js 16", "TypeScript", "MongoDB", "Gemini AI", "Clerk", "Stripe"],
      bullets: [
        "Automated security audits in under 20 seconds, cutting manual review effort by 80% across 50+ repositories.",
        "Designed concurrent scan background services with webhook updates and persistent report storage."
      ],
      color: "rgba(109, 40, 217, 0.15)",
    }
  ] as Project[],

  skills: [
    {
      title: "Languages",
      skills: ["C++", "TypeScript", "JavaScript (ES6+)", "Python", "SQL", "HTML"]
    },
    {
      title: "Backend & Systems",
      skills: ["Node.js", "Express.js", "Next.js", "REST APIs", "Webhooks", "Zod"]
    },
    {
      title: "Databases & ORMs",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma ORM"]
    },
    {
      title: "AI & ML",
      skills: ["Google Gemini API", "Meta Llama", "Claude", "RAG Pipelines", "LangChain"]
    }
  ] as SkillCategory[],

  achievements: [
    {
      title: "CodeChef",
      metric: "3★",
      subtitle: "Peak Rating: 1614"
    },
    {
      title: "LeetCode",
      metric: "1600",
      subtitle: "Top 23% Globally"
    },
    {
      title: "Problem Solving",
      metric: "700+",
      subtitle: "DSA Problems Solved"
    },
    {
      title: "AtomQuest 2024",
      metric: "Top 2000",
      subtitle: "Out of 14,000+ participants"
    }
  ] as Achievement[]
};