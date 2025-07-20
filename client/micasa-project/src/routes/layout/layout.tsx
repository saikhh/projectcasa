import NavBar from "../../components/navbar/NavBar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex ">
          <NavBar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
