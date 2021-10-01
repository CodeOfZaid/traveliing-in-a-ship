var shipImg,ship,seaImg,sea;
function preload(){
  shipImg1=loadAnimation("ship-1.png","ship-2.png");
  seaImg=loadImage("sea.png");
  

}

function setup(){
  createCanvas(600,500);

  //creating the sea
  sea = createSprite(600,300);
 
  sea.scale=0.5;
   sea.velocityX=-1;
   sea.addImage(seaImg);

  //creating ship
  ship=createSprite(50,200,20,50)
  ship.addAnimation("runnig",shipImg1)
  edges = createEdgeSprites();

  //adding scale and position to ship
  ship.scale=0.25;
  ship.x = 90;
  ship.y = 300;
  
}

function draw() {
  background("blue");
 if (keyDown("enter")) {
   ship.velocityX = 5;
 }
 if (keyDown("left")) {
  ship.velocityX = -5; 
}
  if (keyDown("space")) {
    ship.velocityX = 0; 
  }


//code to reset the background
if (sea.x < 0) {
  sea.x = sea.width / 2;
}

ship.collide(edges[3]);
drawSprites();

}

