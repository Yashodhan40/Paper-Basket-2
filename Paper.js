class Paper{
    constructor(x,y,r){
        var options={
            'isStatic':false,
            'friction':3.5,
            'density':2.2,
            'restitution':0.1
        }

        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position

        push();
        translate(pos.x,pos.y);
        
        strokeWeight(2);
        stroke("blue");
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}