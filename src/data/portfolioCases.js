const portfolioCases = [
  {
    slug: "echo3s",
    productId: "p007",
    title: "Echo3s",
    tagline: "AI-powered audiobook creation platform for independent authors",
    outcome:
      "Reduced audiobook production from weeks to under 24 hours at a fraction of traditional cost",
    description:
      "Echo3s empowers independent authors and production companies to create professional audiobooks with cutting-edge AI voice technology, reducing production time from weeks to hours.",
    category: "AI & Agentic Workflows",
    role: "Full-stack Development Partner",
    timeline: "4 months (MVP to launch)",
    image: "/products/Echo3s.webp",
    liveUrl: "https://echo3s.io/",
    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS Lambda",
      "Amazon Polly",
      "Stripe",
    ],
    features: [
      {
        title: "AI Voice Synthesis",
        description:
          "Natural-sounding AI voices with multiple accents and languages. Authors can also clone their own voice for a personal touch.",
      },
      {
        title: "Real-time Preview",
        description:
          "Preview any chapter instantly in-browser with synchronized word highlighting before committing to export.",
      },
      {
        title: "Chapter Management",
        description:
          "Drag-and-drop chapter reordering, auto-splitting by section, and proper metadata tagging for distribution platforms.",
      },
      {
        title: "One-click Export",
        description:
          "Export studio-quality audiobooks with chapter markers, cover art, and metadata compliant with Audible and Apple Books standards.",
      },
      {
        title: "Collaboration Tools",
        description:
          "Invite narrators, editors, and reviewers with role-based access and in-app commenting on specific timestamps.",
      },
      {
        title: "Usage Analytics",
        description:
          "Dashboard showing production metrics, listen time estimates, and export history to track your catalog growth.",
      },
    ],
    gallery: [
      "/products/Echo3s.webp",
      "/products/Echo3s.webp",
      "/products/Echo3s.webp",
    ],
    relatedSlugs: [],
    sections: [
      {
        type: "overview",
        heading: "Overview",
        content:
          "Echo3s is a modern AI-powered platform that enables independent authors and small production companies to create high-quality audiobooks without expensive studio equipment or professional voice actors. By leveraging state-of-the-art text-to-speech and voice cloning technology, Echo3s dramatically reduces both the cost and time required to produce professional audiobooks.",
      },
      {
        type: "challenge",
        heading: "The Challenge",
        content:
          "Traditional audiobook production requires professional voice talent, studio recording sessions, and extensive post-production editing. For independent authors, the cost can run into thousands of dollars per book, with production timelines spanning weeks or months. This creates a significant barrier to entry for self-published authors who want to reach the growing audiobook market.",
      },
      {
        type: "solution",
        heading: "Our Solution",
        content:
          "Kafu People designed and built Echo3s as a full-stack web application that combines natural-sounding AI voice synthesis with an intuitive production workflow. Authors can upload manuscripts, select from multiple AI voice profiles (or clone their own voice), preview chapters in real-time, and export studio-quality audiobooks with proper chapter markers and metadata — all from their browser.",
      },
      {
        type: "results",
        heading: "Results",
        content:
          "Echo3s enables authors to produce a complete audiobook in under 24 hours at a fraction of the traditional cost. The platform supports multiple languages and accents, handles complex narration elements like dialogue differentiation, and delivers output that meets major audiobook distribution platform standards including Audible and Apple Books.",
      },
    ],
  },
  {
    slug: "nerohalla",
    productId: "p009",
    title: "Nerohalla",
    tagline: "AI-powered job search and application tracking for modern candidates",
    outcome:
      "Delivered a launch-ready platform spanning public job discovery, an application dashboard, profile onboarding, and flexible resume settings",
    description:
      "Nerohalla is a premium job-search platform where candidates discover roles, track applications, and generate tailored resumes — with a polished dark UI, ATS integrations, and configurable AI-assisted workflows.",
    category: "SaaS & Startup MVPs",
    role: "Development Partner",
    timeline: "Ongoing engagement",
    image: "/products/Landing_1.webp",
    liveUrl: "https://nerohalla.up.railway.app/",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "AWS", "RenderCV"],
    features: [
      {
        title: "Job Discovery Landing",
        description:
          "A cinematic marketing site with job search, category browsing, and a clear path from discovery to the candidate dashboard.",
      },
      {
        title: "Application Dashboard",
        description:
          "Track roles by company, filter by stack and status, match skills to listings, and manage apply/resume state in one workspace.",
      },
      {
        title: "Profile Onboarding",
        description:
          "A guided multi-step profile builder covering contact details, skills, employment, and education — with progress tracking to 100%.",
      },
      {
        title: "Settings & Resume Customization",
        description:
          "Flexible settings for EEO autofill, resume design, downloads, and AI prompt configuration — all in a clean, premium UI.",
      },
      {
        title: "ATS Integrations",
        description:
          "Pull jobs from Greenhouse, Ashby, Lever, Workable, and domain-based sources so candidates can search and apply from one hub.",
      },
      {
        title: "Generated Resumes",
        description:
          "Create and attach tailored resumes per application, with a RenderCV editor integrated into the workflow.",
      },
    ],
    gallery: [
      "/products/Landing_1.webp",
      "/products/Landing_2.webp",
      "/products/Nerohalla-Dashboard.webp",
      "/products/Profile.webp",
      "/products/Setttings.webp",
    ],
    relatedSlugs: ["echo3s"],
    sections: [
      {
        type: "overview",
        heading: "Overview",
        content:
          "Nerohalla helps job seekers find opportunities, manage applications, and produce tailored resumes from a single platform. Kafu People joined as development partner to turn that vision into a cohesive product — from the public landing experience through to the authenticated dashboard, profile builder, and settings layer.",
      },
      {
        type: "challenge",
        heading: "The Challenge",
        content:
          "Job seekers juggle dozens of listings across multiple ATS platforms, each with different forms, resume formats, and tracking needs. Nerohalla needed a product that could unify discovery and application management without feeling generic — a premium brand experience backed by practical tools for search, tracking, profile setup, and resume generation.",
      },
      {
        type: "solution",
        heading: "Our Solution",
        content:
          "We built Nerohalla as a full-stack SaaS platform: a high-impact landing and category experience for discovery, a dashboard for filtering and tracking applications with stack matching, a step-by-step profile builder, and a settings area for EEO autofill, resume styling, and AI prompt customization. ATS integrations and a RenderCV editor connect the workflow end to end.",
      },
      {
        type: "results",
        heading: "Results",
        content:
          "The platform is live with a polished candidate experience across marketing pages, the job dashboard, profile onboarding, and settings. Nerohalla now has a scalable foundation to grow job inventory, refine AI-assisted resume workflows, and expand integrations as the product reaches more users.",
      },
    ],
  },
];

export function getCaseBySlug(slug) {
  return portfolioCases.find((c) => c.slug === slug) || null;
}

export function getCaseByProductId(productId) {
  return portfolioCases.find((c) => c.productId === productId) || null;
}

export function getRelatedCases(currentSlug, max = 2) {
  return portfolioCases.filter((c) => c.slug !== currentSlug).slice(0, max);
}

export default portfolioCases;
