export const Gexagedron = (p) => {
  let phi, verts, faces;
  const scaleFactor = 100;

  p.setup = () => {
    p.createCanvas(360, 360, p.WEBGL);
    phi = 0.5 * (1 + Math.sqrt(2));
    verts = [
      [phi, 1, 0], [phi, -1, 0], [-phi, -1, 0], [-phi, 1, 0],
      [1, 0, phi], [-1, 0, phi], [-1, 0, -phi], [1, 0, -phi],
      [0, phi, 1], [0, phi, -1], [0, -phi, -1], [0, -phi, 1]
    ];

    for (let i = 0; i < verts.length; i++) {
      for (let j = 0; j < 3; j++) {
        verts[i][j] *= scaleFactor;
      }
    }
    faces = [
      [0, 7, 1], [0, 9, 7], [0, 8, 9], [0, 4, 8], [0, 1, 4],
      [5, 8, 4], [4, 5, 11], [11, 4, 1], [1, 11, 10], [10, 1, 7],
      [7, 10, 6], [6, 7, 9], [9, 6, 3], [3, 9, 8], [8, 3, 5],
      [2, 5, 3], [2, 11, 5], [2, 10, 11], [2, 6, 10], [2, 3, 6]
    ];

    p.angleMode(p.DEGREES);
  };

  p.draw = () => {
    p.noFill();
    p.strokeWeight(1.5);
    p.background(255, 0);
    p.stroke("#FF7300");

    const wave1 = p.map(p.sin(p.frameCount), -1, 1, 3, 0);
    p.translate(0, 0, 0);

    p.rotateX(p.frameCount * 0.2);
    for (let i = 0; i < faces.length; i++) {
      const f = faces[i];
      const p0 = verts[f[0]];
      const p1 = verts[f[1]];
      const p2 = verts[f[2]];

      p.push();
      p.rotateX(wave1);
      p.beginShape();
      p.vertex(p0[0], p0[1], p0[2]);
      p.vertex(p1[0], p1[1], p1[2]);
      p.vertex(p2[0], p2[1], p2[2]);
      p.endShape(p.CLOSE);
      p.pop();
    }
  };
};

export default Gexagedron;