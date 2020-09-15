
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivaltime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  ground = createSprite(290,410,600,5);
  
  monkey = createSprite(50,360,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.15;
  
 score = 0;
  bananaGroup = new Group();
}


function draw() {
 background("white")
 
if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12;
       
    }
  score = score+ Math.round(getFrameRate()/60);
  
 monkey.velocityY = monkey.velocityY + 0.8
  obsG();
  bananaG();
  monkey.collide(ground);
  text("Survival Time: "+ score, 200,50);
  drawSprites();
  
}
function obsG(){
  if (frameCount % 300 === 0){
  obstacle = createSprite(250,380,20,50);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.19;
  obstacle.velocityX = -2;
  }
}
function bananaG(){
  if (frameCount % 80 === 0){
  banana = createSprite(250,200,20,50);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -2;
  bananaGroup.add(banana);
  } 
  
}




