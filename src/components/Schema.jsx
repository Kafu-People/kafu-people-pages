import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "../constants/site"

export const OrganizationLD = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/kafupeople.webp`,
  description:
    "Kafu People helps startups and growing businesses ship AI-powered products, cloud-native apps, and full-stack MVPs — from idea to production.",
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Brantjesoever 4",
    addressLocality: "Purmerend",
    postalCode: "1441DW",
    addressCountry: "NL",
  },
  sameAs: ["https://www.linkedin.com/company/kafu-people/"],
})

export const BlogPostingLD = (blog) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${SITE_URL}/blogs/${blog.slug}#article`,
  headline: blog.title,
  description: (blog.description || "").split("\n\n")[0],
  image: blog.image
    ? blog.image.startsWith("http")
      ? blog.image
      : `${SITE_URL}${blog.image}`
    : `${SITE_URL}/images/kafupeople.webp`,
  datePublished: blog.datePublished,
  dateModified: blog.dateModified || blog.datePublished,
  author: {
    "@type": "Person",
    name: blog.author || SITE_NAME,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/blogs/${blog.slug}`,
  },
})

export const ArticleLD = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE_URL}/news/${article.slug}#article`,
  headline: article.title,
  description: article.excerpt,
  image: `${SITE_URL}${article.image}`,
  datePublished: article.date,
  author: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
  },
})

export const SoftwareAppLD = (caseStudy) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: caseStudy.title,
  description: caseStudy.description,
  url: caseStudy.liveUrl,
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
  },
})

export const FAQPageLD = (questions) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/services#faq`,
  mainEntity: questions.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer,
    },
  })),
})

export const BreadcrumbListLD = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}${items[items.length - 1].path}#breadcrumb`,
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
})

export const PersonLD = (member) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: member.name,
  jobTitle: member.role,
  description: member.description,
  ...(member.linkedin && member.linkedin !== "/"
    ? { sameAs: member.linkedin }
    : {}),
  worksFor: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
  },
})
