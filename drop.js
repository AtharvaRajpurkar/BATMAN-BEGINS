class Drops {
    constructor(x,y){
        var options = {
            isStatic: false,
        }
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        fill("blue")
        ellipseMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        ellipse(pos.x,pos.y+70,10,10);
    }
    update(){
        if(this.umbrella.position.y>height){
            Matter.Body.setPosition(this.umbrella,{x:random(0,400),y:random(0,400)})
        }
    }
}
