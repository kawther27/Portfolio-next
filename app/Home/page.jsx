import React from 'react'

import Typewriter from 'typewriter-effect';
import downArrow from '../assets/images/down-arrow.png';
import '../styles/Home.css'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="home-container">
          <h1 className="hero-title">
            <Typewriter
              options={{
                strings: ['I Am Web Designer.'],
                autoStart: true,
                loop: true,
                cursor: '|',
                delay: 75,
              }}
            />
          </h1>
          <div className="scroll-down">
            <Link to="/about" className="scroll-link">
              <img src={downArrow} alt="Scroll Down" className="scroll-icon" />
            </Link>
          </div>
        </div>
   
   
  )
}

export default Home