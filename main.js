//Erstelle eine js-Datei die den script-tag in main.html erstetzt

document.body.style.margin = 0;

var c = document.getElementById("myCanvas");
window.innerWidth = window.screen.width;
window.innerHeight = window.screen.height;


c.width = window.innerWidth;
c.height = window.innerHeight;

var g = c.getContext("2d");

r1 = new Rectangle(10,10,100,100);
r2 = new Rectangle(600,60,10,10);

Timer = () =>{
    r1.x += 0.1;
    if(r1.overlap(r2)) alert("YAY");
}

GUI = () =>{
    g.clearRect(0,0,c.width,c.height);
    r1.fill();
    r2.fill();
}

setInterval(()=>{
    GUI();
    Timer();

},1);