import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaLaptopCode } from 'react-icons/fa';
import "../styles/Skills.css";
const SkillsTimeline = () => {
  return (
    <div className="skills-timeline">
      <h1>Skill Showcase </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: 'white', color: '#000', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
          contentArrowStyle={{ borderLeft: '10px solid #f2f2f2',borderLeft:"none"}}
          date="Front-End"
          iconStyle={{ background: 'blue', color: '#fff', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
          icon={<FaLaptopCode />}
        >
          <h3>Front-End Skills</h3>
          <p>ReactJS, Redux, HTML, CSS, Ionic, BootStrap, MaterialUI, Javascript</p>
          <p>Languages: JavaScript</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: 'white', color: '#000', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
          contentArrowStyle={{ borderLeft: '7px solid #f2f2f2',borderLeft:"nonr"  }}
          date="Back-End"
          iconStyle={{ background: 'green', color: '#fff', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
          icon={<FaLaptopCode />}
        >
          <h3>Back-End Skills</h3>
          <p>NodeJS, ExpressJS, MySQL, MongoDB, SQL</p>
          <p>Languages: JavaScript, Python</p>
        </VerticalTimelineElement>

        {/* Add more VerticalTimelineElement for other skill categories */}
        
      </VerticalTimeline>
    </div>
  );
};

export default SkillsTimeline;
