import { sketches } from "../../Kit/Sketches";

export const P5Sketches = ({ openModal }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className='text-2xl font-bold mb-2 font-jura text-secondary'>
        Creative Coding Experiments
      </div>
        <div className="flex flex-row gap-8 justify-around flex-wrap p-4 md:p-8">
          {sketches.map((sketch, index) => (
            <div
              key={sketch.id}
              id={sketch.id}
              className="flex min-w-[280px] h-[280px] flex-grow-1"
              onClick={() => openModal(index)}
            >
            <img
              className="w-full object-cover rounded-xl border border-gray-300"
              src={sketch.img} alt="sketch-image"
          />
          </div>
        ))}
      </div>
    </div>
  );
};
