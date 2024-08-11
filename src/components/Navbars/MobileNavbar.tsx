import { useState } from "react";
import "./MoblieNavbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavbarMenu from "./MobileNavbarMenu";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="mobile-navbar">
        <div
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MenuIcon className="menu-icon" />
        </div>
      </div>
      {open ? <MobileNavbarMenu handler={handleOpen} /> : <></>}
    </>
  );
}
