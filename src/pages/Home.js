import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import profileImage from "../assets/profile.png";
import "../styles/Home.css";
import {Link} from 'react-router-dom'
import {Typewriter} from 'react-simple-typewriter';

function Home() {
  const handleEmailClick = () => {
    window.location.href = "mailto:subbuthoto91@.gmail.com";
  };
const text=' Subrrahmanyem'
  return (
    <div className="home d-flex flex-column justify-content-between">
      <div className=" d-md-flex flex-md-row justify-content-md-evenly ">
      <div className="mt-4 img-container d-block d-md-none" >
        <img src={profileImage} alt='Profile' className="profile-img"/>
      </div>
      <div className="content">       
        <h2> Hi, <br/>I'am 
         <span>
          <Typewriter
          words={[text]} // Pass an array of words or sentences
          cursor={false} // Enable cursor
          typeSpeed={100} // Typing speed in milliseconds
          deleteSpeed={50} // Deleting speed in milliseconds
          delaySpeed={2000} // Delay between words in milliseconds
          loop={true} // Continuous loop
        />
         </span><br/>
         Web Developer</h2>
        <p>I'm a MERN stack developer passionate about creating robust web applications...</p>
        <Link to='/contact'>
          <button className="btn btn-primary contact-btn">Contact</button>
        </Link>
      </div>
      <div className="mt-5 img-container d-none d-md-block" >
        <img src={profileImage} alt='Profile' className="profile-img"/>
      </div>
      </div>
      
      <div className="prompt">
      <a href='https://www.linkedin.com/in/tulasee-subrrahmanyem-thota' target="_blank" style={{ color: '#1E90FF' }}>
        <LinkedInIcon />
      </a>

      {/* Replace handleEmailClick with your email action */}
      <EmailIcon onClick={handleEmailClick} style={{ color: '#1E90FF' }} />

      <a href='https://github.com/TulasiSubrahmanyam' target="_blank" style={{ color: '#1E90FF' }}>
        <GithubIcon />
      </a>
      </div>
      
    </div>
  );
}

export default Home;
