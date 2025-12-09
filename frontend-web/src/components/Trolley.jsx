import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const FloatingTrolley = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [bottomPos, setBottomPos] = useState("50%"); // start at middle

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeout) clearTimeout(scrollTimeout);

      // stop scrolling detection
      const timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 800);
      setScrollTimeout(timeout);

      // check if near footer
      const bottomReached =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100;
      setAtBottom(bottomReached);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  // Smooth animation effect when scrolling stops
  useEffect(() => {
    if (!isScrolling && !atBottom) {
      // move smoothly from middle to bottom
      setBottomPos("10%"); // moves toward bottom
    } else if (isScrolling) {
      setBottomPos("50%"); // stays middle while scrolling
    } else if (atBottom) {
      setBottomPos("20%"); // stops above footer
    }
  }, [isScrolling, atBottom]);

  return (
    <div
      className="fixed right-6 z-50 transition-all duration-1000 ease-in-out"
      style={{
        top: bottomPos,
        transform: "translateY(-50%)", // center when at middle
      }}
    >
      <button
        className="bg-gradient-to-br from-gray-300 to-gray-500 text-gray-800 rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Trolley"
      >
        <FaShoppingCart size={24} />
      </button>
    </div>
  );
};

export default FloatingTrolley;
