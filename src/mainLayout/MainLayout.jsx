import { Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";
const outlet = "outlet";
const hFull = "h-[81%]";

import { Header, Footer } from "../components";

const MainLayout = () => {
  const [isOnRoot, setIsOnRoot] = useState(false);
  let location = useLocation();
  // console.log("location:", location);

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/types") {
      setIsOnRoot(true);
    } else {
      setIsOnRoot(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className={isOnRoot ? `${outlet} ${hFull}` : `${outlet}`}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
