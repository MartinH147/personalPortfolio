import { useRef } from 'react';
import React, { Component }from "react";
import './App.css';
import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

function App() {
  const projects = useRef(null);
  const programmingLanguages = useRef(null);
  const skills = useRef(null);
  const awardsQualifications = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 50,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <ul className="navBar">
        <li onClick={() => scrollToSection(projects)} className="link">Projects</li>
        <li onClick={() => scrollToSection(programmingLanguages)} className="link">Programming Languages</li>
        <li onClick={() => scrollToSection(skills)} className="link">Other Technical Skills</li>
        <li onClick={() => scrollToSection(awardsQualifications)} className="link">Awards & Qualifications</li>
      </ul>
      <div className='content'>
        <div className="landing">
          <Spline style={{width:"100%", height:"99.5%", opacity: "50%",}} scene="https://prod.spline.design/MHPALQgunEfERnUV/scene.splinecode" className="spline"/>
          <div className='landingText'>
            <h1>Martin Hendriks</h1>
            <h3 className='jobTitle'>Aspiring Software Engineer</h3>
          </div>
        </div>
        <div ref={projects} className="projects">
          <div className='layoutRow'>
            <h2>Projects</h2>
          </div>
          <div className='layoutRow'>
            <div className='imageBox'></div>
            <div className='contentBox'>
              <h3>Virtual Desk - SDD Major Project</h3>
              <p>...</p>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='contentBox'>
              <h3>Virtual Desk - SDD Major Project</h3>
              <p>...</p>
            </div>
            <div className='imageBox'></div>
          </div>
          <div className='layoutRow'>
            <div className='imageBox'></div>
            <div className='contentBox'>
              <h3>Virtual Desk - SDD Major Project</h3>
              <p>...</p>
            </div>
          </div>
        </div>
        <div ref={programmingLanguages} className="programmingLanguages">
          <div className='layoutRow'>
            <h2 className='subheading'>Programming Languages</h2>
          </div>
        </div>
        <div ref={skills} className="skills">
          <div className='skillsRow'>
            <h2 className='subheading'>Technical Skills</h2>
          </div>
            <div className='layoutRow'>
              <div className='imageBox'></div>
              <div className='contentBox'>
                <h3>Virtual Desk - SDD Major Project</h3>
                <p>...</p>
              </div>
            </div>
            <div className='layoutRow'>
              <div className='contentBox'>
                <h3>Virtual Desk - SDD Major Project</h3>
                <p>...</p>
              </div>
              <div className='imageBox'></div>
            </div>
        </div>
        <div ref={awardsQualifications} className="awardsQualifications">
          <div className='layoutRow'>
            <h2>Awards & Qualifications</h2>
          </div>
        </div>
      </div>
    </>

  );
};

export default App