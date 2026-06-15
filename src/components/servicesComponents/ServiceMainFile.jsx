import PageSEO from "../PageSEO";
import { PAGE_SEO } from "../../config/seo";
import { FAQPageLD } from "../Schema";
import Cyber from "./Cyber";
import CyberService from "./CyberService";

const faqs = [
  {
    question: "What services does Kafu People offer?",
    answer: "Kafu People offers AI & agentic workflows, SaaS MVP development, cloud-native dashboards, AWS cloud architecture, business websites, and cybersecurity solutions tailored to startups and growing businesses.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer: "We ship SaaS MVPs in approximately six weeks — from discovery and architecture to a production-ready product with authentication, payments, and analytics.",
  },
  {
    question: "What technologies does Kafu People use?",
    answer: "We build with React, Node.js, Python, AWS, PostgreSQL, Tailwind CSS, and various AI/LLM frameworks. The tech stack is chosen per project based on client requirements and scalability needs.",
  },
  {
    question: "Does Kafu People work with startups internationally?",
    answer: "Yes. We're a remote-first team based in Purmerend, Netherlands, and work with clients across Europe, North America, and the Middle East.",
  },
]

export default function ServiceMainFile() {
  const seo = PAGE_SEO.services;

  return (
    <div>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      >
        <script type="application/ld+json">
          {JSON.stringify(FAQPageLD(faqs))}
        </script>
      </PageSEO>
      <Cyber />
      <CyberService />
    </div>
  );
}
