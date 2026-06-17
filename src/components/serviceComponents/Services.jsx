import React from "react";

import {
  FaRobot,
  FaProjectDiagram,
  FaChartLine,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaRocket,
  FaDatabase,
  FaCloudSun,
  FaWindowMaximize,
  FaTachometerAlt,
  FaStore,
  FaEnvelope,
  FaSearch,
  FaUsers,
  FaChartBar,
  FaPalette,
  FaCodeBranch,
  FaServer,
  FaLock,
  FaMagic,
} from "react-icons/fa";
import {
  MdOutlineAnalytics,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { SiTensorflow } from "react-icons/si";

// const services = [
//   {
//     title: "Risk Assessment and Management:",
//     description:
//       "We begin by identifying potential risks to your IT infrastructure. Our experts conduct comprehensive assessments to pinpoint vulnerabilities and evaluate the effectiveness of your current security measures. Based on this analysis, we develop a customized risk management plan to mitigate threats and enhance your security posture.",
//     icon: <IoWarningOutline />,
//   },
//   {
//     title: "Threat Intelligence and Monitoring:",
//     description:
//       "Staying ahead of cyber threats requires proactive threat intelligence. KAFUPEOPLE utilizes advanced monitoring tools and techniques to continuously scan your systems for suspicious activities. Our threat intelligence services provide real-time insights, enabling us to detect and respond to threats before they can cause significant damage",
//     icon: <GrThreats />,
//   },
//   {
//     title: "Network Security:",
//     description:
//       "Securing your network is fundamental to protecting your entire IT ecosystem. We offer comprehensive network security services, including firewall implementation, intrusion detection and prevention systems (IDPS), and secure VPN configurations. Our solutions are designed to safeguard your network from unauthorized access and malicious attacks.",
//     icon: <BsHddNetworkFill />,
//   },
//   {
//     title: "Endpoint Security:",
//     description:
//       "Endpoints such as laptops, desktops, and mobile devices are often the entry points for cyber threats. KAFUPEOPLE’s endpoint security solutions include antivirus software, endpoint detection and response (EDR) tools, and secure access controls. We ensure that all devices connected to your network are protected against malware, ransomware, and other cyber threats.",
//     icon: <MdOutlineSecurity />,
//   },
//   {
//     title: "Data Protection and Encryption:",
//     description:
//       "Protecting sensitive data is critical for maintaining trust and compliance. We provide robust data protection services, including data encryption, secure data storage, and data loss prevention (DLP) solutions. Our encryption technologies ensure that your data remains confidential and secure, both in transit and at rest.",
//     icon: <FcDataProtection />,
//   },
//   {
//     title: "Identity and Access Management (IAM):",
//     description:
//       "Controlling access to your systems and data is vital for preventing unauthorized activities. Our IAM services include multi-factor authentication (MFA), single sign-on (SSO), and role based access control (RBAC). These measures help ensure that only authorized users can access critical resources.",
//     icon: <FaUniversalAccess />,
//   },
//   {
//     title: "Security Awareness Training:",
//     description:
//       "Human error is often a significant factor in security breaches. We offer security awareness training programs to educate your employees about the latest cyber threats and best practices. Our training sessions cover topics such as phishing prevention, password management, and safe internet use, helping to create a security-conscious culture within your organization.",
//     icon: <MdOnDeviceTraining />,
//   },
//   {
//     title: "Incident Response and Recovery:",
//     description:
//       "Despite best efforts, incidents can still occur. KAFUPEOPLE’s incident response services provide a structured approach to handling security breaches. Our team is ready to respond quickly to contain and mitigate the impact of any incident. We also offer recovery services to restore your systems and data, ensuring minimal downtime and disruption to your business.",
//     icon: <FcDataRecovery />,
//   },
//   {
//     title: "Compliance and Regulatory Support:",
//     description:
//       "Staying compliant with industry regulations and standards is essential for many businesses. KAFUPEOPLE helps you navigate complex regulatory requirements, such as GDPR, HIPAA, and PCI DSS. We assist in implementing the necessary controls and documentation to ensure compliance and reduce the risk of legal penalties.",
//     icon: <MdSupportAgent />,
//   },
//   {
//     title: "Security Audits and Penetration Testing:",
//     description:
//       "Regular security audits and penetration testing are critical for identifying and addressing vulnerabilities. Our experts conduct thorough security audits to evaluate your security measures and recommend improvements. Penetration testing involves simulating cyber attacks to test your defenses and uncover potential weaknesses.",
//     icon: <SiTestinglibrary />,
//   },
//   {
//     title: "Cloud Security:",
//     description:
//       "As more businesses migrate to the cloud, securing cloud environments has become paramount. KAFUPEOPLE offers cloud security services that include secure cloud architecture design, cloud access security brokers (CASBs), and continuous monitoring of cloud resources. We ensure that your cloud-based data and applications are protected against cyber threats.",
//     icon: <MdSecurity />,
//   },
//   {
//     title: "Advanced Persistent Threat (APT) Protection:",
//     description:
//       "APT protection focuses on detecting and responding to sophisticated, prolonged cyber attacks often targeting high-value information. These services include advanced monitoring, forensics, and mitigation strategies to handle long-term threats.",
//     icon: <GrThreats />,
//   },
//   {
//     title: "Zero Trust Security:",
//     description:
//       "Adopting a Zero Trust security model involves verifying each request as though it originates from an open network. This model emphasizes strict identity verification and continuous monitoring to ensure secure access to resources.",
//     icon: <MdSecurity />,
//   },
//   {
//     title: "Security Operations Center (SOC) as a Service:",
//     description:
//       "A SOC provides continuous monitoring and analysis of an organization’s security posture. SOC as a Service delivers 24/7 security operations through a dedicated team, offering realtime threat detection and response.",
//     icon: <MdDesignServices />,
//   },
//   {
//     title: "Mobile Security:",
//     description:
//       "Mobile security services protect against threats targeting smartphones and tablets. These include mobile device management (MDM), mobile threat defense (MTD), and secure mobile application development practices.",
//     icon: <MdSecurity />,
//   },
//   {
//     title: "Application Security:",
//     description:
//       "Securing applications involves practices like secure coding, application vulnerability testing, and integrating security into the software development lifecycle (SDLC). This includes static and dynamic application security testing (SAST/DAST).",
//     icon: <MdSettingsApplications />,
//   },
//   {
//     title: "Internet of Things (IoT) Security:",
//     description:
//       "IoT security focuses on protecting interconnected devices within your network. This includes securing data transmission, device authentication, and managing the unique vulnerabilities that IoT devices present.",
//     icon: <SiSmartthings />,
//   },
//   {
//     title: "Security Information and Event Management (SIEM):",
//     description:
//       "SIEM solutions provide real-time analysis of security alerts generated by applications and network hardware. These systems collect and aggregate log data, identify anomalies, and facilitate incident management.",
//     icon: <MdManageHistory />,
//   },
//   {
//     title: "Data Privacy Services:",
//     description:
//       "Data privacy services help organizations comply with privacy laws and regulations, such as GDPR, CCPA, and HIPAA. This includes data protection impact assessments (DPIAs), privacy policy development, and data subject rights management.",
//     icon: <SiGnuprivacyguard />,
//   },
//   {
//     title: "Red Teaming and Blue Teaming:",
//     description:
//       "Red teaming involves simulating attacks to test the effectiveness of an organization’s defenses, while blue teaming focuses on defending against these attacks. This combined approach ensures robust security posture by continually testing and improving defenses.",
//     icon: <BsMicrosoftTeams />,
//   },
//   {
//     title: "Secure Software Development Lifecycle (SDLC):",
//     description:
//       "Incorporating security at every stage of the software development process ensures that applications are designed, developed, and deployed with security in mind. This includes threat modeling, secure coding practices, and security testing.",
//     icon: <MdDeveloperMode />,
//   },
//   {
//     title: "Operational Technology (OT) Security:",
//     description:
//       "OT security focuses on protecting industrial control systems (ICS) and critical infrastructure from cyber threats. This involves securing SCADA systems, industrial IoT (IIoT), and ensuring the safety and reliability of operational processes.",
//     icon: <GrTechnology />,
//   },
//   {
//     title: "Cyber Threat Hunting:",
//     description:
//       "Threat hunting involves proactively searching through networks and systems to identify and isolate advanced threats that evade traditional security solutions. This service helps in identifying and mitigating threats that have infiltrated the network.",
//     icon: <GrThreats />,
//   },
//   {
//     title: "Quantum Computing Security:",
//     description:
//       "As quantum computing advances, it poses new challenges and opportunities for cybersecurity. Services in this area focus on developing quantum-resistant encryption algorithms and preparing for the impact of quantum computing on data security.",
//     icon: <SiQuantconnect />,
//   },
//   {
//     title: "AI-Driven Cybersecurity:",
//     description:
//       "Leveraging artificial intelligence and machine learning to enhance threat detection, response, and automation in cybersecurity. AI-driven solutions can analyze vast amounts of data to identify patterns and predict potential threats.",
//     icon: <SiCyberdefenders />,
//   },
//   {
//     title: "Cyber Deception:",
//     description:
//       "Cyber deception technologies involve creating decoys and traps within the network to lure attackers and study their methods without compromising actual assets. This approach helps in understanding and mitigating advanced threats.",
//     icon: <GrThreats />,
//   },

//   // Add all 26 cards here with title, description, and icon
// ];

const services = [
  {
    title: "Custom AI Agent Development",
    description:
      "Design and deploy autonomous AI agents that perform complex tasks, from customer support to data analysis, using LLMs and custom reasoning engines.",
    icon: <FaRobot />,
  },
  {
    title: "Agentic Workflow Automation",
    description:
      "Build multi-agent systems where AI agents collaborate to automate business processes, handle decision-making, and execute workflows with minimal human intervention.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "LLM Fine-Tuning & Integration",
    description:
      "Fine-tune open-source or commercial LLMs on your domain data and integrate them seamlessly into your existing applications for intelligent assistance.",
    icon: <SiTensorflow />,
  },
  {
    title: "Retrieval-Augmented Generation (RAG)",
    description:
      "Implement RAG pipelines that ground AI responses in your proprietary knowledge bases, ensuring accurate, context-aware answers without hallucinations.",
    icon: <FaDatabase />,
  },
  {
    title: "AI Model Observability",
    description:
      "Monitor, evaluate, and improve your AI agents with tools for tracing, logging, and performance metrics, ensuring reliability and safety in production.",
    icon: <MdOutlineAnalytics />,
  },
  {
    title: "Prompt Engineering & Optimization",
    description:
      "Craft and optimize prompts for maximum accuracy and efficiency, including few-shot learning, chain-of-thought, and advanced prompt strategies.",
    icon: <FaMagic />,
  },
  {
    title: "Rapid MVP Development",
    description:
      "Launch your SaaS idea in weeks, not months. We build functional, scalable MVPs with user authentication, payment integration, and core features ready for real users.",
    icon: <FaRocket />,
  },
  {
    title: "Subscription & Billing Integration",
    description:
      "Integrate Stripe, Paddle, or Recurly for seamless subscription management, tiered pricing, invoicing, and dunning workflows.",
    icon: <FaLock />,
  },
  {
    title: "Multi-tenant Architecture",
    description:
      "Design and implement secure, scalable multi-tenant SaaS backends with isolated data, custom domains, and tenant-specific configurations.",
    icon: <FaCloudUploadAlt />,
  },
  {
    title: "User Analytics & Engagement",
    description:
      "Embed product analytics (Mixpanel, PostHog) and in-app messaging to track user behavior, run cohort analysis, and drive retention.",
    icon: <FaChartLine />,
  },
  {
    title: "SaaS Launch Toolkit",
    description:
      "Get a complete launch package including landing page, waitlist setup, email automation, and onboarding flows to convert signups into paying customers.",
    icon: <FaEnvelope />,
  },
  {
    title: "Scalable API Design",
    description:
      "Build RESTful or GraphQL APIs that can handle growth, with rate limiting, versioning, and comprehensive documentation using OpenAPI.",
    icon: <FaCodeBranch />,
  },
  {
    title: "Real-Time Dashboard Development",
    description:
      "Create interactive dashboards with live data streaming using WebSockets, Server-Sent Events, or GraphQL subscriptions. Perfect for monitoring, analytics, and operations.",
    icon: <FaTachometerAlt />,
  },
  {
    title: "Cloud-Native Deployment",
    description:
      "Deploy your dashboards on AWS, GCP, or Azure using containers (Docker/Kubernetes), serverless functions, and managed databases for auto-scaling and high availability.",
    icon: <FaCloudSun />,
  },
  {
    title: "Custom Data Visualization",
    description:
      "Build beautiful, interactive charts and graphs with D3.js, Recharts, or Plotly, tailored to your KPIs, metrics, and business logic.",
    icon: <FaChartBar />,
  },
  {
    title: "Embedded Analytics",
    description:
      "Integrate analytics widgets into your existing product, allowing users to build custom reports, drill down into data, and export insights.",
    icon: <MdOutlineDashboardCustomize />,
  },
  {
    title: "Dashboard Performance Optimization",
    description:
      "Optimize query performance, caching strategies, and frontend rendering to handle millions of data points with sub-second load times.",
    icon: <FaServer />,
  },
  {
    title: "White-Label & Multi-tenant Dashboards",
    description:
      "Provide branded dashboards for each client with custom themes, user roles, and secure data isolation, all running on a shared cloud infrastructure.",
    icon: <FaWindowMaximize />,
  },
  {
    title: "Modern Corporate Websites",
    description:
      "Design and develop responsive, fast, and SEO-friendly websites that reflect your brand identity and convert visitors into leads.",
    icon: <FaStore />,
  },
  {
    title: "Content Management Systems (CMS)",
    description:
      "Build custom or WordPress-based CMS solutions that let your team easily update content, blog posts, and product catalogs without developer help.",
    icon: <FaWindowMaximize />,
  },
  {
    title: "SEO & Performance Optimization",
    description:
      "Improve search rankings with on-page SEO, structured data, Core Web Vitals optimization, and fast-loading pages using modern frameworks.",
    icon: <FaSearch />,
  },
  {
    title: "Landing Pages & Lead Generation",
    description:
      "Create high-converting landing pages with A/B testing, form integrations, and analytics to capture leads and measure campaign effectiveness.",
    icon: <FaUsers />,
  },
  {
    title: "Corporate Branding & UI/UX",
    description:
      "Establish a cohesive visual identity with custom UI components, design systems, and user-centered experiences that build trust and engagement.",
    icon: <FaPalette />,
  },
  {
    title: "Maintenance & Security",
    description:
      "Ongoing updates, backups, security monitoring, and DDoS protection to keep your business website safe, compliant, and always online.",
    icon: <FaShieldAlt />,
  },
];

const Services = () => {
  return (
    <div className="bg-[#1D5667] py-10 px-4 md:px-8 lg:px-16 font-inter">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-cWhite mb-4">
          Services <span className="text-black">We Offer</span>
        </h2>
        <p className="text-base md:text-lg text-justify pr-20 pl-20 text-cWhite">
          At KAFUPEOPLE, we recognize the critical importance of cybersecurity
          in today’s digital landscape. Our extensive range of cybersecurity
          services is designed to protect your digital assets, secure your data,
          and ensure the integrity of your operations. Here’s a detailed
          overview of what we offer.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 text-center shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer hover:border-cDarkBlue duration-300"
            style={{ backgroundColor: "#ffffff" }} // Keep the card background white
          >
            {/* Icon */}
            <div className="flex justify-center items-center text-5xl mb-4 text-cDarkBlue">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-cDarkBlue mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-cDarkBlue">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
