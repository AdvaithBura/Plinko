class Plinko{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10, {isStatic : true});
        World.add(world,this.body);

        
    }
    display(){
       
        fill("white");
        ellipse(this.body.position.x, this.body.position.y, 20);
        /*
if(gs == "play"){
    ballCreate = ballCreate +1;
        var plinkos = [];
        var plinkos1 = [];

        
        for(var j = 75; j<=400; j=j+200){
            
        for(var i = 50; i <= 700; i = i+100){
            plinkos.push(i);
           this.bodya = Bodies.circle(plinkos[i/50-1], j,10);
        World.add(world, this.bodya);
           ellipse(this.bodya.position.x,this.bodya.position.y, 20);
        }

        for(var z = 25; z <= 700; z=z+200){
            plinkos1.push(z);
            this.bodyb = Bodies.circle(plinkos1[z/50-0.5], 175,10);
            World.add(world, this.bodyb);
            ellipse(this.bodyb.position.x,this.bodyb.position.y, 20);
            console.log(z/50-0.5);  
            
        }

        if(ballCreate > 100){
            gs = "notPlay";
        }
} 
              
            }
            */
    }
}