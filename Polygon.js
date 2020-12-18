class Polygon extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("polygon.png");
  }

  display() {

var pos=this.body.position; 
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    
imageMode(CENTER);
    image(this.image,pos.x, pos.y,100,100)
  }
}
