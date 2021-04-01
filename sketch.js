var ghost,ghostJumpingImg,ghostStandingImg
var door,doorImg
var tower,towerImg
var climber,climberImg
var invisibleClimber
var doorGrp,climberGrp,invisibleGrp;
var gameState="PLAY"
var spookySound
//Preload function

function preload(){
  ghostJumpingImg=loadImage("ghost-jumping.png");
  ghostStandingImg=loadImage("ghost-standing.png");
  doorImg=loadImage("door.png");
  towerImg=loadImage("tower.png");
  climberImg=loadImage("climber.png");
  spookySound=loadSound("spooky.wav");
  
}

function setup(){
  
  createCanvas(600,600);
  
  tower=createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY=1;
  
  ghost=createSprite(300,300);
  ghost.addImage(ghostStandingImg);
  ghost.scale=0.5;
  ghost.velocityY=2;
  
  doorGrp=new Group();
  climberGrp=new Group();
  invisibleGrp=new Group();     
  
  
}

function draw(){
  
  background(0);
  
  if(gameState==="PLAY"){
    
  spookySound.loop();
  
  if (tower.y > 400){
    tower.y=300;
  }
  
  if(keyDown("space")){
    ghost.velocityY=-12;
    ghost.addImage(ghostJumpingImg);       
  }
  
  ghost.velocityY=ghost.velocityY+0.5;  
  
  if(climberGrp.isTouching(ghost)){
    ghost.velocityY=0; 
  }
    
 if(invisibleGrp.isTouching(ghost)||ghost.y>600){
   gameState="END";
 }
  
  spawndoor();
  
  drawSprites();
  }
  
  else{
    fill("red");
    textSize(40);
    text("GAME END",300,300);
    
    
  }
  
}


function spawndoor(){
  
  if(frameCount%300===0){
    door=createSprite(Math.round(random(200,500)),-50,10,10);
 door.velocityY=1;
 door.addImage(doorImg);
    
 climber=createSprite(200,10);
 climber.x=door.x
 climber.velocityY=1;
 climber.addImage(climberImg);
    
 invisibleClimber=createSprite(200,20,100,10);
 invisibleClimber.x=door.x
 invisibleClimber.velocityY=1;
    
 doorGrp.add(door);
 climberGrp.add(climber);
 invisibleGrp.add(invisibleClimber);
    
    
 door.depth=ghost.depth
 ghost.depth=ghost.depth+1; 

 }
  
 
  
  
  
}