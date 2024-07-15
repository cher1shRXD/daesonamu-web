import { Outlet, useLocation } from "react-router-dom";
import SideBar from "./sidebar";
import Header from "./header";
import { useEffect, useState } from "react";

const Layout = () => {

  const location = useLocation();
  const [viewState, setViewState] = useState(true);

  useEffect(() => {
    const hidePaths = ["/login", "/signup"];
    setViewState(hidePaths.includes(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <Header />
      {!viewState && (
        <>
          <SideBar />
        </>
      )}
      <Outlet />
    </>
  );
};

export default Layout;
