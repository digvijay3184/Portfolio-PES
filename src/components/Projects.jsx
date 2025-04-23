import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [isExpandedEcom, setIsExpandedEcom] = useState(false);
  const [isExpandedGamics, setIsExpandedGamics] = useState(false);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="section-padding projects"
    >
      <div className="container">
        <h2 className="section-heading">Projects</h2>
        <div className="section-line"></div>
        <div className="projects-grid">
          {/* E-Commerce Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="project-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title"><a href="https://steady-paletas-7c047f.netlify.app">E-Commerce Platform</a></h3>
                <p className="project-date">Oct 2024 – Nov 2024</p>
              </div>
              <p className="project-tech">React, Tailwind, NodeJS, Express, Redux-toolkit, MongoDB, APIs</p>
              <ul className="project-description">
                {isExpandedEcom ? (
                  <>
                    <li>Led the development of a comprehensive e-commerce platform using the MERN stack for a product distributor, enhancing product management and customer experience.</li>
                    <li>Designed and implemented a user-friendly interface with intuitive navigation, product catalog management, and secure checkout processes.</li>
                    <li>Developed an intuitive admin dashboard for inventory management, order tracking, and user account management.</li>
                    <li>Successfully integrated a secure payment gateway to facilitate safe transactions, ensuring compliance with industry security standards.</li>
                    <li>Managed the project lifecycle from planning to deployment, adhering to a structured 12-week schedule.</li>
                  </>
                ) : (
                  <>
                    <li>Led the development of a comprehensive MERN stack e-commerce platform with admin dashboard and secure checkout.</li>
                  </>
                )}
              </ul>
              <button
                className="read-more-btn mt-2"
                onClick={() => setIsExpandedEcom((prev) => !prev)}
              >
                {isExpandedEcom ? "Show Less" : "Read More"}
              </button>
              <div className="project-links">
                <a href="https://github.com/digvijay3184" target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub Repo
                </a>
              </div>
            </div>
          </motion.div>
          {/* Gamics Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="project-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">Gamics – Game Tournament Platform</h3>
                <p className="project-date">Jul 2022 - Aug 2022</p>
              </div>
              <p className="project-tech">NodeJS, MongoDB, HTML, CSS, Node-Mailer</p>
              <ul className="project-description">
                {isExpandedGamics ? (
                  <>
                    <li>Designed and implemented "Gamics," a web application for hosting free tournaments for popular battle royale games such as PUBG, BGMI, and Valorant.</li>
                    <li>Created a user-friendly registration system that allows participants to sign up for tournaments and receive automated email notifications via Node-mailer.</li>
                    <li>Ensured a seamless user experience across devices by implementing responsive design principles, enhancing accessibility and usability.</li>
                  </>
                ) : (
                  <li>Built "Gamics," a game tournament platform with responsive UI and automated emails for registration.</li>
                )}
              </ul>
              <button
                className="read-more-btn mt-2"
                onClick={() => setIsExpandedGamics((prev) => !prev)}
              >
                {isExpandedGamics ? "Show Less" : "Read More"}
              </button>
              <div className="project-links">
                <a href="https://github.com/digvijay3184" target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub Repo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;