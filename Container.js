class Container{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.leftEdge = Bodies.rectangle(x,y,10,h,options);
        this.bottomEdge = Bodies.rectangle(x,y+h,w,10,options);
        this.rightEdge = Bodies.rectangle(x+w,y,10,h,options);
        this.width = w;
        this.height = h;
        World.add(world,this.leftEdge);
        World.add(world,this.bottomEdge);
        World.add(world,this.rightEdge);
    }
    display(){
        var pos = this.leftEdge.position;
        fill("red");
        rect(pos.x,pos.y,10,this.height);
        rect(pos.x,pos.y+this.height,this.width,10);
        rect(pos.x+this.width,pos.y,10,this.height);
    }
}



