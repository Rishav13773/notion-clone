import { useState, useEffect } from "react";

const useScrollTop = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScoll = () => {
    if (window.scrollY > threshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScoll);

    return () => {
      window.removeEventListener("scroll", handleScoll);
    };
  }, [threshold]);

  return scrolled;
};

export default useScrollTop;
