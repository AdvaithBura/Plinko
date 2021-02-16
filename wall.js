class Wall{
    constructor(x,y,width, height){
        this.body1 = Bodies.rectangle(x,y,width, height, {isStatic:true});
        this.width = width;
        this.height = height;
        World.add(world,this.body1);
    }
    display(){
        rect(this.body1.position.x, this.body1.position.y, this.width, this.height);
    }
}