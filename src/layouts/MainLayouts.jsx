import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";


const MainLayouts = () => {
  return (
    <div className=" max-w-5xl mx-auto">
      <Navbar />
     <Outlet />
    </div>
  );
};

export default MainLayouts;