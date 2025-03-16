
export const Banner = (p) => {
  let side, step, gap, padding;

  p.setup = () => {
    p.createCanvas(p.windowWidth, 600);
    side = p.width / 100;
    step = p.width / 50;
    gap = step - side;
    padding = side;
    p.background(40, 44, 52);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, 600);
  };

  p.draw = () => {
    p.background(40, 44, 52);
    p.noStroke();

    for (let i = padding + gap; i < p.width - gap; i += step) {
      for (let j = padding + gap; j < p.height - gap; j += step) {
        p.push();
        p.translate(i, j);
        let s = p.dist(p.width / 2, p.height / 2, i, j) / 15;
        let wave2 = p.sin(p.radians(p.frameCount)) * step;
        let wave3 = p.cos(p.radians(p.frameCount)) * step;

        p.noStroke();
        p.fill("#2C4359");
        p.rectMode(p.CENTER);
        p.rect(0, 0, s + wave2 - 30, s + wave3 - 30);
        p.pop();
      }
    }
  };
}

export default Banner;