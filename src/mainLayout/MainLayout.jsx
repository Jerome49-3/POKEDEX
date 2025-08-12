import { Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";
const outlet = "outlet";
const h80 = "h-[81%]";

import { Header, Footer } from "../components";

const MainLayout = () => {
  const [isOnRoot, setIsOnRoot] = useState(false);
  let location = useLocation();
  console.log("location:", location);
  console.log(
    " location.pathname.startsWith:",
    location.pathname.startsWith("/pokemon/")
  );
  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/types" ||
      location.pathname.startsWith("/pokemon/") === true
    ) {
      setIsOnRoot(true);
    } else {
      setIsOnRoot(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className={isOnRoot ? `${outlet} ${h80}` : `${outlet}`}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
