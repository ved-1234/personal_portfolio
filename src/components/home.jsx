import React from 'react'
import './bouncy.css'
function Home() {
  return (
    <div>
      <div
        style={{
          marginTop: '80px',
          height: 'auto',
          width: '470px',
          border: '1px solid black',
          overflow: 'hidden',
          background: 'linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)',
          animation: 'bounceFromLeft 2s ease-in-out',
        }}
      >
        <img
          src="/images/image.png"
          alt="image is loading"
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

      <div style={{ marginLeft: '700px', marginTop: '-400px' }}>
        <h2 style={{ color: 'whitesmoke' }}>HI!</h2>
        <h1 style={{ color: 'whitesmoke' }}>I am Ved Chaudhari</h1>
        <h2 style={{ color: 'whitesmoke' }}>Web Developer</h2>
        <p style={{ color: 'whitesmoke' }}>
          I transform conceptual designs into fully functional, responsive, and visually engaging websites.
        </p>
      </div>
    </div>
  );
}

export default Home