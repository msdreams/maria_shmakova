import type p5 from "p5";

export type IcosahedronOptions = {
  stroke?: string;
  size?: number;
  strokeWeight?: number;
  /** When set, a band of these colours sweeps over the wireframe on click / idle spins. */
  palette?: string[];
  /** Length of one colour sweep in ms. */
  sweepMs?: number;
};

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (2 * (1 - t)) ** 2 / 2);
const randAngle = () => Math.random() * 360 - 180;
const DRAG_PX = 5;
const TWEEN_MS = 700;
const HOVER_SCALE = 1.14;
const IDLE_MIN = 2800;
const IDLE_MAX = 6200;

/**
 * Wireframe icosahedron. Hover zooms it; a click — or a pause of a few
 * seconds — eases to a random pose; a drag orbits freely. Transparent
 * background so a CSS glow can sit behind it.
 */
export const createIcosahedron = ({ stroke = "#111111", size = 360, strokeWeight = 1.2, palette, sweepMs = 1500 }: IcosahedronOptions = {}) =>
  (p: p5) => {
    const scaleFactor = size / 3.6;
    let verts: number[][] = [];
    let faces: number[][] = [];

    let rotX = -18;
    let rotY = 28;
    let rotZ = 0;
    let zoom = 1;

    let pressInside = false;
    let dragged = false;
    let lastX = 0;
    let lastY = 0;

    let tween: { from: [number, number, number]; to: [number, number, number]; t: number } | null = null;
    let ramp: p5.Color[] = [];
    let ink: p5.Color;
    // 0..1 while a colour band travels across the shape; -1 when idle
    let sweep = -1;

    // colour at position t (0..1) along the open palette ramp
    const rampColor = (t: number) => {
      const n = ramp.length - 1;
      const x = Math.min(Math.max(t, 0), 1) * n;
      const i = Math.min(Math.floor(x), n - 1);
      return p.lerpColor(ramp[i], ramp[i + 1], x - i);
    };
    let idleIn = IDLE_MIN + Math.random() * (IDLE_MAX - IDLE_MIN);

    const resetIdle = () => {
      idleIn = IDLE_MIN + Math.random() * (IDLE_MAX - IDLE_MIN);
    };

    const spinToRandom = () => {
      if (ramp.length) sweep = 0;
      tween = {
        from: [rotX, rotY, rotZ],
        to: [rotX + randAngle(), rotY + randAngle(), rotZ + randAngle() * 0.5],
        t: 0,
      };
      resetIdle();
    };

    p.setup = () => {
      p.createCanvas(size, size, p.WEBGL);
      p.cursor("pointer");
      p.angleMode(p.DEGREES);
      if (palette && palette.length > 1) ramp = palette.map((c) => p.color(c));
      ink = p.color(stroke);
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

    const beginPress = () => {
      if (!hasCanvas() || !inside()) return;
      pressInside = true;
      dragged = false;
      lastX = p.mouseX;
      lastY = p.mouseY;
      p.cursor("grabbing");
    };

    const movePress = () => {
      if (!pressInside || !hasCanvas()) return;
      const dx = p.mouseX - lastX;
      const dy = p.mouseY - lastY;
      if (!dragged && Math.hypot(dx, dy) < DRAG_PX) return;
      dragged = true;
      tween = null;
      resetIdle();
      rotY += dx * 0.55;
      rotX -= dy * 0.55;
      lastX = p.mouseX;
      lastY = p.mouseY;
    };

    const endPress = () => {
      if (!hasCanvas()) return;
      p.cursor(inside() ? "pointer" : "default");
      if (pressInside && !dragged) spinToRandom();
      pressInside = false;
      dragged = false;
    };

    p.mousePressed = beginPress;
    p.mouseDragged = movePress;
    p.mouseReleased = endPress;

    p.draw = () => {
      p.clear(0, 0, 0, 0);
      p.noFill();
      p.stroke(stroke);
      p.strokeWeight(strokeWeight);

      if (!pressInside && hasCanvas()) p.cursor(inside() ? "pointer" : "default");

      if (tween) {
        tween.t = Math.min(1, tween.t + p.deltaTime / TWEEN_MS);
        const k = easeInOut(tween.t);
        rotX = tween.from[0] + (tween.to[0] - tween.from[0]) * k;
        rotY = tween.from[1] + (tween.to[1] - tween.from[1]) * k;
        rotZ = tween.from[2] + (tween.to[2] - tween.from[2]) * k;
        if (tween.t >= 1) {
          tween = null;
          resetIdle();
        }
      } else if (!pressInside) {
        idleIn -= p.deltaTime;
        if (idleIn <= 0) spinToRandom();
      }

      const want = inside() || pressInside ? HOVER_SCALE : 1;
      zoom += (want - zoom) * 0.12;
      p.scale(zoom);

      p.rotateX(rotX);
      p.rotateY(rotY);
      p.rotateZ(rotZ);

      const wave = p.map(p.sin(p.frameCount), -1, 1, 3, 0);

      // colour band: a soft window that moves top → bottom over the faces, like the title sweep
      const BAND = 0.45;
      if (sweep >= 0) {
        sweep += p.deltaTime / sweepMs;
        if (sweep > 1) sweep = -1;
      }
      const center = sweep >= 0 ? sweep * (1 + 2 * BAND) - BAND : -10;

      for (let fi = 0; fi < faces.length; fi++) {
        const f = faces[fi];
        if (sweep >= 0) {
          // faces are listed roughly top → bottom
          const t = fi / (faces.length - 1);
          const w = Math.max(0, 1 - Math.abs(t - center) / BAND);
          const k = w * w * (3 - 2 * w); // smoothstep
          p.stroke(p.lerpColor(ink, rampColor(t), k));
          p.strokeWeight(strokeWeight + k * 0.8);
        }
        p.push();
        p.rotateX(wave);
        p.beginShape();
        for (const i of f) p.vertex(verts[i][0], verts[i][1], verts[i][2]);
        p.endShape(p.CLOSE);
        p.pop();
      }
    };
  };

const accentPalette = ["#FF6B6B", "#A66CFF", "#5DD3FF"];

export const sectionIcosahedron = createIcosahedron({ palette: accentPalette });
export const sectionIcosahedronSmall = createIcosahedron({ size: 280, palette: accentPalette });
