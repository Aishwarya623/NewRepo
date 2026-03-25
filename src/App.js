import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LandingPage from "./views/LandingPage";
import Services from "./views/Services";
import Contact from "./views/Contact";
import FAQ from "./views/FAQ";

const App = () => {
  const location = useLocation();
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
