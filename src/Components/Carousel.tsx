import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface CarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  autoPlay?: boolean;
  interval?: number;
  selectedImage: number | null;
  onClose: () => void;
}

export function Carousel({ images, autoPlay = true, interval = 3000, selectedImage, onClose }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(selectedImage || 0);
  const [isPlaying, setIsPlaying] = React.useState(autoPlay);
  const timeoutRef = React.useRef<number | null>(null);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
  }, [images.length]);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (images.length - 2)) % (images.length - 2));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  React.useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = window.setTimeout(nextSlide, interval);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isPlaying, interval, nextSlide]);

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full max-w-8xl">
       <Button
        isIconOnly
        variant="flat"
        className="absolute right-4 top-4 z-50 bg-background/60 backdrop-blur-lg"
        onPress={onClose}
      >
        <Icon className="text-gray-700" icon="lucide:x" width={24} />
      </Button>
      {/* Main carousel container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full border-2 border-gray-300 rounded-large"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between">
        <Button
          isIconOnly
          variant="flat"
          className="bg-background/60 backdrop-blur-lg"
          onPress={previousSlide}
          isDisabled={currentIndex === 0}
        >
          <Icon icon="lucide:chevron-left" width={24} />
        </Button>
        <Button
          isIconOnly
          variant="flat"
          className="bg-background/60 backdrop-blur-lg"
          onPress={nextSlide}
          isDisabled={currentIndex === images.length - 3}
        >
          <Icon icon="lucide:chevron-right" width={24} />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: images.length - 2 }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-4"
                : "bg-default-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Autoplay control */}
      <Button
        isIconOnly
        variant="flat"
        className="absolute bottom-4 right-4 bg-background/60 backdrop-blur-lg"
        onPress={toggleAutoPlay}
      >
        <Icon
          icon={isPlaying ? "lucide:pause" : "lucide:play"}
          width={24}
        />
      </Button>
    </div>
  );
}
