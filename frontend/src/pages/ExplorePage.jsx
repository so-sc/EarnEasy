import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileExplorePage from "./mobileExplorePage";
import DesktopExplorePage from "./DesktopExplorePage";

const ExplorePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Standard 768px breakpoint
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen" style={{
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary
    }}>
      {isMobile ? <MobileExplorePage /> : <DesktopExplorePage />}
    </div>
  );
};

export default ExplorePage;
