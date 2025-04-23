import { motion } from "framer-motion";
import "../styles/Navbar.css";

const Navbar = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.div
          className="nav-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          DS
        </motion.div>
        <ul className="nav-menu">
          {["home", "about", "projects", "certifications", "contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`nav-item ${activeSection === item ? "active" : ""}`}
            >
              <button onClick={() => scrollToSection(item)} className="nav-link">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;