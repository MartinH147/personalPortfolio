import { useRef } from 'react';
import React, { Component }from "react";
import './App.css';
import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

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
      {/* NAVBAR */}
      <ul className="navBar">
        <li onClick={() => scrollToSection(projects)} className="link">Projects</li>
        <li onClick={() => scrollToSection(programmingLanguages)} className="link">Programming Languages</li>
        <li onClick={() => scrollToSection(skills)} className="link">Other Technical Skills</li>
        <li onClick={() => scrollToSection(awardsQualifications)} className="link">Awards & Qualifications</li>
      </ul>
      {/* should have used components here, didn't really know how to make components reusable though */}
      <div className='content'>
        {/* LANDING */}
        <div className="landing">
          <Spline style={{width:"100%", height:"99.5%", opacity: "50%",}} scene="https://prod.spline.design/MHPALQgunEfERnUV/scene.splinecode" className="spline"/>
          <div className='landingText'>
            <h1>Martin Hendriks</h1>
            <h3 className='jobTitle'>Aspiring Software Engineer</h3>
          </div>
        </div>
        {/* PROJECTS */}
        <div ref={projects} className="projects">
          <div className='layoutRow'>
            <h2>Projects</h2>
          </div>
          {/* Project #1 */}
          <div className='layoutRow'>
            <div className='imageBox'></div>
            <div className='contentBox'>
              <h3>Virtual Desk</h3>
              <p>
                This was the first of two separated components of my HSC SDD Major Project. <br></br>
                The concept behind the project was essentially to create a dashboard of productivity apps.
                The idea then being that productivity is further improved because all of these tools are centralised. <br></br>
                Initially I had planned to create this as a desktop application with NeutralinoJS, but I had troubles with that and so ended up submitting the project as a web app.
              </p>
              <br></br>
              <div className='projectLanguages'>
                <div className='projLangDiv'>
                  <FontAwesomeIcon icon={faHtml5} size='2x'/>
                  <p>HTML</p>
                </div>
                <div className='projLangDiv'>
                  <FontAwesomeIcon icon={faCss3Alt} size='2x'/>
                  <p>CSS</p>
                </div>
                <div className='projLangDiv'>
                  <FontAwesomeIcon icon={faJs} size='2x'/>
                  <p>JavaScript</p>
                </div>
                <div className='projLangDiv'>
                  <FontAwesomeIcon icon={faPhp} size='2x'/>
                  <p>PHP</p>
                </div>
                <div className='projLangDiv'>
                  <FontAwesomeIcon icon={faDatabase} size='2x'/>
                  <p>SQL</p>
                </div>
              </div>
              <br></br>
              <p>
                <a href='https://github.com/MartinH147/virtualDesk' target="_blank" rel="noopener noreferrer">Check it out on Github</a>
              </p>
            </div>
          </div>
          {/* Project #2 */}
          <div className='layoutRow'>
            <div className='contentBox odd'>
              <h3>Virtual Assistant</h3>
              <p>
                This is the second part of my HSC SDD Major Project. <br></br>
                I wanted the main feature of my Virtual Desk was an AI assistant, however I had great struggles working with models from Hugging Face and so settled for the idea of a virtual assistant instead.<br></br>
                The text-to-speech engine didn't work on Mac, but the version of the project I have uploaded to GitHub was before I switched over to finishing the assistant for Windows.
              </p>
              <br></br>
              <div className='projectLanguages'>
                <div className='projLangDiv'>
                  <FontAwesomeIcon icon={faPython} size='2x'/>
                  <p>Python</p>
                </div>
              </div>
              <br></br>
              <p>
                <a href='https://github.com/MartinH147/virtualAssistant' target="_blank" rel="noopener noreferrer">Check it out on Github</a>
              </p>
            </div>
            <div className='imageBox'></div>
          </div>
          {/* Project #3 */}
          <div className='layoutRow'>
            <div className='imageBox'></div>
            <div className='contentBox'>
              <h3>Lists</h3>
              <p>
                This was the very first piece of software that I wrote (other than bits of Python and block code). <br></br>
                The idea was to create different wishlists by searching the web and then adding items as links. 
                These wishlists could then be shared to others. <br></br>
                This project ground to a halt as I realised that web scraping is a complicated and somewhat expensive process. 
              </p>
              <br></br>
              <div className='projectLanguages'>
                <div className='projLangDiv'>
                  <FontAwesomeIcon icon={faReact} size='2x'/>
                  <p>React Native</p>
                </div>
                <div className='projLangDiv'>
                  <FontAwesomeIcon icon={faHtml5} size='2x'/>
                  <p>HTML</p>
                </div>
                <div className='projLangDiv'>
                  <FontAwesomeIcon icon={faCss3Alt} size='2x'/>
                  <p>CSS</p>
                </div>
                <div className='projLangDiv'>
                  <FontAwesomeIcon icon={faJs} size='2x'/>
                  <p>JavaScript</p>
                </div>
              </div>
              <br></br>
              <p>
                <a href='https://github.com/MartinH147/virtualDesk' target="_blank" rel="noopener noreferrer">Check it out on Github</a>
              </p>
            </div>
          </div>
        </div>
        {/* PROGRAMMING LANGUAGES */}
        <div ref={programmingLanguages} className="programmingLanguages">
          <div className='layoutRow'>
            <h2 className='subheading'>Programming Languages</h2>
          </div>
          <div className='layoutRow'>
            <p className='programmingLanguagesDescription'>
              All ratings of competency are on a scale of 1 (I began learning it yesterday) to 10 (I wrote the handbook on it). <br></br>
              Note that a 5 would be roughly indicative of a few years of experience with the language, but still plenty to learn.
            </p>
          </div>
          <div className='layoutRow'>
            <div className='languageBox'>
              <FontAwesomeIcon icon={faPython} size='10x'/>
            </div>
            <div className='contentBox'>
              <h3>Python</h3>
              <p>...</p>
              <div className='progressBox'>
                <progress value={0.5} className='progress'/>
                <p className='progressIndicator'>
                  5
                </p>
              </div>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='contentBox odd'>
              <h3>JavaScript</h3>
              <p>...</p>
              <div className='progressBox'>
                <progress value={0.5} className='progress'/>
                <p className='progressIndicator'>
                  5
                </p>
              </div>
            </div>
            <div className='languageBox'>
              <FontAwesomeIcon icon={faJs} size='10x'/>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='languageBox'>
              <FontAwesomeIcon icon={faHtml5} size='10x'/>
            </div>
            <div className='contentBox'>
              <h3>HTML</h3>
              <p>...</p>
              <div className='progressBox'>
                <progress value={0.5} className='progress'/>
                <p className='progressIndicator'>
                  5
                </p>
              </div>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='contentBox odd'>
              <h3>CSS</h3>
              <p>...</p>
              <div className='progressBox'>
                <progress value={0.5} className='progress'/>
                <p className='progressIndicator'>
                  5
                </p>
              </div>
            </div>
            <div className='languageBox'>
              <FontAwesomeIcon icon={faCss3Alt} size='10x'/>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='languageBox'>
              <FontAwesomeIcon icon={faPhp} size='10x'/>
            </div>
            <div className='contentBox'>
              <h3>PHP</h3>
              <p>...</p>
              <div className='progressBox'>
                <progress value={0.3} className='progress'/>
                <p className='progressIndicator'>
                  3
                </p>
              </div>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='contentBox odd'>
              <h3>SQL</h3>
              <p>...</p>
              <div className='progressBox'>
                <progress value={0.3} className='progress'/>
                <p className='progressIndicator'>
                  3
                </p>
              </div>
            </div>
            <div className='languageBox'>
              <FontAwesomeIcon icon={faDatabase} size='10x'/>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='languageBox'></div>
            <div className='contentBox'>
              <h3>Swift</h3>
              <p>...</p>
              <div className='progressBox'>
                <progress value={0.1} className='progress'/>
                <p className='progressIndicator'>
                  1
                </p>
              </div>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='contentBox odd'>
              <h3>C#</h3>
              <p>...</p>
              <div className='progressBox'>
                <progress value={0.1} className='progress'/>
                <p className='progressIndicator'>
                  1
                </p>
              </div>
            </div>
            <div className='languageBox'></div>
          </div>
        </div>
        {/* TECHNICAL SKILLS */}
        <div ref={skills} className="skills">
          <div className='skillsRow'>
            <h2 className='subheading'>Technical Skills</h2>
          </div>
          <div className='layoutRow'>
            <div className='imageBox'></div>
            <div className='contentBox'>
              <h3>Video Editing (Premiere Pro)</h3>
              <p>...</p>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='contentBox odd'>
              <h3>Photoshop</h3>
              <p>...</p>
            </div>
            <div className='imageBox'></div>
          </div>
        </div>
        {/* AWARDS + QUALIFICATIONS */}
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