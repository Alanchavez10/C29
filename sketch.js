const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruta,fruta_co;
function setup() 
{
  createCanvas(500,600);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  var frutaop={
    density:0.001
  }
  ground = new Ground(200,590,600,20);
rope = new Rope(6,{x:245,y:30});
fruta=Bodies.circle(300,300,15,frutaop);
Matter.Composite.add(rope.body,fruta);
fruta_co=new Link(rope,fruta);
rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  ellipse(fruta.position.x,fruta.position.y,15,15);
  Engine.update(engine);
  

 
   
}
