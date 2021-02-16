class Particle{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10, {restitution:0.4});
        World.add(world,this.body);
        this.color = color(random(0,255), random(0,255), random(0,255));
    }
    display(){
        fill(this.color);
        ellipse(this.body.position.x, this.body.position.y, 20);
    }
}