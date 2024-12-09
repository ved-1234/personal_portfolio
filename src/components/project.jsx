import React from "react";

function Project() {
  const projects = [
    {
      title: "Chatbot for Institution",
      description:
        "Developed a chatbot to assist students in finding relevant information about courses, schedules, and faculty.",
      technologies: "HTML, CSS, JavaScript, Python, Bootstrap",
      features: [
        "Interactive chat interface",
        "User-friendly responsive design",

      ],
      role: "Designed the interface and implemented the chatbot logic",
      links: {
       
        github: "https://github.com/ved-1234/Chatbot_2024.git",
      },
    },
    {
      title: "Seismic Data Management System",
      description:
        "Managed and processed seismic data to optimize resource exploration at ONGC.",
      technologies: "C, MySQL",
      features: [
        "Organized complex datasets for seismic analysis",
        "Automated data entry and retrieval processes",
      ],
      role: "Handled database optimization and created tools for data processing",
      links: {
       
        github: "https://github.com/ved-1234/webscraper.git",
      },
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing skills, projects, and resume downloads.",
      technologies: "React, CSS, Netlify",
      features: [
        "Fully responsive design",
        "Interactive sections like About, Projects, and Resume",
        "Custom animations and transitions",
      ],
      role: "Full-stack development",
      links: {
      
        github: "#",
      },
    },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.description}>{project.description}</p>
            <p>
              <strong>Technologies Used:</strong> {project.technologies}
            </p>
            <ul style={styles.featuresList}>
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <p>
              <strong>Role:</strong> {project.role}
            </p>
            <div style={styles.links}>
            
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.linkButton}
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "50px",
    backgroundColor: "",
    textAlign: "center",
    marginTop:'50px'
  },
  heading: {
    fontSize: "2.5rem",
    fontFamily: "'Roboto', sans-serif",
    marginBottom: "100px",
    color: "whitesmoke",
  },
  projectsGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  projectCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    maxWidth: "400px",
    textAlign: "left",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  projectTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#007BFF",
  },
  description: {
    fontSize: "1rem",
    marginBottom: "10px",
    color: "#555",
  },
  featuresList: {
    paddingLeft: "20px",
    marginBottom: "10px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
  },
  linkButton: {
    backgroundColor: "#007BFF",  // Blue background color
    color: "#fff",  // White text color
    padding: "10px 15px",  // Padding inside the button
    borderRadius: "5px",  // Rounded corners
    fontSize: "0.9rem",  // Font size
    fontWeight: "bold",  // Bold text style
    transition: "background-color 0.3s ease",  // Smooth transition for background color change
    display: "block",  // Block level element for proper centering
    textAlign: "center",  // Center the button text
    margin: "10px auto",  // Auto margins for horizontal centering
    width: "fit-content",  // Adjust width to fit content
    
  },
};

export default Project;
