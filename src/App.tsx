import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Router from "./components/Router";
import MobileNavbar from "./components/MobileNavbar";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import ReactPullToRefresh from "react-pull-to-refresh";

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
        {isMobile ? (
        <ReactPullToRefresh onRefresh={async () => {
          location.reload()
        }}>
          <ScrollToTop/>
          <MobileNavbar />
          <main>
            <Router />
          </main>
        </ReactPullToRefresh>
        ) : (
        <>
          <ScrollToTop/>
          <Navbar />
          <main>
            <Router />
          </main>
        </>)} 
      </HashRouter>
    </>
  );
}

export default App;
