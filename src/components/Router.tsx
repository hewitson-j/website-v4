import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Projects from "./Projects";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}
