import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <>
      <img src={image} className="bgImage" />
      <h1 className="projectName"> {name} </h1>
      </>      
    </div>
  );
}

export default ProjectItem;
