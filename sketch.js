//name spacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,400);
   
    myengine = Engine.create();
    myworld = myengine.world;
    //JSON
    var ground_options ={
        isStatic: true,
        
    }
    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(myworld,ground);
    console.log(ground);


    var box1_options ={
        isStatic: false,
        restitution:0,
    }
    box1 = Bodies.rectangle(200,360,100,40,box1_options);
    World.add(myworld,box1);


    var box2_options ={
        isStatic: true,
        
    }
    box2 = Bodies.rectangle(400,330,50,100,box2_options);
    World.add(myworld,box2);


    var box3_options ={
        isStatic: true,
        angle:PI/7
        
    }
    box3 = Bodies.rectangle(600,330,100,20,box3_options);
    Matter.Body.setAngle(box3,130)
    World.add(myworld,box3);


    var ball_options ={
        isStatic: false,
        restitution: 1.7
    }

    ball = Bodies.circle(560,100,20, ball_options);
    World.add(myworld,ball);

    console.log(ball);
}

function draw(){
    background("lightgreen");
    Engine.update(myengine);
    rectMode(CENTER);
    fill("brown")
    rect(ground.position.x,ground.position.y,800,20);
    fill("red")
    rect(box1.position.x,box1.position.y,100,40);
    fill("green")
    rect(box2.position.x,box2.position.y,50,100);
    
    fill("yellow")
    push();
    translate(box3.position.x,box3.position.y);
    rotate(box3.angle);
    rectMode(CENTER);
    rect(0, 0, 100, 20);
    pop();
   
    fill("red")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}