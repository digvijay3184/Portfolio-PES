import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/Certifications.css";

const Certifications = () => {
  const [isExpandedEthical, setIsExpandedEthical] = useState(false);
  const [isExpandedPHP, setIsExpandedPHP] = useState(false);
  const [isExpandedNetworking, setIsExpandedNetworking] = useState(false);
  const [isExpandedNode, setIsExpandedNode] = useState(false);
  const [isExpandedAWS, setIsExpandedAWS] = useState(false);

  const ethicalSkills = [
    "Network Scanning (Nmap, Netcat)",
    "Web Application Security (OWASP Top 10, SQL Injection, XSS, CSRF)",
    "Vulnerability Assessment & Penetration Testing",
    "Social Engineering Techniques",
    "Wi-Fi Security and Wireless Attacks",
    "Cryptography Fundamentals (Symmetric & Asymmetric Encryption, Hashing)",
    "Packet Analysis (Wireshark)",
    "System Hacking & Privilege Escalation",
    "Denial of Service (DoS/DDoS) Attacks",
    "Ethical Hacking Methodology (Footprinting, Reconnaissance, Exploitation, Reporting)"
  ];
  const phpSkills = [
    "Hypertext Preprocessor (PHP)",
    "Cascading Style Sheets (CSS)",
    "HTML"
  ];
  const networkingSkills = [
    "Critical Thinking",
    "Network Security",
    "Network Model",
    "IPv4",
    "Computer Architecture",
    "Domain Name System (DNS)",
    "Troubleshooting",
    "Human Computer Interaction",
    "Accounting",
    "Computer Networking",
    "Cloud Computing",
    "Network Architecture"
  ];
  const nodeSkills = [
    "Node.js",
    "Chai",
    "Mocha",
    "JavaScript with ES6 Specification"
  ];
  const awsSkills = [
    "AWS Management Console",
    "AWS Identity and Access Management",
    "Networking on AWS",
    "Cloud Computing",
    "AWS Security"
  ];

  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="section-padding certifications"
    >
      <div className="container">
        <h2 className="section-heading">Certifications</h2>
        <div className="section-line"></div>
        <div className="certifications-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="certification-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="certification-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="certification-content">
              <h3>Ethical Hacking</h3>
              <p>NPTEL | Nov 2024</p>
              <p className="skills">
                <strong>Skills:</strong>{" "}
                {isExpandedEthical
                  ? ethicalSkills.join(", ")
                  : ethicalSkills.slice(0, 3).join(", ")}
                {ethicalSkills.length > 3 && (
                  <button
                    className="read-more-btn"
                    onClick={() => setIsExpandedEthical((prev) => !prev)}
                  >
                    {isExpandedEthical ? "Show Less" : "Read More"}
                  </button>
                )}
              </p>
              <a
                href="/src/assets/Ethical-Hacking.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="certification-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="certification-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="certification-content">
              <h3>Building Web Applications in PHP</h3>
              <p>Coursera | Dec 2024</p>
              <p className="skills">
                <strong>Skills:</strong>{" "}
                {isExpandedPHP ? phpSkills.join(", ") : phpSkills.slice(0, 2).join(", ")}
                {phpSkills.length > 2 && (
                  <button
                    className="read-more-btn"
                    onClick={() => setIsExpandedPHP((prev) => !prev)}
                  >
                    {isExpandedPHP ? "Show Less" : "Read More"}
                  </button>
                )}
              </p>
              <a
                href="/src/assets/php-cert.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="certification-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="certification-icon">
              <i className="fas fa-network-wired"></i>
            </div>
            <div className="certification-content">
              <h3>The Bits and Bytes of Computer Networking</h3>
              <p>Coursera | Jan 2025 - Feb 2025</p>
              <p className="skills">
                <strong>Skills:</strong>{" "}
                {isExpandedNetworking
                  ? networkingSkills.join(", ")
                  : networkingSkills.slice(0, 3).join(", ")}
                {networkingSkills.length > 3 && (
                  <button
                    className="read-more-btn"
                    onClick={() => setIsExpandedNetworking((prev) => !prev)}
                  >
                    {isExpandedNetworking ? "Show Less" : "Read More"}
                  </button>
                )}
              </p>
              <a
                href="/src/assets/network-cert.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="certification-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="certification-icon">
              <i className="fas fa-server"></i>
            </div>
            <div className="certification-content">
              <h3>Server-side JavaScript with Node.js</h3>
              <p>Coursera | May 2024</p>
              <p className="skills">
                <strong>Skills:</strong>{" "}
                {isExpandedNode ? nodeSkills.join(", ") : nodeSkills.slice(0, 3).join(", ")}
                {nodeSkills.length > 3 && (
                  <button
                    className="read-more-btn"
                    onClick={() => setIsExpandedNode((prev) => !prev)}
                  >
                    {isExpandedNode ? "Show Less" : "Read More"}
                  </button>
                )}
              </p>
              <a
                href="/src/assets/node-cert.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="certification-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="certification-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <div className="certification-content">
              <h3>AWS Cloud Solutions Architect</h3>
              <p>Coursera | Mar 2025 - Apr 2025</p>
              <p className="skills">
                <strong>Skills:</strong>{" "}
                {isExpandedAWS ? awsSkills.join(", ") : awsSkills.slice(0, 3).join(", ")}
                {awsSkills.length > 3 && (
                  <button
                    className="read-more-btn"
                    onClick={() => setIsExpandedAWS((prev) => !prev)}
                  >
                    {isExpandedAWS ? "Show Less" : "Read More"}
                  </button>
                )}
              </p>
              <a
                href="/src/assets/AWS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;