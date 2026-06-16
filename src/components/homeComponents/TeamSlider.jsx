import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import william from "../../assets/images/members/williambakke.jpg";
import matheus from "../../assets/images/members/Matheus.jpg";
import saad from "../../assets/images/members/saad_majeed.png";
import waqasi from "../../assets/images/members/Mwaqas.jpg";
import fawad from "../../assets/images/members/fawad.jpg";
import iendrel from "../../assets/images/members/Iendrel.png";
import saif from "../../assets/images/members/saif.jpg";
import abubakkar from "../../assets/images/members/abubakkar.jpg";
import noor from "../../assets/images/members/noor.jpg";
import kainat from "../../assets/images/members/kainat.jpg";
import ahsan from "../../assets/images/members/ahsan.jpg";
import pauline from "../../assets/images/members/pauline_vroonen.webp";
import belal from "../../assets/images/members/Belal_Haikal.png";
import brian from "../../assets/images/members/brian.png";
import soban from "../../assets/images/members/soban_a.png";
import nauman from "../../assets/images/members/nauman_raees.png";
import rakib from "../../assets/images/members/rakib_khan.png";
import himanshi from "../../assets/images/members/himanshi_aggarwal.png";
import nodari from "../../assets/images/members/nodari_gurjidze.png";
import mahenoor from "../../assets/images/members/mahenoor_salat.png";
import TeamAvatar from "../team/TeamAvatar";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const TeamSlider = () => {
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
    pauseOnHover: true, // Pauses autoplay when hovered
    ltr: true, // Enables right-to-left sliding
    arrows: false, // Hides navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const teamMembers = [
    {
      name: "Muhammad Waqas",
      role: "Senior AI Engineer",
      description:
        "Focuses on leveraging AI and deep learning to create real-world solutions. With a background in software engineering and generative AI, he drives the innovative projects that expand our technological capabilities.",
      image: waqasi,
      linkedin: "https://www.linkedin.com/in/muhammad-waqas-3b7122257/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Matheus Serra",
      role: "Senior Full-Stack Developer",
      description:
        "Builds cloud-native products with intelligent, full-stack workflows. Brings senior engineering experience alongside a background in process management, quality systems, and IT project delivery across industrial and technology environments.",
      image: matheus,
      linkedin: "https://www.linkedin.com/in/matheusserra/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Fawad Azam",
      role: "AI Engineer",
      description:
        "As a AI Engineer at KAFUPEOPLE, He assist in leveraging AI and deep learning to develop real-world solutions. With a foundation in software engineering and generative AI, he contribute to projects that enhance our technological capabilities.",
      image: fawad,
      linkedin:
        "https://www.linkedin.com/in/fawad-azam-126705253?utm_source=share&utm_campaign=share_via&utm_content=pofile",
      facebook:
        "https://www.facebook.com/profile.php?id=100039326873314&mibextid=ZbWKwL",
      instagram: "https://www.instagram.com/f_fawad_zm?igsh=a3R3aW5jNDRzcXEx",
    },
    {
      name: "Iendrel Gabriel",
      role: "Senior Full Stack Engineer",
      description:
        "Builds scalable web applications, cloud-native platforms, and distributed systems across React, Next.js, Node.js, Python, and AWS. Experienced in microservices, event-driven architecture, CI/CD, and AI-integrated products — focused on reliable software that scales with the business.",
      image: iendrel,
      linkedin: "https://www.linkedin.com/in/iendrel-gabriel/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Muhammad Ahsan Ayaz",
      role: "Cyber Security Engineer",
      description:
        "A cybersecurity engineer securing networks, assessing vulnerabilities, and ensuring system integrity at KAFUPEOPLE.",
      image: ahsan,
      linkedin: "/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Saifu Rahman ",
      role: "AI Engineer",
      description:
        "As a AI Engineer at KAFUPEOPLE, He assist in leveraging AI and deep learning to develop real-world solutions. With a foundation in software engineering and generative AI, he contribute to projects that enhance our technological capabilities.",
      image: saif,
      linkedin: "/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Noor uddin",
      role: "AI Engineer",
      description:
        "As a AI Engineer at KAFUPEOPLE, He assist in leveraging AI and deep learning to develop real-world solutions. With a foundation in software engineering and generative AI, he contribute to projects that enhance our technological capabilities.",
      image: noor,
      linkedin: "/",
      facebook: "/",
      instagram: "/",
    },

    {
      name: "Abu Bakkar",
      role: "Staff Supporter",
      description:
        "As a supporter at KAFUPEOPLE, He assist in ensuring timely transportation and delivery of materials, products, and staff. With a focus on safety and efficiency, he contribute to the smooth operation of day-to-day logistics within the company.",
      image: abubakkar,
      linkedin: "/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Gerardo Miguel Gutierrez Garcia",
      role: "Senior Full Stack Engineer",
      description:
        "Builds scalable web platforms, high-performance APIs, and cloud-native systems with 8+ years in fintech and gaming. Expert in TypeScript, React, Node.js, and AWS — with a track record optimizing payment APIs, microservices migrations, and real-time multiplayer services at scale.",
      linkedin: "https://www.linkedin.com/in/gerardo-mmg/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Kainat Afzal",
      role: "AI Engineer",
      description:
        "She is AI Engineer at KAFUPEOPLE, He assist in leveraging AI and deep learning to develop real-world solutions. With a foundation in Computer Science  and generative AI, she contribute to projects that enhance our technological capabilities.",
      image: kainat,
      linkedin: "https://pk.linkedin.com/in/kainat-kainat-918641257",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Saad Majeed",
      role: "Full Stack Web Developer",
      description:
        "Builds scalable SaaS platforms, admin panels, and AI-powered web applications with Laravel, Vue.js, Inertia, and Tailwind CSS. Founder of Dorex App and experienced across healthcare, e-commerce, and business management systems — from architecture and APIs through deployment and long-term maintainability.",
      image: saad,
      linkedin: "https://www.linkedin.com/in/saadmajeeddev/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Brian Ervin",
      role: "Senior UX/UI Designer",
      description:
        "Senior UX/UI designer and frontend-oriented product specialist at BE UI Design, LLC in Austin. Led TxDOTCONNECT enterprise UI for five+ years — design systems, responsive applications, standards libraries, and developer collaboration. Background spans studio art, architecture, industrial design, and full-stack web development in Agile/SCRUM environments.",
      image: brian,
      linkedin: "https://www.linkedin.com/in/brianervinmedia/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Soban A.",
      role: "CRM & AI Automation Engineer / Full Stack Developer",
      description:
        "Official Make.com partner and automation architect building CRM, AI voice, and workflow systems at scale — GHL, HubSpot, Pipedrive, n8n, Retell, and Vapi. Designs high-volume automations that cut operational drag, migrate costly Zapier stacks, and deliver sub-minute lead follow-up with measurable ROI.",
      image: soban,
      linkedin: "https://www.linkedin.com/in/no-code-automator/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Nauman Raees",
      role: "AI-Enabled Full Stack Engineer (MERN)",
      description:
        "Builds scalable MERN-stack applications with React, Next.js, Node.js, and NestJS — integrating AI-enabled features into production web apps. 5+ years delivering HRMS, SaaS, and enterprise platforms with AWS, Docker, and performance-focused API design.",
      image: nauman,
      linkedin: "https://www.linkedin.com/in/nauman-raees-355558183/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Md Rakib Khan",
      role: "Senior Software Engineer in ASP.NET Core and Angular",
      description:
        "Senior software engineer with 5+ years building full-stack solutions on ASP.NET Core, Web API, MVC, and Angular. Experienced across MS SQL and MongoDB, database architecture, performance tuning, and agile delivery — from greenfield applications to optimizing production systems at Fulfillment Team and DISA Global Solutions.",
      image: rakib,
      linkedin: "https://www.linkedin.com/in/md-rakib-khan-51361315b/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Himanshi Aggarwal",
      role: "Content & Community",
      description:
        "Leads content and community growth for Kafu People. Founder of TechLeads (1000+ members), campus ambassador, and content creator — experienced in curated tech content, event promotion, audience engagement, and building active online communities across social platforms.",
      image: himanshi,
      linkedin: "https://www.linkedin.com/in/himanshi-aggarwal-5a5553321/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Nodari Gurjidze",
      role: "Software Developer",
      description:
        "Software developer focused on building modern, maintainable applications and contributing to full-stack product delivery — from implementation and debugging through clean, collaborative engineering practices.",
      image: nodari,
      linkedin: "https://www.linkedin.com/in/nodari-gurjidze-2911203a1/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Mahenoor Salat",
      role: "QA & Full Stack",
      description:
        "Combines QA discipline with full-stack delivery on React and Next.js — from usability testing and UI/UX polish through scalable frontend architecture and rapid deployment. Led frontend development at Hexoforge LLC; experienced across component systems, cross-functional delivery, and performance-focused web applications.",
      image: mahenoor,
      linkedin: "https://www.linkedin.com/in/salat-mahenoor/",
      facebook: "/",
      instagram: "/",
    },
  ];

  const woners = [
    {
      name: "Belal Haikal",
      role: "Founder & CEO",
      description:
        "Leads Kafu People as founder and CEO. AWS-certified solutions architect and software engineering leader with 12+ years delivering cloud-native platforms, streaming systems, and secure software at scale — from DAZN and Fortanix to Decathlon Digital. Combines tech strategy, team leadership, and generative AI–driven product delivery.",
      image: belal,
      linkedin: "https://www.linkedin.com/in/belalhaikal/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Pauline Vroonen",
      role: "Business Partner, HR Specialist, Account Manager",
      description:
        "Leads business development, client partnerships, and HR operations at Kafu People. Brings experience as an HR business partner and account manager across Belgium, Europe, and international markets — connecting strategic growth with people and client success. Odoo-certified; fluent in Dutch, French, and English.",
      image: pauline,
      linkedin: "https://www.linkedin.com/in/paulinevroonen647",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "William Bakke",
      role: "Media & Marketing Manager",
      description:
        "Leads media and marketing at Kafu People. Brings 15+ years of enterprise technology experience — from infrastructure engineering at Morgan Stanley and Lenovo to customer-facing consulting, sales, and web development — to deliver clear technical storytelling, brand visibility, and campaigns that connect with engineering and business audiences.",
      image: william,
      linkedin: "https://www.linkedin.com/in/williambakke",
      facebook: "/",
      instagram: "/",
    },
  ];

  return (
    <div
      className="w-full px-4 py-16 lg:px-16 font-inter"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className="text-center text-xl mb-3">MEET OUR TEAM</h4>
      <h2 className="text-center text-3xl font-bold mb-6">
        <span className="text-CPurple">Spotlight On Our Experts</span>
      </h2>
      <p className="text-center text-textGray">
        Explore the expertise, passion, and innovative thinking of the
        professionals <br />
        who drive KAFUPEOPLE’s success and cutting-edge solutions.
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 px-8 py-12 bg-gray-50">
        {woners.map((member, index) => (
          <div
            key={index}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl  animate-fadeIn"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex items-center justify-center md:justify-start h-56 md:h-auto m-4 rounded-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-3/4 md:w-full h-full object-cover rounded transition-all duration-500"
              />
            </div>

            <div className="p-6 flex flex-col justify-center ">
              <h2 className="text-xl font-bold text-cDarkBlue">
                {member.name}
              </h2>
              <p className="text-sm font-bold text-cDarkBlue mb-4">
                {member.role}
              </p>
              <p className="text-sm text-gray-600">{member.description}</p>
            </div>

            <div className="absolute inset-0 flex items-end bottom-4 left-56 justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 hover:opacity-100    ">
              <div className="flex space-x-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cWhite text-2xl hover:text-CPurple"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {member.facebook && (
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cWhite text-2xl hover:text-CPurple"
                  >
                    <FaFacebook />
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cWhite text-2xl hover:text-CPurple"
                  >
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="px-4">
            <div
              className="p-4 mb-6 bg-cWhite shadow-xl rounded-lg text-center transform transition-transform duration-300 hover:scale-105 relative group"
              style={{
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TeamAvatar
                name={member.name}
                image={member.image}
                size="md"
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-cDarkBlue">
                {member.name}
              </h3>
              <p className="text-CPurple text-sm font-medium">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm mt-2 text-textGray">
                {member.description}
              </p>

              {/* Social Icons Container */}
              <div className="absolute inset-0 flex items-center justify-center bg-cBlack bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10">
                <div className="flex space-x-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cWhite text-3xl hover:text-[#0000FF] hover:bg-cWhite rounded"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cWhite text-3xl hover:text-[#0000FF] hover:bg-cWhite rounded"
                    >
                      <FaFacebook />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cWhite text-3xl hover:text-[#0000FF] hover:bg-cWhite rounded"
                    >
                      <FaInstagram />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
