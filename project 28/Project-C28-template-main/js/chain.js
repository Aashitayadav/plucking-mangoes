class Chain {
constructor(bodyA,point){
var options={

bodyA:bodyA,
pointB:point,
stiffness:0.04,
length:10

}
this.chain=Matter.Constraint.create(options)

World.add(world,this.chain)

}
display(){
    if(this.chain.bodyA){ var pointA = this.chain.bodyA.position;
     var pointB = this.chain.pointB;
     strokeWeight(4);
     line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
 }
 flight(){

this.chain.bodyA=null;

 }

attach(x){

this.chain.bodyA=x


}


}