var rect2, rect1;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(600, 400, 50, 80);
  rect1.shapeColor = "green";
  //rect1.debug = true;
  rect2 = createSprite(600,200,80,30);
  rect2.shapeColor = "green";
  //rect2.debug = true;

  rect1.velocityY =-3;
  rect2.velocityY = 3;
}

function draw() {
  background(0,0,0);  
  if(isTouching(rect1,rect2)){
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
  } else{
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  bounceOff(rect1,rect2);
  drawSprites();
}
