import React from "react";
import logo from "../assets/images/kafupeople.webp";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-cWhite z-50 font-inter">
      <div className="relative w-[250px] h-[250px]">
        {/* Outer Spinning Circle */}
        <div className="absolute inset-0 w-full h-full border-2 border-transparent border-l-cDarkBlue border-b-cWhite border-r-CPurple border-t-cWhite rounded-full animate-spin"></div>

        {/* Logo centered inside spinner */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img             src={logo}
            alt="Kafu People"
            className="w-24 sm:w-28 h-auto max-w-[55%] object-contain animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
