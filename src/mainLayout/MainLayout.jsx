import { Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useStateContext } from "../assets/lib/useStateContext";
const outlet = "outlet";
const h80 = "h-[82%]";

import { Header, Footer } from "../components";

const MainLayout = () => {
  const { search, setSearch } = useStateContext();
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
      location.pathname === "/pokemons" ||
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
      <Header search={search} setSearch={setSearch} />
      <div className={isOnRoot ? `${outlet} ${h80}` : `${outlet}`}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
