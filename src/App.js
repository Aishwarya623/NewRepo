import { Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import LandingPage from "./views/LandingPage";
import Services from "./views/Services";
import Contact from "./views/Contact";
import FAQ from "./views/FAQ";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();   // ✅ ADD THIS

  // ✅ ADD THIS BLOCK (redirect handler)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");

    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </HelmetProvider>
  );
};

export default App;
