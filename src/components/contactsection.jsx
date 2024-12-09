import React from "react";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Importing icons

function Contactsection() {
  return (
    <footer style={styles.footerContainer}>
      <h3 style={styles.contactHeading}>Contact Me</h3>
      <div style={styles.iconContainer}>
        <a href="https://github.com/ved-1234" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <FaGithub size={30} style={styles.icon} />
        </a>
        <a href="www.linkedin.com/in/vedchaudhari" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <FaLinkedin size={30} style={styles.icon} />
        </a>
        <a href="tel:+7028094061" style={styles.iconLink}>
          <FaPhoneAlt size={30} style={styles.icon} />
        </a>
        <a href="mailto:vedchaudhari272004@gmail.com" style={styles.iconLink}>
          <FaEnvelope size={30} style={styles.icon} />
        </a>
      </div>
      <p style={styles.footerText}>© 2024 Ved Chaudhari</p>
    </footer>
  );
}

const styles = {
  footerContainer: {
    backgroundColor: "#2E4372",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
    width:'100%',
    marginTop:'950px'
  },
  contactHeading: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "15px",
  },
  iconLink: {
    textDecoration: "none",
    color: "white",
    transition: "transform 0.3s ease",
  },
  icon: {
    transition: "color 0.3s ease",
  },
  footerText: {
    fontSize: "1rem",
    color: "#bbb",
  },
};

export default Contactsection
