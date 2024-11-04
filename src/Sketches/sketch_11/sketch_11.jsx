const TilePattern = (p) => {
  let tilesX = 5;
  let tilesY = 5;
  let tileW;
  let tileH;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
    p.frameRate(2);
  };

  p.draw = () => {
    p.background(255);
    p.noStroke();
    tileW = p.width / tilesX;
    tileH = p.height / tilesY;

    for (let x = 0; x < tilesX; x++) {
      for (let y = 0; y < tilesY; y++) {
        let cellLeft = tileW * x;
        let cellTop = tileH * y;
        p.push();
        p.translate(cellLeft + tileW / 2, cellTop + tileH / 2);
        logo(x);
        p.pop();
      }
    }
  };

  function logo(n) {
    p.push();
    p.noStroke();
    p.fill(0);
    p.rect(0, 0, tileW, tileH);

    p.noFill();
    p.stroke(255);
    p.rect(0, 0, tileW, tileH);

    p.translate(-tileW / 10, tileH / 2);
    p.blendMode(p.DIFFERENCE);
    p.noStroke();
    poligon(n);
    p.pop();
  }

  function poligon(q) {
    p.push();
    p.fill(255);
    p.beginShape();
    p.vertex(p.random(100, -100), p.random(100, -100));
    p.vertex(p.random(100, -100), p.random(-tileH / 3.5, -tileH / 1.9));
    p.vertex(-tileW / 7.5, p.random(100, -100));
    p.endShape(p.CLOSE);

    p.pop();
  }
};

export default TilePattern;


