class Box{
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.width = 30;
      this.height = 40;
      this.body = Bodies.rectangle(x,y,30,40,{isStatic:false})
      World.add(world,this.body)
    }
    display(){
       var boxpos = this.body.position
       rectMode(CENTER)
       rect(boxpos.x,boxpos.y,30,40)
    }
}