const animatedLines = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(0);
    p.stroke(255);
    
    let side = p.width / 10;
    let step = p.height / 10;
    let padding = side;
    let wave2 = p.map(p.cos(p.radians(p.frameCount)), -1, 1, -side, side);
    
    for (let i = padding; i < (p.width - 1.8 * padding); i += step) {
      for (let j = padding; j < (p.height - padding); j += step) {
        p.push();
        p.line(i, j + wave2, i + side, j);
        p.line(i + side, j, i + side, j + side - wave2);
        p.line(i, j + side, i + side, j + side - wave2);
        p.line(i + wave2, j, i, j + side);
        p.pop();
      }
    }
  };
};

export default animatedLines;
