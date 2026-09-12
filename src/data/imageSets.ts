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

import phonesCover from "../assets/images/phoneCatalog/phoneCatalog.jpg";
import phones1 from "../assets/images/phoneCatalog/phones1.jpg";
import phones2 from "../assets/images/phoneCatalog/phones2.jpg";
import phones3 from "../assets/images/phoneCatalog/phones3.jpg";
import phones4 from "../assets/images/phoneCatalog/phones4.jpg";
import phones5 from "../assets/images/phoneCatalog/phones5.jpg";
import phones6 from "../assets/images/phoneCatalog/phones6.jpg";
import phones7 from "../assets/images/phoneCatalog/phones7.jpg";

import potsCover from "../assets/images/portPots/potr-pots.jpg";
import pots1 from "../assets/images/portPots/pots1.jpg";
import pots2 from "../assets/images/portPots/pots2.jpg";
import pots3 from "../assets/images/portPots/pots3.jpg";
import pots4 from "../assets/images/portPots/pots4.jpg";
import pots5 from "../assets/images/portPots/pots5.jpg";
import pots6 from "../assets/images/portPots/pots6.jpg";
import pots7 from "../assets/images/portPots/pots7.jpg";

export type ProjectImage = { src: string; alt: string };

const set = (name: string, srcs: string[]): ProjectImage[] =>
  srcs.map((src, i) => ({ src, alt: `${name} — screen ${i + 1}` }));

export const monetaImages = set("Moneta", [
  moneta1, moneta2, moneta3, moneta4, moneta5, moneta6, moneta7, moneta8, moneta9, moneta10,
]);
export const monetaCover: ProjectImage = { src: moneta1, alt: "Moneta finance dashboard" };

export const kidtyImages = set("Kidty", [kidty1, kidty2, kidty3, kidty4, kidty5, kidty6, kidty7]);
export const kidtyCoverImage: ProjectImage = { src: kidtyCover, alt: "Kidty data visualization app" };

export const phonesImages = set("Phone catalog", [
  phones1, phones2, phones3, phones4, phones5, phones6, phones7,
]);
export const phonesCoverImage: ProjectImage = { src: phonesCover, alt: "Phone catalog online store" };

export const potsImages = set("Potr Pots", [pots1, pots2, pots3, pots4, pots5, pots6, pots7]);
export const potsCoverImage: ProjectImage = { src: potsCover, alt: "Potr Pots landing page" };
