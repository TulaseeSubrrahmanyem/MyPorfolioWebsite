import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project && project.name}</h1>
      <div className="detail-section">
        <div className="imgDetailCard">
          <img src={project && project.image} className="projectImgDetail" alt={project && project.name} />
        </div>  
        <div className="detail-content">
          <p className="projectDetails">
            <span style={{ fontSize: "1.3em", fontFamily: "600", color: "#000" }}>Project Details:</span> {project && project.description}
          </p>
          <p className="projectSkills ">
            <span style={{ fontSize: "1.3em", fontFamily: "600", color: "#000" }}>Skills:</span> {project && project.skills}
          </p>
        </div>
        <div className="m-3 d-flex flex-column">
          <p className="loginDetails">{project && project.login}</p>
          {project && (
            <div className="d-flex flex-column justify-content-center">
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.1em", fontWeight: "550" }}>View Website</a>
              <a href={project.gitLink} target="_blank"  rel="noopener noreferrer" style={{margin:"20px auto"}}> <GitHubIcon /></a>
            </div>
           
          )}
        </div>      
      </div>
    </div>
  );
}

export default ProjectDisplay;
