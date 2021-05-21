var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg.loadAnimation("fairyImage1.png","fairyImage2.png");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(50,650);
	fairy.addAnimation(fairyImg);
	fairy.scale = 1;

	if(fairy.x>750){
		fairy.x=650;
	}

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(star.y>800){
	  star.y=30;
	  starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
  }

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(fairy.isTouching(star)){
	  star.velocityY=0;
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyWentDown === Right_ARROW) {
		fairy.velocityX = 6;

		if (keyWentDown === Right_ARROW) {
			fairy.velocityX = -6;
	}
	
}
