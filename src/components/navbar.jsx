import React,{useState} from 'react'
import {  } from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
 
    return(
      <div
  style={{
    position: 'sticky', // Makes navbar stick to the top
    top: '0', // Keeps it at the top of the viewport
    zIndex: '3000', // Ensures it appears above other content
    backgroundColor: '#1a1a2e', // Prevents transparency overlap
    padding: '10px 0',
    display: 'flex',
    border:'none',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Optional styling
  }}
>
  <Link to="/">
  <button  style={{ margin: '0 11px', padding: '10px 20px', cursor: 'pointer', borderRadius: '8px', backgroundColor: '#1a1a2e', border: 'none', color: 'white' }}>Home</button>
  </Link>
  <Link to='/about'>
  <button style={{ margin: '0 11px', padding: '10px 20px', cursor: 'pointer', borderRadius: '8px', backgroundColor: '#1a1a2e', border: 'none', color: 'white' }}>About</button>
  </Link>
  <Link to='/resume'>
  <button style={{ margin: '0 11px', padding: '10px 20px', cursor: 'pointer', borderRadius: '8px', backgroundColor: '#1a1a2e', border: 'none', color: 'white' }}>Resume</button>
  </Link>
  <Link to='/project'>
  <button style={{ margin: '0 11px', padding: '10px 20px', cursor: 'pointer', borderRadius: '8px', backgroundColor: '#1a1a2e', border: 'none', color: 'white' }}>Projects</button>
</Link>
</div>

      
    )
}

export default Navbar
// link tag which avoid reloading when button or a link is click