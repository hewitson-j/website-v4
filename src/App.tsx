import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Router from "./components/Router";
import MobileNavbar from "./components/MobileNavbar";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 700px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");

    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      <HashRouter>
        {!isMobile ? <Navbar /> : <MobileNavbar />}
        <Router />
      </HashRouter>
    </>
  );
}

export default App;
