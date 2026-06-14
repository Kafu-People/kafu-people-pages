// Central team data module. Pages and homepage sections read from here so the
// team roster lives in one place.
import hafeez from "../assets/images/members/hafeez.jpg";
import masooma from "../assets/images/members/masooma.jpg";
import waqasi from "../assets/images/members/Mwaqas.jpg";
import aibad from "../assets/images/members/aibad.jpg";
import zuhiab from "../assets/images/members/zuhiab.jpg";
import fawad from "../assets/images/members/fawad.jpg";
import adnan from "../assets/images/members/adnan.jpg";
import ahsan from "../assets/images/members/ahsan.jpg";
import saif from "../assets/images/members/saif.jpg";
import noor from "../assets/images/members/noor.jpg";
import ali from "../assets/images/members/ali.jpg";
import kainat from "../assets/images/members/kainat.jpg";
import waqas from "../assets/images/members/waqas.jpg";

// Leadership / executive team (G1.4).
export const executives = [
  {
    name: "Dr. Hafeez Ur Rehman",
    role: "Founder & CEO",
    description:
      "Holds a PhD in Electrical Engineering and specializes in AI, IoT, and cybersecurity. With 13+ years of experience, he has built advanced solutions for threat detection and automated security, bridging academic research with real-world applications.",
    image: hafeez,
    linkedin: "https://www.linkedin.com/in/dr-hafeez-ur-rehman-633a43135/",
  },
  {
    name: "Masooma Ali",
    role: "Director, Cyber Security",
    description:
      "Leads the cybersecurity department with a BS in Computer Science and certifications including CEH, CEH Practical Master, and CompTIA Security+. She brings 5+ years of experience and has trained NAVTTC and TEVTA cybersecurity cohorts.",
    image: masooma,
    linkedin: "https://www.linkedin.com/in/masooma-ali-94243b240/",
  },
  {
    name: "Muhammad Waqas",
    role: "Senior AI Engineer",
    description:
      "Focuses on leveraging AI and deep learning to create real-world solutions. With a background in software engineering and generative AI, he drives the innovative projects that expand our technological capabilities.",
    image: waqasi,
    linkedin: "https://www.linkedin.com/in/muhammad-waqas-3b7122257/",
  },
  {
    name: "Aibad Ullah",
    role: "Media & Marketing Manager",
    description:
      "Brings 7+ years of expertise in digital strategy and photography to elevate the brand's visual storytelling, creating content and campaigns that communicate our vision and engage our audience.",
    image: aibad,
    linkedin: "https://www.linkedin.com/in/aibadullah/",
  },
];

// Wider team (G1.3).
export const teamMembers = [
  {
    name: "Zohaib Khan",
    role: "Data Scientist",
    description:
      "Specializes in analyzing complex datasets and building predictive models with machine learning, statistical modeling, and data visualization to support strategic decisions.",
    image: zuhiab,
    linkedin: "https://www.linkedin.com/in/zuhaib-khan-183840275",
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
    name: "Muhammad Adnan",
    role: "Full Stack Developer",
    description:
      "Builds dynamic web applications across the front-end and back-end, delivering robust, scalable solutions.",
    image: adnan,
    linkedin: "https://www.linkedin.com/in/muhammad-adnan-khan-081ab9258",
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
