import React from 'react'
import "../styles/Home.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Home () {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello! My Name is Favour Altraide </h2>
      
        <div className='prompt'>
          <p>A full stack software developer with a big passion for coding, learning and creating. </p>
          <LinkedInIcon />
          <GitHubIcon />
          <EmailIcon />


        </div>
      </div>
        <div className='skills'>
          <h1>Skills</h1>
          <ol className='list'>
            <li className='item'>
              <h2>Front-End</h2>
              <span>
                ReactJS, Redux, HTML, CSS, NPM, BootStrap,
                MaterialUI

              </span>
            </li>
            <li className='item'>
              <h2>Back-End</h2>
              <span>
                NodeJS, ExpressJS, 
              </span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span>
                Javascript, Python, c++
              </span>
            </li>
          </ol>
        </div>
      
    </div>
  )
}

export default Home 