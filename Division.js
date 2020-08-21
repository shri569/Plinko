class Division{

    constructor(x, y, w, h){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(x,y,w,h,ground_options)
          this.w = w;
          this.h = h;
          World.add(world,this.ground);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.w,this.h);
        for(var k = 0; k < width; k - k + 80){
            divisions.push(new Division(k, height-divisionsHeight/2,10, divisionsHeight ))
        }
        
    }
};