const walkingCircle = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.angleMode(p.DEGREES);
    p.rectMode(p.CENTER);
    p.frameRate(60);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(0);
    p.fill(0);
    p.stroke(255);
    p.strokeWeight(1.5);

    p.translate(p.width / 2 - 10, p.height / 2);
    let wave1 = p.map(p.cos(p.frameCount), -1, 1, 0, p.width / 12);

    for (let i = 0; i < p.width * 0.21; i += 5) {
      let wave2 = p.map(p.sin(p.frameCount * 2), -1, 1, 0, i);
      let wave3 = p.map(wave2, 0, 200, -20, 20);

      p.push();
      p.rotate(p.sin(p.frameCount * 4 + i) * 100);

      p.ellipse(
        wave1,
        wave3,
        p.width * 0.63 - i * 2 - wave2,
        p.width * 0.63 - i * 2 - wave2
      );
      p.pop();
    }
  };
};

export default walkingCircle;
