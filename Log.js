//Matter.Body.setAngle(this.body, angle);
//this.body = Bodies.rectangle(x, y, 20, height, options);


class Log extends Baseclass{
    constructor(x, y, height, angle) {
      super(x,y,20,height,angle)
      this.image = loadImage("sprites/wood2.png")
      Matter.Body.setAngle(this.body, angle);
    }
  };
  