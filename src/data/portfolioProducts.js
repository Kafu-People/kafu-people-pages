import { SERVICE_CATEGORY_TITLES } from "../constants/serviceCategories";

export const PORTFOLIO_CATEGORY_ALL = "ALL";

export const PORTFOLIO_CATEGORIES = [
  PORTFOLIO_CATEGORY_ALL,
  ...SERVICE_CATEGORY_TITLES,
];

export const PORTFOLIO_PRODUCTS = [
  {
    product_id: "p010",
    image: "/products/giscrap-dashboard.png",
    name: "Giscrap",
    description:
      "Discover GitHub profiles by keywords, location, and stars — enrich emails and LinkedIn, then send purpose-tagged campaigns with AI-personalized copy.",
    category: "AI & Agentic Workflows",
    url: "https://giscrap.duckdns.org/",
  },
  {
    product_id: "p007",
    image: "/products/Echo3s.webp",
    name: "Echo3s",
    description:
      "Empowering independent authors and production companies to create professional audiobooks with cutting-edge AI voice technology.",
    category: "AI & Agentic Workflows",
    url: "https://echo3s.io/",
  },
  {
    product_id: "p009",
    image: "/products/Landing_1.webp",
    name: "Nerohalla",
    description:
      "AI-powered job search and application tracking — discover roles, manage applications, build your profile, and generate tailored resumes from one premium platform.",
    category: "SaaS & Startup MVPs",
    url: "https://nerohalla.up.railway.app/",
  },
  {
    product_id: "p002",
    image: "/products/Dustai.webp",
    name: "Dustai",
    description:
      "An enterprise-grade AI agent system that automates internal knowledge workflows, enabling teams to query, summarize, and act on organizational data.",
    category: "AI & Agentic Workflows",
    url: "https://dust.tt",
  },
  {
    product_id: "p003",
    image: "/products/Relevance AI.webp",
    name: "Relevance AI",
    description:
      "A visual agent orchestration platform for building data-driven AI workflows, enabling automation across research, analytics, and business operations.",
    category: "AI & Agentic Workflows",
    url: "https://relevanceai.com",
  },
  {
    product_id: "p004",
    image: "/products/Retool.webp",
    name: "Retool",
    description:
      "Popular among startups for building internal dashboards fast. Combines APIs, databases, and UI components in a drag-and-drop builder.",
    category: "Cloud-Native Dashboards",
    url: "https://retool.com/templates",
  },
  {
    product_id: "p005",
    image: "/products/AI Internal Tool Generator.webp",
    name: "AI Internal Tool Generator",
    description:
      "A tool that generates internal dashboards and apps using AI prompts. Designed for startups that need quick admin panels without full engineering effort.",
    category: "SaaS & Startup MVPs",
    url: "https://build0.dev",
  },
  {
    product_id: "p006",
    image: "/products/Dub.webp",
    name: "Dub",
    description:
      "A modern link shortener built for startups. Focuses on analytics, branded links, and API-first usage. Built like a developer tool rather than a marketing SaaS.",
    category: "SaaS & Startup MVPs",
    url: "https://dub.co",
  },
  {
    product_id: "p008",
    image: "/products/RadarOmega Cams.webp",
    name: "RadarOmega Cams",
    description:
      "RadarOmega Cams provides live camera feeds and accurate atmospheric data, including temperature, pressure, wind speed, and direction along with their trends. © SDS Weather LLC 2024.",
    category: "Business & Corporate Websites",
    url: "https://cycloneport.com/networkdashboard/",
  },
];
