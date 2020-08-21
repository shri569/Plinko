var particles = [];
var plinkos = [];
var divisions = [];
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinkos;
var divisions1;
var particles;

function setup() {
  createCanvas(800,480);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
 plinkos = new Plinko(200,200,30);
 divisions1 = new Division(200,200,30,330);
 particles = new Particle(100,100,30);

  
}

function draw() {
  background(255,255,255);
  ground.display(); 
  plinkos.display();
  divisions1.display();
  particles.display();
  drawSprites();
}