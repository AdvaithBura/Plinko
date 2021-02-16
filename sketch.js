const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gs = "play";
var ballCreate = 0;
var plinkos=[];
var walls=[];
var particles=[];
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(700,900);
  //createSprite(400, 200, 50, 50);
  rectMode(CENTER);
  ground1 = new Ground(350,890,700,20);
  //plinko1 = new Plinko(1,1);
for(var a =0; a<=700; a = a+100){
  walls.push(new Wall(a,750,15,300));
}

  for(var b = 50; b <=700; b=b+60){
  plinkos.push(new Plinko(b,75), new Plinko(b,275), new Plinko(b,475));
}

for(var c = 25; c <=700; c=c+60){
  plinkos.push(new Plinko(c,175), new Plinko(c,375));
}

}

function draw() {
  Engine.update(engine);
  background(0,0,0); 
if(frameCount % 90 ===0){
  particles.push(new Particle(random(20,680), 0));
}
  ground1.display();
 // plinko1.display();
 for(var f = 0; f< walls.length; f++){
  walls[f].display();
}

 for(var g = 0; g< plinkos.length; g++){
  plinkos[g].display();
}

for(var q =0; q< particles.length; q++){
  particles[q].display();
}
  drawSprites();

} 