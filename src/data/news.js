// Static news & updates data layer.
// Mirrors the blog data layer shape so the listing/detail pages can stay simple.
// `image` paths point at files in /public/images/newsAndEvents.

const staticNews = [
  {
    _id: "news-014",
    slug: "funding-ai-training-data-companies-september-2026",
    title: "Money Keeps Flowing Into AI Training Data Companies",
    excerpt: "Snorkel AI raised $350M at a $3.5B valuation, and micro1, Handshake, and Mercor report fast growth from demand for human AI training work.",
    content:
      "Companies that supply human expertise to train and evaluate AI models keep raising large rounds and reporting fast revenue growth. Here is what has been reported in recent months.\n" +
      "\n" +
      "## Snorkel AI: $350M Series E\n" +
      "\n" +
      "On September 22, TechCrunch reported that Snorkel AI raised a $350M Series E at a $3.5B valuation, co-led by Insight Partners and S32. That is roughly triple its previous valuation of $1.3B. TechCrunch also reported Snorkel's annualized run rate is above $375M.\n" +
      "\n" +
      "## micro1: from $100M to $500M gross run rate\n" +
      "\n" +
      "In August, TechCrunch reported that micro1 reached a $500M gross run rate, up from $100M about eight months earlier. TechCrunch noted that gross figures include pay passed through to contributors, and estimated the net figure is much lower. Forbes later reported that micro1 raised more than $100M at a $4B valuation.\n" +
      "\n" +
      "## Handshake and Mercor\n" +
      "\n" +
      "The Information reported in April that Handshake's AI training business was approaching $1B in gross annualized revenue, up from about $550M in January. Mercor raised a $350M Series C at a $10B valuation in late 2025, and in July 2026 Bloomberg and TechCrunch reported it was in talks to raise more at about a $20B valuation. We have not seen confirmation that round has closed.\n" +
      "\n" +
      "## What it means for contributors\n" +
      "\n" +
      "This money is a signal of demand. AI labs keep paying for expert human feedback in areas like coding, math, science, finance, and law. For skilled contributors, that means more projects and more specialist roles. It also means more competition and stricter screening, so preparation matters.\n" +
      "\n" +
      "If you are a developer in Latin America or the US and want to get accepted onto AI training platforms, <a href=\"/services/ai-training-coaching\">Kafu People AI Training Coaching</a> can help you prepare.\n" +
      "\n" +
      "## Sources\n" +
      "\n" +
      "• <a href=\"https://techcrunch.com/2026/09/22/snorkel-ai-triples-valuation-to-3-5b-as-demand-for-ai-training-data-booms/\">TechCrunch: Snorkel AI triples valuation to $3.5B</a>\n" +
      "• <a href=\"https://techcrunch.com/2026/08/20/ai-data-startup-micro1-reaches-500m-gross-run-rate-amid-ai-training-boom/\">TechCrunch: micro1 reaches $500M gross run rate</a>\n" +
      "• <a href=\"https://www.theinformation.com/articles/handshake-mercor-revenue-surges-demand-human-contractors-train-ai\">The Information: Handshake, Mercor revenue surges</a>\n" +
      "• <a href=\"https://techcrunch.com/2026/07/09/mercor-is-in-talks-for-a-20b-valuation/\">TechCrunch: Mercor is in talks for a $20B valuation</a>",
    category: "AI Training",
    date: "2026-09-28",
    author: "Kafu People",
    image: "/images/newsAndEvents/ai-training-data-funding.webp",
    imageAlt: "A screen showing a financial line chart",
    imageCredit: {
      name: "Chris Liverani",
      url: "https://unsplash.com/@chrisliverani",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/dBI_My696Rk",
    },
    tags: ["ai-training", "data-annotation", "snorkel-ai", "micro1", "handshake-ai", "mercor"],
  },
  {
    _id: "news-013",
    slug: "employers-ai-training-new-survey-data-2026",
    title: "AI Training at Work Is Growing, but Time to Learn Is Not",
    excerpt: "New Workera and iCIMS surveys show more employers offer AI training and job seekers value it, but most employees say they have no time to learn.",
    content:
      "Two surveys published in September 2026 show the same tension: AI training at work is spreading fast, but employees still struggle to find time for it, and job seekers increasingly see it as a reason to pick an employer.\n" +
      "\n" +
      "## Workera: training more than doubled\n" +
      "\n" +
      "Workera's 2026 State of Skills Intelligence report surveyed 1,000 full-time employees at US organizations with 5,000 or more staff. The share of employees who say their company offers AI-specific skills training rose from 25% in Workera's 2025 survey to 58% in 2026.\n" +
      "\n" +
      "The catch: 56% said no time is set aside during work hours to build their AI skills. Training is available, but many people are expected to learn on their own time.\n" +
      "\n" +
      "## iCIMS: job seekers notice who offers training\n" +
      "\n" +
      "An iCIMS survey of 1,000 US job seekers, released September 10, found that 42% would find a company that offers AI training more attractive than a similar employer that does not. 14% said they would accept lower pay in exchange for that training.\n" +
      "\n" +
      "## Why this matters for job seekers\n" +
      "\n" +
      "Both surveys point the same way. AI skills are becoming a standard expectation, and workers who build them independently are better placed than those waiting for their employer to make time.\n" +
      "\n" +
      "For developers, hands-on work evaluating and improving AI output is one of the most practical ways to build those skills, and it is also paid work. Preparing well for the assessments that AI training platforms use makes a real difference to getting accepted.\n" +
      "\n" +
      "If you are a developer in Latin America or the US and want to get accepted onto AI training platforms, <a href=\"/services/ai-training-coaching\">Kafu People AI Training Coaching</a> can help you prepare.\n" +
      "\n" +
      "## Sources\n" +
      "\n" +
      "• <a href=\"https://www.prnewswire.com/news-releases/ai-training-more-than-doubled-this-year-but-56-of-employees-report-no-time-at-work-to-build-the-skills-workera-research-finds-302887120.html\">Workera via PR Newswire: AI training more than doubled this year</a>\n" +
      "• <a href=\"https://www.workera.ai/blog/state-of-skills-intelligence-report\">Workera: State of Skills Intelligence report (2025 baseline)</a>\n" +
      "• <a href=\"https://www.icims.com/company/newsroom/septemberinsights2026/\">iCIMS: Workers are teaching themselves AI skills faster than employers train them</a>\n" +
      "• <a href=\"https://www.hcamag.com/us/specialization/benefits/why-ai-training-may-be-employers-most-powerful-talent-drawcard/589450\">HCAmag: Why AI training may be employers' most powerful talent draw</a>",
    category: "AI Training",
    date: "2026-09-27",
    author: "Kafu People",
    image: "/images/newsAndEvents/employers-ai-training-survey-data.webp",
    imageAlt: "Colleagues with laptops watching a trainer at a whiteboard",
    imageCredit: {
      name: "Austin Distel",
      url: "https://unsplash.com/@austindistel",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/wD1LRb9OeEo",
    },
    tags: ["ai-training", "upskilling", "remote-work", "careers"],
  },
  {
    _id: "news-012",
    slug: "ai-training-platform-onboarding-roundup-september-2026",
    title: "How AI Training Platforms Are Changing Onboarding",
    excerpt: "AI interviewers, paid expert studies, and student evaluators: a roundup of how AI training platforms recruit and screen contributors in September 2026.",
    content:
      "AI training platforms keep changing how they find and screen contributors. A few recent examples show the direction: more automated interviews, more specialist roles, and more paid research with experts.\n" +
      "\n" +
      "## Alignerr: an AI interviewer called Zara\n" +
      "\n" +
      "Alignerr, the expert network run by Labelbox, describes a five-step process: sign up with a resume, apply to jobs, verify your identity, set up a contract and payments, then onboard to the project. For some projects, that includes an interview with Zara, which Labelbox describes as its AI interview tool, or a domain-specific assessment. Not every project uses it.\n" +
      "\n" +
      "## OpenTrain AI: project management specialists\n" +
      "\n" +
      "OpenTrain AI posted a remote Project Management AI Training Specialist role, open worldwide. The work is evaluating AI-generated project plans, schedules, risk registers, and status reports against rubrics. The listing says prior AI training experience is not required, which shows how platforms now recruit for domain knowledge first.\n" +
      "\n" +
      "## Mercor: accent transcription and a paid cybersecurity study\n" +
      "\n" +
      "Mercor posted transcription roles for African-accented and Afrikaans-accented English earlier this month, used to build and evaluate AI voice agents. That listing has since closed.\n" +
      "\n" +
      "Mercor also posted paid expert interviews for cybersecurity practitioners in SOC, incident response, detection, and application security. The listing describes two to three one-hour video calls over about four weeks, with a reported rate of $125 to $175 per hour, to help design a benchmark of how well AI agents handle real cyber-defense work.\n" +
      "\n" +
      "## AfterQuery Experts: students evaluating AI reasoning\n" +
      "\n" +
      "34th Street Magazine reported that University of Pennsylvania students working through AfterQuery Experts test how well AI models read and reason about biology and finance research papers. They also grade AI answers against rubrics and write difficult finance questions. The article reports rates of around $40 per hour for some roles and $50 per hour for review work.\n" +
      "\n" +
      "## The pattern\n" +
      "\n" +
      "Screening is becoming more automated, and the roles are becoming more specific. Applicants who can show real domain knowledge, and who prepare for structured assessments and AI-led interviews, have an advantage.\n" +
      "\n" +
      "If you are a developer in Latin America or the US and want to get accepted onto AI training platforms, <a href=\"/services/ai-training-coaching\">Kafu People AI Training Coaching</a> can help you prepare.\n" +
      "\n" +
      "## Sources\n" +
      "\n" +
      "• <a href=\"https://www.alignerr.com/en/process\">Alignerr: How it works</a>\n" +
      "• <a href=\"https://www.opentrain.ai/jobs/project-management-ai-training-specialist--cmuguwih6000e04jpzvkvxbnl/\">OpenTrain AI: Project Management AI Training Specialist</a>\n" +
      "• <a href=\"https://work.mercor.com/jobs/list_AAABoNB0XIYO9wcITgdLWrr3/cybersecurity-practitioner-paid-expert-interviews-soc-incident-response-detection-appsec\">Mercor: Cybersecurity Practitioner paid expert interviews</a>\n" +
      "• <a href=\"https://www.34st.com/article/2026/09/ai-automation-afterquery-data-college-job-training\">34th Street Magazine: The College Students Training AI to Do Their Jobs</a>",
    category: "AI Training",
    date: "2026-09-26",
    author: "Kafu People",
    image: "/images/newsAndEvents/ai-training-onboarding-roundup.webp",
    imageAlt: "A laptop showing a video call next to a houseplant",
    imageCredit: {
      name: "Compagnons",
      url: "https://unsplash.com/@sigmund",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/eTgMFFzroGc",
    },
    tags: ["ai-training", "data-annotation", "remote-work", "alignerr", "mercor", "opentrain-ai", "afterquery"],
  },
  {
    _id: "news-011",
    slug: "grab-openai-verizon-ai-upskilling-programs",
    title: "Grab, OpenAI, and Verizon Launch Large AI Upskilling Programs",
    excerpt: "Grab and OpenAI will train 30,000 gig workers and merchants in Southeast Asia, and Verizon commits $70M to free AI skills training in the US.",
    content:
      "Two large AI upskilling programs were announced on September 23, 2026, one in Southeast Asia and one in the United States. Both aim to give everyday workers practical AI skills rather than leaving that training to people who already work in tech.\n" +
      "\n" +
      "## Grab and OpenAI: GO Forward with AI\n" +
      "\n" +
      "Grab and OpenAI announced GO Forward with AI, a program to train 30,000 of Grab's driver, delivery, and merchant partners across Southeast Asia over two years. It runs through GrabAcademy and starts in Singapore with half-day, in-person masterclasses. Grab says the program will expand to Thailand, Indonesia, and the Philippines later in 2026.\n" +
      "\n" +
      "Participants get three months of ChatGPT Plus at no cost. The curriculum adapts material from OpenAI Academy, and GrabAcademy's regional trainers are being trained to deliver it.\n" +
      "\n" +
      "Grab also shared survey figures from Singapore: about half of its driver and delivery partners already use AI tools, and 87% said they are open to using them.\n" +
      "\n" +
      "## Verizon: AI Skills for America\n" +
      "\n" +
      "On the same day, Verizon announced AI Skills for America, a $70M commitment. It combines $50M in new funding with Verizon's existing $20M Reskilling and Career Transition Fund for departing employees, so not all of it is new money.\n" +
      "\n" +
      "The program offers a free online AI training portal with learning content from companies including IBM, Google, Microsoft, Anthropic, Coursera, and OpenAI. It also funds community coaching through partners such as LISC, NACCE, and Goodwill Industries International. Verizon says it is aimed at job seekers, early-career professionals, displaced workers, educators, and small businesses.\n" +
      "\n" +
      "## What it means for developers\n" +
      "\n" +
      "Large employers now treat basic AI skills as something the whole workforce needs, not only engineers. For developers, that raises the bar: using AI tools is becoming a baseline skill, and deeper work such as evaluating and improving AI output is where specialists stand out.\n" +
      "\n" +
      "If you are a developer in Latin America or the US and want to get accepted onto AI training platforms, <a href=\"/services/ai-training-coaching\">Kafu People AI Training Coaching</a> can help you prepare.\n" +
      "\n" +
      "## Sources\n" +
      "\n" +
      "• <a href=\"https://www.grab.com/sg/press/others/grab-and-openai-partnership-expands-access-to-practical-ai-skills-across-sea/\">Grab: Grab and OpenAI partnership expands access to practical AI skills</a>\n" +
      "• <a href=\"https://openai.com/index/grab-openai-ai-skills-southeast-asia/\">OpenAI: Grab and OpenAI AI skills in Southeast Asia</a>\n" +
      "• <a href=\"https://www.verizon.com/about/news/verizon-ai-skills-for-america-investment\">Verizon: AI Skills for America</a>\n" +
      "• <a href=\"https://njbiz.com/verizon-70m-free-ai-training/\">NJBIZ: Verizon commits $70M to free AI training</a>",
    category: "AI Training",
    date: "2026-09-24",
    author: "Kafu People",
    image: "/images/newsAndEvents/ai-upskilling-programs-grab-verizon.webp",
    imageAlt: "A presenter leading a training session for adults with laptops",
    imageCredit: {
      name: "Campaign Creators",
      url: "https://unsplash.com/@campaign_creators",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/gMsnXqILjp4",
    },
    tags: ["ai-training", "upskilling", "remote-work", "openai", "grab", "verizon"],
  },
  {
    _id: "news-001",
    slug: "kafu-people-launches-ai-agent-practice",
    title: "Kafu People Launches Dedicated AI Agent Practice",
    excerpt:
      "We're formalising years of agent-building experience into a dedicated practice helping clients ship production-grade AI agents.",
    content:
      "Today we're excited to announce the launch of our dedicated AI Agent practice. Over the past few years we've quietly designed and deployed agents that handle real, revenue-affecting work for our clients, from customer support triage to document enrichment and automated reporting.\n\n" +
      "Bundling that experience into a focused practice means clients get a clear, repeatable path from idea to a production agent: discovery, a scoped pilot, and a hardened rollout with monitoring built in from day one.\n\n" +
      "If your team has a repetitive, high-volume process that eats hours every week, we'd love to talk about whether an agent is the right fit.",
    category: "Company",
    date: "2026-05-28",
    author: "Kafu People",
    image: "/images/newsAndEvents/news.webp",
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
      'You can read the full story in <a href="/portfolio">our portfolio case study</a>, or visit <a href="https://echo3s.io/">echo3s.io</a> to see it in action.',
    category: "Product",
    date: "2026-05-12",
    author: "Kafu People",
    image: "/images/newsAndEvents/echo3s-reaches-launch-milestone.jpg",
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
      "If you'll be in Amsterdam and want to grab a coffee, reach out. We'd love to say hello in person.",
    category: "Events",
    date: "2026-04-30",
    author: "Kafu People",
    image: "/images/newsAndEvents/kafu-people-joins-amsterdam-tech-week.jpg",
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
    author: "Kafu People",
    image: "/images/newsAndEvents/new-cloud-native-dashboard-template.jpg",
  },
  {
    _id: "news-005",
    slug: "kafu-people-partners-with-nerohalla",
    title: "Kafu People Partners with Nerohalla",
    excerpt:
      "We've teamed up with Nerohalla to bring their product vision to life as a development partner.",
    content:
      "We're proud to announce a new partnership with Nerohalla, joining as their development partner to help take their product from concept toward launch.\n\n" +
      "It's the kind of engagement we love: a clear vision, a motivated team, and a real problem worth solving. Read the full story in <a href=\"/portfolio/nerohalla\">our Nerohalla portfolio case study</a>.\n\n" +
      "Watch this space for updates as the project progresses.",
    category: "Partnership",
    date: "2026-03-22",
    author: "Kafu People",
    image: "/images/newsAndEvents/kafu-people-partners-with-nerohalla.jpg",
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
      "Being remote-first isn't a constraint we tolerate; it's a deliberate choice that lets us work with great people wherever they are.",
    category: "Company",
    date: "2026-03-05",
    author: "Kafu People",
    image: "/images/newsAndEvents/team-spotlight-engineering-culture.jpg",
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
    author: "Kafu People",
    image: "/images/newsAndEvents/lessons-from-a-year-of-shipping-mvps.jpg",
  },
  {
    _id: "news-008",
    slug: "hosting-applied-ai-workshop",
    title: "We Hosted an Applied AI Workshop for Founders",
    excerpt:
      "A hands-on session helping non-technical founders separate genuine AI opportunities from the hype.",
    content:
      "Last month we ran a hands-on workshop for a group of founders who wanted a grounded, practical view of where AI can actually help their businesses.\n\n" +
      "Rather than abstract theory, we worked through their real processes and identified concrete tasks where automation would pay off and, just as importantly, where it wouldn't.\n\n" +
      "The feedback was clear: founders don't want more AI hype, they want a straight answer about what's worth doing. We're planning to run more of these sessions.",
    category: "Events",
    date: "2026-01-29",
    author: "Kafu People",
    image: "/images/newsAndEvents/hosting-applied-ai-workshop.jpg",
  },
  {
    _id: "news-009",
    slug: "kafu-people-website-refresh",
    title: "A Fresh Look: Our Website Gets a Refresh",
    excerpt:
      "We've rebuilt our site with a cleaner design, faster performance, and room to share more of our work.",
    content:
      "Our website just got a meaningful refresh. Beyond a cleaner look, the rebuild focuses on performance and on giving us room to share more of our work: case studies, articles, news, and the people behind the projects.\n\n" +
      "Expect to see this News section grow as we share updates, and look out for an expanded portfolio and knowledge base in the coming weeks.\n\n" +
      "Thanks for following along as we keep building.",
    category: "Company",
    date: "2026-01-14",
    author: "Kafu People",
    image: "/images/newsAndEvents/kafu-people-website-refresh.jpg",
  },
  {
    _id: "news-010",
    slug: "client-results-database-migration",
    title: "Client Results: A Smooth Laravel to MongoDB Migration",
    excerpt:
      "How we helped a client migrate a production database with zero downtime and a measurable performance gain.",
    content:
      "Database migrations are among the most nerve-wracking projects a team can take on: the stakes are high and the work is unforgiving. We recently completed one for a client moving from a Laravel and relational setup toward MongoDB.\n\n" +
      "By staging the migration carefully, validating data at every step, and rehearsing the cutover, we delivered the move with zero downtime and a measurable improvement in query performance.\n\n" +
      "It's the kind of careful, detail-driven work that doesn't make headlines but quietly keeps a business running.",
    category: "Company",
    date: "2025-12-20",
    author: "Kafu People",
    image: "/images/newsAndEvents/client-results-database-migration.jpg",
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
