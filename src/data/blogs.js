import blogImg from "../assets/images/blogs/cloudComputing1.png";
import cloudImg from "../assets/images/blogs/cloudComputing2.png";
import cloudImg3 from "../assets/images/blogs/cloudComputing3.jpg";
import iotImg from "../assets/images/blogs/Iot.png";
import blogSectionImg from "../assets/images/blogs/blogSection.jpg";

const staticBlogs = [
  {
    _id: "static-001",
    slug: "building-scalable-ai-agents",
    title: "Building Scalable AI Agents for Real-World Business Problems",
    description:
      "Artificial intelligence is no longer a futuristic concept — it is a practical tool that businesses of every size can leverage today. At Kafu People, we have spent the last several years designing and deploying AI agents that handle real work: answering customer queries, enriching data pipelines, summarising internal documents, and automating repetitive decision-making.\n\n" +
      "The key insight we have learned is that a successful AI agent is not just about the model. It is about how the agent fits into existing workflows, how it handles errors gracefully, and how it communicates its reasoning to human users. A black-box model that produces correct answers without explanation is far less useful than a transparent system that shows its work.\n\n" +
      "We typically architect agents in three layers:\n\n" +
      "1. Perception layer — ingesting data from APIs, databases, or user input.\n" +
      "2. Reasoning layer — the LLM or rule engine that decides what action to take.\n" +
      "3. Action layer — executing the decision, whether that means sending an email, updating a record, or calling another service.\n\n" +
      "By keeping these layers loosely coupled, we can swap out the underlying model as the ecosystem evolves without rewriting the entire system. This modularity has been critical for clients who started with GPT-4 and later migrated to open-source models like Llama or Mistral for cost reasons.\n\n" +
      "If you are considering adding AI agents to your product roadmap, start small. Pick one repetitive task that consumes at least five hours of human time per week, automate it, measure the savings, and then expand. That iterative approach consistently delivers the highest return on investment.",
    category: "AI",
    image: blogImg,
  },
  {
    _id: "static-002",
    slug: "rag-vs-fine-tuning-when-to-use-each",
    title: "RAG vs. Fine-Tuning: Choosing the Right Approach for Your LLM",
    description:
      "One of the most common questions we hear from clients building with large language models is whether they should fine-tune a model or use retrieval-augmented generation (RAG). The honest answer is that they solve different problems, and most production systems end up using both.\n\n" +
      "RAG keeps your knowledge outside the model. You store your documents in a vector database, retrieve the most relevant passages at query time, and pass them to the model as context. This is the right choice when your information changes frequently, when you need citations, or when you simply have too much knowledge to bake into model weights.\n\n" +
      "Fine-tuning changes the model's behaviour. It is the right tool when you need a specific tone, a structured output format, or a skill the base model performs poorly. Fine-tuning does not reliably teach a model new facts — that is what RAG is for.\n\n" +
      "Our default recommendation for most teams is to start with RAG plus careful prompt engineering. It is faster to ship, easier to debug, and keeps your data fresh. Reach for fine-tuning only once you have hit a clear ceiling that prompting and retrieval cannot break through.",
    category: "AI",
    image: cloudImg,
  },
  {
    _id: "static-003",
    slug: "shipping-saas-mvp-in-six-weeks",
    title: "How We Ship a SaaS MVP in Six Weeks Without Cutting Corners",
    description:
      "Speed and quality are usually framed as a trade-off, but for an early-stage product the real risk is building the wrong thing well. Our six-week MVP process is designed to reduce that risk by getting a usable product in front of real users as quickly as responsibly possible.\n\n" +
      "Week one is discovery: we map the core user journey, agree on the single problem the MVP must solve, and ruthlessly cut everything else. Weeks two and three are foundation — authentication, data model, deployment pipeline, and the one workflow that delivers value.\n\n" +
      "Weeks four and five are where the product comes alive. We build the primary feature end to end, wire up payments if needed, and start daily internal testing. Week six is hardening: fixing the bugs that matter, adding analytics so you can learn from launch, and shipping to production.\n\n" +
      "The discipline that makes this work is saying no. Every feature request during the build is logged for the post-launch roadmap rather than allowed to expand the MVP. You learn far more from a small product real users touch than from a large product nobody has seen.",
    category: "Web Development",
    image: blogSectionImg,
  },
  {
    _id: "static-004",
    slug: "react-performance-patterns-that-matter",
    title: "React Performance Patterns That Actually Move the Needle",
    description:
      "Premature optimisation wastes time, but a slow interface costs users. The trick is knowing which React performance techniques deliver real gains and which are folklore. After years of building production front-ends, here are the patterns we reach for first.\n\n" +
      "Measure before you optimise. The React Profiler and browser performance tools will tell you where time is actually spent, which is almost never where you guessed. Most perceived slowness comes from oversized JavaScript bundles and unoptimised images, not from re-renders.\n\n" +
      "Code-split at the route level. Lazy-loading pages with React.lazy and Suspense means users only download the code for the screen they are viewing. Combined with compressing and lazy-loading images, this usually delivers the biggest single improvement to load time.\n\n" +
      "Only then worry about re-renders. Memoise expensive computations, keep state as local as possible, and avoid creating new object or function references in render paths that feed memoised children. Used surgically, these techniques keep complex interfaces feeling instant.",
    category: "Web Development",
    image: cloudImg3,
  },
  {
    _id: "static-005",
    slug: "aws-cost-optimization-for-startups",
    title: "AWS Cost Optimisation for Startups: Practical Wins",
    description:
      "Cloud bills have a way of growing quietly until they become a real line item. For startups, a few disciplined habits can cut AWS spend dramatically without sacrificing reliability or developer velocity.\n\n" +
      "Right-size before you scale. Most workloads are provisioned for a peak that rarely arrives. Reviewing CloudWatch metrics and dropping over-provisioned instances to an appropriate size is often the fastest way to reclaim budget.\n\n" +
      "Embrace serverless for spiky workloads. Lambda, Fargate, and managed queues mean you pay for what you use rather than for idle servers waiting for traffic. For early products with unpredictable usage, this alone can reshape the cost curve.\n\n" +
      "Finally, set up billing alerts and tag everything. You cannot optimise what you cannot see. A simple tagging convention plus a weekly cost review turns the bill from a year-end surprise into a metric your team actively manages.",
    category: "AI",
    image: cloudImg,
  },
  {
    _id: "static-006",
    slug: "securing-web-apps-baseline-checklist",
    title: "Securing Modern Web Apps: A Baseline Checklist",
    description:
      "Security is not a feature you bolt on at the end — it is a set of habits applied throughout development. You do not need a dedicated security team to cover the fundamentals that stop the most common attacks.\n\n" +
      "Start with the basics that prevent entire classes of vulnerability: validate and sanitise all input, use parameterised queries to defeat SQL injection, and apply a strict Content Security Policy to limit cross-site scripting damage. These three alone close the door on a large share of real-world breaches.\n\n" +
      "Get authentication right. Hash passwords with a modern algorithm, enforce strong sessions, and offer multi-factor authentication. Never roll your own crypto — lean on well-audited libraries and identity providers.\n\n" +
      "Finally, keep dependencies current and automate the boring parts. Vulnerability scanning in CI, secrets kept out of source control, and least-privilege access for every service quietly prevent the incidents that make headlines.",
    category: "Cyber Security",
    image: iotImg,
  },
  {
    _id: "static-007",
    slug: "technical-seo-for-react-spas",
    title: "Technical SEO for React Single-Page Applications",
    description:
      "React applications can rank well in search, but only if you are deliberate about how content is rendered and described. A beautiful SPA that search engines cannot read is invisible to the customers looking for you.\n\n" +
      "Make sure every meaningful route has a unique, descriptive title and meta description, and a canonical URL. Managing these per page — rather than shipping one static set in the HTML shell — is what lets each page earn its own place in search results.\n\n" +
      "Give crawlers a map. A generated sitemap.xml that lists every public route, combined with clean semantic HTML and proper heading structure, helps search engines understand and index your content quickly.\n\n" +
      "Finally, do not forget social previews. Open Graph and Twitter card tags determine how your links look when shared, and a compelling preview meaningfully improves click-through from social platforms.",
    category: "Digital Marketing",
    image: blogSectionImg,
  },
  {
    _id: "static-008",
    slug: "designing-apis-developers-love",
    title: "Designing APIs That Developers Actually Love to Use",
    description:
      "An API is a product, and its users are developers. The difference between an API that gets adopted and one that gets abandoned usually comes down to consistency, predictability, and good documentation rather than raw capability.\n\n" +
      "Be consistent. Use predictable naming, consistent pagination, and a uniform error format across every endpoint. When developers can guess how an endpoint behaves from the ones they have already used, integration becomes effortless.\n\n" +
      "Fail clearly. Good error responses include a machine-readable code, a human-readable message, and enough context to act on. Vague 500 errors are the fastest way to frustrate the people building on your platform.\n\n" +
      "Document with real examples. A copy-pasteable request and response for every endpoint, plus a quickstart that gets a developer to their first successful call in minutes, is worth more than any amount of prose.",
    category: "Web Development",
    image: cloudImg3,
  },
  {
    _id: "static-009",
    slug: "automating-workflows-with-llms",
    title: "Automating Internal Workflows with LLMs Without the Hype",
    description:
      "Large language models are most valuable not as chatbots, but as quiet engines inside internal tools. The best automations are often invisible — they remove a tedious step from a process people already follow.\n\n" +
      "Look for high-volume, low-stakes tasks first: categorising support tickets, drafting first-pass responses, extracting structured data from messy documents, or summarising long threads. These are forgiving of the occasional imperfect output and deliver immediate time savings.\n\n" +
      "Always keep a human in the loop where mistakes are costly. The goal is to make your team faster, not to remove their judgement. An LLM that drafts and a person who approves is a far safer pattern than full automation of consequential decisions.\n\n" +
      "Measure the time saved and the error rate from day one. Concrete numbers are what turn a promising experiment into a tool the whole organisation depends on.",
    category: "AI",
    image: iotImg,
  },
  {
    _id: "static-010",
    slug: "from-idea-to-production-product-mindset",
    title: "From Idea to Production: Building With a Product Mindset",
    description:
      "Engineering excellence matters, but it is wasted if it serves the wrong goal. The teams that ship products people love are the ones that keep asking why a feature exists, not just how to build it.\n\n" +
      "Start every initiative with the outcome, not the output. What behaviour should change for the user, and how will you know it worked? Defining success up front keeps the team aligned and makes it obvious when to stop polishing and ship.\n\n" +
      "Ship small and learn fast. A steady stream of small, reversible releases beats a big-bang launch every time. Each release is a chance to learn from real usage and adjust before you have over-invested in an unproven direction.\n\n" +
      "Finally, treat your roadmap as a living hypothesis. The plan you wrote at the start is your best guess, not a contract. The willingness to change course based on what users actually do is the single biggest predictor of a product that succeeds.",
    category: "Digital Marketing",
    image: blogImg,
  },
];

export default staticBlogs;

export function getStaticBlogById(id) {
  return staticBlogs.find((b) => b._id === id) || null;
}

export function getStaticBlogBySlug(slug) {
  return staticBlogs.find((b) => b.slug === slug) || null;
}
