import { motion } from "framer-motion";
import "../styles/Home.css";
import ResumePDF from "../assets/DigvijayCV.pdf";

const Home = ({ scrollToSection }) => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="section-padding hero"
    >
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-name"
        >
          Digvijay Singh
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-title"
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-subtitle"
        >
          Building beautiful and functional web applications
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-buttons"
        >
          <motion.button
            className="btn primary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </motion.button>
          <motion.button
            className="btn secondary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </motion.button>
          <motion.a
            href={ResumePDF}
            download="DigvijayCV.pdf"
            className="btn secondary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            My Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;