"use client";
import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import scss from "./ScrollTop.module.scss";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2900) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={scss.btnScrollTop}
      style={{ display: isVisible ? "block" : "none" }}
      onClick={goTop}
    >
      <FaArrowCircleUp />
    </button>
  );
};

export default ScrollToTop;
