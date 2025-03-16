import { useRef, useState } from "react";
import { AboutSection } from "../AboutSection/AboutSection"
import { P5Sketches } from "../P5Sketches/P5Sketches"
import { sketches } from "../../Kit/Sketches";
import P5Wrapper from "../P5Wrapper/P5Wrapper";
import { Projects } from "../Projects/Projects";

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSketchIndex, setCurrentSketchIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentSketchIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentSketchIndex(0);
  };

  const currentSketch = sketches[currentSketchIndex].component;
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background flex flex-col gap-20 overflow-hidden">
      <AboutSection scrollToProjects={scrollToProjects} />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <P5Sketches openModal={openModal} />
      
      {isModalOpen && currentSketchIndex !== null && (
        <div className="fixed top-0 z-40">
          <div className="absolute top-0">
            <div className='absolute top-0 z-50 p-6 text-lg font-jura text-secondary'>P5js Sketch</div>
            <button onClick={closeModal} className=" absolute top-0 right-4 z-50 p-6 text-lg font-jura text-secondary">
            ✕ Close
            </button>
            <P5Wrapper sketch={currentSketch} />
          </div>
          <div className="absolute" onClick={closeModal}></div>
        </div>
      )}
    </div>
  )
}

export default HomePage;
