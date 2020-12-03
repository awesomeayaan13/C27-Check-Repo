
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1= new Bob(200,200,20)
	


	Engine.run(engine);
  
}


function draw() {
  background(0);
  

	bob1.display()


  drawSprites();
 
}



