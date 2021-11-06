var rectFixo
var rectMovel

function setup() {
  createCanvas(800,400);
 rectFixo = createSprite(400, 200, 100, 50);
 rectMovel = createSprite(300,200,50,100);

 rectFixo.shapeColor = "green";
 rectMovel.shapeColor = "green";

 rectFixo.debug = true;
 rectMovel.debug = true;

}

function draw() {
  background(0);  

  if(rectFixo.x - rectMovel.x < rectFixo.width/2 + rectMovel.width/2
    && rectMovel.x - rectFixo.x < rectFixo.width/2 + rectMovel.width/2){

   rectFixo.shapeColor = "red";
   rectMovel.shapeColor = "red";

  }else{
   rectFixo.shapeColor = "green";
   rectMovel.shapeColor = "green";
  }

  rectMovel.x = mouseX;
  rectMovel.y = mouseY;

  drawSprites();
}