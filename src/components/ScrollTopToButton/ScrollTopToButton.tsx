import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 200 });
  };

  return (
    <Button
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        display: visible ? "block" : "none",
      }}
      size="lg"
      onClick={scrollToTop}
      variant="warning"
    >
      <FaRegArrowAltCircleUp />
    </Button>
  );
};

export default ScrollToTopButton;
