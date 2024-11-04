import { sketches } from "../../Kit/Sketches";
import "./P5Sketches.scss"


export const P5Sketches = ({ openModal }) => {
  return (
    <div className="P5Sketches">
      <div className='P5Sketches__title'>Creative Coding Experiments</div>
        <div className="P5Sketches__container">
          {sketches.map((sketch, index) => (
            <div
              key={sketch.id}
              id={sketch.id}
              className="P5Sketches__item"
              onClick={() => openModal(index)}
            >
            <img
              className="P5Sketches__image"
              src={sketch.img} alt="sketch-image"
          />
          </div>
        ))}
      </div>
    </div>
  );
};
