import React from "react";
import { projectData } from "../../Data/data";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <div className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <div className="project-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <Link href={project.url} target="_blank" className="project-link">
              <Image
                src={project.image}
                alt="project image"
                width={300}
                height={200}
                className="responsive-image"
              />
              <h3 className="project-card-title">{project.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
