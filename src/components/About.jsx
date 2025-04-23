import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="section-padding about"
    >
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        <div className="section-line"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <p className="about-text">
            I am a friendly and proactive individual, always eager to learn and explore new ideas. As a keen observer, I focus on the finer details, and I have a solid foundation in analytical skills and the stock market. I work well in teams, ensuring collaboration while maintaining a sharp attention to detail.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="about-grid"
        >
          <div className="skills-container">
            <h3 className="subheading">Technical Skills</h3>
            <ul className="skills-list">
              <li>C++</li>
              <li>Java</li>
              <li>Python</li>
              <li>PHP</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <h3 className="subheading">Technologies/Frameworks</h3>
            <ul className="skills-list">
              <li>React</li>
              <li>MongoDB</li>
              <li>Redux-toolkit</li>
              <li>NodeJS</li>
              <li>Rest APIs</li>
              <li>Tailwind</li>
              <li>Express</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
            <h3 className="subheading">Soft Skills</h3>
            <ul className="skills-list">
              <li>Problem-Solving</li>
              <li>Team Collaboration</li>
              <li>Data Structures and Algorithms</li>
              <li>Responsive Web Design</li>
              <li>Backend Development</li>
            </ul>
          </div>
          <div className="education-container">
            <h3 className="subheading">Education</h3>
            <div className="education-item">
              <h4>Lovely Professional University Punjab</h4>
              <p>Computer Science and Engineering</p>
              <p>CGPA: 7.43 | 2022 – 2026</p>
              <p>Jalandhar, Punjab</p>
            </div>
            <div className="education-item">
              <h4>St. Atri Public School</h4>
              <p>12th with Science</p>
              <p>Percentage: 67.20% | 2021 – 2022</p>
              <p>Lalru, Punjab</p>
            </div>
            <div className="education-item">
              <h4>Police D.A.V Public School</h4>
              <p>10th</p>
              <p>Percentage: 88.00% | 2019 – 2020</p>
              <p>Ambala, Haryana</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;