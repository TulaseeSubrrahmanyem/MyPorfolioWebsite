import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { ExperienceData } from "../helpers/ExperienceData";
import { EducationData } from "../helpers/EducationData";
import "../styles/Experiences.css";
function Experience() {
  const renderEducation = EducationData && EducationData.map((edu, index) => {
    console.log(edu); // Moved the console.log here
  
    return (
      <VerticalTimelineElement
        key={index}
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'white', color: '#000', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
        contentArrowStyle={{ borderLeft: '10px solid #f2f2f2',borderLeft:"none"}}
        date={edu.date}
        iconStyle={{ background: "blue", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">{edu.institution}</h3>
        <h4 className="vertical-timeline-element-subtitle">{edu.degree}</h4>
        <p>{edu.field}</p>
      </VerticalTimelineElement>
    );
  });
  

  const renderInternship = ExperienceData && ExperienceData.map((exp, index) => {
    console.log(exp); // Moved the console.log here
  
    return (
      <VerticalTimelineElement
        key={index}
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#000', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
        contentArrowStyle={{ borderLeft: '10px solid #f2f2f2',borderLeft:"none"}}
        date={exp.date}
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">{exp.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
        {exp.description && exp.description.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </VerticalTimelineElement>
    );
  });
  


  return (
    <div className="experience">
      <VerticalTimeline lineColor="#4682B4">
        {renderEducation}
        {renderInternship}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
