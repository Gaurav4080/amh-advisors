import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaServicestack, FaUsers, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg py-1 fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6">
      <Link to="/" className="text-2xl font-extrabold flex items-center gap-2 hover:scale-105 transition-transform font-serif">
          <img className="h-16 w-auto" src="https://logoeps.com/wp-content/uploads/2013/05/the-institute-of-chartered-accountants-of-india-vector-logo.png" alt="" />
          <span className='font-cursive'>AMH Advisors</span>
        </Link>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`md:flex space-x-6 ${menuOpen ? "block" : "hidden"} md:block`}>
          {[
            { to: "/", label: "Home", icon: <FaHome /> },
            { to: "/about", label: "About Us", icon: <FaInfoCircle /> },
            { to: "/services", label: "Services", icon: <FaServicestack /> },
            { to: "/team", label: "Our Team", icon: <FaUsers /> },
            { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
          ].map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="hover:text-blue-400 flex items-center gap-2 transition-all duration-300 hover:scale-105">
                {item.icon} {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
