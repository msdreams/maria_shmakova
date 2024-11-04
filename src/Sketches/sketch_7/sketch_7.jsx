const dotWave = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.noStroke();
    p.angleMode(p.DEGREES);
  };

  p.draw = () => {
    p.background(0);
    p.orbitControl(4, 4);
    p.stroke(255);

    for (let n = 0; n < 180; n += 4) {
      p.rotate(90);
      p.beginShape();
      for (let i = 0; i < 359; i += 4) {
        const wave = p.map(p.cos(p.frameCount + n), -1, 1, -n, n);
        const r = 250;

        const x = (r + wave) * p.cos(n);
        const y = (r - wave) * p.sin(n) * p.sin(i);
        const z = r * p.sin(n) * p.cos(i);

        p.point(x, y, z);
      }
      p.endShape();
    }
  };
};

export default dotWave;

