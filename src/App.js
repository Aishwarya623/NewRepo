import { Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import LandingPage from "./views/LandingPage";
import Services from "./views/Services";
import Contact from "./views/Contact";
import FAQ from "./views/FAQ";

const App = () => {
  const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const redirect = params.get("redirect");

  //   if (redirect) {
  //     navigate(redirect);
  //   }
  // }, []);
  return (
    <HelmetProvider>
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
