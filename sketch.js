const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var  archer, bow, arrow, target1, target2, target3, target4, target5;
var ground, ground2;
var engine, world;



function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  archer = createSprite(200, 300, 50, 50);
  ground = new Ground(600,580,1500,10);
  ground2 = new Ground(600,20,1500,10);

  target1 = new Target(1000,120,40,40);
  target2 = new Target(1000,220,40,40);
  target3 = new Target(1000,320,40,40);
  target4 = new Target(1000,420,40,40);
  target5 = new Target(1000,520,40,40);
}

function draw() {
  background("black"); 
  Engine.update(engine);

  drawSprites();
  
  target1.display();
  target2.display();
  target3.display();
  target4.display();
  target5.display();
}