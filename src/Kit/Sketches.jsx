import Sketch1 from "../Sketches/sketch_1/sketch_1";
import { Sketch2 } from "../Sketches/sketch_2/sketch_2";
import { Sketch3 } from "../Sketches/sketch_3/sketch_3";
import Sketch4 from "../Sketches/sketch_4/sketch_4";
import breathingSphere from "../Sketches/sketch_5/sketch_5";
import mandrian from "../Sketches/sketch_6/sketch_6";
import dotWave from "../Sketches/sketch_7/sketch_7";
import animatedLines from "../Sketches/sketch_8/sketch_8";
import walkingCircle from "../Sketches/sketch_9/sketch_9";
import movementOfDots from "../Sketches/sketch_10/sketch_10";
import TilePattern from "../Sketches/sketch_11/sketch_11";
import SistemsGrid from "../Sketches/sketch_12/sketch_12";




import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import breathing from "../assets/images/breathing.jpg";
import mandrianImg from "../assets/images/mandrian.jpg";
import dotWaveImg from "../assets/images/dotWave.jpg";
import animatedLinesImg from "../assets/images/animatedLines.jpg";
import walkingCircleImg from "../assets/images/walkingCircle.jpg";
import movementOfDotsImg from "../assets/images/movementOfDots.jpg";
import TilePatternImg from "../assets/images/Random_triangles.jpg";
import SistemsGridImg from "../assets/images/Sistems_grid.jpg";


export const sketches = [
  { id: "sketch1", component: Sketch1, img: image1 },
  { id: "sketch2", component: Sketch2, img: image2  },
  { id: "sketch3", component: Sketch3, img: image3  },
  { id: "sketch4", component: Sketch4, img: image4  },
  { id: "breathingSphere", component: breathingSphere, img: breathing },
  { id: "mandrian", component: mandrian, img: mandrianImg },
  { id: "dotWave", component: dotWave, img: dotWaveImg  },
  { id: "animatedLines", component: animatedLines, img: animatedLinesImg },
  { id: "walkingCircle", component: walkingCircle, img: walkingCircleImg },
  { id: "movementOfDots", component: movementOfDots, img: movementOfDotsImg },
  { id: "TilePattern", component: TilePattern, img: TilePatternImg },
  { id: "SistemsGrid", component: SistemsGrid, img: SistemsGridImg },


];
