var Space,player,Alien1,Alien2;
var a,life;
var playerlife = 146,bullet;
var bullets = [];
var engine,world,bullet;


function preload(){
 Space = loadImage("a.jpg")
 Railjack = loadImage("Railjack2.png")
 Alienimg1= loadImage("alien-1.png")
 Alienimg2=loadImage("alien-2.png")
 lifeImage=loadImage("lifebar.png")

 
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  // creating engine 
engine = Matter.Engine.create()
  // creating world
  world = engine.world;
  a=createSprite(900,600,1000,400)
  a.addImage("img",Space)
  a.scale=3.95
  
  //player=createSprite(200,600,90,90)
  //player.addImage("railjack",Railjack)
  //player.scale=0.3

  //create Obstace Group
  obstaclesGroup = createGroup();

life = createSprite(150,70)
life.addImage("health",lifeImage)
life.scale=0.55
 
//creating player
player =  new Player(200,600,120,250,360)
//creating one bullet object
 var bullet = new Bullet(player.x,player.y,4,5)

}

function draw() {
  background("#BDA297");
  drawSprites()
  //image(Space,0,0,windowWidth,windowHeight)
 

  
  //if(keyDown("up")){
  //  player.y -= 5.5
  //}
  // if(keyDown("down")){
  //  player.y += 5.5
  //}
  //if(keyDown("left")){
   // player.rotation -= 6
    
  //}
  //if(keyDown("right")){
   // player.rotation += 6
      
  //}
  //if(player.rotation>90){
   // player.rotation -= 0.2
  //}
  //if(player.rotation<210){
    //player.rotation += 0.1
  //}
  //if(player.y > 1175) {
  //  player.y = 1175;
  //}
  if(playerlife>0){
    playerlife -=0.5
  }
  if(playerlife<=0){
    
  }

  
  
  //if (player.y < 100 ) {
   // player.y = 100
  //}
  spawnObstacles();
  this.showLife()
   showBullet();
   player.display()
   bullet.display()
   bullet.shoot();

}

function spawnObstacles(){
  if(frameCount % 60 == 0){
    
    var obstacle = createSprite(2215,random(height),10,40)
    obstacle.scale= 0.35
    obstacle.velocityX -= 7
    //assign lifetime to ships
    obstacle.lifetime = 306;
    if(obstacle.lifetime == 0){
      obstacle.destroy()
    }
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
     var rand = Math.round(random(1,2));
     switch(rand){
       case 1: obstacle.addImage("Alien1",Alienimg1);
       
            break;
      case 2: obstacle.addImage("Alien2", Alienimg2);
     
            break;
            
    default: break;
  }
}
}


function showLife(){
  
  push()
  image(lifeImage,150,70,20,20);
  fill("white")
  rect(138,60,146,28);
  fill("green")
  rect(138,60,playerlife,28)
  noStroke();
pop()  
}

function keyPressed(){
  if(keyDown("space")){
    var bullet = new Bullet(player.x,player.y);
   

  }
}
  
  function showBullet(bullet,index){
   if(bullet){
    bullet.display();
    bullet.animate();
    if(bullet.body.position.x >= width || bullet.body.position.y >= height - 50){
      bullet.remove(index);
    }
   }
  }
  






