class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            }
    this.body=Matter.Bodies.circle(x,y,radius,options);
    this.radius=this.radius;
    World.add(world,this.body)

    }
    display(){
    var pos=this.body.position
    ellipseMode(CENTER);
    fill(255);
    ellipse(pos.x,pos.y,10);
    }
    }   
