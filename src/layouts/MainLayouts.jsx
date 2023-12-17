import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


const MainLayouts = () => {
  return (
    <div className=" max-w-5xl mx-auto">
      <Navbar />
      <div className=" min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;