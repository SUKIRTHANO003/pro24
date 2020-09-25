
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, bin1, bin2, bin3;
var ground, body1, body2, body3, body4;
var ballImage;

function preload(){
	ballImage = loadImage("ball.jpg");
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	ball = createSprite(325, 480);
	ball.addImage(ballImage);
	ball.scale = 0.1;
	bin1 = createSprite(325, 580, 200, 20);
	bin1.shapeColor = "red";
	bin2 = createSprite(525, 530, 20, 100);
	bin2.shapeColor = "red";
	bin3 = createSprite(325, 530, 20, 100);
	bin3.shapeColor = "black";

	
	body1= Bodies.circle(390 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, body1);
	body2= Bodies.rectangle(595 , 480 , 20, 200 , {isStatic:true});
	World.add(world, body2);
	body3= Bodies.rectangle(500 , 580 , 20, 200 , {isStatic:true});
	World.add(world, body3);
	body4= Bodies.rectangle(500 , 680 , 200, 20 , {isStatic:true});
	World.add(world, body4);
	
	ground = Bodies.rectangle(width/2, 400, 900, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
	
	ball.x = body1.position.x;
	ball.y = body1.position.y;
	bin1.x = body2.position.x;
	bin1.y = body2.position.y;
	bin2.x = body3.position.x;
	bin2.y = body3.position.y;
	bin3.x = body4.position.x;
	bin3.y = body4.position.y;

  drawSprites();
}

function bounce(){
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(body1, false);
	}
}