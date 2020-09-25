
var car,wall;
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500) ;
  deformation = (0.5*weight*speed*speed)/22500;

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);

  
}

function draw() {
  background(255,255,255);  

if(wall.x-car.x<(car.width+wall.width)){
car.velocityX = 0;


if(deformation<100){
car.shapeColor = color(0,225,0);
}

if(deformation>180){
  car.shapeColor = color(255,0,0);
}

  if(deformation<180&&deformation>100){
    car.shapeColor = color(230,230,0);
    }

  
  }
  drawSprites();
}