import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import william from "../../assets/images/members/williambakke.jpg";
import ali from "../../assets/images/members/ali.jpg";
import matheus from "../../assets/images/members/Matheus.jpg";
import waqas from "../../assets/images/members/waqas.jpg";
import waqasi from "../../assets/images/members/Mwaqas.jpg";
import fawad from "../../assets/images/members/fawad.jpg";
import adnan from "../../assets/images/members/adnan.jpg";
import saif from "../../assets/images/members/saif.jpg";
import abubakkar from "../../assets/images/members/abubakkar.jpg";
import noor from "../../assets/images/members/noor.jpg";
import kainat from "../../assets/images/members/kainat.jpg";
import ahsan from "../../assets/images/members/ahsan.jpg";

import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
// import test from "../../assets/images/members/test1.jpg";

import pauline from "../../assets/images/members/pauline_vroonen.webp";
import belal from "../../assets/images/members/Belal_Haikal.png";

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
      name: "Muhammad Adnan ",
      role: "Full Stack Developer",
      description:
        "As a Full Stack Developer at KAFUPEOPLE, He work on developing dynamic web applications using both front-end and back-end technologies. With a strong foundation in both client-side and server-side development, he contribute to building robust, scalable solutions that enhance our technological capabilities.",
      image: adnan,
      linkedin: "https://www.linkedin.com/in/muhammad-adnan-khan-081ab9258",
      facebook: "https://www.facebook.com/share/1BXmpSspbD/",
      instagram: "https://www.instagram.com/itx_malak10?igsh=b2FvdnQwdW9zd2kw",
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
      name: "Ali Khan",
      role: "MERN Stack Developer",
      description:
        "As a MERN Stack Developer at KAFUPEOPLE, He specialize in building dynamic, scalable web applications using MongoDB, Express.js, React.js, and Node.js. he focus on delivering seamless, user-friendly interfaces and robust back-end systems to drive business success.",
      image: ali,
      linkedin: "https://www.linkedin.com/in/engr-ali-khan-626667251/",
      facebook: "https://www.facebook.com/profile.php?id=100034895843168",
      instagram:
        "https://www.instagram.com/engineer_alikhan?utm_source=qr&igsh=MWV3amZ4cm80a3U4bQ==",
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
      name: "Waqas Gul",
      role: "MERN Stack developer",
      description:
        "As a Senior MERN Stack Developer at KAFUPEOPLE, he builds dynamic web applications with MongoDB, Express.js, React.js, and Node.js. He specializes in seamless UIs, robust backends, and mentoring teams to deliver high-performance solutions that drive business growth.",
      image: waqas,
      linkedin: "https://www.linkedin.com/in/waqas-gul-b7580826b/",
      facebook: "https://www.facebook.com/WAQASI.369",
      instagram: "https://www.instagram.com/w_a_q_a_s_i/",
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
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
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
