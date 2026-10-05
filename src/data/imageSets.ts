import loop1 from "../assets/images/loop/loop1-landing.jpg";
import loop2 from "../assets/images/loop/loop2-business.jpg";
import loop3 from "../assets/images/loop/loop3-crm-booking.png";
import loop4 from "../assets/images/loop/loop4-schedule-prices.jpg";
import loop5 from "../assets/images/loop/loop5-price-timeline.jpg";
import loop6 from "../assets/images/loop/loop6-mobile-booking.jpg";
import loop7 from "../assets/images/loop/loop7-mobile-classes.jpg";
import loop8 from "../assets/images/loop/loop8-booking-modal.jpg";
import loop9 from "../assets/images/loop/loop9-trainer-profile.jpg";
import loopPhone from "../assets/images/loop/loop-mockup-phone.png";
import loopCard from "../assets/images/loop/loop-mockup-card.png";
import moneta1 from "../assets/images/moneta/moneta1.jpg";
import moneta2 from "../assets/images/moneta/moneta2.jpg";
import moneta3 from "../assets/images/moneta/moneta3.jpg";
import moneta4 from "../assets/images/moneta/moneta4.jpg";
import moneta5 from "../assets/images/moneta/moneta5.jpg";
import moneta6 from "../assets/images/moneta/moneta6.jpg";
import moneta7 from "../assets/images/moneta/moneta7.jpg";
import moneta8 from "../assets/images/moneta/moneta8.jpg";
import moneta9 from "../assets/images/moneta/moneta9.jpg";
import moneta10 from "../assets/images/moneta/moneta10.jpg";

import kidtyCover from "../assets/images/kidty/kidty.jpg";
import kidty1 from "../assets/images/kidty/kidty1.jpg";
import kidty2 from "../assets/images/kidty/kidty2.jpg";
import kidty3 from "../assets/images/kidty/kidty3.jpg";
import kidty4 from "../assets/images/kidty/kidty4.jpg";
import kidty5 from "../assets/images/kidty/kidty5.jpg";
import kidty6 from "../assets/images/kidty/kidty6.jpg";
import kidty7 from "../assets/images/kidty/kidty7.jpg";

export type ProjectImage = { src: string; alt: string };

const set = (name: string, srcs: string[]): ProjectImage[] =>
  srcs.map((src, i) => ({ src, alt: `${name} — screen ${i + 1}` }));

// Order matters: it maps onto the mosaic slots (wide / square tiles).
export const loopImages: ProjectImage[] = [
  { src: loop1, alt: "Loop — book your favourite sport: search by place, sport type and date" },
  { src: loop9, alt: "Loop — trainer profile with sports, stats and gallery" },
  { src: loop2, alt: "Loop for business — landing page for clubs and trainers" },
  { src: loop7, alt: "Loop mobile — classes for the day, reserved and paid states" },
  { src: loop3, alt: "Loop CRM — booking plan with occupancy per court" },
  { src: loop8, alt: "Loop — class booking: who it's for, price, trainer, cancellation" },
  { src: loop6, alt: "Loop mobile — booking sheet for a class" },
  { src: loop4, alt: "Loop CRM — schedule and prices editor" },
  { src: loop5, alt: "Loop CRM — yearly price timeline per court" },
];
export const loopCover: ProjectImage = loopImages[0];
/** Transparent-background mockups composed on the home card. */
export const loopMockup = {
  device: { src: loop3, alt: "Loop CRM booking plan on a laptop" } as ProjectImage,
  phone: { src: loopPhone, alt: "Loop CRM mobile — classes schedule" } as ProjectImage,
  card: { src: loopCard, alt: "Loop CRM — class details panel" } as ProjectImage,
  backdrop: { src: loop9, alt: "" } as ProjectImage,
  glow: ["#3E5A97", "#5FB5A6"] as [string, string],
  labels: ["Web", "CRM", "Mobile app"],
};

export const monetaImages = set("Moneta", [
  moneta1, moneta2, moneta3, moneta4, moneta5, moneta6, moneta7, moneta8, moneta9, moneta10,
]);
export const monetaCover: ProjectImage = { src: moneta1, alt: "Moneta finance dashboard" };

export const kidtyImages = set("Kidty", [kidty1, kidty2, kidty3, kidty4, kidty5, kidty6, kidty7]);
export const kidtyCoverImage: ProjectImage = { src: kidtyCover, alt: "Kidty data visualization app" };

