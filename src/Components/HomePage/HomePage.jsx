import { useRef, useState } from "react";
import { AboutSection } from "../AboutSection/AboutSection"
import { P5Sketches } from "../P5Sketches/P5Sketches"
import { Projects } from "../Projects/Projects"
import { sketches } from "../../Kit/Sketches";
import P5Wrapper from "../P5Wrapper/P5Wrapper";
import "./HomePage.scss"

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSketchIndex, setCurrentSketchIndex] = useState(0);

  const openModal = (index) => {
    setCurrentSketchIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentSketchIndex(0);
  };

  const currentSketch = sketches[currentSketchIndex].component;
  const projectsRef = useRef(null);
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      <AboutSection scrollToProjects={scrollToProjects} />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <P5Sketches openModal={openModal} />
      
      {isModalOpen && currentSketchIndex !== null && (
        <div className="modal">
          <div className="modal__content">
            <div className='modal__title'>Sketch</div>
            <button onClick={closeModal} className="modal__close">
            ✕ Close
            </button>
            <P5Wrapper sketch={currentSketch} />
          </div>
          <div className="modal__overlay" onClick={closeModal}></div>
        </div>
      )}
    </div>
  )
}

export default HomePage;
