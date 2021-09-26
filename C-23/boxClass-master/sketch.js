const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Ground;
var box2;
var box3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    Ground = new ground (200,390,400,10);
    box1 = new Box(200,300,50,50);
    box2 = new Box(220,190,50,80);
    box3 = new Box(100,380,90,100);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    Ground.display();
    box1.display();
    box2.display();
    box3.display();
}