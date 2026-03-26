import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset standard window scroll
    window.scrollTo(0, 0);
    // Because GSAP creates a custom scrollable container wrapper-inner
    const innerWrapper = document.querySelector('.wrapper-inner');
    if (innerWrapper) {
      innerWrapper.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
