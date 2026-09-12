import type p5 from "p5";
import { Sketch2 } from "../Sketches/sketch_2/sketch_2";
import { Sketch3 } from "../Sketches/sketch_3/sketch_3";
import breathingSphere from "../Sketches/sketch_5/sketch_5";
import mandrian from "../Sketches/sketch_6/sketch_6";
import dotWave from "../Sketches/sketch_7/sketch_7";
import animatedLines from "../Sketches/sketch_8/sketch_8";
import walkingCircle from "../Sketches/sketch_9/sketch_9";
import movementOfDots from "../Sketches/sketch_10/sketch_10";
import TilePattern from "../Sketches/sketch_11/sketch_11";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import breathing from "../assets/images/breathing.jpg";
import mandrianImg from "../assets/images/mandrian.jpg";
import dotWaveImg from "../assets/images/dotWave.jpg";
import animatedLinesImg from "../assets/images/animatedLines.jpg";
import walkingCircleImg from "../assets/images/walkingCircle.jpg";
import movementOfDotsImg from "../assets/images/movementOfDots.jpg";
import tilePatternImg from "../assets/images/Random_triangles.jpg";

export type SketchFn = (p: p5) => void;

export interface Sketch {
  id: string;
  title: string;
  hint?: string;
  component: SketchFn;
  img: string;
}

export const sketches: Sketch[] = [
  { id: "letter-m", title: "Letter M", hint: "click to toggle", component: Sketch2, img: image2 },
  { id: "box-grid", title: "Box Grid", hint: "move the mouse, click to orbit", component: Sketch3, img: image3 },
  { id: "breathing-sphere", title: "Breathing Sphere", hint: "drag to rotate", component: breathingSphere, img: breathing },
  { id: "mondrian", title: "Mondrian Waves", component: mandrian, img: mandrianImg },
  { id: "dot-wave", title: "Dot Wave", hint: "drag to rotate", component: dotWave, img: dotWaveImg },
  { id: "animated-lines", title: "Animated Lines", component: animatedLines, img: animatedLinesImg },
  { id: "walking-circle", title: "Walking Circle", component: walkingCircle, img: walkingCircleImg },
  { id: "movement-of-dots", title: "Movement of Dots", component: movementOfDots, img: movementOfDotsImg },
  { id: "tile-pattern", title: "Tile Pattern", component: TilePattern, img: tilePatternImg },
];
