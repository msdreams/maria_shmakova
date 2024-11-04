const movementOfDots = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.noStroke();

    let side = p.width / 40;
    let step = p.width / 20;
    let gap = step - side;
    let padding = side + gap;

    for (let i = padding; i < p.width - gap; i += step) {
      for (let j = padding; j < p.height - gap; j += step) {
        p.push();
        p.translate(i, j);
        let wavei = p.map(p.cos(p.radians(p.frameCount)), -1, 1, j, i);
        let wave4 = p.map(p.sin(p.radians(wavei * 3)), -1, 1, -20, 20);
        p.noStroke();
        p.fill(255);
        p.ellipse(0, 0, 6 + wave4 / 2, 6 + wave4 / 2);
        p.noFill();
        p.stroke(0);
        p.pop();
      }
    }
  };
};

export default movementOfDots;
