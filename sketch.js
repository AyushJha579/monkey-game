
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var survivaltime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(400,400);
  
  monkey= createSprite(80,330,20,30);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale= 0.1;
  
  ground= createSprite(400,350,900,10);
  ground.velocityX= -4;
  ground.x= ground.width/2;
  
  bananaGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
  background("white");
  
  if(ground.x<0){
     ground.x= ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+4;
  
  monkey.collide(ground);
  
   spawnbanana();
   spawnObstacle();
  
  drawSprites();
  
  if(monkey.isTouching(obstacleGroup)){
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
    monkey.velocityY=0;
    ground.velocityY=0;
  }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate())
  text("survivalTime: "+survivalTime,100,50);
}


function spawnbanana(){
  if (frameCount % 80 === 0){
    var banana= createSprite(600,250,10,10);
     banana.y = Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.scale= 0.1;
     banana.velocityX=-4;
     banana.lifetime= 150;
    
      bananaGroup.add(banana);
  }
}
  
function spawnObstacle(){
   if (frameCount % 300 === 0){
   var obstacle = createSprite(600,320,10,40);
    obstacle.velocityX = -6;
    obstacle.lifetime=150; 
    obstacle.addImage(obstacleImage);
    obstacle.scale= 0.1;
    
     obstacleGroup.add(obstacle);
  }
}




