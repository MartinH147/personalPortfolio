import { useRef } from 'react';
import React from "react";
import './App.css';

import fireplaceImg from './fireplace.png';
import galtonBoardImg from './galtonBoard.png';
import virtualDeskImg from './virtualDesk.png';
import virtualAssistantImg from './virtualAssistant.png';
import listsImg from './lists.png'

import Spline from '@splinetool/react-spline';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFire } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { faArrowsSpin } from '@fortawesome/free-solid-svg-icons';
import { faSwift } from '@fortawesome/free-brands-svg-icons';

function App() {
  const landing = useRef(null)
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
        <li onClick={() => scrollToSection(landing)} className="link homeLink">
          <h3 className='landingIcon'>MH</h3>
        </li>
        <li onClick={() => scrollToSection(projects)} className="link">Projects</li>
        <li onClick={() => scrollToSection(programmingLanguages)} className="link">Programming Languages</li>
        <li onClick={() => scrollToSection(skills)} className="link">Other Technical Skills</li>
        <li onClick={() => scrollToSection(awardsQualifications)} className="link">Awards & Qualifications</li>
      </ul>
      {/* should have used components here, didn't really know how to make components reusable though */}
      <div className='content'>

        {/* LANDING */}
        <div ref={landing} className="landing">
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
            <div className='imageBox'>
              <img src={virtualDeskImg} />
            </div>
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
                This was the second part of my HSC SDD Major Project. <br></br>
                I wanted the main feature of my Virtual Desk to be an AI assistant. However, I had great struggles working with models from Hugging Face and so settled for the idea of a virtual assistant instead.<br></br>
                The text-to-speech engine didn't work on MacOS, but the version of the project I have uploaded to GitHub was before I switched over to finishing the assistant for Windows. <br />
                There was no interface for this project, it was run through the terminal/command prompt.
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
            <div className='imageBox'>
              <img src={virtualAssistantImg} />
            </div>
          </div>
          {/* Project #3 */}
          <div className='layoutRow'>
            <div className='imageBox'>
              <img src={listsImg} />
            </div>
            <div className='contentBox'>
              <h3>Lists</h3>
              <p>
                This was the very first piece of software that I wrote (other than bits of Python and block code). <br></br>
                The idea was to create different wishlists by searching the web and then adding items as links. 
                These wishlists could then be shared to others. <br></br>
                This project ground to a halt as I realised that web scraping is a complicated and somewhat expensive process. Also, the project is failing to run because it's missing assets.
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
          {/* Project #4 */}
          <div className='layoutRow'>
            <div className='contentBox odd'>
              <h3>Galton Board</h3>
              <p>
                This was the second part of my HSC SDD Major Project. <br></br>
                I wanted the main feature of my Virtual Desk to be an AI assistant. However, I had great struggles working with models from Hugging Face and so settled for the idea of a virtual assistant instead.<br></br>
                The text-to-speech engine didn't work on MacOS, but the version of the project I have uploaded to GitHub was before I switched over to finishing the assistant for Windows.
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
            <div className='imageBox'>
              <img src={galtonBoardImg} />
            </div>
          </div>
          {/* Project #5 */}
          <div className='layoutRow'>
            <div className='imageBox'>
              <img src={fireplaceImg}/>
            </div>
            <div className='contentBox'>
              <h3>Fireplace</h3>
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
                  <p>React</p>
                </div>
                <div className='projLangDiv'>
                  <FontAwesomeIcon icon={faFire} size='2x'/>
                  <p>Firebase</p>
                </div>
                <div className='projLangDiv'>
                  <FontAwesomeIcon icon={faJs} size='2x'/>
                  <p>JavaScript</p>
                </div>
                <div className='projLangDiv'>
                  <FontAwesomeIcon icon={faCss3Alt} size='2x'/>
                  <p>CSS</p>
                </div>
                <div className='projLangDiv'>
                  <FontAwesomeIcon icon={faHtml5} size='2x'/>
                  <p>HTML</p>
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
            <div className='iconBox'>
              <FontAwesomeIcon icon={faPython} size='10x'/>
            </div>
            <div className='contentBox'>
              <h3>Python</h3>
              <p>
                I began learning Python thanks to the Coding & Robotics group that ran at my school when I was in Year 7. <br/>
                I first used it with Microbits, which I used with BitBots to make a robot laser tag game. <br/>
                Then I really developed most of my Python skills through the NCSS challenge. <br/>
                I'm relatively good with data manipulation e.g. manipulating arrays, but I am still yet to learn about Python classes. I'm also keen to do more with PyGame.
              </p>
              <br/>
              <div className='progressBox'>
                <progress value={0.6} className='progress'/>
                <p className='progressIndicator'>
                  6
                </p>
              </div>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='contentBox odd'>
              <h3>HTML</h3>
              <p>
                I acquired a basic understanding of HTML in 2021 when I completed an online beginners course, but it wasn't until 2022 when I realised that writing HTML meant I was actually able to code websites. <br/>
                I have more to learn about metadata and the role of the head, as well as general practice on how to write good HTML code as opposed to just HTML that does the job.
              </p>
              <br/>
              <div className='progressBox'>
                <progress value={0.6} className='progress'/>
                <p className='progressIndicator'>
                  6
                </p>
              </div>
            </div>
            <div className='iconBox'>
              <FontAwesomeIcon icon={faHtml5} size='10x'/>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='iconBox'>
              <FontAwesomeIcon icon={faCss3Alt} size='10x'/>
            </div>
            <div className='contentBox'>
              <h3>CSS</h3>
              <p>
                Naturally, I picked up CSS at the same time as I did HTML. <br/>
                I've rated my competency a bit lower though, as I think I have much more CSS still to learn than I do HTML. <br/>
                I want to have more experience with using CSS frameworks, as I understand that in industry these are the way to go.
                I also often find myself having to look up how to achieve certain looks with CSS, as there are so many properties.
                I do think that I have a good level of competency with Flexbox, and in general I'm reasonably good at interface design.
              </p>
              <br/>
              <div className='progressBox'>
                <progress value={0.4} className='progress'/>
                <p className='progressIndicator'>
                  4
                </p>
              </div>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='contentBox odd'>
              <h3>JavaScript</h3>
              <p>
                I first started with JavaScript when I made the Lists app in React Native. <br/>
                I was a bit scared of using vanilla JavaScript up until about 2023, but now, to an extent, I actually find it easier than working with a JavaScript framework. <br/>
                I want to get better with React (and other frameworks), as I think this will help me build more useable apps. <br/>
                Even in creating this website, whilst I did use React, I know that I haven't really utilised the framework.
              </p>
              <br/>
              <div className='progressBox'>
                <progress value={0.4} className='progress'/>
                <p className='progressIndicator'>
                  4
                </p>
              </div>
            </div>
            <div className='iconBox'>
              <FontAwesomeIcon icon={faJs} size='10x'/>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='iconBox'>
              <FontAwesomeIcon icon={faPhp} size='10x'/>
            </div>
            <div className='contentBox'>
              <h3>PHP</h3>
              <p>
                I taught myself PHP in order to handle using a database for my SDD Major Project. <br/>
                Unlike SQL, I didn't take an online course for this, and so I struggled for a while to piece things together. For ages I was trying to work out how to handle database actions with PHP functions, when really I just needed to use form submission handling. <br/>
                I still don't have much of an understanding of PHP as a whole, so I don't really know how much more there is for me to learn. <br/>
                I am able to save, load, update and delete data from a database using PHP (in conjunction with SQL).
              </p>
              <br/>
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
              <p>
                I followed Grok's beginners SQL course to teach myself this for use in my SDD Major Project. <br/>
                It seems quite a simple language, so it probably deserves to get a higher rating here than what I've given it, but I only learnt it early this year, so whilst I may have the knowledge, I don't really have the experience. <br/>
                I also opted to use PHPMyAdmin's generated queries a lot of the time, so I may be less competent with SQL than I think.
              </p>
              <br/>
              <div className='progressBox'>
                <progress value={0.3} className='progress'/>
                <p className='progressIndicator'>
                  3
                </p>
              </div>
            </div>
            <div className='iconBox'>
              <FontAwesomeIcon icon={faDatabase} size='10x'/>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='iconBox'>
              <FontAwesomeIcon icon={faSwift} size='10x'/>
            </div>
            <div className='contentBox'>
              <h3>Swift</h3>
              <p>
                I'd been meaning to learn Swift since a few years ago, but only really got around to starting to learn it earlier this year. <br/>
                All this really entailed was watching a few YouTube videos, and then following along with one to create a Tic Tac Toe game. <br/>
                My idea for my next Swift project is to create a virtual guitar pedal using AudioKit or something similar. I've found though that there's a lot less support online for Swift than there is for JavaScript say, which is a problem as I'm still very much at the hand-holding stage.
              </p>
              <br/>
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
              <p>
                The only reason that I've touched C# is because my IST class used it in 2022 when we did game design as a topic. <br/>
                My engagement with C# has been very brief.
              </p>
              <br/>
              <div className='progressBox'>
                <progress value={0.1} className='progress'/>
                <p className='progressIndicator'>
                  1
                </p>
              </div>
            </div>
            <div className='iconBox wordIcon'>
              C#
            </div>
          </div>
        </div>

        {/* TECHNICAL SKILLS */}
        <div ref={skills} className="skills">
          <div className='skillsRow'>
            <h2 className='subheading'>Technical Skills</h2>
          </div>
          <div className='layoutRow'>
            <div className='iconBox'>
              <FontAwesomeIcon icon={faCode} size='10x'/>
            </div>
            <div className='contentBox'>
              <h3>Data Structures & Algorithms</h3>
              <p>
                I am on the road to learning data structures and algorithms.<br/>
                I want to learn how to apply them on large scale projects, where they will be more important in saving time and space.
              </p>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='contentBox odd'>
              <h3>Databases</h3>
              <p>
                I have used a MySQL database for my SDD Major Project (Virtual Desk), and recently I've used Firebase's Firestore and Realtime databases. <br/>
                This has required me to read, write, update and manipulate these databases, as well as having an understanding of the structure of databases.
              </p>
            </div>
            <div className='iconBox'>
              <FontAwesomeIcon icon={faDatabase} size='10x'/>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='iconBox'>
              <FontAwesomeIcon icon={faMicroscope} size='10x'/>
            </div>
            <div className='contentBox'>
              <h3>Testing</h3>
              <p>
                Through the SDD course I have learnt about testing and its various forms and applications. <br/>
                For my SDD Major Project there was a strong focus on testing, particularly at the program (integration) level.
              </p>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='contentBox odd'>
              <h3>Software Development Life Cycle</h3>
              <p>
                I understand the SDLC's stages and the various development approaches. <br/>
                For my SDD Major Project I applied the waterfall approach.
              </p>
            </div>
            <div className='iconBox'>
              <FontAwesomeIcon icon={faArrowsSpin} size='10x'/>
            </div>
          </div><div className='layoutRow'>
            <div className='iconBox'>
              <FontAwesomeIcon icon={faPhotoFilm} size='10x'/>
            </div>
            <div className='contentBox'>
              <h3>Adobe Suite</h3>
              <p>
                I have experience with the following products from the Adobe suite (listed in order of competency): <br/>
                - Premiere Pro<br/>
                - XD<br/>
                - Photoshop<br/>
                - Animate<br/>
                - Audition<br/>
              </p>
            </div>
          </div>
          <div className='layoutRow'>
            <div className='contentBox odd'>
              <h3>Version Control</h3>
              <p>
                I have started learning how to use Git in order to utilise version control for GitHub. <br/>
                It is helping me prepare for working in team software projects.
              </p>
            </div>
            <div className='iconBox'>
              <FontAwesomeIcon icon={faCodeBranch} size='10x'/>
            </div>
          </div>
        </div>

        {/* AWARDS + QUALIFICATIONS */}
        <div ref={awardsQualifications} className="awardsQualifications">
          <div className='layoutRow'>
            <h2 className='aqHeading'>Awards & Qualifications</h2>
          </div>
          <div className='layoutRow'>  
            <h3>NCSS Challenge</h3>
          </div>
          <div className='ncssAwards'>
            <div className='awardBox'>
              <div className='scoreBox'>
                PS
              </div>
              <h4>Intermediate 2023</h4>
              <h5>Perfect Score</h5>
              <p>250 points</p>
            </div>
            <div className='awardBox'>
              <div className='scoreBox'>
                HD
              </div>
              <h4>Intermediate 2022</h4>
              <h5>High Distinction</h5>
              <p>239 points</p>
            </div>
            <div className='awardBox'>
              <div className='scoreBox'>
                D
              </div>
              <h4>Intermediate 2021</h4>
              <h5>Distinction</h5>
              <p>190 points</p>
            </div>
            <div className='awardBox'>
              <div className='scoreBox'>
                PS
              </div>
              <h4>Beginner 2023</h4>
              <h5>Perfect Score</h5>
              <p>250 points</p>
            </div>
            <div className='awardBox'>
              <div className='scoreBox'>
                PS
              </div>
              <h4>Beginner 2022</h4>
              <h5>Perfect Score</h5>
              <p>250 points</p>
            </div>
            <div className='awardBox'>
              <div className='scoreBox'>
                PS
              </div>
              <h4>Beginner 2021</h4>
              <h5>Perfect Score</h5>
              <p>250 points</p>
            </div>
          </div>
        </div>

      </div>
    </>

  );
};

export default App