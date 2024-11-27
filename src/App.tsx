import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbars/Navbar";
import Router from "./components/Router";
import MobileNavbar from "./components/Navbars/MobileNavbar";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import ParticlesBg from "particles-bg";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 965);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 965);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <HashRouter>
        <ParticlesBg type="cobweb" bg />
        <ScrollToTop />
        {!isMobile ? <Navbar /> : <MobileNavbar />}
        <main>
          <Router />
        </main>
      </HashRouter>
    </>
  );
}

export default App;
