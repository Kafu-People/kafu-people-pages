import React from "react";

const SkipToContent = ({ targetId = "main-content" }) => {
  const handleSkip = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.focus();
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleSkip}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-[#1E4FD4] focus:text-white focus:px-4 focus:py-2 focus:rounded focus:z-[100] focus:outline-none"
    >
      Skip to content
    </a>
  );
};

export default SkipToContent;