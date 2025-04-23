import { motion } from "framer-motion";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="section-padding contact"
    >
      <div className="container">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="section-line"></div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-text"
        >
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </motion.p>
        <div className="contact-buttons">
          <motion.a
            href="mailto:digvijaysingh4040@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-btn email-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-envelope"></i> Email
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/digvijay-singh-81899b24a/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="contact-btn linkedin-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/digvijay3184"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="contact-btn github-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-github"></i> GitHub
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;