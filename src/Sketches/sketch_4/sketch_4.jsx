export const Sketch4 = (p) => {
  let objs = [];
  const MAX = 360;
  let isOrbitControlEnabled = false;

  class MyObject {
    constructor(d) {
      this.d = d;
      this.dx = d;
      this.r = 100;
      this.s = p.width / 10;
      this.anime = 0;
      this.animeSpeed = 0.001;
    }

    update() {
      this.anime += this.animeSpeed;
      this.dx = (this.dx + 1) % 360;

      this.x = p.cos(this.d) * this.r;
      this.y = p.sin(this.d) * this.r;
      this.z = 0;

      if (this.anime > 1) {
        this.anime = 0;
      }
    }

    display() {
      p.push();
      p.rotateZ(this.d);
      p.translate(0, this.r, 0);
      p.translate(0, this.r, 0);
      p.rotateX(this.dx);

      p.noStroke();
      p.fill(255);
      p.normalMaterial();
      p.box(5, this.s, this.s);

      p.pop();
    }
  }

  const initData = () => {
    objs = [];
    for (let i = 0; i < MAX; i++) {
      objs.push(new MyObject(i));
    }
  };

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
    p.background(0);
    p.angleMode(p.DEGREES);
    initData();
    p.cursor(p.HAND);
  };

  p.draw = () => {
    p.background(0);
    if (isOrbitControlEnabled) {
      p.orbitControl(1, 1, 0);
    }
    p.ambientLight(60);
    p.pointLight(255, 255, 255, p.width / 3, 40, 50);

    for (const obj of objs) {
      obj.update();
      obj.display();
    }
  };

  p.mousePressed = () => {
    isOrbitControlEnabled = !isOrbitControlEnabled;
  };
};

export default Sketch4;

