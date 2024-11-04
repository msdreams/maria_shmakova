import { frontendProjects } from "../../Kit/frontendProjects"
import "./Projects.scss"

export const Projects = () => {
  return (
    <div className="projects__container">
      {frontendProjects.map((project) => (
        
        <div className="projects__block">
          <div className="projects__text">
            <p className="projects__title">{project.title}</p>
            <p>
              {project.describtion}
            </p>
            <p>
            Technologies: {project.technologies}
            </p>
          </div>

          <div className="projects__imageContainer">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="projects__image"
                src={project.img}
                alt="projects-image"
              />
            </a>
          </div>
        </div>
      ))}


    </div>
  )
}