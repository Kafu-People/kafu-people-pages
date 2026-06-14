// Static news & updates data layer.
// Mirrors the blog data layer shape so the listing/detail pages can stay simple.
// `image` paths point at files in /public/images/newsAndEvents.

const staticNews = [
  {
    _id: "news-001",
    slug: "kafu-people-launches-ai-agent-practice",
    title: "Kafu People Launches Dedicated AI Agent Practice",
    excerpt:
      "We're formalising years of agent-building experience into a dedicated practice helping clients ship production-grade AI agents.",
    content:
      "Today we're excited to announce the launch of our dedicated AI Agent practice. Over the past few years we've quietly designed and deployed agents that handle real, revenue-affecting work for our clients — from customer support triage to document enrichment and automated reporting.\n\n" +
      "Bundling that experience into a focused practice means clients get a clear, repeatable path from idea to a production agent: discovery, a scoped pilot, and a hardened rollout with monitoring built in from day one.\n\n" +
      "If your team has a repetitive, high-volume process that eats hours every week, we'd love to talk about whether an agent is the right fit.",
    category: "Company",
    date: "2026-05-28",
    image: "/images/newsAndEvents/news.svg",
  },
  {
    _id: "news-002",
    slug: "echo3s-reaches-launch-milestone",
    title: "Echo3s Reaches Public Launch Milestone",
    excerpt:
      "The AI-powered audiobook platform we built with our partners has gone live to the public after a successful beta.",
    content:
      "Echo3s, the AI-powered audiobook creation platform we built as a full-stack development partner, has officially launched to the public.\n\n" +
      "Built to take audiobook production from weeks down to under 24 hours, the platform combines natural-sounding voice synthesis with an intuitive in-browser production workflow. The public launch follows a beta period that validated the workflow with real independent authors.\n\n" +
      "You can read the full story in our portfolio case study, or visit echo3s.io to see it in action.",
    category: "Product",
    date: "2026-05-12",
    image: "/images/newsAndEvents/image1.svg",
  },
  {
    _id: "news-003",
    slug: "kafu-people-joins-amsterdam-tech-week",
    title: "Kafu People at Amsterdam Tech Week 2026",
    excerpt:
      "Our team will be on the ground at Amsterdam Tech Week, joining sessions on applied AI and modern cloud delivery.",
    content:
      "We're heading to Amsterdam Tech Week this year to connect with founders, engineers, and operators building the next wave of products.\n\n" +
      "Members of our team will be attending sessions on applied AI, agentic workflows, and pragmatic cloud architecture. It's one of our favourite weeks of the year for meeting the people behind the products we admire.\n\n" +
      "If you'll be in Amsterdam and want to grab a coffee, reach out — we'd love to say hello in person.",
    category: "Events",
    date: "2026-04-30",
    image: "/images/newsAndEvents/image2.svg",
  },
  {
    _id: "news-004",
    slug: "new-cloud-native-dashboard-template",
    title: "Introducing Our Cloud-Native Dashboard Starter",
    excerpt:
      "We've packaged our most-used dashboard patterns into a reusable starter so client projects begin further down the road.",
    content:
      "Every analytics-heavy product we build shares a common backbone: authentication, role-based access, a clean data layer, and a responsive dashboard shell. We've packaged those patterns into an internal cloud-native dashboard starter.\n\n" +
      "For clients, that means projects begin with weeks of foundational work already solved, so the team can focus immediately on the features unique to their business.\n\n" +
      "It's a small change in process with an outsized effect on time-to-first-demo.",
    category: "Product",
    date: "2026-04-15",
    image: "/images/newsAndEvents/image3.svg",
  },
  {
    _id: "news-005",
    slug: "kafu-people-partners-with-nerohalla",
    title: "Kafu People Partners with Nerohalla",
    excerpt:
      "We've teamed up with Nerohalla to bring their product vision to life as a development partner.",
    content:
      "We're proud to announce a new partnership with Nerohalla, joining as their development partner to help take their product from concept toward launch.\n\n" +
      "It's the kind of engagement we love: a clear vision, a motivated team, and a real problem worth solving. We'll be sharing more about the work in a dedicated case study soon.\n\n" +
      "Watch this space for updates as the project progresses.",
    category: "Partnership",
    date: "2026-03-22",
    image: "/images/newsAndEvents/image4.svg",
  },
  {
    _id: "news-006",
    slug: "team-spotlight-engineering-culture",
    title: "Team Spotlight: How We Work as a Remote-First Team",
    excerpt:
      "A look behind the scenes at the distributed, remote-first culture that keeps our team shipping.",
    content:
      "People often ask how a distributed team stays aligned and ships consistently. The short answer is clear written communication and a strong default toward asynchronous work.\n\n" +
      "We keep decisions in writing, document context generously, and protect deep-focus time so engineers can do their best work regardless of timezone. Meetings are reserved for the conversations that genuinely need them.\n\n" +
      "Being remote-first isn't a constraint we tolerate — it's a deliberate choice that lets us work with great people wherever they are.",
    category: "Company",
    date: "2026-03-05",
    image: "/images/newsAndEvents/blog1.svg",
  },
  {
    _id: "news-007",
    slug: "lessons-from-a-year-of-shipping-mvps",
    title: "Lessons from a Year of Shipping Startup MVPs",
    excerpt:
      "What a year of six-week MVP builds taught us about scope, speed, and the discipline of saying no.",
    content:
      "Over the past year we've taken several startup ideas from a blank repository to a product in users' hands in roughly six weeks each. A few lessons stand out.\n\n" +
      "The biggest one: scope is the lever. Almost every project that ran long did so because the MVP quietly grew. The teams that launched on time were the ones disciplined about logging new ideas for later rather than building them now.\n\n" +
      "The second: real usage beats internal debate. A small product that users actually touch teaches you more in a week than months of planning. Ship, watch, and adjust.",
    category: "Company",
    date: "2026-02-18",
    image: "/images/newsAndEvents/blog2.svg",
  },
  {
    _id: "news-008",
    slug: "hosting-applied-ai-workshop",
    title: "We Hosted an Applied AI Workshop for Founders",
    excerpt:
      "A hands-on session helping non-technical founders separate genuine AI opportunities from the hype.",
    content:
      "Last month we ran a hands-on workshop for a group of founders who wanted a grounded, practical view of where AI can actually help their businesses.\n\n" +
      "Rather than abstract theory, we worked through their real processes and identified concrete tasks where automation would pay off — and, just as importantly, where it wouldn't.\n\n" +
      "The feedback was clear: founders don't want more AI hype, they want a straight answer about what's worth doing. We're planning to run more of these sessions.",
    category: "Events",
    date: "2026-01-29",
    image: "/images/newsAndEvents/blog3.svg",
  },
  {
    _id: "news-009",
    slug: "kafu-people-website-refresh",
    title: "A Fresh Look: Our Website Gets a Refresh",
    excerpt:
      "We've rebuilt our site with a cleaner design, faster performance, and room to share more of our work.",
    content:
      "Our website just got a meaningful refresh. Beyond a cleaner look, the rebuild focuses on performance and on giving us room to share more of our work — case studies, articles, news, and the people behind the projects.\n\n" +
      "Expect to see this News section grow as we share updates, and look out for an expanded portfolio and knowledge base in the coming weeks.\n\n" +
      "Thanks for following along as we keep building.",
    category: "Company",
    date: "2026-01-14",
    image: "/images/newsAndEvents/blog4.svg",
  },
  {
    _id: "news-010",
    slug: "client-results-database-migration",
    title: "Client Results: A Smooth Laravel to MongoDB Migration",
    excerpt:
      "How we helped a client migrate a production database with zero downtime and a measurable performance gain.",
    content:
      "Database migrations are among the most nerve-wracking projects a team can take on — the stakes are high and the work is unforgiving. We recently completed one for a client moving from a Laravel and relational setup toward MongoDB.\n\n" +
      "By staging the migration carefully, validating data at every step, and rehearsing the cutover, we delivered the move with zero downtime and a measurable improvement in query performance.\n\n" +
      "It's the kind of careful, detail-driven work that doesn't make headlines but quietly keeps a business running.",
    category: "Company",
    date: "2025-12-20",
    image: "/images/newsAndEvents/image1.svg",
  },
];

export default staticNews;

export const NEWS_CATEGORIES = [
  "All",
  ...Array.from(new Set(staticNews.map((n) => n.category))),
];

export function getNewsBySlug(slug) {
  return staticNews.find((n) => n.slug === slug) || null;
}

export function getNewsById(id) {
  return staticNews.find((n) => n._id === id) || null;
}

// Newest first, optionally limited (used by the homepage latest-content section).
export function getLatestNews(limit) {
  const sorted = [...staticNews].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}
