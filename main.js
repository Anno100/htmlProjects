//Erstelle eine js-Datei die den script-tag in main.html erstetzt

document.body.style.margin = 0;

var c = document.getElementById("myCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;

var g = c.getContext("2d");
g.fillRect(0,0,10,10);

var R = new Rectangle();
