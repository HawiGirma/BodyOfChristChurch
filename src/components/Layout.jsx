import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
function Layout() {
  return (
    <div className="">
      <div className="container-fluid">
        <Nav />
      </div>
      <div className="container mt-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
