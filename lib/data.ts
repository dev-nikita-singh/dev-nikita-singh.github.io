export const profile = {
  name: "Nikita Singh",
  brand: "Nikita Singh",
  role: "Agentic Systems",
  company: "Sovaria",
  location: "Delhi",
  site: "https://sovaria.in",
  github: "https://github.com/dev-nikita-singh",
  avatar: "/images/nikita-avatar.png",
  bio: "I design and ship intelligent systems — agents that plan, tools that stay reliable, and infrastructure that does not flinch under real load.",
  tagline:
    "Agentic AI, open systems, and products that feel inevitable once they ship.",
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
    href: "https://www.linkedin.com/in/miss-nikita-singh",
    icon: "linkedin" as const,
  },
  {
    label: "X",
    href: "https://x.com/dev_nikita_singh",
    icon: "x" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dev_nikita_singh",
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
    role: "Co-Founder",
    org: "Sovaria",
    period: "2025 — Present",
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

/** Structured essay blocks — prose, tables, splits, feature grids. */
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | {
      type: "split";
      left: BlogBlock[];
      right: BlogBlock[];
    }
  | {
      type: "features";
      title: string;
      lead?: string;
      items: { title: string; points: string[] }[];
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
  content: BlogBlock[];
  featured?: boolean;
};

const blogPosts: BlogPost[] = [
  {
    slug: "opencanvasx-local-first-design-studio",
    title: "OpenCanvasX: local-first design without the cloud tax",
    excerpt:
      "A deep look at OpenCanvasX — why local-first creative tooling matters, how the monorepo is shaped, and what builders should watch as the studio grows past Phase 0.",
    date: "2026-10-03",
    category: "Open Source",
    tags: ["opencanvasx", "local-first", "design", "flutter", "rust"],
    links: [
      {
        label: "OpenCanvasX on GitHub",
        href: "https://github.com/tejashvi-kumawat/OpenCanvasX",
        kind: "github",
      },
    ],
    readMinutes: 12,
    image: "/images/ai-systems.jpg",
    featured: true,
    content: [
      {
        type: "p",
        text: "Most design tools today assume the cloud is the product. You create an account, sync canvases to someone else’s servers, and treat collaboration as “upload first, edit later.” That model is fine when drafts are disposable. It is a poor default when diagrams describe infrastructure, decks are client-confidential, or AI features mean shipping your work into a vendor model you do not control.",
      },
      {
        type: "p",
        text: "OpenCanvasX takes the opposite bet: a free, open-source, local-first design studio where the file on disk is still the source of truth. I am writing this up because the architecture — not just the pitch — is what serious builders should study. Offline reliability, plugin boundaries, honest AI keys, and eventual peer collaboration are the same systems problems I care about in agentic products. They just happen to wear a canvas UI here.",
      },
      {
        type: "split",
        left: [
          {
            type: "p",
            text: "Cloud suites optimized for sync and subscription. OpenCanvasX optimizes for ownership: open the file, edit offline, optionally bring your own AI, and only reach for the network when collaboration actually needs it.",
          },
          {
            type: "table",
            caption: "Cloud suite vs OpenCanvasX",
            headers: ["Dimension", "Cloud suite", "OpenCanvasX"],
            rows: [
              ["Source of truth", "Account + remote project", "Local files on disk"],
              ["Account wall", "Required for full use", "Optional — not mandatory"],
              ["AI", "Vendor model, metered", "BYOK + local AI paths"],
              ["Collaboration", "Central server sync", "Secure P2P (planned)"],
              ["Extensibility", "Closed plugin markets", "Plugins & templates in-repo"],
              ["License", "SaaS subscription", "Apache-2.0 open source"],
            ],
          },
          {
            type: "callout",
            text: "Why it matters: no mandatory upload, no account gate, no cloud silently owning your drafts.",
          },
        ],
        right: [
          {
            type: "p",
            text: "This is not “one more Figma clone.” The product framing is a studio surface for multiple creative modes — graphics, illustrations, presentations, documents, diagrams, animation, and video — with plugins, templates, offline editing, and optional AI without forcing an account.",
          },
          {
            type: "list",
            items: [
              "Local files remain the canonical source of truth",
              "AI via bring-your-own-key or local models — not a locked vendor lane",
              "Plugins and templates treated as first-class extensions",
              "Collaboration planned as secure peer-to-peer, not mandatory cloud sync",
              "Apache-2.0 so the stack can be audited and extended",
            ],
          },
          {
            type: "p",
            text: "That combination is rare. Most “open” creative tools still lean on a hosted backend for the interesting path. OpenCanvasX is trying to keep the interesting path local.",
          },
        ],
      },
      {
        type: "h2",
        text: "What “local-first” actually buys you",
      },
      {
        type: "p",
        text: "Local-first is not nostalgia for desktop software. It is a reliability and trust model. If the network drops, the tool still works. If a company changes pricing, your files do not become hostage. If you are drafting something sensitive, the default path never silently uploads bytes “for sync.” Collaboration can still exist later — as an explicit protocol — instead of “everything syncs because the product needs telemetry.”",
      },
      {
        type: "split",
        left: [
          {
            type: "h2",
            text: "Failure modes that stay obvious",
          },
          {
            type: "list",
            items: [
              "Save means write to disk you control",
              "AI calls are opt-in and keyed by you",
              "Plugins have clear package boundaries",
              "No mystery remote convert queue for basic edits",
            ],
          },
        ],
        right: [
          {
            type: "h2",
            text: "Where this overlaps agentic systems",
          },
          {
            type: "list",
            items: [
              "State close to the user, not buried in a SaaS blob",
              "Tools with honest permissions and clear I/O",
              "Optional network instead of ambient sync",
              "Extensibility without shipping secrets to a vendor",
            ],
          },
        ],
      },
      {
        type: "features",
        title: "Repository shape (why the monorepo matters)",
        lead: "Still early — Phase 0 scaffolding — but the layout already signals a serious desktop product, not a demo repo.",
        items: [
          {
            title: "apps/desktop",
            points: [
              "Flutter desktop application shell",
              "Primary surface for creative modes",
              "Melos-managed monorepo bootstrap",
            ],
          },
          {
            title: "packages + rust",
            points: [
              "Dart engines and shared libraries",
              "Rust native core (ods_native)",
              "Bridged with flutter_rust_bridge",
            ],
          },
          {
            title: "docs + extensions",
            points: [
              "Architecture and protocol notes",
              "Templates, assets, plugins (later phases)",
              "Scripts for bootstrap, codegen, release",
            ],
          },
        ],
      },
      {
        type: "p",
        text: "The Flutter + Rust split is intentional. Flutter gives UI velocity across desktop targets. Rust owns performance-sensitive and native work. That is the same instinct behind serious offline tools: keep the shell productive, push the hot path into a language that can hold the line when canvases, codecs, or engines get heavy.",
      },
      {
        type: "table",
        caption: "Stack instincts at a glance",
        headers: ["Layer", "Choice", "Why it fits"],
        rows: [
          ["UI shell", "Flutter desktop", "Cross-platform UI velocity"],
          ["Engines", "Dart packages", "Shared logic next to the app"],
          ["Native core", "Rust + FRB", "Performance + safe boundaries"],
          ["Extensibility", "Plugins / templates", "Growth without rewriting the shell"],
          ["AI", "BYOK + local paths", "No mandatory vendor lock-in"],
          ["Collab (planned)", "Secure P2P", "Sync without owning user files"],
        ],
      },
      {
        type: "h2",
        text: "What I am watching next",
      },
      {
        type: "p",
        text: "Phase 0 means the product is still scaffolding — and that is fine. The interesting questions are already visible: how plugin APIs stay stable, how AI stays optional without feeling second-class, how P2P collaboration earns trust without becoming “cloud sync with extra steps,” and how file formats stay boring enough to last.",
      },
      {
        type: "list",
        items: [
          "Does the canvas file format stay portable and inspectable?",
          "Do plugins get clear sandboxes and versioning?",
          "Can local AI feel first-class without a vendor account?",
          "Does collaboration stay peer-shaped when it arrives?",
        ],
      },
      {
        type: "callout",
        text: "If you build systems or agents, projects like this are worth starring early — the hard problems show up before the marketing polish does.",
      },
      {
        type: "p",
        text: "OpenCanvasX will not replace every cloud suite tomorrow. That is not the point. The point is a credible open path where creative work can stay on the machine that created it — and where the architecture admits that ownership, offline, and extensibility are product features, not afterthoughts. Repo: github.com/tejashvi-kumawat/OpenCanvasX.",
      },
    ],
  },
  {
    slug: "document-studio-offline-pdf-toolkit",
    title: "Why Document Studio beats Adobe suites and online PDF tools",
    excerpt:
      "Notes on Document Studio — an offline-first PDF workspace I helped research — and why local pipelines beat Acrobat subscriptions and upload-everything converters.",
    date: "2026-09-20",
    category: "Tools",
    tags: ["pdf", "offline", "document-studio", "privacy", "research"],
    links: [
      {
        label: "Document Studio repo",
        href: "https://github.com/tejashvi-kumawat/DocumentStudio",
        kind: "github",
      },
      {
        label: "Docs site",
        href: "https://tejashvi-kumawat.github.io/DocumentStudio/",
        kind: "docs",
      },
      {
        label: "Latest release",
        href: "https://github.com/tejashvi-kumawat/DocumentStudio/releases",
        kind: "external",
      },
    ],
    readMinutes: 10,
    image: "/images/laptop-work.jpg",
    featured: true,
    content: [
      {
        type: "p",
        text: "I spent time on the research side of Document Studio — mapping what people actually need from a PDF tool, where Adobe suites feel heavy, and why “just upload it” web converters are a bad default for anything confidential. The result is a free, ad-free, offline-first desktop workspace for Windows, macOS, and Linux: merge, split, compress, encrypt, OCR, redact, and Office→PDF without sending your files to a stranger’s server.",
      },
      {
        type: "p",
        text: "This post is my commentary on why that model is nicer — and honestly better — for a lot of day-to-day work than paying for Acrobat-class suites or trusting online tools with client decks, contracts, and scans.",
      },
      {
        type: "split",
        left: [
          {
            type: "p",
            text: "Adobe and similar suites are powerful, but they optimize for subscription, cloud continuity, and account identity. Online converters optimize for convenience — which usually means your PDF leaves the machine before anything useful happens.",
          },
          {
            type: "table",
            caption: "Acrobat / online tools vs Document Studio",
            headers: ["", "Acrobat / suites", "Online converters", "Document Studio"],
            rows: [
              ["Account", "Usually required", "Often required", "Not for core tools"],
              ["Files go", "Cloud / vendor path", "Uploaded remotely", "Stay on your disk"],
              ["Pricing", "Subscription", "Freemium / ads", "Free, ad-free"],
              ["Source", "Closed", "Closed", "Open on GitHub"],
              ["Latency", "App + sync tax", "Upload + remote job", "Local pipeline"],
              ["Trust model", "Vendor policy", "Whoever hosts it", "Your machine"],
            ],
          },
          {
            type: "callout",
            text: "Why it feels faster and safer: no account gate, no upload round-trip, no remote convert queue, no mystery third party holding the bytes.",
          },
        ],
        right: [
          {
            type: "p",
            text: "What I liked most while researching this space is how rare honesty is. Lots of tools claim “privacy.” Few make the default path obviously local. Document Studio does: encryption needs the real password, redaction removes content instead of painting a black box, and installers land in Start Menu / Applications / Linux menus like normal software.",
          },
          {
            type: "list",
            items: [
              "Core tools never silently upload document bytes",
              "Honest security — encrypt, decrypt, and redact for real",
              "Desktop installs you can find again next week",
              "Local engines: qpdf, Tesseract, LibreOffice, PDFium",
              "No ads, no account wall for everyday PDF work",
            ],
          },
          {
            type: "p",
            text: "That is the product I wished existed when comparing “pay Adobe” vs “yeet the PDF into a random website.” Document Studio is the third option.",
          },
        ],
      },
      {
        type: "h2",
        text: "Where I helped: research",
      },
      {
        type: "p",
        text: "My contribution sat in research — competitor teardown, feature prioritization, and the trust questions users actually ask before they install anything. Which Acrobat workflows are table-stakes? Where do online tools fail on latency and confidentiality? Which promises have to be true on day one (offline core, honest redaction, no account) versus nice-to-have later?",
      },
      {
        type: "split",
        left: [
          {
            type: "h2",
            text: "Research questions we kept returning to",
          },
          {
            type: "list",
            items: [
              "What must work fully offline on first launch?",
              "Which Acrobat habits are non-negotiable for students and builders?",
              "Where do upload-based tools create unacceptable trust gaps?",
              "How do we explain privacy without marketing fog?",
            ],
          },
        ],
        right: [
          {
            type: "h2",
            text: "What that research pushed into the product",
          },
          {
            type: "list",
            items: [
              "Offline-first as a hard default, not a footnote",
              "Clear comparison against suites and web converters",
              "Feature map grouped by real jobs (organize, protect, OCR)",
              "Public docs and open source so claims can be checked",
            ],
          },
        ],
      },
      {
        type: "features",
        title: "Features (what you can actually do)",
        lead: "Everything below runs offline on the device that opened the file — the part that made the research feel worth it.",
        items: [
          {
            title: "Home & library",
            points: [
              "Open / create PDF",
              "Images → PDF",
              "Pinned & recent",
              "Searchable tools hub",
            ],
          },
          {
            title: "Organize",
            points: [
              "Merge, split, extract",
              "Insert, replace, reorder",
              "Rotate, crop, resize",
              "Blank pages",
            ],
          },
          {
            title: "Optimize & protect",
            points: [
              "Compress & watermark",
              "Metadata edit/remove",
              "Encrypt / decrypt",
              "Redact + page numbers",
            ],
          },
        ],
      },
      {
        type: "split",
        left: [
          {
            type: "h2",
            text: "Why this beats Adobe for many people",
          },
          {
            type: "p",
            text: "Acrobat is deep. Most people do not need the deep end every day. They need merge, compress, encrypt, OCR, and a tool that does not nickle-and-dime them for basic jobs. Document Studio covers that lane without a subscription tax — and without pretending cloud sync is mandatory for editing a PDF on your laptop.",
          },
        ],
        right: [
          {
            type: "h2",
            text: "Why this beats online tools",
          },
          {
            type: "p",
            text: "Online converters win on zero install. They lose on trust and round-trips. If the file is personal, client-owned, or even mildly sensitive, uploading it to convert pages is the wrong first step. Local pipelines remove that decision entirely.",
          },
        ],
      },
      {
        type: "table",
        caption: "Privacy defaults that came out of the research",
        headers: ["Promise", "What it means"],
        rows: [
          ["Offline core tools", "Pipelines run on the machine that opened the file"],
          ["No password cracking", "Encryption needs the real password"],
          ["Honest redaction", "Content removed — not only covered"],
          ["No account for core use", "Open → run tool → save"],
        ],
      },
      {
        type: "p",
        text: "Local-first utilities are infrastructure for trust. Whether you ship agents, client decks, or coursework PDFs, the boring question is the same: who holds the bytes? Document Studio answers that clearly. I am glad I got to help pressure-test that answer on the research side — and I think more tools should be this honest. Start at github.com/tejashvi-kumawat/DocumentStudio.",
      },
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
