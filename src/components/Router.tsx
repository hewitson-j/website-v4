import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import OtherServices from "./OtherServices";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import About from "./About";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="other-services" element={<OtherServices />} />
      <Route path="contact" element={<Contact />} />
      <Route path="terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route
        path="*"
        element={
          <ErrorPage
            title="Page not Found"
            message="Whoops! Looks like the page you're looking for doesn't exist. Please click the button below to return home."
          />
        }
      />
    </Routes>
  );
}
