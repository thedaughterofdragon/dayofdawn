class Slingshot{
constructor(bodyA,bodyB){
    var options={
    bodyA:bird.body,
    bodyB:log6.body,
    length:15,
    stiffness:0.1}
  

 this.rope= Constraint.create(options)
    World.add(world,this.rope)
}
display (){
    strokeWeight(6)
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)


}}