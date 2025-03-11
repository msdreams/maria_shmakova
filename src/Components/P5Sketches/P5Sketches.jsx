import { Button } from "@heroui/react";
import { sketches } from "../../Kit/Sketches";
import { motion } from "framer-motion";


export const P5Sketches = ({ openModal }) => {
  return (
    <div className="flex flex-col gap-4 justify-center p-4 md:px-8">
      <div className='text-2xl font-bold font-jura text-secondary'>
        Creative Coding Experiments
      </div>
      <p className="">Development of interactive visualizations, research for a new ideas, JavaScript Experiments.</p>
      <p className="">Technologies: P5js</p>
      <Button
              as="a"
              className="md:w-[120px] mb-2"
                href="https://www.instagram.com/maria_mariash_"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                variant="flat"
              >
                See more
      </Button>

      <div className="overflow-x-auto touch-pan-x w-full relative scrollbar-hide mb-10">
            <motion.div
              className="flex gap-2 flex-nowrap"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              style={{ willChange: "transform" }}
            >
              {[...sketches, ...sketches].map((sketch, i) => (
                <div
                  key={i}
                  className="flex-[0_0_40%] md:flex-[0_0_33%] lg:flex-[0_0_25%]"
                  onClick={() => openModal(i)}
                >
                  <img
                    className="object-cover w-full h-full cursor-pointer border border-default-300 rounded-medium hover:opacity-80 transition-opacity"
                    src={sketch.img}
                    alt={sketch.id}
                  />
                </div>
              ))}
            </motion.div>
          </div>

        {/* <div className="flex flex-row gap-8 justify-around flex-wrap p-4 md:p-8">
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
        </div> */}
    </div>
  );
};
