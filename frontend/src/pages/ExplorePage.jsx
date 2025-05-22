import React, { useEffect, useState } from "react";
import MobileExplorePage from "./mobileExplorePage";
import DesktopExplorePage from "./DesktopExplorePage";

const ExplorePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
  <div className="min-h-screen bg-white text-black px-0 md:px-0 pb-24 pt-0 md:pt-0">



      {isMobile ? <MobileExplorePage /> : <DesktopExplorePage />}
    </div>
  );
};

export default ExplorePage;
