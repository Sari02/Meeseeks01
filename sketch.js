const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var floor, meeseeks ;
var entrada, salida;
var plat1, plat2, plat3, plat4, plat5, plat6,plat7, plat8, plat9, plat10, plat11, platultima;

function setup(){
    var canvas = createCanvas(1800,900);
    engine = Engine.create();
    world = engine.world;

    
    floor = new Floor(900,height,1800,70);

    meeseeks = new Meeseeks(100,100);

    entrada = new Door(140,100,110,150);
    salida = new Door(1740,100,110,150);

   

}

function draw(){
    background(0);
    Engine.update(engine);

    entrada.display();
    salida.display();

    meeseeks.display();

    floor.display();
 
}