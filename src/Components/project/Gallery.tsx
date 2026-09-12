import { useState } from "react";
import type { ProjectImage } from "../../data/imageSets";
import { Lightbox } from "../ui/Lightbox";
import { Modal } from "../ui/Modal";

export const Gallery = ({ images, title }: { images: ProjectImage[]; title: string }) => {
  const [index, setIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group overflow-hidden rounded-xl border border-line bg-paper-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            aria-label={`Open image ${i + 1} of ${images.length}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[5/3] w-full object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <Modal open={index !== null} onClose={() => setIndex(null)} label={`${title} — gallery`}>
        {index !== null && <Lightbox images={images} startIndex={index} onClose={() => setIndex(null)} />}
      </Modal>
    </>
  );
};
