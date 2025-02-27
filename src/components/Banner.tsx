import CloseIcon from "@mui/icons-material/Close";
import "./Banner.css";
import Cookies from "js-cookie";
import { useState } from "react";

interface BannerProps {
  message: string;
}

export default function Banner({ message }: BannerProps) {
  const handleClickClose = () => {
    Cookies.set("hideBanner", "true", { expires: 7 });
    setIsHidden(true);
  };

  const [isHidden, setIsHidden] = useState(false);

  return !isHidden ? (
    <div className="banner">
      <span>{message}</span>
      <button onClick={handleClickClose}>
        <CloseIcon />
      </button>
    </div>
  ) : null;
}
