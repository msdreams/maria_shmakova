export const Sketch1 = (p) => {
  let isResized = false;
  let size;

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight, 600);
    p.background(29, 32, 36);
    p.cursor(p.HAND);
  };

  p.draw = () => {
    p.background(0, 0, 0, 3);
    if (isResized) {
      p.background("#1d2024");
      isResized = false;
    }
    p.stroke(0)
    if (p.mouseIsPressed) {
      size = 300
    } else {
      size = 50
    }
    p.fill("#61dafb")

    p.ellipse(p.mouseX, p.mouseY, size, size);
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, 600);
    isResized = true;
  };
};

export default Sketch1;
