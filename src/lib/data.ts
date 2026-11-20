// src/lib/data.ts

export interface Philosophy {
  title: string;
  description: string;
}

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

export interface ArchiveProject {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  type: string;
  tech: string[];
  description: string;
  bullets: string[];
  color: string;
  githubLink?: string;
  liveLink?: string;
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
    github: "https://github.com/Shreyansh3108",
    linkedin: "https://www.linkedin.com/in/shreyansh-dwivedi-684b67274/",
    resumeDownload: "/Shreyansh_Resume (7).pdf",
    resumeDrive:"https://drive.google.com/file/d/16pmsJv6W9WGaZ91islSd-a672nH9OuB-/view?usp=sharing"
  },

  projects: [
    {
      id: "01",
      category: "B2B INFRASTRUCTURE",
      title: "Resolvr",
      githubLink: "https://github.com/Shreyansh3108/Resolvr",
      liveLink: "https://resolvr-zeta.vercel.app/",
      description: "A B2B SaaS platform where companies upload internal docs and embed an AI chatbot on their sites, answering customer queries automatically.",
      techStack: ["Next.js", "TypeScript", "RAG", "Qdrant", "Cohere", "PostgreSQL", "Prisma"],
      bullets: [
        "Developed a multi-tenant RAG pipeline (Node.js, Express, Cohere, Qdrant, Gemini API) with sub-2s latency.",
        "Connected to a Next.js and Prisma (PostgreSQL) dashboard logging full chat histories per tenant, flagging out-of-scope requests."
      ],
      color: "rgba(4, 120, 87, 0.15)", // Emerald/Green
    },
    {
      id: "02",
      category: "EVENT-DRIVEN PLATFORM",
      title: "Agentwire",
      githubLink: "https://github.com/Shreyansh3108/Agentwire",
      liveLink: "https://agent-wire-liard.vercel.app/",
      description: "An autonomous AI agent using Next.js edge functions and Upstash QStash to process real-time events.",
      techStack: ["Next.js", "TypeScript", "Gemini AI", "Upstash QStash", "Zod", "PostgreSQL", "Prisma"],
      bullets: [
        "Captures live webhooks in under 30ms, asynchronously reasoning with Gemini to transform unstructured input.",
        "Self-healing agent loop using Zod schema validation that auto-corrects reasoning and formatting errors before persisting to PostgreSQL."
      ],
      color: "rgba(185, 28, 28, 0.15)", // Maroon/Red
    },
    {
      id: "03",
      category: "BRAND ANALYTICS",
      title: "Rankcheck AI",
      githubLink: "https://github.com/Shreyansh3108/RankCheck-AI",
      liveLink: "https://rankcheck-ai.vercel.app/",
      description: "A live brand analytics platform tracking generative AI search positioning and competitive intelligence.",
      techStack: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "Gemini AI", "Llama"],
      bullets: [
        "Implemented an asynchronous parallel querying engine across Gemini and Llama models.",
        "Designed a custom secondary reasoning pass algorithm to parse, score, and rank brand visibility from raw LLM outputs."
      ],
      color: "rgba(30, 58, 138, 0.15)", // Blue
    },
    {
      id: "04",
      category: "AUTOMATED SAAS",
      title: "Git Audit AI",
      githubLink: "https://github.com/Shreyansh3108/Git-Audit-AI",
      liveLink: "https://git-audit-ai.vercel.app/",
      description: "An AI-powered SaaS automating GitHub security audits with monetized credit billing.",
      techStack: ["Next.js 16", "TypeScript", "MongoDB", "Gemini API", "Clerk", "Stripe"],
      bullets: [
        "Automated security audits in under 20 seconds, cutting manual review effort by 80% across 50+ repositories.",
        "Designed concurrent scan background services with webhook updates and persistent report storage."
      ],
      color: "rgba(109, 40, 217, 0.15)", // Purple
    }
  ] as Project[],

  skills: [
    {
      title: "Languages",
      skills: ["C++", "TypeScript", "JavaScript (ES6+)", "Python", "SQL", "HTML"]
    },
    {
      title: "Backend & Frameworks",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "REST APIs", "Webhooks", "Zod"]
    },
    {
      title: "Databases & ORM",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma ORM", "Qdrant"]
    },
    {
      title: "AI & LLM Tech",
      skills: ["Gemini", "Claude", "OpenAI", "Llama", "RAG", "n8n", "AI Agents", "LangGraph", "LangChain"]
    },
    {
      title: "Infrastructure & Tools",
      skills: ["Git & GitHub", "Docker", "AWS", "Vercel", "Render", "Postman"]
    }
  ] as SkillCategory[],

  philosophy: [
    {
      title: "Execution Over Theory",
      description: "Prioritizing production deployments, fast iterations, and measurable outcomes over purely theoretical models."
    },
    {
      title: "Architectural Clarity",
      description: "Building systems with strict boundaries, ensuring complex AI pipelines and backend microservices remain effortlessly maintainable."
    },
    {
      title: "Resilient Engineering",
      description: "Designing self-healing agent loops and robust real-time state management that survive contact with edge cases and real users."
    }
  ] as Philosophy[],

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
      title: "Algo University",
      metric: "Top 100",
      subtitle: "Coderush 2024 (1500+ users)"
    }
  ] as Achievement[],

  archive: [
    {
      id: "01",
      year: "2026",
      title: "CogniFi",
      subtitle: "AI-Driven Workflow & Intelligence Engine",
      type: "Personal",
      tech: ["Next.js", "Node.js", "MongoDB", "Recharts"],
      description: "Architected an intelligent full-stack workflow and data-reasoning platform structured for automated intelligence processing and predictive evaluation.",
      bullets: [
        "Asynchronous Task Execution: Managed long-running AI workflows without blocking client threads.",
        "Security Boundaries: Implemented strict auth protocols and schema validation layers."
      ],
      color: "rgba(30, 58, 138, 0.15)", // Blue
      githubLink: "https://github.com/Shreyansh3108/CogniFI",
      liveLink: "https://github.com/Shreyansh3108/CogniFI"
    },
    {
      id: "02",
      year: "2026",
      title: "NexusLink",
      subtitle: "Edge-Cached URL Shortener",
      type: "Personal",
      tech: ["Next.js", "Express", "Redis", "Supabase"],
      description: "Built a high-performance URL shortener engineered for sub-millisecond redirects and minimal latency (Sub-15ms P99).",
      bullets: [
        "Distributed Edge Caching: Express backend queries Upstash Redis first, asynchronously seeding cache misses from PostgreSQL.",
        "API Security: Enforced header-based authentication to prevent automated scraping."
      ],
      color: "rgba(109, 40, 217, 0.15)", // Purple
      githubLink: "https://github.com/Shreyansh3108/Nexus-Link",
      liveLink: "https://nexus-link-two.vercel.app/",
    },
    {
      id: "03",
      year: "2026",
      title: "Quiz Pulse",
      subtitle: "High-Performance MERN Stack Application",
      type: "Personal",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Engineered a decoupled cloud deployment implementing custom Axios interceptors to eliminate serverless cold start latency.",
      bullets: [
        "Database Engine: Boosted MongoDB read/write performance by 30% using compound indexing.",
        "Network Layer: Configured automated token renewal and centralized error logging."
      ],
      color: "rgba(185, 28, 28, 0.15)", // Maroon
      githubLink: "https://github.com/Shreyansh3108/Quiz-Pulse",
      liveLink: "https://quiz-pulse-three.vercel.app/",
    },
    {
      id: "04",
      year: "2025",
      title: "Cipher Shield",
      subtitle: "Cryptographic Security Engine",
      type: "Personal",
      tech: ["JavaScript", "Cryptography"],
      description: "Designed an end-to-end secure messaging system utilizing AES and ECC encryption protocols to mitigate data interception.",
      bullets: [
        "Integrated threat-detection trained on 5,000+ labeled payloads to identify malicious patterns."
      ],
      color: "rgba(71, 85, 105, 0.15)", // Slate
      githubLink: "https://github.com/Harshit0502/Cipher_shield_V3",
      liveLink: "https://github.com/Harshit0502/Cipher_shield_V3",
    },
    {
      id: "05",
      year: "2026",
      title: "LeafSync",
      subtitle: "B2B Author Support & Operations Portal",
      type: "B2B Assignment",
      tech: ["Next.js", "Gemini API", "n8n", "PostgreSQL"],
      description: "Built an AI-assisted portal for BookLeaf Publishing utilizing a multi-tenant RAG backend, n8n automated workflows, and the Gemini API.",
      bullets: [
        "Integrated multi-tenant RAG backend with n8n automated workflows.",
        "Engineered full operations support portal using the Gemini API."
      ],
      color: "rgba(4, 120, 87, 0.15)", // Emerald
      githubLink: "https://github.com/Shreyansh3108/Leafsync2",
      liveLink: "https://yourusername.github.io/leafsync"
    },
    {
      id: "06",
      year: "2026",
      title: "PrepForge",
      subtitle: "Interview Preparation Application",
      type: "Take-Home Assignment",
      tech: ["Next.js", "Express", "Render", "Vercel"],
      description: "Developed a full-stack interview prep application featuring automated kit generation and secure authentication sessions.",
      bullets: [
        "Deployed decoupled architecture with frontend on Vercel and backend on Render.",
        "Resolved strict Git storage limits and complex module deployment configurations."
      ],
      color: "rgba(217, 119, 6, 0.15)", // Amber
      githubLink: "https://github.com/Shreyansh3108/PrepForge",
      liveLink: "https://github.com/Shreyansh3108/PrepForge",
    },
  ] as ArchiveProject[]
};