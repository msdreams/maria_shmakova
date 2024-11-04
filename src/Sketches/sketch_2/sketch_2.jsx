export const Sketch2 = (p) => {
  let angle = 0;
  let showM = true;
  const updateInterval = 20;
  let frameCounter = 0; 
  let selector; 

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
    p.rectMode(p.CENTER);
    p.cursor(p.HAND);
    p.noStroke();
  };

  p.draw = () => {
    p.background(0);
    angle += p.radians(0.5);
    p.rotateY(angle);
    p.translate(-p.width / 2, -p.height / 2);

    if (Math.abs(angle % p.HALF_PI) < 0.01) {
      showM = !showM;
    }

    if (frameCounter % updateInterval === 0) {
      selector = Math.floor(p.random(4));
    }

    frameCounter++;

    if (showM) {
      drawM(p, window.innerWidth / 2 - 150, 150, 60);
    } else {
      for (let i = 200; i < p.width - 200; i += 100) {
        for (let j = 120; j < p.height - 100; j += 100) {
          drawM(p, i, j, 15);
        }
      }
    }
  };

  const drawM = (p, startingPointX, startingPointY, w) => {
    const gap = w / 20;
    const step = w + gap;
    const letterHeight = step * 4;
    const letterWidth = step * 4;
    const endingPointY = startingPointY + letterHeight;
    const endingPointX = startingPointX + letterWidth;

    for (let i = startingPointY; i <= endingPointY; i += step) {
      p.push();
      p.translate(startingPointX, i);
      drawShape(p, selector, w);
      p.pop();
    }

    p.ellipse(startingPointX + step, startingPointY + step, w, w);
    p.push();
    p.translate(startingPointX + step * 2, startingPointY + step * 2);
    p.rotate(angle);
    p.rect(0, 0, w, w, 0, 50);
    p.pop();
    p.rect(startingPointX + step * 3, startingPointY + step, w, w);

    for (let j = startingPointY; j <= endingPointY; j += step) {
      p.push();
      p.translate(endingPointX, j);
      drawShape(p, selector, w);
      p.pop();
    }
  };

  const drawShape = (p, selector, w) => {
    switch (selector) {
      case 0:
        p.ellipse(0, 0, w, w);
        break;
      case 1:
        p.rect(0, 0, w, w);
        break;
      case 2:
        polygon(p, 0, 0, w / 2, 3);
        break;
      default:
        polygon(p, 0, 0, w / 2, 6);
        break;
    }
  };

  const polygon = (p, x, y, radius, npoints) => {
    const angle = p.TWO_PI / npoints;
    p.beginShape();
    for (let a = 0; a < p.TWO_PI; a += angle) {
      const sx = x + p.cos(a) * radius;
      const sy = y + p.sin(a) * radius;
      p.vertex(sx, sy);
    }
    p.endShape(p.CLOSE);
  };

  p.mousePressed = () => {
    showM = !showM;
  };
};

export default Sketch2;
