import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './Carrousel-image'; 
import '../styles/Projects.css';

function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const projects = [
    {
      id: 1,
      title: "Popjet1",
      description: "Description for project 1. This project is a comprehensive solution designed to streamline the cultivation, tracking, and management of cannabis plants from seedling to harvest. Utilizing the powerful .NET MAUI framework, this application supports both desktop and mobile platforms, ensuring seamless accessibility and management for users. Key features include comprehensive CRUD operations for managing plant varieties, stages of life, storage locations, provenance, and user roles. The system also offers robust logging and note-taking capabilities to track plant health, modifications, and historical data, providing an all-encompassing tool for efficient cannabis cultivation management.",
      img: "./src/assets/images/App-ges-demande.jpeg",
      link: "https://github.com/seifallah12345/livrable1",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for project 2. This project involves the development of a sophisticated calculator application. The application supports a wide range of mathematical operations, including basic arithmetic, scientific calculations, and complex number manipulations. Built with a user-friendly interface, this project aims to provide a seamless user experience with features such as history tracking, memory functions, and customizable themes.",
      img: "./src/assets/images/calculator.jpeg",
      link: "https://github.com/kawther27/project2",
    },
    {
      id: 3,
      title: "Cannabis Plant Management System",
      description: "The Cannabis Plant Management System is an integrated solution designed to streamline the cultivation, tracking, and management of cannabis plants from seedling to harvest. Utilizing the powerful .NET MAUI framework, this application supports both desktop and mobile platforms, ensuring seamless accessibility and management for users. Key features include comprehensive CRUD operations for managing plant varieties, stages of life, storage locations, provenance, and user roles. The system also offers robust logging and note-taking capabilities to track plant health, modifications, and historical data, providing an all-encompassing tool for efficient cannabis cultivation management.",
      img: "./src/assets/images/cannabis.jpg",
      link: "https://github.com/Isigod024/Cannabius",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="carousel-container" >
      <Carousel activeIndex={index} onSelect={handleSelect} >
        {projects.map((project, i) => (
          <Carousel.Item key={project.id} >
             <div className="carousel-content">
            <CarouselImage src={project.img} alt={project.title} />
            <Carousel.Caption >
              <h3>{project.title}</h3>
              <div className="description">
                <p>{project.description}</p>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn ">
                View on GitHub
              </a>
            </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
    </section>
  );
}

export default Projects;









