class CHAIN{
    constructor(bodyA,bodyB){
        var options={
            bodyA: bird.body,
            bodyB: constrainedLog.body,
            stiffness: 0.05,
            lenght:10
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    
    }
    display(){
       var pointA =this.chain.bodyA.position;
       var pointB=this.chain.bodyB.position;
       strokeWeight(2);
    line(pointA.x,pointA.y, pointB.x, pointB.y);

    }
}