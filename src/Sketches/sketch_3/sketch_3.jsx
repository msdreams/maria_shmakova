export const Sketch3 = (p) => {
  const boxSize = 40;
  const gap = 100;
  const boxes = [];
  let isOrbitControlEnabled = false;


  for (let x = -150; x < 150; x += boxSize + 10) {
    for (let y = -150; y < 150; y += boxSize + 10) {
      for (let z = -150; z < 150; z += boxSize + 10) {
        boxes.push({ x, y, z });
      }
    }
  }

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
    p.rectMode(p.CENTER);
    p.cursor(p.HAND);
  };

  p.draw = () => {
    p.background(0);
    if (isOrbitControlEnabled) {
      p.orbitControl(1, 1, 0);
    }
    p.rotateY(p.frameCount * 0.01);

    for (let box of boxes) {
      const distance = p.dist(p.mouseX - p.width / 2, p.mouseY - p.height / 2, box.x, box.y);
      const isHovered = distance < boxSize;

      const offset = isHovered ? gap : 0;
      p.push();
      p.translate(box.x + offset, box.y + offset, box.z + offset);
      p.fill(0, p.random(0, 255), 200);
      p.box(boxSize);
      p.pop();
    }
  };

  p.mousePressed = () => {
    isOrbitControlEnabled = !isOrbitControlEnabled;
  };
};

export default Sketch3;
