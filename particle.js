class particle{
    constructor(x, y, r){
        var options ={
            'restitution':1,
            'density':0.04,
        }
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        pop();
    }
}