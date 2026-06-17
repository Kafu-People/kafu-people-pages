import React from "react";
import help from "../../assets/images/contactUs/help.png";
import { HERO_CONTENT_PT, HERO_FLUSH_CLASS } from "../../constants/layout";

const HelpSection = () => {
  return (
    <section
      className={`flex flex-col-reverse items-center justify-between bg-white px-6 pb-12 font-inter sm:px-12 lg:flex-row lg:px-24 ${HERO_FLUSH_CLASS} ${HERO_CONTENT_PT}`}
    >
      {/* Text Section */}
      <div className="text-center lg:text-left lg:max-w-md space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold ">
          How may We help <br />
          <span className="text-cDarkBlue ">You?</span>
        </h2>
        <p className="text-[#330C2F] text-base sm:text-lg">
          We’re available at all times to listen, guide, and support you in
          every step you take, guaranteeing a smooth experience from beginning
          to end.
        </p>
      </div>

      {/* Image Section */}
      <div className="mb-8 lg:mb-0 w-full lg:w-1/2 flex justify-center">
        <img loading="lazy"           src={help} // Replace with your image URL
          alt="Support team illustration"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HelpSection;
