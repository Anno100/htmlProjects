//Erstelle eine js-Datei die den script-tag in main.html erstetzt

document.body.style.margin = 0;

var c = document.getElementById("myCanvas");
window.innerWidth = window.screen.width;
window.innerHeight = window.screen.height;


c.width = window.innerWidth;
c.height = window.innerHeight;

var g = c.getContext("2d");


var p1 = new Pix([
    
    [0,1,0],
    [0,1,0],
    [0,1,0]

]);
var p2 = new Pix([
    
    [0,0,0],
    [1,1,1],
    [0,0,0]

]);

var p = new PixSet([p1,p2],100);
p.run = true;


Timer = () =>{
    p.setPixelLength(30);
    p.x = 100;
    p.y = 100;
}

GUI = () =>{
    g.clearRect(0,0,c.width,c.height);
    p.draw();
}

setInterval(()=>{
    GUI();
    Timer();

},1);