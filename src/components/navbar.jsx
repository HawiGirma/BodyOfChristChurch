import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container mx-auto px-4 py-6 scroll-smooth">
      <header className="flex items-center font-sora justify-between">
        <Link to="/" className="text-xl font-bold tracking-wider uppercase">
          Body-Of-Christ
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          <Link to="/about" className="text-sm hover:text-red-500">
            About
          </Link>
          <Link to="/service" className="text-sm hover:text-red-600">
            Services
          </Link>
          {/* <a href="#" className="text-sm hover:text-red-600">
            Programs
          </a> */}
          <Link to="/contact" className=" text-sm hover:text-red-600">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center space-x-6">
          <Menu className="md:hidden" />
          <Link
            to="/gallery"
            className="text-sm hover:text-red-600 uppercase md:block"
          >
            Gallery
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
