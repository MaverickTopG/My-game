class Player{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.player = loadImage("Railjack2.png")

    } 
   
    display(){
        if(keyDown("right")&& this.angle<180){
            this.angle += 2;
        }
        if(keyDown("left")&& this.angle>-180){
            this.angle -= 2;
        }

    push();
    translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.player,0,0,this.width,this.height);
    pop();
    }
}