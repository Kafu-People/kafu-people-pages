/** Canonical service categories — keep in sync across homepage, /services, footer, and portfolio. */
export const SERVICE_CATEGORIES = [
  {
    id: "ai-agentic",
    title: "AI & Agentic Workflows",
    summary:
      "We design and deploy autonomous AI agents that integrate into your operations — handling multi-step workflows, LLM integrations, and intelligent automation.",
    homeIcon: "ai",
    servicesPage: {
      image: "/images/blogs/building-scalable-ai-agents.jpg",
      decorative: "/images/AI.svg",
      heroGradient:
        "bg-gradient-to-br from-slate-950 via-primary-dark to-slate-900",
      headerBg: "bg-primary/5 border-primary/20",
      headerLabel: "text-primary",
      headerTitle: "text-cDarkBlue",
      headerBody: "text-muted",
      overviewCard:
        "border-primary/30 bg-primary/5 hover:border-primary/50 hover:bg-primary/10",
      overviewIcon: "text-primary",
      offeringsBg: "bg-slate-900",
      card: "bg-white/10 border-white/20 backdrop-blur-md",
      iconWrap: "bg-white/15 text-white",
      icon: "robot",
    },
  },
  {
    id: "saas-mvp",
    title: "SaaS & Startup MVPs",
    summary:
      "Launch your product in weeks with scalable MVPs — user auth, billing, APIs, and core features ready for real users and early validation.",
    homeIcon: "rocket",
    servicesPage: {
      image: "/images/blogs/shipping-saas-mvp-in-six-weeks.jpg",
      decorative: "/images/product.webp",
      heroGradient:
        "bg-gradient-to-br from-slate-950 via-blue-700 to-primary-dark",
      headerBg: "bg-blue-50 border-blue-200/60",
      headerLabel: "text-blue-700",
      headerTitle: "text-cDarkBlue",
      headerBody: "text-muted",
      overviewCard:
        "border-blue-600/30 bg-blue-600/5 hover:border-blue-600/50 hover:bg-blue-600/10",
      overviewIcon: "text-blue-600",
      offeringsBg: "bg-slate-900",
      card: "bg-white/10 border-white/20 backdrop-blur-md",
      iconWrap: "bg-white/15 text-white",
      icon: "rocket",
    },
  },
  {
    id: "cloud-dashboards",
    title: "Cloud-Native Dashboards",
    summary:
      "Build real-time dashboards and data visualization on cloud-native infrastructure — live streaming, embedded analytics, and performance at scale.",
    homeIcon: "cloud",
    servicesPage: {
      image: "/images/newsAndEvents/new-cloud-native-dashboard-template.jpg",
      decorative: "/images/cloud.png",
      heroGradient: "bg-gradient-to-br from-slate-950 via-accent to-slate-900",
      headerBg: "bg-teal-50 border-teal-200/60",
      headerLabel: "text-teal-700",
      headerTitle: "text-cDarkBlue",
      headerBody: "text-muted",
      overviewCard:
        "border-accent/35 bg-accent/5 hover:border-accent/55 hover:bg-accent/10",
      overviewIcon: "text-accent",
      offeringsBg: "bg-slate-900",
      card: "bg-white/10 border-white/20 backdrop-blur-md",
      iconWrap: "bg-white/15 text-white",
      icon: "tachometer",
    },
  },
  {
    id: "business-websites",
    title: "Business & Corporate Websites",
    summary:
      "Responsive, SEO-friendly corporate sites and landing pages with strong UI/UX, CMS integration, and ongoing maintenance.",
    homeIcon: "web",
    servicesPage: {
      image: "/images/about1.webp",
      decorative: "/images/web.png",
      heroGradient:
        "bg-gradient-to-br from-slate-800 via-slate-700 to-accent",
      headerBg: "bg-emerald-50 border-emerald-200/60",
      headerLabel: "text-emerald-700",
      headerTitle: "text-cDarkBlue",
      headerBody: "text-muted",
      overviewCard:
        "border-green-500/35 bg-green-500/5 hover:border-green-500/55 hover:bg-green-500/10",
      overviewIcon: "text-green-500",
      offeringsBg: "bg-slate-50",
      card: "bg-white border-slate-200 shadow-sm",
      iconWrap: "bg-primary/10 text-primary",
      icon: "store",
    },
  },
];

export const SERVICE_CATEGORY_TITLES = SERVICE_CATEGORIES.map((c) => c.title);

/** Individual offerings grouped under SERVICE_CATEGORIES on /services. */
export const SERVICE_OFFERINGS = [
  // AI & Agentic Workflows
  {
    categoryId: "ai-agentic",
    iconKey: "robot",
    title: "Custom AI Agent Development",
    description:
      "Design and deploy autonomous AI agents that perform complex tasks, from customer support to data analysis, using LLMs and custom reasoning engines.",
  },
  {
    categoryId: "ai-agentic",
    iconKey: "projectDiagram",
    title: "Agentic Workflow Automation",
    description:
      "Build multi-agent systems where AI agents collaborate to automate business processes, handle decision-making, and execute workflows with minimal human intervention.",
  },
  {
    categoryId: "ai-agentic",
    iconKey: "tensorflow",
    title: "LLM Fine-Tuning & Integration",
    description:
      "Fine-tune open-source or commercial LLMs on your domain data and integrate them seamlessly into your existing applications for intelligent assistance.",
  },
  {
    categoryId: "ai-agentic",
    iconKey: "database",
    title: "Retrieval-Augmented Generation (RAG)",
    description:
      "Implement RAG pipelines that ground AI responses in your proprietary knowledge bases, ensuring accurate, context-aware answers without hallucinations.",
  },
  {
    categoryId: "ai-agentic",
    iconKey: "analytics",
    title: "AI Model Observability",
    description:
      "Monitor, evaluate, and improve your AI agents with tools for tracing, logging, and performance metrics, ensuring reliability and safety in production.",
  },
  {
    categoryId: "ai-agentic",
    iconKey: "magic",
    title: "Prompt Engineering & Optimization",
    description:
      "Craft and optimize prompts for maximum accuracy and efficiency, including few-shot learning, chain-of-thought, and advanced prompt strategies.",
  },
  // SaaS & Startup MVPs
  {
    categoryId: "saas-mvp",
    iconKey: "rocket",
    title: "Rapid MVP Development",
    description:
      "Launch your SaaS idea in weeks, not months. We build functional, scalable MVPs with user authentication, payment integration, and core features ready for real users.",
  },
  {
    categoryId: "saas-mvp",
    iconKey: "lock",
    title: "Subscription & Billing Integration",
    description:
      "Integrate Stripe, Paddle, or Recurly for seamless subscription management, tiered pricing, invoicing, and dunning workflows.",
  },
  {
    categoryId: "saas-mvp",
    iconKey: "cloudUpload",
    title: "Multi-tenant SaaS Architecture",
    description:
      "Design and implement secure, scalable multi-tenant backends with isolated data, custom domains, and tenant-specific configurations.",
  },
  {
    categoryId: "saas-mvp",
    iconKey: "chartLine",
    title: "User Analytics & Engagement",
    description:
      "Embed product analytics (Mixpanel, PostHog) and in-app messaging to track user behavior, run cohort analysis, and drive retention.",
  },
  {
    categoryId: "saas-mvp",
    iconKey: "envelope",
    title: "SaaS Launch Toolkit",
    description:
      "Get a complete launch package including landing page, waitlist setup, email automation, and onboarding flows to convert signups into paying customers.",
  },
  {
    categoryId: "saas-mvp",
    iconKey: "codeBranch",
    title: "Scalable API Design",
    description:
      "Build RESTful or GraphQL APIs that can handle growth, with rate limiting, versioning, and comprehensive documentation using OpenAPI.",
  },
  // Cloud-Native Dashboards
  {
    categoryId: "cloud-dashboards",
    iconKey: "tachometer",
    title: "Real-Time Dashboard Development",
    description:
      "Create interactive dashboards with live data streaming using WebSockets, Server-Sent Events, or GraphQL subscriptions. Perfect for monitoring, analytics, and operations.",
  },
  {
    categoryId: "cloud-dashboards",
    iconKey: "cloudSun",
    title: "Cloud-Native Deployment",
    description:
      "Deploy your dashboards on AWS, GCP, or Azure using containers (Docker/Kubernetes), serverless functions, and managed databases for auto-scaling and high availability.",
  },
  {
    categoryId: "cloud-dashboards",
    iconKey: "chartBar",
    title: "Custom Data Visualization",
    description:
      "Build beautiful, interactive charts and graphs with D3.js, Recharts, or Plotly, tailored to your KPIs, metrics, and business logic.",
  },
  {
    categoryId: "cloud-dashboards",
    iconKey: "dashboardCustomize",
    title: "Embedded Analytics",
    description:
      "Integrate analytics widgets into your existing product, allowing users to build custom reports, drill down into data, and export insights.",
  },
  {
    categoryId: "cloud-dashboards",
    iconKey: "server",
    title: "Dashboard Performance Optimization",
    description:
      "Optimize query performance, caching strategies, and frontend rendering to handle millions of data points with sub-second load times.",
  },
  {
    categoryId: "cloud-dashboards",
    iconKey: "windowMaximize",
    title: "White-Label Dashboard Portals",
    description:
      "Provide branded analytics portals for each client with custom themes, user roles, and secure data isolation on shared cloud infrastructure.",
  },
  // Business & Corporate Websites
  {
    categoryId: "business-websites",
    iconKey: "store",
    title: "Modern Corporate Websites",
    description:
      "Design and develop responsive, fast, and SEO-friendly websites that reflect your brand identity and convert visitors into leads.",
  },
  {
    categoryId: "business-websites",
    iconKey: "windowMaximize",
    title: "Content Management Systems (CMS)",
    description:
      "Build custom or WordPress-based CMS solutions that let your team easily update content, blog posts, and product catalogs without developer help.",
  },
  {
    categoryId: "business-websites",
    iconKey: "search",
    title: "SEO & Performance Optimization",
    description:
      "Improve search rankings with on-page SEO, structured data, Core Web Vitals optimization, and fast-loading pages using modern frameworks.",
  },
  {
    categoryId: "business-websites",
    iconKey: "users",
    title: "Landing Pages & Lead Generation",
    description:
      "Create high-converting landing pages with A/B testing, form integrations, and analytics to capture leads and measure campaign effectiveness.",
  },
  {
    categoryId: "business-websites",
    iconKey: "palette",
    title: "Corporate Branding & UI/UX",
    description:
      "Establish a cohesive visual identity with custom UI components, design systems, and user-centered experiences that build trust and engagement.",
  },
  {
    categoryId: "business-websites",
    iconKey: "shield",
    title: "Maintenance & Security",
    description:
      "Ongoing updates, backups, security monitoring, and DDoS protection to keep your business website safe, compliant, and always online.",
  },
];

export function getOfferingsByCategory(categoryId) {
  return SERVICE_OFFERINGS.filter((item) => item.categoryId === categoryId);
}
