import type p5 from "p5";

export type IcosahedronOptions = {
  stroke?: string;
  size?: number;
  strokeWeight?: number;
};

/**
 * Rotating wireframe icosahedron with orbit control (drag to rotate, wheel to
 * zoom). Transparent background so a CSS glow can sit behind it.
 */
export const createIcosahedron = ({ stroke = "#111111", size = 360, strokeWeight = 1.2 }: IcosahedronOptions = {}) =>
  (p: p5) => {
    const scaleFactor = size / 3.6;
    let verts: number[][] = [];
    let faces: number[][] = [];

    p.setup = () => {
      p.createCanvas(size, size, p.WEBGL);
      p.cursor("grab");
      p.angleMode(p.DEGREES);
      const phi = 0.5 * (1 + Math.sqrt(2));
      verts = [
        [phi, 1, 0], [phi, -1, 0], [-phi, -1, 0], [-phi, 1, 0],
        [1, 0, phi], [-1, 0, phi], [-1, 0, -phi], [1, 0, -phi],
        [0, phi, 1], [0, phi, -1], [0, -phi, -1], [0, -phi, 1],
      ].map((v) => v.map((n) => n * scaleFactor));
      faces = [
        [0, 7, 1], [0, 9, 7], [0, 8, 9], [0, 4, 8], [0, 1, 4],
        [5, 8, 4], [4, 5, 11], [11, 4, 1], [1, 11, 10], [10, 1, 7],
        [7, 10, 6], [6, 7, 9], [9, 6, 3], [3, 9, 8], [8, 3, 5],
        [2, 5, 3], [2, 11, 5], [2, 10, 11], [2, 6, 10], [2, 3, 6],
      ];
    };

    const hasCanvas = () => Boolean((p as unknown as { canvas?: HTMLCanvasElement }).canvas);
    const inside = () => p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height;
    // handlers fire for the whole window; bail out if the canvas doesn't exist yet
    p.mousePressed = () => {
      if (hasCanvas() && inside()) p.cursor("grabbing");
    };
    p.mouseReleased = () => {
      if (hasCanvas()) p.cursor("grab");
    };

    p.draw = () => {
      p.clear(0, 0, 0, 0);
      p.noFill();
      p.stroke(stroke);
      p.strokeWeight(strokeWeight);
      p.orbitControl(1, 1, 0.1);
      const wave = p.map(p.sin(p.frameCount), -1, 1, 3, 0);
      p.rotateX(p.frameCount * 0.2);
      for (const f of faces) {
        p.push();
        p.rotateX(wave);
        p.beginShape();
        for (const i of f) p.vertex(verts[i][0], verts[i][1], verts[i][2]);
        p.endShape(p.CLOSE);
        p.pop();
      }
    };
  };

export const sectionIcosahedron = createIcosahedron();
export const sectionIcosahedronSmall = createIcosahedron({ size: 280 });
