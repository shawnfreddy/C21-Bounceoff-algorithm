
var gameObject1,gameObject2;
function setup() {
  createCanvas(800,400);
  
  gameObject1 = createSprite(400,80,30,70);
  gameObject2= createSprite(400,300,30,70);

  gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";
  
  gameObject1.debug=true;
  gameObject2.debug=true;

  gameObject1.velocityY=3;
  gameObject2.velocityY=-3;
}

function draw() {
  background(220);  
    
  bounceOff(gameObject1,gameObject2);
  
   drawSprites();
}

