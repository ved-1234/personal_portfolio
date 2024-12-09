import React, { useState } from "react";
import axios from "axios";

const Resume = () => {
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!feedback) {
      setStatus("Please provide some feedback.");
      return;
    }

    try {
      // Send feedback to the server (assuming your backend is running on localhost:5000)
      const response = await axios.post("http://localhost:5000/feedback", { message: feedback });

      setStatus("Feedback submitted successfully!");
      setFeedback(""); // Clear the feedback textarea
    } catch (error) {
      setStatus("Error submitting feedback.");
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
      backgroundImage: 'url("/images/resume image.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      borderRadius: "10px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      maxWidth: "470px",
      marginTop: "200px",
      textAlign: "center",
      color: "#fff",
    },
    heading: {
      fontSize: "2rem",
      fontFamily: "'Roboto', sans-serif",
      fontWeight: "600",
      color: "whitesmoke",
      marginBottom: "10px",
    },
    description: {
      fontSize: "1rem",
      fontFamily: "'Roboto', sans-serif",
      color: "gray",
      marginBottom: "20px",
      lineHeight: "1.5",
    },
    button: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      backgroundColor: "#007BFF",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "5px",
      fontFamily: "'Roboto', sans-serif",
      fontSize: "16px",
      fontWeight: "bold",
      boxShadow: "0 3px 8px rgba(0, 0, 0, 0.2)",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    },
    icon: {
      marginRight: "8px",
      fontSize: "18px",
    },
    feedbackContainer: {
      marginTop: "-200px",
      marginRight: "-1500px",
      width: "100%",
      textAlign: "center",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      padding: "20px",
      borderRadius: "10px",
    },
    feedbackHeading: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#fff",
      marginBottom: "10px",
    },
    feedbackDescription: {
      fontSize: "1rem",
      color: "#ddd",
      marginBottom: "20px",
    },
    textarea: {
      width: "90%",
      maxWidth: "400px",
      height: "100px",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ddd",
      fontFamily: "'Roboto', sans-serif",
      fontSize: "14px",
      marginBottom: "20px",
      outline: "none",
      resize: "none",
    },
    feedbackButton: {
      backgroundColor: "#28a745",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Resume</h2>
      <p style={styles.description}>
        Discover my skills and experiences. Download my resume to learn more!
      </p>
      <a href="/images/resume.pdf" download="resume.pdf" style={styles.button}>
        <span style={styles.icon}>&#x1F4BE;</span> Download Resume
      </a>

      {/* Feedback Section */}
      <div style={styles.feedbackContainer}>
        <h3 style={styles.feedbackHeading}>Share Your Thoughts</h3>
        <p style={styles.feedbackDescription}>
          I'd love to hear your feedback! Let me know what you think of my
          resume and what could be improved.
        </p>
        <textarea
          placeholder="Write your feedback here..."
          style={styles.textarea}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button style={styles.feedbackButton} onClick={handleSubmit}>
          Submit Feedback
        </button>
        {status && <p>{status}</p>} {/* Display status message */}
      </div>
    </section>
  );
};

export default Resume;
