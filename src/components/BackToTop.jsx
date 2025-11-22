import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollTop}
          className="
            fixed bottom-6 right-6 
            bg-gradient-to-r from-blue-600 to-blue-500
            text-white 
            rounded-full 
            w-14 h-14 
            flex items-center justify-center
            shadow-lg shadow-blue-300/40
            hover:scale-110
            transition-all duration-300
            cursor-pointer
            backdrop-blur-md
          "
        >
          <FiArrowUp className="text-2xl" />
        </button>
      )}
    </>
  );
}

export default BackToTop;
