
var monkey, monkey_running;
var banana,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var ground;
var survivalTime = 0;
var gameState = "PLAY";

function preload(){
  
  monkey_running =                        loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
   background("lightgreen");
  
  stroke("purple");
    textSize(20);
    fill("purple");
    survivalTime = survivalTime+Math.round(getFrameRate()/60);
    text("Survival Time: "+ survivalTime,100,50);
    
  
  monkey.collide(ground);
 
  if(ground.x<0){
    ground.x = ground.width/2;
  }  
  
  if(keyDown("space") && monkey.y >= 310){
    monkey.velocityY = -18;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
    
  food();
  obstacles();
  
  drawSprites();
}

function food(){
  if(frameCount%80 === 0){
    banana = createSprite(400,120,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.y = Math.round(random(120,200));
    banana.lifetime = 105;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300 === 0){
    obstacle = createSprite(400,310,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -4;
    obstacle.lifetime = 105;
    obstacleGroup.add(obstacle);
  }
}






