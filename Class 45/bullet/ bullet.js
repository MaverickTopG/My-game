class Bullet {
constructor(x,y){
var options = {
    isStatic : true
}





this.r = 30
this.speed = 0.05;
this.body = Matter.Bodies.circle(x,y,this.r,options);
this.image = loadImage("Bullet.gif");
Matter.World.add(world,this.body)

    }



shoot(){
var newAngle = player.angle - 20;
newAngle = newAngle*(3.14/180)
var velocity = p5.Vector.fromAngle(newAngle);
velocity.multi(0.5);
Matter.Body.setStatic(this.body,false);
Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y * (180/3.14)});
}

display(){
    var angle = this.body.angle;
    var pos = this.body.position;
   

    push()
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();

}
remove(index){

    Matter.Body.setVelocity(this.body,{x:0,y:0})
   Matter.World.remove(world.this.body)
   delete balls(index)


    }
  } 



 


