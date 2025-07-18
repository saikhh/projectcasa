import NavBar from "@/components/navbar/navBar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex ">
          <NavBar />
        </div>
        <div className=""> 

            <Outlet/>
        </div>
      </div>
    </>
  );
}

export default Layout;
