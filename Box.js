//    this.body = Bodies.rectangle(x, y, width, height, options);


class Box extends Baseclass {
  constructor(x,y, width, height) {
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }
};
