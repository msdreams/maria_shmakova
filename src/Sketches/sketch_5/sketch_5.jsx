export const breathingSphere = (p) => {
  let r;

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
    p.strokeWeight(3);
    p.angleMode(p.DEGREES);
  };

  p.draw = () => {
    p.background(0);
    p.orbitControl(4, 4);
    p.stroke(255);

    p.rotateX(90);
    p.rotateX(p.frameCount);

    r = p.width / 5;

    for (let n = 0; n < 180; n += 6) {
      p.beginShape(p.POINTS);
      for (let i = 0; i < 360; i += 6) {
        let w = p.map(p.cos(p.frameCount), -1, 1, 3, 0);
        let h = p.map(p.cos(p.frameCount), -1, 1, 3, 0);

        let x = r * (1 + 0.8 * p.sin(i * w) * p.sin(n * h)) * p.cos(n);
        let y = r * (1 + 0.8 * p.sin(i * w) * p.sin(n * h)) * p.sin(n) * p.sin(i);
        let z = r * (1 + 0.8 * p.sin(i * w) * p.sin(n * h)) * p.sin(n) * p.cos(i);

        p.point(x, y, z);
      }
      p.endShape();
    }
  };
};

export default breathingSphere;