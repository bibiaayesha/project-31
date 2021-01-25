class Drops{
    constructor(x,y){

        var options = {
            resistution:0.8,
            friction:0.1
        }
        this.body = Bodies.rectangle(x,y,options);
        World.add(world, this.body);


        if(this.rain.position > height){
            Matter.Body.setPosition(this.rain,{x:random (0.400),y:random (0,400)})
        }
    }
    display(){

var maxDrops=100;
for(var i = 0; i < maxDrops; i++){
    drops.push(new createDrop(random(0,400),random(0,400)));
}

    }
}