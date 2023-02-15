let ground;
let bird;
var bird_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  bird_img = loadAnimation("assets/bird_1.png","assets/bird_2.png","assets/bird_3.png","assets/bird_4.png","assets/bird_6.png");
  bg_img = loadImage("assets/bg.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("cyan")
  frameRate(80);
 bg=createSprite(0,0,1600,800)
 bg.addImage(bg_img)
 bg.velocityX=-3
 bg.scale=3.25
  bird = createSprite(100,50,30,30);
  bird.addAnimation("bird_flying",bird_img);
  

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();
 if(bg.x<0){
  bg=bg.width/2
 }
 if(keyDown("space")){
  bird.velocityY=-2
 }
 bird.velocityY+=0.05
  drawSprites();
}


