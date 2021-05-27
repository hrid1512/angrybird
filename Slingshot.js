class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
    }
attach(body){
    this.sling.bodyA=body
}
    fly(){
        this.sling.bodyA = null;
    }

    display(){
    image(this.sling1,220,25)
    image(this.sling2,190,25)
  
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        if(pointA.x<220){
            strokeWeight(10);
            line(pointA.x-15, pointA.y+10, pointB.x, pointB.y);
            line(pointA.x-15, pointA.y+10, pointB.x+50, pointB.y+10);
            image(this.sling3,pointA.x-25,pointA.y-10,15,30)
        }
else{    strokeWeight(4);
    line(pointA.x+25, pointA.y+10, pointB.x, pointB.y);
    line(pointA.x+25, pointA.y+10, pointB.x+50, pointB.y+10);
    image(this.sling3,pointA.x+25,pointA.y-10,15,30)


}
        }
    }
    
}