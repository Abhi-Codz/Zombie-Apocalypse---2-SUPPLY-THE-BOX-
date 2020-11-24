const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Naming the variables
var helicopterImage, helicopterSprite, packageSprite, packageImage;
var packageBody, ground;
var box1, box2, box3, box1Body, box2Body, box3Body;

function preload() {
  helicopterImage = loadImage("helicopter.png");
  packageImage = loadImage("package.png");
}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);

  packageSprite = createSprite(width / 2, 80, 10, 10);
  packageSprite.addImage(packageImage);
  packageSprite.scale = 0.2;

  helicopterSprite = createSprite(width / 2, 200, 10, 10);
  helicopterSprite.addImage(helicopterImage);
  helicopterSprite.scale = 0.6;

  groundSprite = createSprite(width / 2, height - 35, width, 10);
  groundSprite.shapeColor = color(255);

  engine = Engine.create();
  world = engine.world;

  packageBody = Bodies.circle(width / 2, 200, 5, {
    restitution: 0.6,
    isStatic: true,
  });
  World.add(world, packageBody);

  var options = {
    isStatic: true,
  };

  //Create a Ground
  ground = Bodies.rectangle(width / 2, 650, width, 10, options);
  World.add(world, ground);

  box1 = createSprite(300, 610, 20, 100);
  box1.shapeColor = "aqua"

  box1Body = Bodies.rectangle(300, 610, 20, 100, options);
  World.add(world, box1Body);

  box2 = createSprite(400, 650, 200, 20);
  box2.shapeColor = "aqua";

  box2Body = Bodies.rectangle(400, 635, 200, 20, options);
  World.add(world, box2Body);

  box3 = createSprite(500, 610, 20, 100);
  box3.shapeColor = "aqua"

  box3Body = Bodies.rectangle(500, 610, 20, 100, options);
  World.add(world, box3Body);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  drawSprites();
}


function keyPressed() 
{
 if (keyCode === LEFT_ARROW) 
 { 
  helicopterSprite.x = helicopterSprite.x - 20;
  Matter.Body(packageBody);
 }
	else if(keyCode===RIGHT_ARROW)
	{
     helicopterSprite.x = helicopterSprite.x + 20;
	 Matter.Body(packageBody);
	}

	else if(keyCode===DOWN_ARROW)
	{
	 Matter.Body.setStatic(packageBody,false);
	}
}
