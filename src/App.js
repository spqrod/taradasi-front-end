import { Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import DentalSupplies from "./pages/DentalSupplies";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <main>
      <ScrollToTop />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dental-supplies" element={<DentalSupplies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
        </Routes>
      <Footer />
    </main>
  );
}

export default App;
