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
}

GUI = () =>{
    g.clearRect(0,0,c.width,c.height);
    p.draw(100,100,10);
}

setInterval(()=>{
    GUI();
    Timer();

},1);