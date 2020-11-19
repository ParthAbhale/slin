class Player{
    constructor(x,y){


      var options = {
        isStatic:false,
        restitution:0,
        density:1,
        friction:1.2
      }

       this.x = x;
       this.y = y;
       this.r = 20;
       this.body = Bodies.circle(x,y,20,options)
       World.add(world,this.body)
    }
    display(){
      var pos = this.body.position
      var angle = this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      ellipseMode(RADIUS)
      ellipse(pos.x,pos.y,20,20) 
      pop()
    }
}