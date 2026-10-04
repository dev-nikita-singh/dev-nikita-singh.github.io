export const profile = {
  name: "Nikita Singh",
  brand: "Nikita Singh",
  role: "Developer & Builder",
  company: "Sovaria",
  location: "Delhi",
  site: "https://sovaria.in",
  github: "https://github.com/dev-nikita-singh",
  avatar: "/images/avatar.png",
  bio: "Building intelligent systems at the intersection of agentic AI, software engineering, and open source. Learning by building, breaking, and rebuilding.",
  tagline:
    "Turning ambitious ideas into working products — agents, infrastructure, and systems that feel inevitable once they exist.",
};

/** Social profiles shown in the hero — edit URLs here. */
export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/dev-nikita-singh",
    icon: "github" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dev-nikita-singh",
    icon: "linkedin" as const,
  },
  {
    label: "X",
    href: "https://x.com/dev_nikita",
    icon: "x" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dev.nikita",
    icon: "instagram" as const,
  },
];

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Interests", href: "/#interests" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Blogs", href: "/#blogs" },
] as const;

export const interests = [
  {
    title: "Agentic AI",
    description:
      "Designing agents that plan, use tools, and ship outcomes — not just chat. I care about memory, evaluation, and the boring reliability that makes agents useful outside a demo.",
    image: "/images/ai-systems.jpg",
  },
  {
    title: "Distributed Systems",
    description:
      "Reliability, consistency, and the quiet craft of systems that stay up. Queues, retries, idempotency, and the tradeoffs that only show up at real scale.",
    image: "/images/earth-network.jpg",
  },
  {
    title: "Infrastructure & Security",
    description:
      "Hardening the path from idea to production with clear threat models, least privilege, and infrastructure that is boring on purpose.",
    image: "/images/circuits.jpg",
  },
  {
    title: "Open Source",
    description:
      "Learning in public, contributing where it compounds, and building the tools I wish existed — then sharing the sharp edges so others ship faster.",
    image: "/images/code-desk.jpg",
  },
];

export const projects = [
  {
    name: "Personal Dashboard Hub",
    summary: "One calm surface for daily ops, habits, and signals.",
    description:
      "A unified personal ops dashboard that gathers habits, reminders, and daily context into one readable view. Built to reduce tab chaos and make the next action obvious — without turning life into a second job.",
    highlights: [
      "Modular panels for habits, notes, and status",
      "Designed for glanceable density, not dashboard clutter",
      "Extensible layout for future agent-driven widgets",
    ],
    stack: ["JavaScript", "UI", "Productivity"],
    href: "https://github.com/dev-nikita-singh/personal-dashboard-hub",
    image: "/images/laptop-work.jpg",
  },
  {
    name: "Expenses Tracker",
    summary: "Frictionless spending awareness you will actually use.",
    description:
      "A lightweight expense tracker focused on fast logging and clear categories. The goal is honest visibility into where money goes — simple enough for daily use, structured enough to spot patterns over time.",
    highlights: [
      "Quick-add flow for everyday transactions",
      "Category clarity without spreadsheet overhead",
      "Clean UI tuned for mobile-first check-ins",
    ],
    stack: ["JavaScript", "Finance", "Product"],
    href: "https://github.com/dev-nikita-singh/expenses-tracker",
    image: "/images/code-desk.jpg",
  },
  {
    name: "Web Basics",
    summary: "Foundations of structure, interaction, and craft.",
    description:
      "A set of foundational web experiments exploring layout, interaction, and the platform itself. This is where I sharpen the fundamentals — accessibility, motion, and clean structure — before stacking higher systems on top.",
    highlights: [
      "Hands-on studies in HTML, CSS, and JS",
      "Interaction patterns used later in product work",
      "A living notebook for platform craft",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/dev-nikita-singh/web-basics",
    image: "/images/circuits.jpg",
  },
  {
    name: "TensorFlow Exploration",
    summary: "Learning the systems under modern ML.",
    description:
      "An exploration of TensorFlow and the engineering beneath model training and inference. Less about notebooks-as-magic, more about understanding pipelines, tooling, and how models become useful systems.",
    highlights: [
      "Framework orientation through real builds",
      "Focus on training/serving as engineering work",
      "Bridge between agent ideas and ML primitives",
    ],
    stack: ["Python", "ML", "Systems"],
    href: "https://github.com/dev-nikita-singh/tensorflow",
    image: "/images/ai-systems.jpg",
  },
];

export const experiences = [
  {
    role: "Builder",
    org: "Sovaria",
    period: "2025 — Present",
    year: "2025",
    location: "Delhi",
    type: "Full-time",
    points: [
      "Shipping intelligent product surfaces at the edge of agentic AI and software engineering.",
      "Exploring databases, distributed systems, and infrastructure with a builder’s bias to ship.",
      "Turning ambiguous ideas into working systems people can actually use.",
    ],
  },
  {
    role: "Open Source Explorer",
    org: "Independent",
    period: "2024 — Ongoing",
    year: "2024",
    location: "Remote",
    type: "Independent",
    points: [
      "Learning by building — dashboards, trackers, and experiments that sharpen systems thinking.",
      "Diving into ML frameworks and the engineering that makes models useful in the wild.",
      "Documenting patterns worth sharing as essays and notes.",
    ],
  },
  {
    role: "Systems Learner",
    org: "Self-directed",
    period: "2023 — 2024",
    year: "2023",
    location: "Delhi",
    type: "Learning",
    points: [
      "Built foundational web and tooling projects to sharpen platform craft.",
      "Studied distributed systems, security habits, and production reliability patterns.",
      "Started public GitHub work that later became portfolio experiments.",
    ],
  },
];

/** Link chip on a blog — GitHub, article, demo, or custom. */
export type BlogLink = {
  label: string;
  href: string;
  kind?: "github" | "article" | "demo" | "docs" | "external";
};

/**
 * Add a new essay by appending an object below.
 * Required: slug, title, excerpt, date (YYYY-MM-DD), category, tags, content.
 * Optional: links, image, readMinutes, featured.
 */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  links?: BlogLink[];
  readMinutes: number;
  image: string;
  content: string[];
  featured?: boolean;
};

const blogPosts: BlogPost[] = [
  {
    slug: "agentic-systems-need-boring-infrastructure",
    title: "Why agentic systems need boring infrastructure",
    excerpt:
      "Agents feel magical until latency, retries, and state management remind you they are software.",
    date: "2026-09-12",
    category: "Systems",
    tags: ["agents", "infrastructure", "reliability"],
    links: [
      {
        label: "Related notes on GitHub",
        href: "https://github.com/dev-nikita-singh",
        kind: "github",
      },
    ],
    readMinutes: 7,
    image: "/images/earth-network.jpg",
    featured: true,
    content: [
      "Agent demos look like magic. An LLM plans, calls tools, and ships a result while everyone watches the chat stream. Then you put the same loop into a product and discover the hard parts were never the prompts.",
      "Latency compounds. Each tool call is another network hop, another queue, another chance to time out. Without budgets, retries, and clear failure modes, the agent does not feel intelligent — it feels stuck.",
      "State is the other cliff. Agents need memory that is durable, queryable, and honest about what they already tried. Hand-waving “context windows” is not a storage strategy. Boring stores — queues, idempotency keys, job tables — keep long-running work recoverable.",
      "Evaluation belongs next to shipping. If you cannot tell whether a run succeeded for the right reason, you cannot improve it. Log traces, score outcomes, and treat regressions like any other production incident.",
      "The takeaway is simple: treat agents like distributed systems with a language model in the middle. The boring infrastructure is what makes the magic repeatable.",
    ],
  },
  {
    slug: "building-what-you-wish-existed",
    title: "Building what you wish existed",
    excerpt:
      "A short note on choosing projects that teach you the next layer of the stack.",
    date: "2026-08-02",
    category: "Craft",
    tags: ["product", "learning", "shipping"],
    links: [
      {
        label: "Personal Dashboard Hub",
        href: "https://github.com/dev-nikita-singh/personal-dashboard-hub",
        kind: "github",
      },
    ],
    readMinutes: 5,
    image: "/images/laptop-work.jpg",
    content: [
      "Most of my useful projects started as personal friction. A dashboard I kept wishing for. An expense flow that did not feel like homework. A tiny experiment that answered one stubborn question.",
      "Wish-driven work has a built-in compass. You know the empty state because you live in it. That makes scope decisions sharper: ship the piece that removes the pain, then stop before the project becomes a second job.",
      "The learning compounds when the wish sits one layer above what you already know. Stretch into systems, storage, or agents — but keep a path back to a usable surface. Theory without a shippable edge rarely sticks.",
      "I keep a short list of “I wish this existed” notes. When energy is high, I pick one and build the thinnest version that would make tomorrow easier. That habit has taught me more than any tutorial playlist.",
    ],
  },
  {
    slug: "security-as-a-product-habit",
    title: "Security as a product habit",
    excerpt:
      "Threat models that fit in a standup — and why small checks beat late audits.",
    date: "2026-06-18",
    category: "Security",
    tags: ["security", "habits", "product"],
    readMinutes: 6,
    image: "/images/circuits.jpg",
    content: [
      "Security fails when it only shows up at the end. A late audit can find issues, but it cannot invent the habits that would have prevented them.",
      "I like threat models that fit in a standup: who can touch this, what happens if a token leaks, and which path is the blast radius. Three questions. Written down. Revisited when the surface changes.",
      "Small checks beat heroic reviews. Least privilege by default. Secrets out of the client. Inputs validated at the edge. Dependency updates treated like product work, not weekend guilt.",
      "Product teams ship faster when security is boring and local. Make the safe path the easy path, and most of the drama disappears before it becomes an incident report.",
    ],
  },
  {
    slug: "notes-on-shipping-agents",
    title: "Notes on shipping agents people actually use",
    excerpt:
      "Demos optimize for surprise. Products optimize for recovery when the agent is wrong.",
    date: "2026-05-03",
    category: "Agents",
    tags: ["agents", "ux", "evaluation"],
    links: [
      {
        label: "Sovaria",
        href: "https://sovaria.in",
        kind: "external",
      },
    ],
    readMinutes: 8,
    image: "/images/ai-systems.jpg",
    featured: true,
    content: [
      "A good agent demo surprises people. A good agent product recovers when the surprise is wrong. Those are different design problems.",
      "Users need an escape hatch. Show what the agent is about to do, let them edit the plan, and make undo obvious. Trust is not a vibe — it is a control surface.",
      "Tool design matters more than clever prompting. Narrow tools with clear contracts beat a mega-tool that can “do anything.” Narrow tools fail loudly. Mega-tools fail mysteriously.",
      "Measure usefulness, not just completion. Did the user accept the result? Did they retry? Did they abandon the flow? Those signals tell you whether the agent is helping or performing.",
      "Ship the smallest loop that creates value, instrument it, then deepen autonomy only where the data says the human is bottlenecked — not where the demo look cooler.",
    ],
  },
  {
    slug: "open-source-as-a-practice",
    title: "Open source as a practice, not a portfolio prop",
    excerpt:
      "Public work is useful when it leaves a trail others can follow — including your future self.",
    date: "2026-03-21",
    category: "Open Source",
    tags: ["open-source", "docs", "community"],
    links: [
      {
        label: "GitHub profile",
        href: "https://github.com/dev-nikita-singh",
        kind: "github",
      },
    ],
    readMinutes: 5,
    image: "/images/code-desk.jpg",
    content: [
      "Open source is easy to treat like decoration: a row of repos that prove you exist. The useful version is a practice — a habit of leaving trails.",
      "I try to publish the sharp edges, not just the polished README. How did the queue fail? Which assumption broke in production? What would I delete if I started again?",
      "Small contributions count when they compound. Fixing docs, adding tests, clarifying an API — those are how you learn a codebase from the inside.",
      "Future-you is also an audience. A clear commit message and a short note in an issue can save weeks later. Public work is a gift to strangers and a letter to yourself.",
    ],
  },
  {
    slug: "distributed-systems-for-builders",
    title: "Distributed systems for builders who ship",
    excerpt:
      "You do not need a PhD to respect failure modes — you need a bias for boring defaults.",
    date: "2026-01-14",
    category: "Systems",
    tags: ["distributed-systems", "queues", "observability"],
    readMinutes: 7,
    image: "/images/earth-network.jpg",
    content: [
      "Builders meet distributed systems the moment one machine is not enough — or the moment one machine fails at the wrong time. Both happen earlier than you expect.",
      "Start with boring defaults: idempotent writes, explicit timeouts, retries with jitter, and a queue between things that should not block each other. These are not academic ideas. They are how products stay calm.",
      "Consistency is a product decision. Sometimes “eventually” is fine. Sometimes it ruins trust. Name the tradeoff in the UI and in the code so the next person does not invent a worse one under pressure.",
      "Observability is part of the system. If you cannot see lag, error budgets, or poison messages, you are flying blind. Ship dashboards with the feature, not after the outage.",
      "You can learn this craft by building. Put a job queue in a side project. Break it on purpose. That scar tissue is worth more than another abstract lecture.",
    ],
  },
];

/** Most recent first — use this everywhere in the UI. */
export const blogs: BlogPost[] = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export const blogCategories = Array.from(
  new Set(blogs.map((b) => b.category)),
).sort();

export function getBlogBySlug(slug: string) {
  return blogs.find((post) => post.slug === slug);
}

export function getBlogsByCategory(category: string | "all") {
  if (category === "all") return blogs;
  return blogs.filter((post) => post.category === category);
}
