class Paper{
constructor(x,y){
    var options={
         isStatic:false,
         restitution:0.3,
         friction:0,
         density:1
    }
    this.image=loadImage("paper.png")
    this.body=Bodies.rectangle(x,y,60,60,options)
    this.width = 60;
    this.height = 60;
    World.add(world,this.body)
}
display(){
     push()
     var angle = this.body.angle;
     var pos = this.body.position;
     translate(pos.x, pos.y);
     rotate(angle)   
     //strokeWeight(4);
     fill("white")
     imageMode(CENTER)
     image(this.image,0,0,this.width,this.height);
     pop()
     }

}