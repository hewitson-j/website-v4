import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
