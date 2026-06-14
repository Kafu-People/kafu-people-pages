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
    tagline: "A modern product platform built with Kafu People as development partner",
    outcome:
      "Took a product vision from concept toward a launch-ready platform with a clean, scalable foundation",
    description:
      "Nerohalla partnered with Kafu People to design and build their product platform, pairing a clear vision with pragmatic engineering to move quickly from concept to a launch-ready build.",
    category: "SaaS & Startup MVPs",
    role: "Development Partner",
    timeline: "Ongoing engagement",
    // Placeholder image — replace public/products/Nerohalla.webp with real brand art.
    image: "/products/Nerohalla.webp",
    liveUrl: "https://nerohalla.com/",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Tailwind CSS"],
    features: [
      {
        title: "Scalable Foundation",
        description:
          "A clean architecture with authentication, a well-structured data model, and a deployment pipeline ready to grow with the product.",
      },
      {
        title: "Responsive Interface",
        description:
          "A modern, mobile-first UI built with React and Tailwind for a fast, polished experience across devices.",
      },
      {
        title: "Iterative Delivery",
        description:
          "Small, frequent releases that put working software in front of stakeholders early and often.",
      },
    ],
    gallery: ["/products/Nerohalla.webp"],
    relatedSlugs: ["echo3s"],
    sections: [
      {
        type: "overview",
        heading: "Overview",
        content:
          "Nerohalla engaged Kafu People as their development partner to bring a clear product vision to life. We joined as an extension of their team, owning the technical delivery from foundation through to a launch-ready platform.",
      },
      {
        type: "challenge",
        heading: "The Challenge",
        content:
          "Like many early-stage products, Nerohalla needed to move quickly without accumulating technical debt that would slow future growth. The goal was a platform that could be shipped fast yet remain a solid foundation as the product and team scaled.",
      },
      {
        type: "solution",
        heading: "Our Solution",
        content:
          "We applied our pragmatic build process: scope the core workflow, stand up a clean and scalable foundation, and deliver in small, frequent releases. This kept stakeholders close to the work and ensured every decision served the product's long-term direction.",
      },
      {
        type: "results",
        heading: "Results",
        content:
          "The engagement produced a launch-ready platform on a maintainable foundation, with a workflow that lets the Nerohalla team keep shipping confidently. A more detailed case study will follow as the product reaches its public milestones.",
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
