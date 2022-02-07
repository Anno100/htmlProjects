//Erstelle eine js-Datei die den script-tag in main.html erstetzt

document.body.style.margin = 0;

var c = document.getElementById("myCanvas");
window.innerWidth = window.screen.width;
window.innerHeight = window.screen.height;


c.width = window.innerWidth;
c.height = window.innerHeight;

var g = c.getContext("2d");


var p = new Pix([
    
    [0,1,0],
    [0,2,0],
    [0,3,0]

],10);


Timer = () =>{
}

GUI = () =>{
    p.draw();
}

setInterval(()=>{
    GUI();
    Timer();

},1);