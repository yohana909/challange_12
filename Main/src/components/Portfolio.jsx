import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "/path/to/image1.jpg",
      deployedLink: "https://example.com",
      githubLink: "https://github.com/username/project1"
    },
    {
      title: "Project 2",
      image: "/path/to/image2.jpg",
      deployedLink: "https://example.com",
      githubLink: "https://github.com/username/project2"
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
