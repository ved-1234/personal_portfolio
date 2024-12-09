import React from 'react'

  function About() {
    return (
      <div style={{ position: 'relative', margin: '-420px auto', maxWidth: '1200px' }}>
        {/* Image Card */}
        <div
          style={{
            height: 'auto',
            width: '470px',
            border: '1px solid black',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)',
            marginTop: '580px',
            marginLeft:'-150px',
            animation: 'bounceFromLeft 2s ease-in-out',
          }}
        >
          <img
            src="https://img.pikbest.com/templates/20240625/focus-on-your-goals-quotes_10635629.jpg!sw800"
            alt="Motivational Quote"
            style={{
              width: '430px',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'center',
              border: '2px solid black',
              borderRadius: '10px',
              margin: '10px',
              padding: '5px',
              opacity: '0.7',
              filter: 'grayscale(50%)',
              boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.5s ease-in-out',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.opacity = '0.8';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.opacity = '1';
            }}
          />
        </div>
  
        {/* About Section */}
        <section
          id="about"
          style={{
            padding: '50px 20px',
            marginTop: '-490px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: '50px',
            backgroundColor: '#1a1a2e',
            borderRadius: '10px',
            background:'transparent',
            border:'none',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <h2 style={{ color: '#fff', textAlign: 'center' }}>About Me</h2>
          <p style={{ color: 'whitesmoke', lineHeight: '1.6' }}>
            Hi, I'm Ved Chaudhari, a Frontend Developer with a passion for creating interactive and visually appealing web applications. I specialize in modern JavaScript frameworks like React and have a solid foundation in HTML, CSS, and JavaScript.
          </p>
          <p style={{ color: 'whitesmoke', lineHeight: '1.6' }}>
            I started my tech journey with a love for problem-solving and now focus on building clean, scalable, and user-friendly websites. I'm excited about making the web more intuitive and enjoyable for users.
          </p>
          <h3 style={{ color: 'lightblue', marginBottom: '10px' }}>Skills</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li style={{ color: 'whitesmoke' }}>Frontend Development: HTML, CSS, JavaScript, React</li>
            <li style={{ color: 'whitesmoke' }}>Version Control: Git, GitHub</li>
            <li style={{ color: 'whitesmoke' }}>Tools: VS Code, npm, Webpack</li>
            <li style={{ color: 'whitesmoke' }}>Design: Responsive design, UI/UX best practices</li>
          </ul>
          <p style={{ color: 'whitesmoke', lineHeight: '1.6' }}>
            I'm always eager to learn and grow in the ever-changing world of web development. Feel free to check out my portfolio and reach out if you'd like to collaborate or discuss opportunities.
          </p>
        </section>
      </div>
    );
  }
export default About