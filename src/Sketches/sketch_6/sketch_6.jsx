const mandrian = (p) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.angleMode(p.DEGREES);
    p.background(0);
  };

  p.draw = () => {
    p.background(0);
    p.stroke(255);
    p.fill(0);

    p.beginShape();
    for (let i = 0; i < 359; i += 360 / 10) {
      for (let j = 0; j < 359; j += 360 / 10) {
        const wave3 = p.map(p.cos(p.frameCount * 0.5), -1, 1, i, -i);

        const r = 300;
        const x = r * p.cos(i - wave3);
        const y = r * p.sin(j + wave3);

        p.vertex(x + p.windowWidth / 2, y + p.windowHeight / 2);
        p.circle(x + p.windowWidth / 2, y + p.windowHeight / 2, 10);
      }
    }
    p.endShape(p.CLOSE);
  };

  p.keyPressed = () => {
    if (p.key === 's') {
      p.saveGif('mySketch', 6);
    }
  };
};

export default mandrian;

