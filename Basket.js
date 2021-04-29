class basket{
    constructor(x,y){
    var options={
        'isStatic':true,
        'density':1.3
    }
    this.x=x;
    this.y=y;
    this.basketWidth=160;
    this.basketHeight=150;
    this.wallThickness=20;
    this.angle=0
     
    this.leftBody = Bodies.rectangle(this.x-180,this.y,this.wallThickness,this.basketWidth,options);
    World.add(world,this.leftBody);
    this.rightBody=Bodies.rectangle(this.x,this.y,this.wallThickness,this.basketWidth,options);
    World.add(world,this.rightBody);
    this.bottBody = Bodies.rectangle(this.x-90,this.y+75,this.basketWidth,this.wallThickness,options);
    World.add(world,this.bottBody);
    }
    display(){
        var left = this.leftBody.position;
        var right = this.rightBody.position;
        var bott = this.bottBody.position;

        push();
        translate(left.x,left.y);
        rectMode(CENTER);
        rect(0,0,this.wallThickness,this.basketWidth);
        pop();

        push();
        translate(right.x,right.y);
        rectMode(CENTER);
        rect(0,0,this.wallThickness,this.basketWidth);
        pop();

        push();
        translate(bott.x,bott.y);
        rectMode(CENTER);
        rect(0,0,this.basketWidth,this.wallThickness);
    }
}