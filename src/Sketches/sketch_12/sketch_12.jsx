const SistemsGrid = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(2);
    p.ellipseMode(p.CORNER);
  };

  p.draw = () => {
    p.background(28, 22, 120);
    p.fill(133, 118, 255);
    p.noStroke();
    let tilesX = 24;
    let tilesY = 24;
    let tileW = p.width / tilesX;
    let tileH = tileW;

    for (let x = 0; x < tilesX; x++) {
      for (let y = 0; y < tilesY; y++) {
        p.push();

        p.translate(x * tileW, y * tileH);

        let selector = p.int(p.random(6));

        if (selector === 0) {
          p.rect(0, 0, tileW, tileH);
        } else if (selector === 1) {
          p.fill(123, 201, 255);
          p.ellipse(0, 0, tileW, tileH);
        } else if (selector === 2) {
          p.fill(0, 50, 114);
          p.rect(0, 60, tileW * x, tileH * x);
        } else if (selector === 3) {
          poligon(0, tileH, tileW, tileH);
        }

        p.pop();
      }
    }
  };

  function poligon(a, b, w, h) {
    p.translate(a, b);
    p.push();
    p.noFill();
    p.stroke(163, 255, 214);
    p.beginShape();
    p.vertex(0, 0);
    p.vertex(0, -h);
    p.vertex(-w / 1.5, 0);
    p.endShape(p.CLOSE);
    p.pop();
  }
};

export default SistemsGrid;
