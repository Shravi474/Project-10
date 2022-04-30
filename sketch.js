var seaimg, sea 
var shipimg, ship 

function preload(){
shipimg = loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png')
seaimg = loadImage('sea.png')
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200,200,200)
  sea.addImage("sea",seaimg)
  sea.scale = 0.3
  sea.x = sea.width/2;

  ship = createSprite(150,200,100,100)
  ship.addAnimation("ship",shipimg)
  ship.scale = 0.2
}

function draw() {
  background("blue");
  sea.velocityX = -2
  if(sea.x < 0) {
    sea.x = sea.width/2;
  }
 drawSprites()
}