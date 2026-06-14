// Static knowledge-base / "Learn" articles data layer.
// Educational, evergreen how-to content (distinct from time-based news and
// opinion-style blogs). Mirrors the blog shape so pages stay simple.
import aiImg from "../assets/images/blogs/cloudComputing1.png";
import cloudImg from "../assets/images/blogs/cloudComputing2.png";
import devImg from "../assets/images/blogs/cloudComputing3.jpg";
import iotImg from "../assets/images/blogs/Iot.png";
import secImg from "../assets/images/blogs/blogSection.jpg";

const articles = [
  {
    _id: "article-001",
    slug: "what-is-an-ai-agent",
    title: "What Is an AI Agent? A Plain-English Introduction",
    excerpt:
      "A jargon-free explanation of what AI agents are, how they differ from chatbots, and when they're actually useful.",
    category: "AI",
    readingTime: "6 min read",
    image: aiImg,
    content:
      "An AI agent is software that can perceive its environment, decide what to do, and take action to reach a goal — often using a large language model as its reasoning core. The key word is action. A chatbot answers questions; an agent does things, like updating a record, sending an email, or calling another service.\n\n" +
      "It helps to think of an agent in three parts. First, perception: it gathers information from APIs, databases, documents, or user input. Second, reasoning: it decides what to do based on that information. Third, action: it executes the decision and observes the result, often looping until the goal is met.\n\n" +
      "Agents shine on multi-step tasks that would otherwise require a person to stitch together several tools. Categorising an incoming support ticket, pulling the relevant account history, drafting a reply, and flagging it for review is a natural agent workflow.\n\n" +
      "They are a poor fit when the task is a single, deterministic step, or when mistakes are costly and there's no human to review the output. As a rule of thumb: automate the busywork, keep a human on the decisions that matter.",
  },
  {
    _id: "article-002",
    slug: "rag-explained-for-beginners",
    title: "Retrieval-Augmented Generation (RAG), Explained Simply",
    excerpt:
      "How RAG lets a language model answer questions using your own documents — without retraining it.",
    category: "AI",
    readingTime: "7 min read",
    image: aiImg,
    content:
      "Retrieval-augmented generation, or RAG, is a technique for giving a language model access to knowledge it wasn't trained on. Instead of baking facts into the model, you store your documents separately and fetch the relevant pieces at the moment a question is asked.\n\n" +
      "The flow is straightforward. Your documents are split into chunks and converted into numeric vectors that capture their meaning, then stored in a vector database. When a user asks a question, the question is also converted to a vector, the most similar chunks are retrieved, and those chunks are handed to the model as context alongside the question.\n\n" +
      "The payoff is big. Your knowledge stays fresh because you update the documents, not the model. Answers can cite their sources. And you avoid the cost and complexity of fine-tuning.\n\n" +
      "RAG is the right default whenever your information changes often or you need traceable answers. It pairs naturally with careful prompt design, and most production assistants are built on exactly this foundation.",
  },
  {
    _id: "article-003",
    slug: "saas-vs-mvp-what-to-build-first",
    title: "MVP vs. Full Product: What Should You Build First?",
    excerpt:
      "A practical guide to scoping a minimum viable product so you learn fast without wasting budget.",
    category: "Product",
    readingTime: "6 min read",
    image: devImg,
    content:
      "A minimum viable product is the smallest version of your idea that can deliver real value to a real user. Its job is not to impress — it's to teach you whether you're building something people actually want.\n\n" +
      "The most common mistake is confusing an MVP with a cheap version of the full product. It isn't. It's the single most important workflow, built well, with everything else deferred. If your product helps people book appointments, the MVP is booking an appointment — not the dashboard, the analytics, or the loyalty programme.\n\n" +
      "To scope one, write down the one outcome a user must be able to achieve, list every feature that comes to mind, and then ruthlessly cut anything not required for that outcome. The cut features aren't gone; they're your post-launch roadmap.\n\n" +
      "Build that core, put it in front of users quickly, and watch what they do. A small product real people touch teaches you more in a week than months of planning ever could.",
  },
  {
    _id: "article-004",
    slug: "cloud-vs-serverless-for-startups",
    title: "Cloud Servers vs. Serverless: Which Should a Startup Choose?",
    excerpt:
      "Understand the trade-offs between traditional servers and serverless so you can pick the right foundation.",
    category: "Cloud",
    readingTime: "7 min read",
    image: cloudImg,
    content:
      "When you deploy an application, you broadly choose between running it on servers you manage and running it on a serverless platform that runs your code on demand. Both are valid; the right answer depends on your traffic and your team.\n\n" +
      "Serverless — think AWS Lambda or Fargate — means you don't manage servers at all. You deploy functions or containers, and the platform runs them when needed, scaling to zero when idle. You pay for what you use. This is ideal for spiky or unpredictable traffic and for small teams who'd rather not babysit infrastructure.\n\n" +
      "Traditional servers give you more control and can be cheaper at steady, high volume. They suit workloads that run constantly, need specialised configuration, or hold long-lived connections.\n\n" +
      "For most early-stage startups, serverless is the pragmatic default: it minimises operational overhead and keeps costs proportional to usage. You can always move steady, heavy workloads onto dedicated infrastructure later, once you have the data to justify it.",
  },
  {
    _id: "article-005",
    slug: "web-security-basics-for-founders",
    title: "Web Security Basics Every Founder Should Know",
    excerpt:
      "The handful of security fundamentals that prevent most real-world breaches — explained without the acronyms.",
    category: "Security",
    readingTime: "8 min read",
    image: secImg,
    content:
      "You don't need to be a security expert to avoid the most common breaches — you need to cover a small set of fundamentals consistently. Most real-world attacks exploit basic oversights, not exotic techniques.\n\n" +
      "Start with input handling. Any data that comes from a user should be treated as untrusted: validate it, and use parameterised database queries so that user input can never be executed as a command. This single habit closes the door on a huge share of attacks.\n\n" +
      "Get authentication right. Store passwords using a modern hashing algorithm, never in plain text, and offer multi-factor authentication. Lean on well-audited libraries and identity providers rather than building your own.\n\n" +
      "Finally, keep your dependencies up to date, keep secrets like API keys out of your source code, and give every service only the access it genuinely needs. None of this is glamorous, but together these habits quietly prevent the incidents that end up in the news.",
  },
  {
    _id: "article-006",
    slug: "how-to-write-a-good-product-brief",
    title: "How to Write a Product Brief That Gets You a Good Build",
    excerpt:
      "What to include in a brief so your development partner builds the right thing the first time.",
    category: "Product",
    readingTime: "6 min read",
    image: devImg,
    content:
      "The quality of what you get built is shaped long before any code is written — by the brief. A good brief doesn't dictate the solution; it makes the problem unmistakably clear.\n\n" +
      "Start with the why. What problem are you solving, and for whom? A single paragraph describing the user and their frustration is worth more than pages of feature lists.\n\n" +
      "Then describe the core journey in plain language: the steps a user takes to get value. This anchors everyone on the same outcome and surfaces gaps early.\n\n" +
      "Include what success looks like — a metric or behaviour you'll watch — and be explicit about constraints: budget, timeline, must-have integrations, and anything that is deliberately out of scope. Leave the technical choices to your build partner; your job is to make the destination clear, not to draw the map.",
  },
  {
    _id: "article-007",
    slug: "understanding-apis-without-code",
    title: "Understanding APIs Without Writing Any Code",
    excerpt:
      "A non-technical explanation of what APIs are and why they're the glue of modern software.",
    category: "Web Development",
    readingTime: "5 min read",
    image: iotImg,
    content:
      "An API — application programming interface — is simply a way for two pieces of software to talk to each other through an agreed-upon set of requests and responses. If you've ever seen a website show live weather or let you 'log in with Google', you've seen APIs at work.\n\n" +
      "A useful analogy is a restaurant menu. The menu lists what you can order and how to ask for it; you don't need to know what happens in the kitchen. An API is that menu for software: it lists the available requests and what each one returns, hiding the complexity behind them.\n\n" +
      "APIs matter because they let you build on top of work others have already done. Payments, maps, messaging, AI models — all are available as APIs, so you can assemble a powerful product from proven building blocks instead of reinventing each one.\n\n" +
      "For a founder, the takeaway is liberating: much of what your product needs may already exist behind an API, and connecting to it is often faster and more reliable than building it yourself.",
  },
  {
    _id: "article-008",
    slug: "choosing-the-right-tech-stack",
    title: "How to Think About Choosing a Tech Stack",
    excerpt:
      "A framework for picking technologies that won't box you in — even if you're not technical.",
    category: "Web Development",
    readingTime: "7 min read",
    image: cloudImg,
    content:
      "A tech stack is the set of technologies used to build your product — the language, frameworks, database, and hosting. Founders often agonise over this choice, but the truth is that for most products, several stacks would work fine. The bigger risks are elsewhere.\n\n" +
      "Favour boring, proven technology. A widely used stack means more developers can work on it, more problems have documented solutions, and the tooling is mature. Novelty for its own sake is a tax you pay forever.\n\n" +
      "Match the stack to your team. The best technology is the one the people building your product know well. A familiar stack ships faster and breaks less than an objectively 'better' one nobody on the team has used.\n\n" +
      "Finally, keep an eye on the exits. Avoid choices that lock you into a single vendor with no migration path. You won't predict every future need, but choosing flexible, well-supported foundations keeps your options open as you grow.",
  },
  {
    _id: "article-009",
    slug: "measuring-product-success",
    title: "Measuring Product Success: Metrics That Actually Matter",
    excerpt:
      "How to choose a small set of meaningful metrics instead of drowning in dashboards.",
    category: "Product",
    readingTime: "6 min read",
    image: iotImg,
    content:
      "It's easy to track everything and learn nothing. The teams that improve fastest watch a small number of metrics that genuinely reflect whether users are getting value.\n\n" +
      "Start by separating vanity metrics from actionable ones. Total signups feels good but can hide the truth; the share of new users who reach a meaningful first action tells you whether your product actually delivers.\n\n" +
      "Pick one metric that captures core value — sometimes called your North Star. For a messaging app it might be messages sent; for a marketplace, completed transactions. Everything else is supporting cast.\n\n" +
      "Then watch retention. Acquisition gets users in the door, but retention tells you whether what you built is worth coming back to. A product that acquires well and retains poorly has a problem no amount of marketing will fix.",
  },
  {
    _id: "article-010",
    slug: "automation-vs-ai-whats-the-difference",
    title: "Automation vs. AI: What's the Difference, Really?",
    excerpt:
      "When you need plain automation, when you need AI, and how to tell which problem you actually have.",
    category: "AI",
    readingTime: "6 min read",
    image: aiImg,
    content:
      "'AI' and 'automation' get used interchangeably, but they solve different shapes of problem, and knowing which you have saves time and money.\n\n" +
      "Traditional automation follows fixed rules. If a payment fails, send this email. If a form is submitted, create this record. It's reliable, cheap, and perfectly predictable — and it's the right tool whenever the logic can be written down as clear steps.\n\n" +
      "AI is for the fuzzy problems that resist fixed rules: understanding messy text, classifying things that don't fit neat categories, or generating language. It handles ambiguity well but is probabilistic, meaning it can occasionally be wrong and benefits from human review where stakes are high.\n\n" +
      "The most effective systems combine both. Use rules for the predictable parts and AI for the judgement calls, with a human checking the consequential decisions. Reach for AI because a problem genuinely needs it — not because it's the more exciting label.",
  },
];

export default articles;

export const ARTICLE_CATEGORIES = [
  "All",
  ...Array.from(new Set(articles.map((a) => a.category))),
];

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) || null;
}

export function getLatestArticles(limit) {
  return typeof limit === "number" ? articles.slice(0, limit) : articles;
}
