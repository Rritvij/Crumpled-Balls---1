
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper,ground;
var log,log2,log3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);

	paper = new Paper(350,320,30,30);
	
 log= new Log(810,335,100,20 );
 log2= new Log(1060,335,100,20 );
 log3= new Log2(935,375,231,20 );

 
 
   

    
}




function draw(){
    background(0);
    Engine.update(engine);
    console.log(paper.body.position.x);
    
	paper.display();
	ground.display();
	log.display();
	log2.display();
	log3.display();
   
}
function keyPressed (){

if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position, {x:35,y:-35});
}



}