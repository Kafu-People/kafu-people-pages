// Central team data module. Pages and homepage sections read from here so the
// team roster lives in one place.
import belal from "../assets/images/members/Belal_Haikal.png";
import waqasi from "../assets/images/members/Mwaqas.jpg";
import william from "../assets/images/members/williambakke.jpg";
import fawad from "../assets/images/members/fawad.jpg";
import iendrel from "../assets/images/members/Iendrel.png";
import ahsan from "../assets/images/members/ahsan.jpg";
import saif from "../assets/images/members/saif.jpg";
import noor from "../assets/images/members/noor.jpg";
import ali from "../assets/images/members/ali.jpg";
import kainat from "../assets/images/members/kainat.jpg";
import waqas from "../assets/images/members/waqas.jpg";
import pauline from "../assets/images/members/pauline_vroonen.webp";
import matheus from "../assets/images/members/Matheus.jpg";
import jared from "../assets/images/members/Jared.jpg";

// Leadership / executive team (G1.4).
export const executives = [
  {
    name: "Belal Haikal",
    role: "Founder & CEO",
    description:
      "Leads Kafu People as founder and CEO. AWS-certified solutions architect and software engineering leader with 12+ years delivering cloud-native platforms, streaming systems, and secure software at scale — from DAZN and Fortanix to Decathlon Digital. Combines tech strategy, team leadership, and generative AI–driven product delivery.",
    image: belal,
    linkedin: "https://www.linkedin.com/in/belalhaikal/",
    email: "hello@kafupeople.com",
  },
  {
    name: "Pauline Vroonen",
    role: "Business Partner, HR Specialist, Account Manager",
    description:
      "Leads business development, client partnerships, and HR operations at Kafu People. Brings experience as an HR business partner and account manager across Belgium, Europe, and international markets — connecting strategic growth with people and client success. Odoo-certified; fluent in Dutch, French, and English.",
    image: pauline,
    linkedin: "https://www.linkedin.com/in/paulinevroonen647",
  },
  {
    name: "William Bakke",
    role: "Media & Marketing Manager",
    description:
      "Leads media and marketing at Kafu People. Brings 15+ years of enterprise technology experience — from infrastructure engineering at Morgan Stanley and Lenovo to customer-facing consulting, sales, and web development — to deliver clear technical storytelling, brand visibility, and campaigns that connect with engineering and business audiences.",
    image: william,
    linkedin: "https://www.linkedin.com/in/williambakke",
    email: "wbakke@ravenhawktech.com",
  },
  {
    name: "Jared Allison",
    role: "Technical Advisor",
    description:
      "Technical advisor to Kafu People. Staff Software Engineer at Stripe with 15+ years leading polyglot engineering teams across embedded, mobile, backend, frontend, and infrastructure — previously at Angaza Design, Backstop Solutions, and Motorola. Guides technical direction, architecture, and coaching teams to ship reliably at scale.",
    image: jared,
    linkedin: "https://www.linkedin.com/in/jared-allison-7aa03a11/",
  },
];

// Wider team (G1.3).
export const teamMembers = [
  {
    name: "Muhammad Waqas",
    role: "Senior AI Engineer",
    description:
      "Focuses on leveraging AI and deep learning to create real-world solutions. With a background in software engineering and generative AI, he drives the innovative projects that expand our technological capabilities.",
    image: waqasi,
    linkedin: "https://www.linkedin.com/in/muhammad-waqas-3b7122257/",
  },
  {
    name: "Matheus Serra",
    role: "Senior Full-Stack Developer",
    description:
      "Builds cloud-native products with intelligent, full-stack workflows. Brings senior engineering experience alongside a background in process management, quality systems, and IT project delivery across industrial and technology environments.",
    image: matheus,
    linkedin: "https://www.linkedin.com/in/matheusserra/",
  },
  {
    name: "Fawad Azam",
    role: "AI Engineer",
    description:
      "Leverages AI and deep learning to develop real-world solutions, with a foundation in software engineering and generative AI.",
    image: fawad,
    linkedin:
      "https://www.linkedin.com/in/fawad-azam-126705253",
  },
  {
    name: "Iendrel Gabriel",
    role: "Senior Full Stack Engineer",
    description:
      "Builds scalable web applications, cloud-native platforms, and distributed systems across React, Next.js, Node.js, Python, and AWS. Experienced in microservices, event-driven architecture, CI/CD, and AI-integrated products — focused on reliable software that scales with the business.",
    image: iendrel,
    linkedin: "https://www.linkedin.com/in/iendrel-gabriel/",
  },
  {
    name: "Muhammad Ahsan Ayaz",
    role: "Cyber Security Engineer",
    description:
      "Secures networks, assesses vulnerabilities, and ensures system integrity across our projects.",
    image: ahsan,
    linkedin: "",
  },
  {
    name: "Saifu Rahman",
    role: "AI Engineer",
    description:
      "Leverages AI and deep learning to develop real-world solutions, with a foundation in software engineering and generative AI.",
    image: saif,
    linkedin: "",
  },
  {
    name: "Noor Uddin",
    role: "AI Engineer",
    description:
      "Leverages AI and deep learning to develop real-world solutions, with a foundation in software engineering and generative AI.",
    image: noor,
    linkedin: "",
  },
  {
    name: "Ali Khan",
    role: "MERN Stack Developer",
    description:
      "Builds dynamic, scalable web applications with MongoDB, Express.js, React, and Node.js, focused on seamless interfaces and robust back-ends.",
    image: ali,
    linkedin: "https://www.linkedin.com/in/engr-ali-khan-626667251/",
  },
  {
    name: "Kainat Afzal",
    role: "AI Engineer",
    description:
      "Leverages AI and deep learning to develop real-world solutions, with a foundation in Computer Science and generative AI.",
    image: kainat,
    linkedin: "https://pk.linkedin.com/in/kainat-kainat-918641257",
  },
  {
    name: "Waqas Gul",
    role: "Senior MERN Stack Developer",
    description:
      "Builds dynamic web applications with the MERN stack, specializing in seamless UIs, robust back-ends, and mentoring teams to deliver high-performance solutions.",
    image: waqas,
    linkedin: "https://www.linkedin.com/in/waqas-gul-b7580826b/",
  },
];

// Collaborators & partners we work alongside on client engagements (G1.6).
export const collaborators = [
  {
    name: "Nerohalla",
    role: "Product Partner",
    note: "We partner with the Nerohalla team as their development partner.",
  },
  {
    name: "Echo3s",
    role: "Product Partner",
    note: "Full-stack development partner for the Echo3s audiobook platform.",
  },
  {
    name: "Independent Specialists",
    role: "Extended Network",
    note: "Trusted freelance designers and engineers we bring in to scale delivery when projects call for it.",
  },
];

export default { executives, teamMembers, collaborators };
