var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100, 200, 50, 80);
  movingRect = createSprite(600,200,80,50);
  fixedRect.velocityX = 3;
  movingRect.velocityX = -3;
 obj1= createSprite(100, 100, 80, 50);
 obj1.shapeColor = 'green';
 obj2 = createSprite(600,200,80,50); 
 obj2.shapeColor = 'green';

}


function draw() { 
  background(255,255,255); 
 obj2.x= World.mouseX;
 obj2.y = World.mouseY;
  if (isTouching(obj1,obj2)){
    obj1.shapeColor = 'yellow';
    obj2.shapeColor = 'yellow';
  }else{
    obj1.shapeColor = 'green';
    obj2.shapeColor = 'green';
  }
bounceOff(fixedRect,movingRect);
  
  drawSprites();
}
