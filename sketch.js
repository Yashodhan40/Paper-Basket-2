const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var dust1,dust2,dust3;
var ground1;
var engine,world;
var paper;

function setup(){
    createCanvas(800,680);
    engine = Engine.create();
    world = engine.world;
    
    paper = new Paper(50,500,20);
    ground = new Ground(-40,650,2000,20);
    dust1 = new basket(740,540);
    
}

function draw(){
    Engine.update(engine);
    background(0);
    
    paper.display();
    ground.display();
    dust1.display();

    drawSprites();
    keyPressed();
    console.log(paper.x,paper.y);
}
function keyPressed(){
    if (keyCode === 32){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-1});
    }
}
