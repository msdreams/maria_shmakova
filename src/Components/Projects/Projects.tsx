import { Button, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react"
import { frontendProjects } from "../../Kit/frontendProjects"
import { Carousel } from "../Carousel"
import { motion } from "framer-motion";
import { useState } from "react";

export const Projects = ()  =>  {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (projectIndex: number, imageIndex: number) => {
    setSelectedProject(projectIndex);
    setSelectedImage(imageIndex);
    onOpen();
  };

  return (
    <div className="flex flex-col px-4 md:px-8 gap-20">
      {frontendProjects.map((project, projectIndex) => (
        <div key={projectIndex} className="flex flex-col gap-4">
          <div className="flex gap-2 flex-col relative">
            <h2 className="text-2xl font-bold mb-2 font-jura text-secondary">
              {project.title}
            </h2>
            <p className="mb-2">{project.describtion}</p>
            <p className="mb-4">Technologies: {project.technologies}</p>
            <Button
              as="a"
              className="md:w-[120px] mb-2"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                variant="flat"
              >
                Project Page
            </Button>
          </div>

          <div className="overflow-x-auto touch-pan-x w-full relative scrollbar-hide">
            <motion.div
              className="flex gap-2 flex-nowrap"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              style={{ willChange: "transform" }}
            >
              {[...project.img, ...project.img].map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className="flex-[0_0_40%] md:flex-[0_0_33%] lg:flex-[0_0_25%]"
                  onClick={() => handleImageClick(projectIndex, imgIndex % project.img.length)}
                >
                  <img
                    className="object-cover w-full h-full cursor-pointer border border-default-300 rounded-medium hover:opacity-80 transition-opacity"
                    src={img.src}
                    alt={img.alt}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      ))}

      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        size="5xl"
        classNames={{
          body: "p-0"
        }}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                {selectedProject !== null && selectedImage !== null && (
                  <Carousel
                    images={frontendProjects[selectedProject].img}
                    selectedImage={selectedImage}
                    onClose={onClose}
                  />
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}